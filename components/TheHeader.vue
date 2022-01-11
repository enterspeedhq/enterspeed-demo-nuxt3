<template>
  <nav class="header">
    <div class="container">
      <div class="header__inner">
        <NuxtLink to="/" class="header__logo">
          <span>📙</span> The Flying Trunk
        </NuxtLink>

        <div class="header__links">
          <NuxtLink
            v-for="item in navigation.items"
            :key="item.id"
            class="header__link"
            :to="item.view.href"
          >
            {{ item.view.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useNavigation } from "~/stores/navigation";

const navigation = useNavigation();
</script>

<style lang="postcss" scoped>
.header {
  background: var(--color-white);
  min-height: 60px;
  display: flex;
  align-items: center;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__links {
    display: flex;
  }

  &__link {
    opacity: 0.9;
    transition: opacity 0.2s;
    font-weight: 500;
    font-size: 0.875rem;
    padding: 0.5rem;
    margin-left: 1rem;
    &:hover {
      opacity: 1;
    }
  }

  &__logo {
    font-family: var(--header-font-family);
    font-weight: bold;
    color: var(--color-primary-dark);
    font-size: 18px;
  }
}
</style>
