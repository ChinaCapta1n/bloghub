<script setup>
const store = useTodosLists();

</script>
<template>
  <div class="todos">
    <div class="todos-wrapper">
      <h2 class="page-title">待办事项</h2>
      <h3 class="year">2024年</h3>
      <ol>
        <li :class="[item.status ? 'done' : '']" v-for="item in store.lists" :key="item.item">
          {{ item.item }}
        </li>
      </ol>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.todos {
  padding-top: 4rem;

  .todos-wrapper {

    .year {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    ol {
      margin-left: 2.3rem;

      li {
        font-size: 1.5rem;

        &.done {
          text-decoration: line-through;
          color: var(--main-grey5);
        }
      }
    }
  }

}
</style>