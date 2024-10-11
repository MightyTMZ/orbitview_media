import { ReactNode, useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./AppPage.css";

interface Props {
  title: string;
  children: ReactNode;
}

const AppPage = ({ title, children }: Props) => {
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
            <h1 className="p-4 page-banner-heading">{title}</h1>
          </div>
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AppPage;
