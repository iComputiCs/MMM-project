<template>
  <header>
    <NuxtLink to="/" id="logo">
      <img src="../assets/images/logo.svg" alt="logo:Shakarcha" />
    </NuxtLink>
    <nav>
      <NuxtLink to="/">Asosiy sahifa</NuxtLink>
      <NuxtLink to="/about">Biz haqimizda</NuxtLink>
      <NuxtLink to="/about">Kategoriyalar</NuxtLink>
      <NuxtLink to="/about">Kolleksiyalar</NuxtLink>
    </nav>
    <div id="login-search">
      <NuxtLink to="/about" class="tugma">Profil</NuxtLink>
      <NuxtLink to="/about" class="tugma">Kirish</NuxtLink>
      <NuxtLink to="/about" class="tugma">Ro'yxatdan o'tish</NuxtLink>
      <button @click="qidiruvModal = !qidiruvModal">
        <span class="material-symbols-outlined"> manage_search </span>
      </button>
    </div>
    <QidiruvModal
      v-if="qidiruvModal"
      @yopish="
        () => {
          qidiruvModal = false;
        }
      "
    />
  </header>
</template>

<script setup>
let qidiruvModal = ref(false);
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 40px 0;
  #logo {
    img {
      height: 4em;
    }
  }
  a {
    font-size: 1.1em;
    font-family: "Inter", "Century Gothic", sans-serif;
    &:hover {
      color: $sabzirang;
    }
  }
  nav,
  #login-search {
    display: flex;
    column-gap: 20px;
    align-items: center;
    justify-content: center;
  }
  #login-search {
    font-size: 0.8em;
    .tugma {
      background-color: $sabzirang;
      color: white;
      padding: 7px;
      border-radius: 7px;
    }
  }
}

button {
  background-color: transparent;
}
</style>
