import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* pattern matches path='/' to render index route/comp */}
        <Route index={true} element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCT-BOt0RR4tN7kVgwGsCVpUvkxfnJCin4",
//   authDomain: "e-store-cbeac.firebaseapp.com",
//   projectId: "e-store-cbeac",
//   storageBucket: "e-store-cbeac.firebasestorage.app",
//   messagingSenderId: "980500307602",
//   appId: "1:980500307602:web:0c8cf120639e153ddb904b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
