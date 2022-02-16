import axios from "axios";
import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";

export const generateEnterspeedSitemap = async () => {
  if (!process.env.DELIVERY_API_PATH || !process.env.DELIVERY_API_KEY) {
    return [];
  }

  const headers = {
    "X-Api-Key": process.env.DELIVERY_API_KEY,
  };

  var sitemapParams = new URLSearchParams();
  sitemapParams.append("handle", "navigation");

  const sitemapReqUrl = new URL(process.env.DELIVERY_API_PATH);
  sitemapReqUrl.search = sitemapParams.toString();

  const sitemapReq = await axios.get(sitemapReqUrl.toString(), {
    headers,
  });

  let sitemapData = sitemapReq.data;

  if (sitemapData.views.navigation.navigationItems) {
    const routes: string[] = [];

    sitemapData.views.navigation.navigationItems.forEach((x: any) => {
      routes.push(x.view.href);

      if (x.view.children.length) {
        x.view.children.forEach((y: any) => {
          routes.push(y.href);
        });
      }
    });

    const sitemap = new SitemapStream({
      hostname: "https://enterspeed-demo-nuxt3.netlify.app",
    });

    const writeStream = createWriteStream("./public/sitemap.xml");
    sitemap.pipe(writeStream);

    routes.forEach((x) => {
      sitemap.write(x);
    });

    sitemap.end();

    return routes;
  }

  return [];
};
