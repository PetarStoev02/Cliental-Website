export const SERVICES = "УСЛУГИ";
export const PORTFOLIO = "ПОРТФОЛИО";
export const CONTACTS = "КОНТАКТИ";
export const SEND_REQUEST = "ИЗПРАТИ ЗАПИТВАНЕ";

import SocialMedia from "../assets/social-media-box.png";
import GraphicDesign from "../assets/graphic-design-box.png";
import Photography from "../assets/photography-box.png";
import WebSeo from "../assets/web-seo-box.png";

import logo_1 from "../assets/Logo 3.jpg";
import logo_2 from "../assets/Logo 1.png";
import logo_3 from "../assets/Logo 5.png";
import logo_4 from "../assets/Logo 6.png";
import logo_5 from "../assets/Logo 2.png";
import logo_6 from "../assets/Logo 4.jpg";
import logo_7 from "../assets/Logo 7.png";
import logo_8 from "../assets/Logo 8.png";
export const SERVICES_TYPES = [
  {
    id: 1,
    route: "digital-marketing-services",
    name: "Дигитален маркетинг",
    // imageUrl: "https://prod.spline.design/5mv7Wum7EJDM9YYS/scene.splinecode",
    imageUrl: `${SocialMedia}`,
  },
  {
    id: 2,
    name: "Професионална фотография ",
    route: "photography-services",
    // imageUrl: "https://prod.spline.design/LepBWpXFYOLtWgZg/scene.splinecode",
    imageUrl: `${Photography}`,
  },
  {
    id: 3,
    name: "Уебсайт и SEO",
    route: "website-services",
    // imageUrl: "https://prod.spline.design/AUtuMg1EDPdSsCji/scene.splinecode",
    imageUrl: `${WebSeo}`,
  },
  {
    id: 4,
    name: "Графичен дизайн",
    // imageUrl: "https://prod.spline.design/HCXnHetUKAatlWGW/scene.splinecode",
    imageUrl: `${GraphicDesign}`,
  },
];

export const PROJECTS = [
  {
    title: "Зоологическа градина София",
    img: `${logo_1}`,
    // text: "119K views · 5K reactions | Промо видео",
    url: "https://www.facebook.com/zoosf/videos/2893565540780532",
  },
  {
    title: "Soyora Furniture | Sofia",
    img: `${logo_2}`,
    // text: "Soyora Furniture · 737 likes | Промо видео",
    url: "https://www.facebook.com/soyora.furniture",
  },
  {
    title: "Мария Ранчинска Youtube",
    img: `${logo_3}`,
    // text: "26 видеоклипа",
    url: "https://www.youtube.com/@mariaranchinska/videos",
  },
  {
    title: "Red Zone VR Racing Lounge | TikTok",
    img: `${logo_7}`,
    // text: "7198 likes, 90 comments | Промо видео",
    url: "https://www.tiktok.com/@redzonebg/video/7242378185789164826",
  },
  {
    title: "Tanya VS YouTube",
    img: `${logo_4}`,
    // text: "32 видеоклипа",
    url: "https://www.facebook.com/zoosf/videos/2893565540780532",
  },
  {
    title: "Comobg",
    img: `${logo_5}`,
    // text: "119K views · 5K reactions | Промо видео",
    url: "https://www.instagram.com/p/CxUnDzFoap-/",
  },
  {
    title: "БРЪСНАРНИЦАТЪ | TikTok",
    img: `${logo_6}`,
    // text: "7198 likes, 90 comments | Промо видео",
    url: "https://www.tiktok.com/@brasnarnicataml1",
  },
  {
    title: "Мария Ранчинска TikTok",
    img: `${logo_3}`,
    // text: "21.7k Followers, 170.5k Likes",
    url: "https://www.tiktok.com/@mariaranchinska",
  },

  {
    title: "HOMEAROMAGIFTS | TikTok",
    img: `${logo_8}`,
    // text: "7198 likes, 90 comments | Промо видео",
    url: "https://www.tiktok.com/@homearomagifts",
  },
];

