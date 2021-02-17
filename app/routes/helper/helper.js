const images = [
  "https://cdn.dribbble.com/users/2199928/screenshots/11532918/shot-cropped-1590177932366.png",
  "https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar_.png",
  "https://cdn.dribbble.com/users/2479028/screenshots/13914601/media/5e04961d9e68a2d8dcb5710c15c1cd01.jpg",
  "https://cdn.dribbble.com/users/1041205/screenshots/3636353/dribbble.jpg",
  "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
];

getImageURL = (index) => {
  return images[index];
}
exports.getImageURL = getImageURL;