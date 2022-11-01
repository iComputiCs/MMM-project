import categories from "../../../baza/categories.json";

export default defineEventHandler((event) => {
  return categories;
});
