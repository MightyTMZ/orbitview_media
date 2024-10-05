import React, { useState, useEffect, Fragment } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../fonts/Poppins.css";
import "./Events.css";
import Spinner from "../../components/Spinner/Spinner";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  link: string;
  description: string;
}

const events: Event[] = [
  /*{
    id: 1,
    title: "UniView: Orbit of Experiences",
    date: "2024-09-29",
    time: "3:00 PM - 5:00 PM EST",
    location: "Virtual",
    link: "https://lu.ma/vu67ulul",
    description: `​It's time to ask your most burning questions during the university application season to a group of the most talented university students and high school graduates in Canada. ​Nicholas Chen (Systems Design Engineering @ University of Waterloo), ​Dima Alzidan (Global Political Studies @ York University), ​Hanz Po (Computer Science @ University of
          Waterloo). ​More alumni may come, so stay tuned! ​Amidst the
          university application season in Canada, gain insider information on
          ​navigating high school pain points, ​how to stand out in admissions,
          the application journey, ​alumni journey ​and so much more! See you
          there!`,
  },
  {
    id: 2,
    title:
      "The Future of Work in Blockchain: Career and Opportunities for Growth",
    date: "2024-09-28",
    time: "11:00 AM EST",
    location: "Virtual",
    link: "https://community.owujupe.com/#contacts-1",
    description: `In collaboration with Owujupe, visioning a world where everyone has equal access to financial resources. Featuring top speakers in the blockchain space: 
    Henry Onyebuchi (Founder & CTO Juggevault Finance), Athika Fatima (Technical Incubation Manage at Quantum Leap Labs), Jerry Qian (Co-Founder & CTO Bitcoin Bay Toronto), Halima Abubakar (Founder Luminair)
`,
  }, */
];

const EventPage: React.FC = () => {
  let pageName = "Events";

  document.title = `${pageName} - OrbitView`;

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleShowModal = (event: Event) => {
    setSelectedEvent(event);
    const myModal = new (window as any).bootstrap.Modal(
      document.getElementById("eventModal")!
    );
    myModal.show();
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const [loading, setLoading] = useState(true);

  // const navigate = useNavigate();

  // const faqs = document.getElementById("faqs");

  useEffect(() => {
    // This timeout represents a loading period, e.g., waiting for assets to load.
    const loadTimeout = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (or when an API finishes)
    }, 1000); // Adjust the delay time as needed

    // Cleanup function to clear timeout if component unmounts
    return () => clearTimeout(loadTimeout);
  }, []);

  return (
    <>
      {loading ? <Spinner/> : <Fragment>
        <NavBar></NavBar>
        <main className="container mt-5 poppins">
          <h1 className="text-center mb-4">Upcoming Events</h1>
          <p className="lead text-center">
            Register for them before it's too late!
          </p>
          <div className="row">
            {events.map((event) => (
              <div className="col-md-4 mb-4" key={event.id}>
                <div className="card event-card">
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p className="card-text">
                      <strong>Time:</strong> {event.time}
                    </p>
                    <p className="card-text">
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p className="card-text">
                      <strong>More details:</strong> <a href={event.link}>Here</a>
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleShowModal(event)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Event Details Modal */}
          <div
            className="modal fade"
            id="eventModal"
            tabIndex={-1}
            aria-labelledby="eventModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                {selectedEvent && (
                  <>
                    <div className="modal-header">
                      <h5 className="modal-title" id="eventModalLabel">
                        {selectedEvent.title}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={handleCloseModal}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>
                        <strong>Date:</strong> {selectedEvent.date}
                      </p>
                      <p>
                        <strong>Time:</strong> {selectedEvent.time}
                      </p>
                      <p>
                        <strong>Location:</strong> {selectedEvent.location}
                      </p>
                      <p>{selectedEvent.description}</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={handleCloseModal}
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        <a
                          href={selectedEvent.link}
                          target="_blank"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          More Information
                        </a>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </Fragment>}
    </>
  );
};

export default EventPage;
