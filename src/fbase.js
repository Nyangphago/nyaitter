// Firebase version 9
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

// 파베 초기화를 위한 부분이므로 다른 파일에서 참조할 필요 x
// fbase.js 파일 내에서 실행하도록 코드 수정
const firebaseApp = initializeApp(firebaseConfig);

// firebase.auth()는 로그인을 위해 사용하므로 다른 파일이 참조함
// 파베 관련 모듈을 더 export 할 수도 있으므로 named export를 적용함
export const authService = getAuth(firebaseApp);
