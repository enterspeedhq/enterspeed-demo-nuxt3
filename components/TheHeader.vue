<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>

    <div v-for="item in navigation.items" :key="item.id">
      <NuxtLink :to="item.view.href">{{ item.view.label }}</NuxtLink>
    </div>
    <hr />
  </nav>
</template>

<script setup lang="ts">
import { useNavigation } from "~/stores/navigation";

const navigation = useNavigation();
</script>
