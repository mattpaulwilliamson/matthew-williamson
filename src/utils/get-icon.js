import { ICONS } from '../constants';

const getIcon = (name) => {
  let icon;

  switch (name) {
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'facebook':
      icon = ICONS.FACEBOOK;
      break;
    case 'linkedin':
      icon = ICONS.LINKEDIN;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
