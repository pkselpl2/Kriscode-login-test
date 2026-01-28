import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { firebaseConfig } from "./config.js"; // config.js 불러오기

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function signup(email, password) {
  try { await createUserWithEmailAndPassword(auth, email, password); alert("회원가입 성공!"); }
  catch(e){ alert("회원가입 실패: " + e.message);}
}

export async function login(email, password) {
  try { await signInWithEmailAndPassword(auth, email, password); alert("로그인 성공!"); }
  catch(e){ alert("로그인 실패: " + e.message);}
}
