import { ReactNode, useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./AppPage.css";
import "../../fonts/Poppins.css";

interface Props {
  title: string;
  about?: string;
  pageTitle: string;
  children: ReactNode;
}

const AppPage = (props: Props) => {
  document.title = `${props.pageTitle} - OrbitView`;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loadTimeout);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <NavBar />
          <div className="banner poppins">
            <h1 className="pt-4 page-banner-heading">{props.title}</h1>
            <div className="page-banner-heading cool-page-div">
              <div className="light-animation"></div>
            </div>
            {props.about ? (
              <p className="pt-3 page-banner-paragraph">{props.about}</p>
            ) : (
              <></>
            )}
          </div>
          <main>{props.children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AppPage;
