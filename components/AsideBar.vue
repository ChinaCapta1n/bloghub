<script setup>
import run from '@/assets/icons/run.svg';
import bitcoin from '@/assets/icons/bitcoin.svg';

const navData = [
  {
    path: '/',
    txt: '首页',
    icon: run
  },
  {
    path: '/about',
    txt: '关于',
    icon: bitcoin
  }
]

const isVisible = ref(false);
const isVisible2 = ref(false);

const mobileMenuHandler = () => {
  isVisible2.value = !isVisible2.value;
}

function throttle(fn, wait) {
  var pre = 0;
  return function (...args) {
    var now = new Date();
    if (now - pre > wait) {
      fn();
      pre = now;
    }
  };
}
const input = ref('');
const articles = ref([]);
let timer;
const throttleHandle = throttle(async function () {
  if (input.value === '') return;
  else {
    articles.value = await queryContent().where({ title: { $contains: `${input.value}` } }).find();

    timer = setTimeout(() => {
      if (articles.value.length != 0) {
        isVisible.value = true;
        clearTimeout(timer);
      }
    }, 0)
  }

}, 300);

watch(() => input.value, n => {
  if (n === '') {
    articles.value = [];
    isVisible.value = false
  }
})

const searchHandler = async () => {
  throttleHandle();
}

const isVisibleHandler = () => {
  if (articles.value.length != 0) isVisible.value = true;
}

const closeSearchResultBoxHandler = (e) => {
  let tagName = e.srcElement.tagName;

  if (tagName === 'INPUT' || tagName === 'IMG') return;
  else isVisible.value = false;
}

onMounted(() => {
  articles.value = [];
  window.addEventListener('click', closeSearchResultBoxHandler, false);
})

onUnmounted(() => {
  window.removeEventListener('click', closeSearchResultBoxHandler, false);
})

</script>
<template>
  <aside class="aside-bar">
    <div class="me-info">
      <div class="who-am-i">
        <h1 class="mememe">luffy</h1>
      </div>
      <div class="mobile-menu" @click.stop="mobileMenuHandler">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h2 class="title">Front-End Developer</h2>
      <p class="where-i-base">
        <img class="location-svg" src="@/assets/icons/location.svg" alt="">
        香港
      </p>
      <ClientOnly>
        <div class="search-wrapper">
          <input @focus.stop="isVisibleHandler" class="search-input" placeholder="将对文章标题搜索，大小写敏感" v-model="input"
            type="text" @keydown.enter.stop="searchHandler">
          <img @click.passive="searchHandler" class="search-btn" src="@/assets/icons/magnifier.svg" alt="">
          <div class="dropdown-box">
            <TransitionExpand>
              <ul class="dropdown" v-if="isVisible">
                <li v-for="article in articles" :key="article.title">
                  <NuxtLink :to="article._path">
                    {{ article.title }}
                  </NuxtLink>
                </li>
              </ul>
            </TransitionExpand>
          </div>
        </div>
      </ClientOnly>
      <ul class="page-links">
        <li v-for="nav in navData" :key="nav.txt">
          <NuxtLink :to="nav.path">
            <img class="" :src="nav.icon" /> <span>{{ nav.txt }}</span>
          </NuxtLink>
        </li>
      </ul>
      <TransitionExpand>
        <ul class="mobile-page-links" v-if="isVisible2">
          <li v-for="nav in navData" :key="nav.txt">
            <NuxtLink :to="nav.path" @click.stop="mobileMenuHandler">
              <img class="" :src="nav.icon" /> <span>{{ nav.txt }}</span>
            </NuxtLink>
          </li>
        </ul>
      </TransitionExpand>

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
  padding: 2rem 1rem;

  .me-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .mobile-page-links {
      display: none;
    }

    .page-links {
      font-size: 1.5rem;
      width: 100%;

      li {
        a {
          display: block;
          display: flex;
          align-items: center;
          padding: 0.5rem 0;

          img {
            width: 2rem;
            margin-right: 1.5rem;
          }
        }


      }
    }

    .mobile-menu {
      display: none;
    }

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
        font-weight: normal;
        cursor: not-allowed;
        transition: all .3s ease-in-out;

        &:hover {
          transform: rotate(360deg);
        }
      }
    }

    .title {
      margin: 1.2rem 0 0.8rem;
      font-weight: normal;
      text-align: center;
    }

    .where-i-base {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      color: var(--main-grey4);

      .location-svg {
        width: 1.2rem;
        margin-right: 1rem;
      }
    }

    .search-wrapper {
      position: relative;
      width: 100%;

      .search-input {
        width: 100%;
        padding: 6px 3px;
        margin: 10px 0;
        padding-right: calc(2% + 18px);
      }

      .search-btn {
        width: 1.8rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 2%;
      }

      .dropdown-box {
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        background-color: #fff;
        border-radius: 0.6rem;

        .dropdown {
          padding: 1rem;
        }
      }
    }
  }
}

@media screen and (max-width: 1180px) {
  .aside-bar {
    width: 8rem;
    min-width: 8rem;

    .me-info {
      width: 100%;

      .who-am-i {
        width: 6rem;
        height: 6rem;

        .mememe {
          font-size: 1.4rem;
        }
      }

      .title {
        display: none;
      }

      .where-i-base {
        display: none;
      }

      .page-links {
        margin-top: 2rem;

        li {
          a {
            justify-content: center;
            width: 100%;

            img {
              margin-right: 0;
            }

            span {
              display: none;
            }
          }
        }
      }
    }

    .search-wrapper {
      display: none;
    }

  }
}

@media screen and (max-width: 960px) {
  .aside-bar {
    height: auto;
    width: 100%;
    min-width: auto;
    position: sticky;
    top: 0;
    padding: 1rem 2rem;
    z-index: 99;
    overflow-y: visible;

    .me-info {
      flex-direction: row;

      .page-links {
        display: none;
      }

      .mobile-page-links {
        display: block;
        position: absolute;
        top: 7rem;
        left: 0;
        right: 0;
        background-color: var(--main-grey);

        li {
          padding: 0 2rem;

          a {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 0.5rem 0;

            img {
              width: 2rem;
            }

            span {
              margin-left: 1rem;
              display: block;
              font-size: 1.4rem;
            }
          }
        }
      }

      justify-content: space-between;

      .who-am-i {
        width: 5rem;
        height: 5rem;
        margin: unset;

        .mememe {
          font-size: 1.2rem;
        }
      }

      .mobile-menu {
        display: block;

        span {
          width: 2rem;
          height: 0.2rem;
          background-color: #000;
          display: block;
          margin-bottom: 0.4rem;
        }
      }
    }
  }
}

.aside-bar::-webkit-scrollbar {
  display: none !important;
  width: 0;
}
</style>