export const getCountryCode = (name: string): string => {
  switch (name) {
    case "Ignite":
    case "Ilkertarded":
    case "Huso":
    case "Droga":
    case "Hubabibi":
      return "TR";

    case "Shayos":
      return "IL";
    case "Benox":
      return "MA";
    case "Trident":
      return "ZA";
 
    default:
      return "";
  }
};
