import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import TechonomicsLandingPage from "./components/Techonomics/Techonomics";
import PathwaysLandingPage from "./components/Pathways/Pathways";
import EngineeringLandingPage from "./components/Engineering/Engineering";
import Article from "./components/Article/Article";
import LoginPage from "./screens/Login/LoginPage";
import SignUpPage from "./screens/SignUp/SignUpPage";
// import ActivateAccount from "./screens/ActivateAccount/ActivateAccount";
import EditProfile from "./components/EditProfile/EditProfile";

function App() {
  return (
    <>
      <Router>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/techonomics" element={<TechonomicsLandingPage />} />
          <Route path="/pathways" element={<PathwaysLandingPage />} />
          <Route path="/engineering" element={<EngineeringLandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/user/profile" element={<EditProfile />} />
          {/* 
          <Route path="/activate/:uid/:token" element={<ActivateAccount />} />
          */}
          {/* Up until we figure out the SMTP, we cannot do user profiles */}
          <Route
            path="/articles/:created_at_date/:slug"
            element={<Article />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
