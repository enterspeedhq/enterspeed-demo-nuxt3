<template>
  <component :is="$content().route.type" />
</template>

<script>
import { setup } from "../mixins/enterspeed";

export default {
  setup,
};
</script>
