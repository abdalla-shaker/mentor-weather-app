export const getIcon = (code) => {
  switch (code) {
    case 0:
      return "icon-sunny";
    case 1:
    case 2:
      return "icon-partly-cloudy";
    case 3:
      return "icon-overcast";
    case 45:
    case 48:
      return "icon-fog";
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return "icon-drizzle";
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return "icon-rain";
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return "icon-snow";
    case 95:
    case 96:
    case 99:
      return "icon-storm";
    default:
      return "icon-sunny";
  }
};
