import AppPage from "../../components/AppPage/AppPage";
import ComingSoon from "../ComingSoon/ComingSoon";

const OrbitViewPremium = () => {
  const name = "OrbitView Premium";
  const pageTitle = "Premium";
  const description = `OrbitView Premium offers an exclusive suite of features designed to elevate your networking experience. 
                        With advanced visibility, personalized matchmaking, and access to premium resources, members can 
                        seamlessly connect with like-minded individuals and industry experts.`;

  return (
    <AppPage title={name} pageTitle={pageTitle} about={description}>
      <ComingSoon />
    </AppPage>
  );
};

export default OrbitViewPremium;
