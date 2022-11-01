<template>
  <div id="category">
    <div ref="rasm"></div>
    <h3>{{ props.jonatma.uzname }}</h3>
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
#category {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  div {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-size: 100%;
    transition: all 0.8s ease;
    &:hover {
      background-size: 115%;
    }
  }
  h3 {
    text-align: center;
    font-size: 1.2em;
  }
}
</style>
