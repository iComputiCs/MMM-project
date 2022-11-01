<template>
  <div id="default">
    <Header />
    <div id="content">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#default {
  width: 1200px;
  min-height: 100vh;
  background-color: rgba($color: #fff, $alpha: 0.95);
  display: grid;
  grid-template-columns: 100%;
  align-content: start;
  padding: 0px 40px;
  z-index: -10;
  overflow: visible;
  box-shadow: 0 0 20px rgba($sabzirang, $alpha: 0.5);
  border-radius: 30px;
  margin-top: 30px;
  #content {
    margin-bottom: 50px;
  }
  #to-top {
    position: fixed;
    z-index: 999;
    width: 40px !important;
    height: 40px !important;
    padding: 0;
    background-color: black;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
    border-radius: 50%;
    @include flexCenter(row);
    .material-symbols-outlined {
      color: $sabzirang;
    }
  }
}
</style>
