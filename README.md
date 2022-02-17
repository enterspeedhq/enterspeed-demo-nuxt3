# Enterspeed demo: Nuxt3

An Enterspeed example project using Enterspeed, Umbraco, and Nuxt3

We've created this example project (a simple website containing H. C. Andersen fairy tales) to illustrate the power of Enterspeed.

All of our content has been synced from Umbraco to an Enterspeed-project. This enables us to design a whole new front-end application, while still using our data from our existing CMS.

Using Enterspeed gives us the flexibility to design and optimize our front-end application as we please, while still keeping the same editor experience.

## How to set up and use

### Umbraco

Install and configure the Enterspeed Umbraco package as described in the [tutorial](https://docs.enterspeed.com/tutorials/umbraco-nextjs/intro).

#### Umbraco v8

Download the "enterspeed-demo-umbraco-content.zip" - file in the folder "example-data/enterspeed-umbraco-v8".

Click on the Packages tab and select "Install local" on the right-hand side. Then drag the zip file onto the page, or click to select it from the dialog.

#### Umbraco 9

Since, Umbraco 9 has removed packages installation from the backoffice, we need to install [Enterspeed.Demos.UmbracoCms.V9.FairyTales](https://www.nuget.org/packages/Enterspeed.Demos.UmbracoCms.V9.FairyTales/) NuGet package, that will import content, data types and document types required for this demo on startup of your application.

After package installation build and start you application.

### Publishing and syncing imported demo content

Publish the site by navigating to the Content tab, and select the Home node.

Then click the arrow on the green "Save and Publish" button in the lower right corner, and select "Publish with descendants",

Check the "Include unpublished content items" option, and click the "Publish with descendants" button.

This will publish the entire site, and send the data to Enterspeed.

### Enterspeed

Set up an Enterspeed project and [configure your Sources & Environments](https://docs.enterspeed.com/tutorials/umbraco-nextjs/sources-environments "Configure your Sources & Environments").

Create the schemas and partial schema from [example-data/enterspeed-schemas/schemas](https://github.com/enterspeedhq/enterspeed-demo-nextjs/tree/master/example-data/enterspeed-schemas/schemas) and [example-data/enterspeed-schemas/partial-schemas](https://github.com/enterspeedhq/enterspeed-demo-nextjs/tree/master/example-data/enterspeed-schemas/partial-schemas) in Enterspeed and publish them.

### Nuxt3

Clone the project and run: `yarn && yarn dev`.

Create a file called ".env" and insert your environment API key and delivery api path like this:

`ENTERSPEED_ENVIRONMENT_API_KEY=[YOUR-ENTERSPEED-API-KEY-HERE] DELIVERY_API_PATH=https://delivery.enterspeed.com/v1 `

**:warning: For a production environment, this should be injected on build time.**

## Demo

You can view a demo of the live site here: https://enterspeed-demo-nuxt3.netlify.app/
