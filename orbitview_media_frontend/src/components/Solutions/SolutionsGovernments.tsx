import AppPage from "../../components/AppPage/AppPage";
import ComingSoon from "../../screens/ComingSoon/ComingSoon";

const SolutionsGovernments = () => {
  const name = "For Governments";
  const pageTitle = "OrbitView for Governments";
  {/*const description = `An AI-driven engine for autonomous networking, 
                    connecting the right people with precision, in some
                     cases, in real-time, down to the second. It will be faster than ever.`;*/}

  return (
    <AppPage title={name} pageTitle={pageTitle}>
      <ComingSoon />
    </AppPage>
  );
};

export default SolutionsGovernments;
