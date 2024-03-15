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

</script>
<template>
  <aside class="aside-bar">
    <div class="me-info">
      <div class="who-am-i">
        <h1 class="mememe">luffy</h1>
      </div>
      <h2 class="title">Front-End Developer</h2>
      <p class="where-i-base">
        <img class="location-svg" src="@/assets/icons/location.svg" alt="">
        香港
      </p>
      <ul class="page-links">
        <li v-for="nav in navData" :key="nav.txt">
          <NuxtLink :to="nav.path">
            <img class="" :src="nav.icon" /> <span>{{ nav.txt }}</span>
          </NuxtLink>
        </li>
      </ul>
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

  }
}

.aside-bar::-webkit-scrollbar {
  display: none !important;
  width: 0;
}
</style>