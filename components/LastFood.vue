<template>
  <div id="last-food">
    <div id="last-food-img" ref="rasm"></div>
    <div id="last-food-info">
      <small>
        <p>
          <span class="material-symbols-outlined"> monitoring </span>
          {{ props.jonatma.stats }}
        </p>
      </small>
      <h1>{{ lastOne.uzname }}</h1>
      <p>
        {{ tinyInfo }}
      </p>
      <NuxtLink :to="'/blog/' + props.jonatma.food_id" class="read">
        <span class="material-symbols-outlined"> arrow_right_alt </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["jonatma"]);

const { data: lastOne } = useFetch(
  `/api/foods/needed?q=${props.jonatma.food_id}`
);

const rasm = ref(null);
const tinyInfo = ref("");

onMounted(() => {
  rasm.value.style.backgroundImage = `url("${lastOne.value.img}")`;
  let vaqtincha = [];
  for (let i = 0; i < 25; i++) {
    vaqtincha.push(props.jonatma.tiny_info.split(" ")[i]);
  }
  tinyInfo.value = vaqtincha.join(" ") + " ...";
});
</script>

<style lang="scss" scoped>
#last-food {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 60% 40%;
  @include media("<1000px") {
    grid-template-columns: 100%;
    #last-food-img {
      height: 400px;
    }
  }
  #last-food-info {
    background-color: $havorang;
    padding: 50px 50px 50px 40px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    h1 {
      font-size: 3em;
    }
    p {
      font-size: 1.2em;
      display: flex;
      align-items: center;
      column-gap: 10px;
    }
    small {
      font-size: 0.7em;
    }
    .read {
      width: 40px;
      height: 40px;
      @include flexCenter(row);
      border-radius: 50%;
      background-color: white;
      align-self: flex-end;
      .material-symbols-outlined {
        color: $sabzirang;
      }
      &:hover {
        background-color: $sabzirang;
        .material-symbols-outlined {
          color: white;
        }
      }
    }
  }
}
.material-symbols-outlined {
  color: $sabzirang;
}
</style>
