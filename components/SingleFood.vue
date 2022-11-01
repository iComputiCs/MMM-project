<template>
  <div id="food">
    <div ref="rasm" />
    <h4>{{ props.jonatma.uzname }}</h4>
  </div>
</template>

<script setup>
const props = defineProps(["jonatma"]);
const rasm = ref(null);
onMounted(() => {
  rasm.value.style.backgroundImage = `url("${props.jonatma.img}")`;
});
</script>

<style lang="scss" scoped>
#food {
  * {
    transition: all ease 0.6s;
  }
  @include flexCenter(column);
  justify-content: stretch;
  height: 250px;
  &:hover {
    div {
      &:nth-child(1) {
        background-size: 115% 115%;
      }
    }
    h4 {
      color: $sabzirang;
    }
  }
  div {
    width: 100%;
    height: 210px;
    border-radius: 10px;
    border: none;
    outline: none;
    &:nth-child(1) {
      background-size: 102% 102%;
    }
  }
  h4 {
    width: 100%;
    line-height: 40px;
    text-indent: 10px;
  }
}
</style>
