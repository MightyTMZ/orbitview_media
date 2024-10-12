import AppPage from "../../components/AppPage/AppPage";
import ComingSoon from "../ComingSoon/ComingSoon";

export const PressRelease = () => {
  const title = "Press Release";
  const pageTitle = "Press Release";

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};

export const InTheNews = () => {
  const title = "In the News";
  const pageTitle = "In the News";

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};

// -------------------------------------------------
// We skip the events page since we already have it
// -------------------------------------------------

// this will be the /media endpoint
export const WebinarsAndVideo = () => {
  const title = "Webinars and Videos";
  const pageTitle = "Webinars and Videos";

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};

// -------------------------------------------------
// We skip the blog page since we already have it
// -------------------------------------------------

export const Newsletters = () => {
  const title = "Newsletters";
  const pageTitle = "Newsletters";

  return (
    <AppPage title={title} pageTitle={pageTitle}>
      <ComingSoon></ComingSoon>
    </AppPage>
  );
};
