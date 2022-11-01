<template>
  <div id="home">
    <LastFood :jonatma="lastBlog" />
    <h1>Kategoriyalar:</h1>
    <div id="home-categories">
      <NuxtLink v-for="x in 4" to="/about">
        <Category :jonatma="categories[x]" />
      </NuxtLink>
      <NuxtLink to="/categories">
        <span class="material-symbols-outlined"> arrow_circle_right </span>
        <h4>Barchasini ko'rish</h4>
      </NuxtLink>
    </div>
    <h1>Kolleksiyalar:</h1>
    <div id="home-collections">
      <NuxtLink
        v-for="(item, index) in collections"
        :key="index"
        :to="'/collections/' + item.id"
      >
        <Collections :jonatma="item" :quantity="quantity[index]" />
      </NuxtLink>
    </div>
    <h1>So'ngi Retseptlar:</h1>
    <div id="home-foods">
      <NuxtLink
        v-for="(item, index) in partialFood"
        :key="index"
        :to="'/blog/' + item.id"
      >
        <SingleFood :jonatma="item" />
      </NuxtLink>
    </div>
    <div id="add">
      <button @click="addFood" :disabled="add ? 0 : 1">Ko'proq yuklash</button>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Asosiy sahifa",
});

const { data: lastBlog } = useFetch(`/api/blog/last`);
const { data: categories } = useLazyFetch(`/api/categories`);
const { data: collections } = useLazyFetch(`/api/collections`);
const { data: foods } = useLazyFetch(`/api/foods`);

const quantity = ref([]);

onMounted(() => {
  for (let i = 0; i < collections.value.length; i++) {
    let vaqtincha = foods.value.filter((food) => {
      return food.collection_id == collections.value[i].id;
    });
    quantity.value.push(vaqtincha.length);
  }
  addFood();
});

let addQuantity = ref(0);
let partialFood = ref([]);
let add = ref(true);

function addFood() {
  for (let i = addQuantity.value; i < addQuantity.value + 8; i++) {
    partialFood.value.push(foods.value[i]);
  }
  addQuantity.value += 8;
  if (addQuantity.value == Math.ceil(foods.value.length / 8) * 8) {
    add.value = false;
  }
}
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  #home-categories {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    a {
      @include flexCenter(column);
      row-gap: 10px;
    }
    .material-symbols-outlined {
      color: $sabzirang;
      font-size: 4em;
    }
  }
  #home-collections {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  #home-foods {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  #add {
    @include flexCenter(row);
    button {
      background-color: $qora;
      color: $oqkulrang;
      font-size: 1em;
      padding: 15px 30px;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        transform: translateY(-10px);
      }
      &:disabled {
        opacity: 0.5;
        &:hover {
          transform: translateY(0px);
          &::after {
            content: " nihoyasiga yetgan!";
            color: white;
          }
        }
      }
    }
  }
}
</style>
