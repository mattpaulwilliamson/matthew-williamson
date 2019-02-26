const getContactHref = (name, contact) => {
  let href;

  switch (name) {
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'facebook':
      href = `https://facebook.com/${contact}`;
      break;
    case 'linkedin':
      href = `https://linkedin.com/${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
