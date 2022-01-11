<template>
  <div class="es-hero">
    <h1>{{ $content().route.heroHeader }}</h1>
    <p>{{ $content().route.heroDescription }}</p>
    <p>{{ $content().route.heroCTACaption }}</p>
    <p>{{ $content().route.heroCTALink.view.url }}</p>
  </div>
</template>