export const REVIEWS = [
  {
    img: "",
    title: "Ranchlead",
    text: "Благодарим за видеата и старанието! Личи си набитото им око към детайла и това, че следят трендовете, което е от изключително значение за развитоето на маркетинга на всеки бранд!",
  },
  {
    img: "",
    title: "Явор Каменов",
    text: "Прекрасно обслужване, много бързо реагират и изпълниха гарантираните от тях успехи! Прeпоръчвам ги!",
  },
  {
    img: "",
    title: "Homearomagifts",
    text: "Личи си професионализмът и старанието, с което правят всичко! Намериха най-добрите решения за нашите проблеми!",
  },
  {
    img: "",
    title: "Мария Ранчинска",
    text: "С вашата помощ достигнах до толкова много хора и развих страниците си. Благодаря и с нетърпение очаквам следващия ни проект!",
  },
  {
    img: "",
    title: "Таня Савова",
    text: `Благодаря за твоята подкрепа и помощ през тази година. Думата "Благодаря" никога няма да е достатъчна, за да изразя благодарността си към теб и целия екип на CLIENTAL`,
  },
];

// export const Token = "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ".eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzA2NTI5NzgzLCJqdGkiOiIzYmZjZTdiMy01ZTdmLTQwZWItODBjYS1kYzliZWI5NDYzMGIiLCJ1c2VyX3V1aWQiOiJlOGZlMjE1Zi0zNzlmLTQ3ZjItOTgzMC0yMWMwYzZmODI5MDAifQ.IK01mseM4YlmC8y_fVGrfnthdZPDv2imA37nCHXC-Hm6vz_AsS_EjjXBKZJWXgANcuL9sWWNpMj9PIukcGaWEg

export const FAQ_Object = [
  {
    id: 1,
    question: "Какви са обикновените срокове за виждане на резултати?",
    answer: "Сроковете за виждане на резултати зависят от множество фактори, включително обхвата на кампаниите, конкуренцията във вашата ниша, бюджета и др. Обикновено, първите резултати могат да бъдат видими в рамките на няколко седмици, но пълните резултати изискват по-дългосрочен пероид от време."
  },
  {
    id: 2,
    question: "Каква е вашата ценова политика?",
    answer: "Ние предлагаме гъвкави ценови пакети, които могат да бъдат пригодени спрямо нуждите и бюджета на всеки клиент. Цените се определят в зависимост от обхвата на услугите, които се изискват, и други фактори. Ние сме отворени за разговор и готови да работим с различни бюджети." 
  },
  { id: 3,
    question: "Какъв е обичайният процес на работа с нас?",
    answer: "Обичайният процес включва срещи и консултации с клиента, определяне на целите и стратегията, изпълнение на маркетинговите кампании, непрекъснат мониторинг и оптимизация на резултатите, както и редовна отчетност и обратна връзка." 
  },
  {
    id: 4,
    question: "Защо да изберете нас? Ние сме не просто маркетингова агенция, ние сме вашият партньор за успех! Ето защо:",
    answer: `
    1. **Стремеж към иновации**: Винаги сме на върха на последните тенденции в дигиталния свят. Нашите експерти са постоянно в движение, изследвайки и внедрявайки най-новите иновации в областта на маркетинга.
    2. **Персонализиран подход**: Ние не вярваме в едноразмерния подход. Вместо това, разбираме уникалните характеристики на вашия бизнес и целите ви, за да създадем индивидуализирана стратегия, която да ви доведе до успеха.
    3. **Доказана история на успех**: Ние можем да се похвалим с дългогодишен опит и множество успешни кампании за клиенти от различни отрасли. Нашата история на успех е вашата гаранция за качество и професионализъм.
    4. **Прозрачност и отвореност**: Работим с открити карти. Ние ви държим в центъра на всичко, предоставяйки ви редовна обратна връзка и отчети за напредъка на вашите кампании.
    5. **Екип от експерти**: Нашите специалисти са нашата най-голяма стойност. Те са винаги готови да ви предоставят най-доброто съвети и решения за вашия успех.
    `
  }
  
];
