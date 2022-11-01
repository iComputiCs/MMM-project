<template>
  <div id="qidiruv-modal" @click.self="$emit('yopish')">
    <input
      v-model="qidiruvQiymat"
      @keyup.enter="Qidiruv"
      type="text"
      placeholder="Taom nomini kiriting va enterni bosing ..."
    />
    <div id="qidiruv-foods" @click="$emit('yopish')">
      <div v-if="natijaviyTaomlar.length">
        <NuxtLink
          v-for="(item, index) in natijaviyTaomlar"
          :key="index"
          :to="'/blog/' + item.id"
        >
          <SingleFood :jonatma="item" />
        </NuxtLink>
      </div>
      <h1 v-else>{{ elseText }}</h1>
    </div>
  </div>
</template>

<script setup>
const { data: qidiruvFoods } = useLazyFetch(`/api/foods`);

let elseText = ref("Qidiriladigan taom nomini kiriting!");

const natijaviyTaomlar = ref([]);
var qidiruvQiymat = ref("");
function Qidiruv() {
  if (qidiruvQiymat.value !== "") {
    natijaviyTaomlar.value = [];
    setTimeout(() => {
      natijaviyTaomlar.value = qidiruvFoods.value.filter((food) => {
        return food.uzname
          .toLowerCase()
          .includes(qidiruvQiymat.value.toLowerCase());
      });
      if (natijaviyTaomlar.value.length === 0) {
        elseText.value = "Qidiruv natija bermadi!";
      }
    }, 100);
  } else {
    elseText.value = "Qidiruv uchun hech narsa kiritilmadi!";
  }
}
</script>

<style lang="scss" scoped>
#qidiruv-modal {
  overflow-y: scroll;
  position: fixed;
  background-color: rgba($color: #000000, $alpha: 0.85);
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 20px;
  align-items: center;
  input {
    width: 100%;
    font-size: 1.2em;
    padding: 15px 20px;
    border: none;
    outline: none;
    background-color: $havorang;
    color: $sabzirang;
    border-radius: 10px;
  }
  #qidiruv-foods {
    width: 100%;
    padding: 40px;
    & > div {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-content: start;
      gap: 20px;
    }
    h1 {
      color: $sabzirang;
      grid-column-start: 1;
      grid-column-end: 5;
      text-align: center;
    }
  }
}
</style>
