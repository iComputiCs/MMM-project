export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  return { body };
});
