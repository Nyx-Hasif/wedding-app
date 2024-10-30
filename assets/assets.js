// LOGO IMAGE
import assets_logo from "./logo.png";
// VIDEO BG
const bg_video = "/video/bg-video.mp4"; // ✅ BETUL

// ARAB IMAGE FOLDER
import arab_culture from "./arab/arab_culture.png";
import arab_1 from "./arab/arab_1.png";
import arab_2 from "./arab/arab_2.png";
import arab_3 from "./arab/arab_3.png";
import arab_4 from "./arab/arab_4.png";
import arab_5 from "./arab/arab_5.png";
import arab_6 from "./arab/arab_6.png";
// CHINESE IMAGE FOLDER
import chinese_culture from "./chinese/chinese_culture.png";
import chinese_1 from "./chinese/china_1.png";
import chinese_2 from "./chinese/china_2.png";
import chinese_3 from "./chinese/china_3.png";
import chinese_4 from "./chinese/china_4.png";
import chinese_5 from "./chinese/china_5.png";
import chinese_6 from "./chinese/china_6.png";
// INDIA IMAGE FOLDER
import india_culture from "./india/india_culture.png";
import india_1 from "./india/india_1.png";
import india_2 from "./india/india_2.png";
import india_3 from "./india/india_3.png";
import india_4 from "./india/india_4.png";
import india_5 from "./india/india_5.png";
import india_6 from "./india/india_6.png";
//  JAPAN IMAGE FOLDER
import japan_culture from "./japan/japan_culture.png";
import japan_1 from "./japan/japan_1.png";
import japan_2 from "./japan/japan_2.png";
import japan_3 from "./japan/japan_3.png";
import japan_4 from "./japan/japan_4.png";
import japan_5 from "./japan/japan_5.png";
import japan_6 from "./japan/japan_6.png";
//  KOREA IMAGE FOLDER
import korea_culture from "./korea/korean_culture.png";
import korea_1 from "./korea/korea_1.png";
import korea_2 from "./korea/korea_2.png";
import korea_3 from "./korea/korea_3.png";
import korea_4 from "./korea/korea_4.png";
import korea_5 from "./korea/korea_5.png";
import korea_6 from "./korea/korea_6.png";
//  MALAY IMAGE FOLDER
import malay_culture from "./malay/malay_culture.png";
import malay_1 from "./malay/malay_1.png";
import malay_2 from "./malay/malay_2.png";
import malay_3 from "./malay/malay_3.png";
import malay_4 from "./malay/malay_4.png";
import malay_5 from "./malay/malay_5.png";
import malay_6 from "./malay/malay_6.png";
import malay_7 from "./malay/malay_7.png";
//  WESTERN IMAGE FOLDER
import western_culture from "./western/western_culture.png";
import west_1 from "./western/west_1.png";
import west_2 from "./western/west_2.png";
import west_3 from "./western/west_3.png";
import west_4 from "./western/west_4.png";
import west_5 from "./western/west_5.png";
import west_6 from "./western/west_6.png";

// CARD IMAGES
import card_1 from "./card-1.jpg";
import card_2 from "./card-2.jpg";
import card_3 from "./card-3.jpg";
import card_4 from "./card-4.jpg";
import card_5 from "./card-5.jpg";
import card_6 from "./card-6.jpg";
import card_7 from "./card-7.jpg";
import card_8 from "./card-8.jpg";

// RING IMAGES
import ring_1 from "./ring_1.jpg";
import ring_2 from "./ring_2.jpg";

// PHOTOGRAPHERS
import male_1 from "./male_1.png";
import male_2 from "./male_2.png";
import male_3 from "./male_3.png";
import male_4 from "./male_4.png";
import male_5 from "./male_5.png";
import female_1 from "./female_1.png";
import female_2 from "./female_2.png";
import female_3 from "./female_3.png";
import female_4 from "./female_4.png";
import female_5 from "./female_5.png";

// HERO IMGS
import hero_1 from "./hero_1.jpg";
import hero_2 from "./hero_2.jpg";
import hero_3 from "./hero_3.jpg";
import hero_4 from "./hero_4.jpg";

export const assets = {
  logo: assets_logo,
  video: bg_video,
  card: [card_1, card_2, card_3, card_4, card_5, card_6, card_7, card_8],
  ring: [ring_1, ring_2],
  photographer_male: [male_1, male_2, male_3, male_4, male_5],
  photographer_female: [female_1, female_2, female_3, female_4, female_5],
  hero: [hero_1, hero_2, hero_3, hero_4],
  arab: {
    arab_culture: arab_culture,
    arab_images: [arab_1, arab_2, arab_3, arab_4, arab_5, arab_6],
  },
  chinese: {
    chinese_culture: chinese_culture,
    chinese_images: [
      chinese_1,
      chinese_2,
      chinese_3,
      chinese_4,
      chinese_5,
      chinese_6,
    ],
  },
  india: {
    india_culture: india_culture,
    india_images: [india_1, india_2, india_3, india_4, india_5, india_6],
  },
  japan: {
    japan_culture: japan_culture,
    japan_images: [japan_1, japan_2, japan_3, japan_4, japan_5, japan_6],
  },
  korea: {
    korea_culture: korea_culture,
    korea_images: [korea_1, korea_2, korea_3, korea_4, korea_5, korea_6],
  },
  malay: {
    malay_culture: malay_culture,
    malay_images: [
      malay_1,
      malay_2,
      malay_3,
      malay_4,
      malay_5,
      malay_6,
      malay_7,
    ],
  },
  western: {
    western_culture: western_culture,
    western_images: [west_1, west_2, west_3, west_4, west_5, west_6],
  },
};

