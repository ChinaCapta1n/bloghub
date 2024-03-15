<template>
  <div class="landing">
    <h2 class="page-title">最新文章</h2>
    <nav class="article-link">
      <ContentNavigation v-slot="{ navigation }">
        <ul class="links">
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.landing {
  padding-top: 4rem;
}

.article-link {
  font-size: 1.5rem;
  margin-top: 3rem;

  .links {
    li {
      transition: all .3s ease-out;

      &:hover {
        transform: translateX(0.3rem);
      }
    }

  }
}
</style>