import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

const firebaseConfig = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/project/mis-carousel-elements/firestore/databases/-default-/data/~2FCarouselURLs~2FHRljWRiRlpr1ZeOs6F4C?hl=pl.firebaseio.com',
});

const app = initializeApp(firebaseConfig);
export const carouselURLsDb = getFirestore(app);
