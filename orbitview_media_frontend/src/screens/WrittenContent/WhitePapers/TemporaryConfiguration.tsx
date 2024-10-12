import AppPage from "../../../components/AppPage/AppPage";
import ComingSoon from "../../ComingSoon/ComingSoon";

export const WhitePapers = () => {
  const title = "White Papers";
  const pageTitle = "White Papers";

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};

export const TechnicalArticles = () => {
  const title = "Technical Articles";
  const pageTitle = "Technical Articles";

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};
