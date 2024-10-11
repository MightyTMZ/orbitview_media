import AppPage from "../../components/AppPage/AppPage";
import ComingSoon from "../ComingSoon/ComingSoon";

const OrbitViewNexus = () => {
  const name = "OrbitView Nexus";
  const pageTitle = "Nexus"
  const description = `A cutting-edge platform for data-driven education ensuring learners
                     are able to stay on top of current events with the right skills. 
                     Integrated personalized AI to unlock deeper insights.`;

  return (
    <AppPage title={name} pageTitle={pageTitle} about={description}>
      <ComingSoon />
    </AppPage>
  );
};

export default OrbitViewNexus;