export const blog_data = [
  {
    id: 1,
    category: "Arab",
    title: "Arabic Culture",
    image: arab_1,
    description: "test",
  },
  {
    id: 2,
    category: "Arab",
    title: "Arabic Culture",
    image: arab_2,
    description: "test",
  },
  {
    id: 3,
    category: "Arab",
    title: "Arabic Culture",
    image: arab_3,
    description: "test",
  },
  {
    id: 4,
    category: "Arab",
    title: "Arabic Culture",
    image: arab_4,
    description: "test",
  },
  {
    id: 5,
    category: "Arab",
    title: "Arabic Culture",
    image: arab_5,
    description: "test",
  },
  {
    id: 6,
    category: "Arab",
    title: "Arabic Culture",
    image: arab_6,
    description: "test",
  },

  {
    id: 7,
    category: "Japan",
    title: "Japan Culture",
    image: japan_1,
    description: "test",
  },
  {
    id: 8,
    category: "Japan",
    title: "Japan Culture",
    image: japan_2,
    description: "test",
  },
  {
    id: 9,
    category: "Japan",
    title: "Japan Culture",
    image: japan_3,
    description: "test",
  },
  {
    id: 10,
    category: "Japan",
    title: "Japan Culture",
    image: japan_4,
    description: "test",
  },
  {
    id: 11,
    category: "Japan",
    title: "Japan Culture",
    image: japan_5,
    description: "test",
  },
  {
    id: 12,
    category: "Japan",
    title: "Japan Culture",
    image: japan_6,
    description: "test",
  },

  {
    id: 13,
    category: "Korea",
    title: "Korea Culture",
    image: korea_1,
    description: "test",
  },
  {
    id: 14,
    category: "Korea",
    title: "Korea Culture",
    image: korea_2,
    description: "test",
  },
  {
    id: 15,
    category: "Korea",
    title: "Korea Culture",
    image: korea_3,
    description: "test",
  },

  {
    id: 16,
    category: "Korea",
    title: "Korea Culture",
    image: korea_4,
    description: "test",
  },
  {
    id: 17,
    category: "Korea",
    title: "Korea Culture",
    image: korea_5,
    description: "test",
  },
  {
    id: 18,
    category: "Korea",
    title: "Korea Culture",
    image: korea_6,
    description: "test",
  },

  {
    id: 19,
    category: "China",
    title: "China Culture",
    image: chinese_1,
    description: "test",
  },
  {
    id: 20,
    category: "China",
    title: "China Culture",
    image: chinese_2,
    description: "test",
  },
  {
    id: 21,
    category: "China",
    title: "China Culture",
    image: chinese_3,
    description: "test",
  },
  {
    id: 22,
    category: "China",
    title: "China Culture",
    image: chinese_4,
    description: "test",
  },
  {
    id: 23,
    category: "China",
    title: "China Culture",
    image: chinese_5,
    description: "test",
  },
  {
    id: 24,
    category: "China",
    title: "China Culture",
    image: chinese_6,
    description: "test",
  },

  {
    id: 25,
    category: "Malay",
    title: "Malay Culture",
    image: malay_1,
    description: "test",
  },
  {
    id: 26,
    category: "Malay",
    title: "Malay Culture",
    image: malay_2,
    description: "test",
  },
  {
    id: 27,
    category: "Malay",
    title: "Malay Culture",
    image: malay_3,
    description: "test",
  },
  {
    id: 28,
    category: "Malay",
    title: "Malay Culture",
    image: malay_4,
    description: "test",
  },
  {
    id: 29,
    category: "Malay",
    title: "Malay Culture",
    image: malay_5,
    description: "test",
  },
  {
    id: 30,
    category: "Malay",
    title: "Malay Culture",
    image: malay_6,
    description: "test",
  },
  {
    id: 31,
    category: "Malay",
    title: "Malay Culture",
    image: malay_7,
    description: "test",
  },

  {
    id: 32,
    category: "India",
    title: "India Culture",
    image: india_1,
    description: "test",
  },
  {
    id: 33,
    category: "India",
    title: "India Culture",
    image: india_2,
    description: "test",
  },
  {
    id: 34,
    category: "India",
    title: "India Culture",
    image: india_3,
    description: "test",
  },
  {
    id: 35,
    category: "India",
    title: "India Culture",
    image: india_4,
    description: "test",
  },
  {
    id: 36,
    category: "India",
    title: "India Culture",
    image: india_5,
    description: "test",
  },
  {
    id: 37,
    category: "India",
    title: "India Culture",
    image: india_6,
    description: "test",
  },

  {
    id: 38,
    category: "West",
    title: "Western Culture",
    image: west_1,
    description: "test",
  },
  {
    id: 39,
    category: "West",
    title: "Western Culture",
    image: west_2,
    description: "test",
  },
  {
    id: 40,
    category: "West",
    title: "Western Culture",
    image: west_3,
    description: "test",
  },
  {
    id: 41,
    category: "West",
    title: "Western Culture",
    image: west_4,
    description: "test",
  },
  {
    id: 42,
    category: "West",
    title: "Western Culture",
    image: west_5,
    description: "test",
  },
  {
    id: 43,
    category: "West",
    title: "Western Culture",
    image: west_6,
    description: "test",
  },
];
