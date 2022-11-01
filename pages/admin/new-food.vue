<template>
  <div>
    <form enctype="multipart/form-data" method="post" @submit.prevent="newFood">
      <select name="category" v-model="category" id="category" required>
        <option
          v-for="(item, index) in categoryBase"
          :key="index"
          value="item.uzname"
        >
          {{ item.uzname }}
        </option>
      </select>
      <select name="collection" v-model="collection" id="collection">
        <option
          v-for="(item, index) in collectionBase"
          :key="index"
          value="item.name"
        >
          {{ item.name }}
        </option>
      </select>
      <input type="text" v-model="uzname" placeholder="O'zbekcha nomi" />
      <input type="text" v-model="name" placeholder="Inglizcha nomi" />
      <input type="file" @change="onFileChanged" />
      <input type="submit" value="Qo'shish" />
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
const { data: categoryBase } = useFetch(`/api/categories`);
const { data: collectionBase } = useFetch(`/api/collections`);

var category = ref(null);
var collection = ref(null);
var name = ref(null);
var uzname = ref(null);

var file = ref(null);

function onFileChanged(event) {
  file.value = event.target.files[0];
  console.log(file.value);
}
async function newFood() {
  const formData = new FormData();
  formData.append("myFile", file.value, file.value.name);
  const res = await $fetch("/api/foods", {
    method: "post",
    body: {
      category_id: category.value,
      collection_id: collection.value,
      name: name.value,
      uzname: uzname.value,
    },
  });
}
</script>

<style lang="scss" scoped></style>
