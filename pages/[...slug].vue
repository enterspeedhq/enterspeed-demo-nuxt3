<template>
  <div>
    <component :is="$content().route.type" />
  </div>
</template>

<script>
import { setup } from "../mixins/enterspeed";

export default {
  setup,
};
</script>
