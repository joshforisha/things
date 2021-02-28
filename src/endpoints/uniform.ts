import { draw } from "../utils/list.ts";
import colors from "../data/colors.ts";

export default function uniform(key: string): null | string {
  switch (key) {
    case "color":
      return draw(colors);
  }

  return null;
}
