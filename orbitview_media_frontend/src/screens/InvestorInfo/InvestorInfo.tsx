import AppPage from "../../components/AppPage/AppPage";
import ComingSoon from "../ComingSoon/ComingSoon";

export const UnderstandingOrbitView = () => {
  const title = "Understanding OrbitView";
  const pageTitle = "Understanding OrbitView";

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};

export const OurStrengths = () => {
  const title = "Our Strengths";
  const pageTitle = "Our Strengths";

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};

export const FinancialResults = () => {
  const title = "Financial Results";
  const pageTitle = "Financial Results";

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};

// -------------------------------------------------
// We skip the events page since we already have it
// -------------------------------------------------

export const FinancialCalendar = () => {
  const title = "Corporate Governance";
  const pageTitle = "Corporate Governance";

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};

export const FAQs = () => {
  const title = "Frequently Asked Questions (FAQs)";
  const pageTitle = "Frequently Asked Questions (FAQs)";

  // make a form and an API for users to submit their questions

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};
