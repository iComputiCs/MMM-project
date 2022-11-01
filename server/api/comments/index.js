import comments from "../../../baza/comments.json";

export default defineEventHandler((event) => {
  return comments;
});
