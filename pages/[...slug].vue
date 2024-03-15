<script setup>
const stringToArray = (string) => {
  return string.split(',');
}


</script>
<template>
  <main class="content-display">
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <div class="article-tag-wrapper">
        <span class="article-tag" v-for="tag in stringToArray(doc.tag)" :key="tag">
          {{ tag }}
        </span>
      </div>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
<style lang="scss">
.content-display {
  font-size: 1.4rem;
  padding: 4rem 2rem 6rem;

  .article-tag-wrapper {
    margin: 2rem 0;

    .article-tag {
      border: 1px solid var(--main-grey2);
      padding: 0.3rem 0.6rem;
      margin-right: 1rem;
      border-radius: 0.4rem;
      cursor: pointer;

      &:hover {
        box-shadow: .3rem .3rem 0rem grey;
      }
    }
  }

  blockquote {
    background: #f9f9f9;
    border-left: 1rem solid #ccc;
    margin: 2rem 0px 3rem;
    padding: 2rem 1rem;
    quotes: "\201C" "\201D" "\2018" "\2019";
  }

  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 1rem;
    vertical-align: -0.4em;
  }

  blockquote p {
    display: inline;
  }

  h2 {
    margin: 2rem 0 1rem;
  }

  ul,
  ol {
    margin-left: 1.6rem;
  }

  pre {
    background: var(--main-grey);
    padding: 2rem;
    border: 1px solid var(--main-grey2);
    border-radius: .3rem;
  }
}
</style>
