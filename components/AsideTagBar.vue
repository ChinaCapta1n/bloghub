<script setup>
const router = useRouter();


const categoryData = [
  {
    txt: "JavaScript"
  }
]
</script>
<template>
  <aside class="tag-bar">
    <h2 class="category">分类</h2>
    <ul class="category-array">
      <li v-for="category in categoryData" :key="category.txt" @click.prevent="router.push(`/result/${category.txt}`)">
        {{ category.txt }}
      </li>
    </ul>
  </aside>
</template>
<style lang="scss" scoped>
.tag-bar {
  width: 28rem;
  min-width: 28rem;
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: var(--main-grey);
  padding: 4rem 2rem 2rem;

  .category {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .category-array {
    margin-left: 1.1rem;

    li {
      cursor: pointer;
      text-decoration: underline;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: -1rem;
        top: 50%;
        transform: translateY(-50%);
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background-color: var(--main-grey5);
      }
    }
  }
}
</style>