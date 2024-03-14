<template>
  <div>
    <nav class="article-link">
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.article-link {
  font-size: 1.5rem;
}
</style>