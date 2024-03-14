<template>
  <aside class="aside-bar">
    <div class="me-info">
      <div class="who-am-i">
        <h1>luffy</h1>
      </div>
      <h2 class="title">全粘工程师</h2>
    </div>
  </aside>
</template>
<style lang="scss" scoped>
.aside-bar {
  background-color: var(--main-grey);
  overflow-y: scroll;
  position: sticky;
  top: 0;
  width: 28rem;
  min-width: 28rem;
  height: 100vh;
  padding: 2rem 0;

  .me-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .who-am-i {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      border: 0.1rem solid var(--main-grey2);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;

      &>h1 {
        font-size: 1.8rem;
      }
    }

    .title {
      margin: 1.2rem 0;
    }
  }
}

.aside-bar::-webkit-scrollbar {
  display: none !important;
  width: 0;
}
</style>