export const getCountryCode = (name: string): string => {
  switch (name) {
    case "LosoJr":
    case "Betatoast2":
    case "BrainTM.":
    case "PebTM":
    case "Yamii._.":
    case "Siri_TM":
    case "Hayiom":
      return "DE";

    case "MatP93":
    case "iPriMeRL":
    case "Franaah":
    case "mauromarisa21":
      return "IT";

    case "eLconn21":
    case "Bestie77":
    case "kiro.1337":
    case "Amarouny":
    case "HonzaSch_":
    case "dwoitta":
    case "Lewdis":
      return "CZ";

    case "Henkan67":
      return "SE";

    case "Trident_.":
      return "ZA";

    case "Shoffy":
    case "PASZS":
      return "AT";

    case "Dionysos.TM":
    case "Geps.":
    case "axgoo_":
      return "FR";

    case "onion.boy":
      return "RO";

    case "EggyTM":
      return "GB";

    case "TiMMYS..":
      return "NL";

    case "iFendar":
      return "SV";

    case "Ayrisx3":
    case "Demotivator13":
      return "PL";

    case "potk0":
      return "CR";

    default:
      return "";
  }
};
