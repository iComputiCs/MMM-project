import blog from "../../../baza/blog.json";

export default defineEventHandler((event) => {
  return blog;
});
