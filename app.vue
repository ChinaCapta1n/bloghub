<script setup>

</script>
<template>
  <div>
    <div class="page-wrapper">
      <AsideBar />
      <div class="content">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-wrapper {
  display: flex;

  .content {
    padding: 2rem;
  }
}
</style>