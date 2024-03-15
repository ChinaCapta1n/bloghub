<script setup>
const route = useRoute();

const res = ref([]);

const searchByCategory = async () => {
  res.value = await queryContent().where({ tag: { $contains: `${route.params.id}` } }).find();
}

const dou = n => {
  if (n < 10) {
    return '0' + n;
  } else {
    return n;
  }
}

const formatTime = (timestamp, detail = false) => {
  const d = new Date(timestamp);
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const dd = d.getDate();
  const h = d.getHours();
  const mm = d.getMinutes();
  const s = d.getSeconds();
  if (detail) {
    return y + "-" + dou(m) + '-' + dou(dd) + ' ' + dou(h) + ':' + dou(mm) + ':' + dou(s);
  }
  else {
    return y + "-" + dou(m);
  }
}


onMounted(() => {
  searchByCategory();
})
</script>
<template>
  <div class="search-result">
    <ul>
      <li v-for="result in res" :key="result._path">
        <h3 class="result-time">
          {{ formatTime(result.createAt) }}
        </h3>
        <NuxtLink :to="result._path">
          {{ result.title }}
          <p class="result-description">{{ result.description }}</p>
          <p class="more-info">
            <span>
              <img src="@/assets/icons/calendar.svg" alt=""> <span>{{ formatTime(result.createAt, true) }}
              </span>
            </span>
            <span>
              <img src="@/assets/icons/bookmark.svg" alt=""> <span>{{ (result.tag).replace(/,/g, ' ') }}</span>
            </span>
          </p>
        </NuxtLink>

      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.search-result {
  padding-top: 4rem;

  ul {
    li {
      border-bottom: 1px solid var(--main-grey6);
      padding-bottom: 1rem;

      .result-time {
        font-size: 2.15rem;
        position: relative;
        margin-bottom: 1.5rem;
        margin-left: 2rem;
        color: var(--main-red);

        &::before {
          position: absolute;
          left: -2rem;
          top: 50%;
          transform: translateY(-50%);
          content: "#";
        }
      }

      a {
        font-size: 1.5rem;

        .result-description {
          color: var(--main-grey3);
          font-size: 1.4rem;
        }

        .more-info {
          display: flex;
          align-items: center;
          margin: 1.5rem 0 0;

          &>span {
            margin-right: 1rem;
          }

          span {
            display: flex;
            justify-items: center;

            img {
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>