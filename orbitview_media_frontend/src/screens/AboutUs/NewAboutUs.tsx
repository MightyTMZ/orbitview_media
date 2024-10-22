import AppPage from "../../components/AppPage/AppPage";
import ComingSoon from "../ComingSoon/ComingSoon";

export const Company = () => {
  const title = "Company";
  const pageTitle = "Company";

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};

export const Partnerships = () => {
  const title = "Partnerships";
  const pageTitle = "Partnerships";

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};

// export const Leadership = () => {
  // const title = "Our Thought Leaders";
  // const pageTitle = "Leadership";

  // return (
    // <AppPage title={title} pageTitle={pageTitle}>
      // <ComingSoon></ComingSoon>
    // </AppPage>
  // );
// };

