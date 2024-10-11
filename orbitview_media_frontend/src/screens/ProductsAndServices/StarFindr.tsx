import AppPage from "../../components/AppPage/AppPage";
import ComingSoon from "../ComingSoon/ComingSoon";

const StarFindr = () => {
  const name = "StarFindr";
  const pageTitle = "StarFindr";
  const description = `An AI-driven engine for autonomous networking, 
                    connecting the right people with precision, in some
                     cases, in real-time, down to the second. It will be faster than ever.`;

  return (
    <AppPage title={name} pageTitle={pageTitle} about={description}>
      <ComingSoon />
    </AppPage>
  );
};

export default StarFindr;
