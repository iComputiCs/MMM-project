<template>
  <div id="collection">
    <div ref="rasm"></div>
    <div>
      <h1 ref="nomi"></h1>
      <h5>{{ quantity }} ta Retsept</h5>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["jonatma", "quantity"]);
const rasm = ref(null);
const nomi = ref(null);
onMounted(() => {
  rasm.value.style.backgroundImage = `url("${props.jonatma.img}")`;
  nomi.value.innerHTML = props.jonatma.name;
});
</script>

<style lang="scss" scoped>
#collection {
  height: 500px;
  border: 1px solid $ochkulrang;
  border-radius: 10px;
  overflow: hidden;
  @include flexCenter(column);
  justify-content: flex-start;
  * {
    transition: all ease 0.7s;
  }
  &:hover {
    h1 {
      color: $sabzirang;
    }
    div {
      &:nth-child(1) {
        background-size: 110%;
      }
    }
  }
  h1 {
    font-size: 1.8em;
  }
  div {
    &:nth-child(1) {
      top: 0;
      width: 100%;
      height: 300px;
      background-size: 100%;
    }
    &:nth-child(2) {
      width: 100%;
      padding: 30px;
      display: grid;
      grid-template-columns: 70% 25%;
      justify-content: space-between;
      align-items: end;
      h5 {
        text-align: center;
        padding: 5px;
        border: 1px solid $kulrang;
        border-radius: 5px;
      }
    }
  }
}
</style>
