import AppPage from "../../components/AppPage/AppPage";
import ComingSoon from "../ComingSoon/ComingSoon";

const MarketSentinel = () => {
  const name = "MarketSentinel";
  const pageTitle = "Sentinel";
  const description = `Advanced Retrieval-Augmented Generation technology 
                        providing up-to-the-minute data for capital markets. 
                        A co-pilot who will be your certified investment advisor, 
                        pushing the realms of econometrics and AI.`;

  return (
    <AppPage title={name} pageTitle={pageTitle} about={description}>
      <ComingSoon/>
    </AppPage>
  );
};

export default MarketSentinel;
