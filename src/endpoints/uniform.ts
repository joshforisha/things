import abstractNouns from "../data/abstract_nouns.ts";
import activeVerbs from "../data/active_verbs.ts";
import adjectives from "../data/adjectives.ts";
import adverbs from "../data/adverbs.ts";
import animals from "../data/animals.ts";
import cities from "../data/cities.ts";
import colors from "../data/colors.ts";
import fruits from "../data/fruits.ts";
import nuts from "../data/nuts.ts";
import passiveVerbs from "../data/passive_verbs.ts";
import vegetables from "../data/vegetables.ts";
import { draw } from "../utils/list.ts";

export default function uniform(key: string): null | string {
  switch (key) {
    case "abstract_noun":
      return draw(abstractNouns);
    case "active_verb":
      return draw(activeVerbs);
    case "adjective":
      return draw(adjectives);
    case "adverb":
      return draw(adverbs);
    case "animal":
      return draw(animals);
    case "city":
      return draw(cities);
    case "color":
      return draw(colors);
    case "fruit":
      return draw(fruits);
    case "nut":
      return draw(nuts);
    case "passive_verb":
      return draw(passiveVerbs);
    case "vegetable":
      return draw(vegetables);
  }

  return null;
}
