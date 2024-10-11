import AppPage from "../../components/AppPage/AppPage";
import ComingSoon from "../ComingSoon/ComingSoon";

const SpaceView = () => {
  const name = "AutoCommander";
  const pageTitle = "AutoCommander"
  const description = `AutoCommander is an AI-driven automation and optimization platform designed for 
                        businesses to streamline operations without the hefty price of traditional enterprise software. 
                        Process automation, data analytics, real-time monitoring in a user-friendly interface tailored
                        for founders and entrepreneurs. `;

  // powered by RAG and AGI

  return (
    <AppPage title={name} pageTitle={pageTitle} about={description}>
      <ComingSoon/>
    </AppPage>
  );
};

export default SpaceView;
