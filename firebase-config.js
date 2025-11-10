import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnul0m3AB6Rfm5o2NSPab5qkIg23YmNt0", // 이 정보는 공개되어도 괜찮습니다.
  authDomain: "evervalen-d01e2.firebaseapp.com",
  projectId: "evervalen-d01e2",
  storageBucket: "evervalen-d01e2.firebasestorage.app",
  messagingSenderId: "854277067793",
  appId: "1:854277067793:web:87a35e884ee96f16a10db0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };