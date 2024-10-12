import Spinner from "../../../components/Spinner/Spinner";
import "./FormalEventPage.css";

import { useState, useEffect, Fragment } from "react";

interface WhitePaperArticle {
  id: number;
  title: string;
  slug: string;
  time: string;
  location: string;
  link: string;
  description: string;
}

const FormalWhitePages = () => {
  let pageName = "Events";

  document.title = `${pageName} - OrbitView`;

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setLoading(false); // Simulate loading period
    }, 1000);

    return () => clearTimeout(loadTimeout);
  }, []);

  // Add an events API
  const events: WhitePaperArticle[] = [];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed numquam
          libero porro consectetur beatae reiciendis alias quas vitae quae a!
        </Fragment>
      )}
    </>
  );
};

export default FormalWhitePages;
