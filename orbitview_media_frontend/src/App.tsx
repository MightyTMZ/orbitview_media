import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import Article from "./components/Article/Article";
// import LoginPage from "./screens/Login/LoginPage";
// import SignUpPage from "./screens/SignUp/SignUpPage";
// import ActivateAccount from "./screens/ActivateAccount/ActivateAccount";
// import EditProfile from "./components/EditProfile/EditProfile";
import ContactPage from "./screens/Contact/Contact";
// import EventPage from "./screens/Events/Events";
import JoinUsPage from "./screens/JoinUsPage/JoinUsPage";
import JobListings from "./screens/JobListings/JobListings";
import Blog from "./screens/WrittenContent/Blog/Blog";
import FormalEventPage from "./screens/Events/FormalEventPage";
import OrbitViewNexus from "./screens/ProductsAndServices/OrbitViewNexus";
import MarketSentinel from "./screens/ProductsAndServices/OrbitViewSentinel";
import SpaceView from "./screens/ProductsAndServices/SpaceView";
import StarFindr from "./screens/ProductsAndServices/StarFindr";
import AutoCommander from "./screens/ProductsAndServices/AutoCommander";
import OrbitViewPremium from "./screens/ProductsAndServices/OrbitViewPremium";
import SolutionsIndividuals from "./components/Solutions/SolutionsIndvidual";
import SolutionsFamilies from "./components/Solutions/SolutionsFamilies";
import SolutionsStudents from "./components/Solutions/SolutionsStudents";
import SolutionsBusinesses from "./components/Solutions/SolutionsBusinesses";
import SolutionsGovernments from "./components/Solutions/SolutionsGovernments";
import { InTheNews, Newsletters, PressRelease, WebinarsAndVideo } from "./screens/NewsRoom/NewsRoom";
import { FinancialCalendar, FinancialResults, OurStrengths, UnderstandingOrbitView } from "./screens/InvestorInfo/InvestorInfo";
import FAQs from "./components/FAQs/FAQs";
import { Company, Leadership, Partnerships } from "./screens/AboutUs/NewAboutUs";
import { CommunitySupport, Competitions, ComplianceInformation, PrivacyPolicy, ProductDocumentation, TermsOfService } from "./screens/Community/Community";


// import AppPage from "./components/AppPage/AppPage";

function App() {
  // const para = `this is a vert lfksjhgfkjgfsh g lkfh hef  f hskf hsf  fhgsfhs kffshkfh fh fl slfhwl fsdk  sek skj `

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
          {/*<Route path="/techonomics" element={<TechonomicsLandingPage />} />
          <Route path="/pathnetwork" element={<PathwaysLandingPage />} />
          <Route path="/engineering" element={<EngineeringLandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/user/profile" element={<EditProfile />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/events" element={<FormalEventPage />} />
          <Route path="/join" element={<JoinUsPage />} />
          <Route path="/jobs" element={<JobListings />} />
          {/*<Route
            path="/test"
            element={
              <AppPage title={"Hello"} about={para}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem debitis necessitatibus eius. Sit, ab alias esse
                  sunt ducimus blanditiis illo!
                </p>
              </AppPage>
            }
          />*/}

          {/* 
          <Route path="/activate/:uid/:token" element={<ActivateAccount />} />
          */}
          {/* Up until we figure out the SMTP, we cannot do user profiles */}
          <Route path="/blog/:created_at_date/:slug" element={<Article />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/nexus" element={<OrbitViewNexus />}></Route>
          <Route path="/sentinel" element={<MarketSentinel />}></Route>
          <Route path="/spaceview" element={<SpaceView />}></Route>
          <Route path="/starfindr" element={<StarFindr />}></Route>
          <Route path="/autocommander" element={<AutoCommander />}></Route>
          <Route path="/premium" element={<OrbitViewPremium />}></Route>
          <Route
            path="/solutions/individuals"
            element={<SolutionsIndividuals />}
          ></Route>
          <Route
            path="/solutions/families"
            element={<SolutionsFamilies />}
          ></Route>
          <Route
            path="/solutions/students"
            element={<SolutionsStudents />}
          ></Route>
          <Route
            path="/solutions/businesses"
            element={<SolutionsBusinesses />}
          ></Route>
          <Route
            path="/solutions/governments"
            element={<SolutionsGovernments />}
          ></Route>
          <Route path="/press-releases" element={<PressRelease />}></Route>
          <Route path="/in-the-news" element={<InTheNews />}></Route>
          <Route path="/media" element={<WebinarsAndVideo />}></Route>
          <Route path="/newsletters" element={<Newsletters />}></Route>
          <Route path="/understanding-orbitview" element={<UnderstandingOrbitView />}></Route>
          <Route path="/our-strengths" element={<OurStrengths />}></Route>
          <Route path="/financial-results" element={<FinancialResults />}></Route>
          <Route path="/financial-calendar" element={<FinancialCalendar />}></Route>
          <Route path="/frequently-asked-questions" element={<FAQs />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/partnerships" element={<Partnerships />}></Route>
          <Route path="/leadership" element={<Leadership />}></Route>
          <Route path="/product-documentation" element={<ProductDocumentation />}></Route>
          <Route path="/community-support" element={<CommunitySupport />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/compliance-information" element={<ComplianceInformation />}></Route>
          <Route path="/terms-of-service" element={<TermsOfService />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
