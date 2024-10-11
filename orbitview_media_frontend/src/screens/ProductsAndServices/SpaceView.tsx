import AppPage from "../../components/AppPage/AppPage";
import ComingSoon from "../ComingSoon/ComingSoon";

const SpaceView = () => {
  const name = "SpaceView";
  const pageTitle = "SpaceView"
  const description = `SpaceView AI is an advanced platform designed for founders to craft 
                        hyper-personalized pitches tailored to specific investors by leveraging
                        Retrieval-Augmented Generation (RAG) and cutting-edge AI. The system scans both the founder's and investor's profiles on OrbitView
                        , along with real-time market data, to generate dynamic, context-rich insights, making each pitch
                         uniquely suited to the investor's preferences and portfolio. 
                         This creates an unprecedented, adaptive pitching experience that enhances engagement and decision-making for both founders and investors.`;

  // powered by RAG and AGI

  return (
    <AppPage title={name} pageTitle={pageTitle} about={description}>
      <ComingSoon/>
    </AppPage>
  );
};

export default SpaceView;
