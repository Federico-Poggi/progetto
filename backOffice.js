const APIKEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDI2MjEzOWM0MzAwMTg4MTQ1YjMiLCJpYXQiOjE2OTcxODY0MDMsImV4cCI6MTY5ODM5NjAwM30.sG7LjgJXk7RlyaPr12t5sVZv9W38wTi6aq8THBIsBiI";
const pexel = "https://api.pexels.com/v1/search?query=";
const pexelAPIKEY = "mZvMYZkdGSIRhRrdPhV4eXnJpokW9eX57p4Dy7hJWMk9749zisas1OZx";
const URL = "https striveschool-api.herokuapp.com/api/product/";

const getImage = (query) => {
  fetch(pexel + query, {
    headers: {
      Authorization: pexelAPIKEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new error("error bo");
      }
    })
    .then((data) => {
      console.log(data);
      const dataObg = Object.assign({}, data);
      const arrimg = dataObg.photos;
      console.log(arrimg);

      return dataObg;
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(data);
};

// bisogna convertire getImage() da json a array js
// ciclarlo per ottenere un immagine
// poi l'immagine dovà essere caricata nella card

const product = [
  {
    name: "razer",
    type: "gamePad",
    category: "gaming",
    img: getImage("joystick"),
    price: 99,
  },

  {
    name: "aukey Keyboard",
    type: "mechanic keyboard",
    category: "Gameing, Coder",
    img: getImage("keyboard"),
    price: 150,
  },

  {
    name: "logitech Mouse",
    type: "mouse",
    category: "gaming, office",
    img: getImage("logitech-mouse"),
    price: 130,
  },

  {
    name: "Monitor MSI",
    type: "monitor",
    category: "riproduzione, video",
    img: getImage("MSI-monitor"),
    price: 400,
  },

  {
    name: "CPU Intel I7 12th gen",
    type: "CPU",
    category: "Control Unit, tech",
    img: getImage("I7-12th"),
    price: "400",
  },
];

// const intoServer = (product) => {
//   fetch(URL, (product)=>{
//     headers:{
//       Authorization: APIKEY,
//     },
//     method: "POST"
//   })S
// };

// const returnObj = () => {
//   fetch(URL, {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDI2MjEzOWM0MzAwMTg4MTQ1YjMiLCJpYXQiOjE2OTcxODY0MDMsImV4cCI6MTY5ODM5NjAwM30.sG7LjgJXk7RlyaPr12t5sVZv9W38wTi6aq8THBIsBiI",
//     method: "GET",
//     headers: {
//       "Content-Type": "app/JSON",
//     },
//   });
// };
// returnObj();
