<template>
  <div>
    <Html lang="en-US">
      <Head>
        <Title>
          {{ $content().route.headline || $content().route.heroHeader }}
        </Title>
        <Meta
          name="description"
          :content="$content().route.seoMetaDescription"
        />
      </Head>
    </Html>

    <NuxtPage />
  </div>
</template>
