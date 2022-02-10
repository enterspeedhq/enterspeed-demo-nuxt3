import { useNavigation } from "~/stores/navigation";
import { useContent } from "~/stores/content";

export const connect = async () => {
  const { $config, ssrContext } = useNuxtApp();

  const currentRoute = useRoute();
  const router = useRouter();
  const contentStore = useContent();
  const navigation = useNavigation();

  const handles: any = {};

  var params = new URLSearchParams();

  const { hasItems } = navigation;
  if (!hasItems) {
    params.append("handle", "navigation");
  }

  const url = decodeURIComponent(currentRoute.fullPath);
  params.append("url", url);

  const reqUrl = new URL($config.DELIVERY_API_PATH);
  reqUrl.search = params.toString();

  const headers = {
    "X-Api-Key": $config.DELIVERY_API_KEY,
  };

  const req = await fetch(reqUrl.toString(), {
    headers,
  });

  let { meta, route, views } = await req.json();

  if (!meta) {
    throw new Error("No meta provided");
  }

  if (views) {
    if (views.navigation?.navigationItems) {
      navigation.setItems(views.navigation.navigationItems);
    }
  }

  const redirect = meta.redirectUrl || "/";

  switch (meta.status) {
    case 404:
      // Fetch the schema with the "notfound" handle
      var notFoundParams = new URLSearchParams();
      notFoundParams.append("handle", "notfound");

      const notFoundReqUrl = new URL($config.DELIVERY_API_PATH);
      notFoundReqUrl.search = notFoundParams.toString();

      const notFoundReq = await fetch(notFoundReqUrl.toString(), {
        headers,
      });

      let notFoundData = await notFoundReq.json();
      route = notFoundData.views.notFound;

      if (process.server) {
        const error = new Error();
        (error as any).statusCode = 404;
        (ssrContext as any).nuxt.error = error;
      }

    case 301:
      router.push(redirect);
    default:
      break;
  }

  contentStore.setContent({
    meta,
    route,
  });

  return {
    meta,
    route,
  };
};