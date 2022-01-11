<template>
  <nav class="header">
    <div class="container">
      <div class="header__inner">
        <NuxtLink to="/" class="header__logo">
          <span>📙</span> The Flying Trunk
        </NuxtLink>

        <div class="header__links">
          <div
            v-for="item in navigation.items"
            :key="item.id"
            class="header__item"
          >
            <NuxtLink class="header__link" :to="item.view.href">
              {{ item.view.label }}
            </NuxtLink>

            <div
              v-if="item.view.children && item.view.children.length"
              class="header__sub"
            >
              <NuxtLink
                v-for="child in item.view.children"
                :key="child.sortOrder"
                class="header__sub-item"
                :to="child.href"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>
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

  &__item {
    margin-left: 1rem;
    position: relative;

    &:hover {
      .header {
        &__sub {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
        }
      }
    }
  }

  &__link {
    opacity: 0.9;
    transition: opacity 0.2s;
    font-weight: 500;
    font-size: 0.875rem;
    padding: 0.5rem;
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

  &__sub {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.95);
    transition: all 0.3s;
    right: 0;
    z-index: 10;
    padding: 1rem;
    border-radius: 0.75rem;
    background: var(--color-white);
    width: 20rem;
    transform-origin: top right;
  }

  &__sub-item {
    padding: 0.5rem;
    display: block;
    font-weight: 500;
    opacity: 0.9;
    margin-block: 0.5rem;
    border-radius: 0.5rem;
    transition: all 0.2s;

    &:hover {
      background: var(--color-primary-light);
      color: var(--color-primary);
    }
  }
}
</style>
