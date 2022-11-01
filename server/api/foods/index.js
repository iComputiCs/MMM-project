import { reverse } from "dns";
import foods from "../../../baza/foods.json";

export default defineEventHandler((event) => {
  return foods.reverse();
});
