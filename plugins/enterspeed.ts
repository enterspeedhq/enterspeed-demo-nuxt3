import { defineNuxtPlugin } from "#app";
import { useNavigation } from "~/stores/navigation";
import { useContent } from "~/stores/content";
import type { Router } from "vue-router";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { $config } = nuxtApp;

  const router: Router = nuxtApp.$router;
  const contentStore = useContent();
  const navigation = useNavigation();

  router.beforeEach(async (to) => {
    try {
      const handles: any = {};
      const { hasItems } = navigation;
      if (!hasItems) {
        handles.navigation = "navigation";
      }

      var params = new URLSearchParams();
      Object.keys(handles).forEach((key: string) => {
        const id = handles[key];
        params.append("handle", id);
      });

      const url = decodeURIComponent(to.fullPath);
      params.append("url", url);

      const reqUrl = new URL($config.DELIVERY_API_PATH);
      reqUrl.search = params.toString();

      const req = await fetch(reqUrl.toString(), {
        headers: {
          "X-Api-Key": $config.DELIVERY_API_KEY,
        },
      });

      const { meta, route, views } = await req.json();

      if (!meta) {
        throw new Error("No meta provided");
      }

      if (views) {
        if (views[handles.navigation]?.navigationItems) {
          navigation.setItems(views[handles.navigation].navigationItems);
        }
      }

      const redirect = meta.redirectUrl || "/";

      switch (meta.status) {
        case 301:
          router.replace(redirect);
        // case 404:
        //   return ctx.error({ statusCode: meta.status });
        default:
          break;
      }

      contentStore.setContent({
        meta,
        route,
      });
    } catch (error) {}
  });

  return {
    provide: {
      content: () => contentStore.content,
    },
  };
});
