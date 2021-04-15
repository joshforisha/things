import animals from "../data/animals.ts";
import colors from "../data/colors.ts";
import fruits from "../data/fruits.ts";
import nuts from "../data/nuts.ts";
import vegetables from "../data/vegetables.ts";
import { draw } from "../utils/list.ts";

export default function uniform(key: string): null | string {
  switch (key) {
    case "animal":
      return draw(animals);
    case "color":
      return draw(colors);
    case "fruit":
      return draw(fruits);
    case "nut":
      return draw(nuts);
    case "vegetable":
      return draw(vegetables);
  }

  return null;
}
