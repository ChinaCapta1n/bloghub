<script setup>

</script>
<template>
  <div>
    <div class="page-wrapper">
      <AsideBar />
      <div class="content">
        <NuxtPage />
      </div>
      <AsideTagBar />
    </div>
  </div>
</template>
<style lang="scss">
.page-wrapper {
  display: flex;
  width: 100%;

  .content {
    padding: 2rem;
    flex: 1;
    width: 100%;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

@media screen and (max-width: 960px) {
  .page-wrapper {
    flex-direction: column;


  }
}
</style>