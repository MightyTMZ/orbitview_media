import { ReactNode, useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./AppPage.css";

interface Props {
  title: string;
  about?: string;
  children: ReactNode;
}

const AppPage = (props: Props) => {
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
          <div className="banner">
            <h1 className="pt-4 page-banner-heading">{props.title}</h1>
            <div className="page-banner-heading" style={{ height: "5px", width: "40%", background: "#fbffff" }}></div>
            {props.about ? (
              <p className="pt-3 page-banner-paragraph">{props.about}</p>

            ) : (<></>)}
          </div>
          <main>{props.children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AppPage;
