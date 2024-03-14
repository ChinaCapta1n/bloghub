<template>
  <div class="landing">
    <h2 class="fuck-off">
      请给我滚
      <br>
      不对，请往下滚，以获取更多文章 ~>-<~ </h2>
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
  .fuck-off {
    padding: 6rem 0 3rem;
  }
}

.article-link {
  font-size: 1.5rem;

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