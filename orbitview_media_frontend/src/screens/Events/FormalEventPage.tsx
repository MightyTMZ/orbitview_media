import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";
import "./FormalEventPage.css";

import { useState, useEffect, Fragment } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  link: string;
  description: string;
}

const FormalEventPage = () => {
  let pageName = "Events";

  document.title = `${pageName} - OrbitView`;

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setLoading(false); // Simulate loading period
    }, 1000);

    return () => clearTimeout(loadTimeout);
  }, []);

  // Add an events API
  const events: Event[] = [
    {
      id: 1,
      title:
        "The Future of Work in Blockchain: Career and Opportunities for Growth",
      date: "2024-09-28",
      time: "11:00 AM EST",
      location: "Virtual",
      link: "https://community.owujupe.com/#contacts-1",
      description: `In collaboration with Owujupe, visioning a world where everyone has equal access to financial resources. Featuring top speakers in the blockchain space: 
            Henry Onyebuchi (Founder & CTO Juggevault Finance), Athika Fatima (Technical Incubation Manage at Quantum Leap Labs), Jerry Qian (Co-Founder & CTO Bitcoin Bay Toronto), Halima Abubakar (Founder Luminair)
        `,
    },
    {
      id: 2,
      title: "Event 2",
      date: "2024-09-29",
      time: "3:00 PM - 5:00 PM EST",
      location: "Virtual",
      link: "https://orbitviewmedia.com",
      description: `​Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            perspiciatis veniam quibusdam itaque illo et ex reprehenderit est
            rerum! Rerum praesentium quasi dicta sapiente eos amet, dolores quia
            repudiandae magnam molestiae veritatis eum magni totam repellendus
            porro itaque necessitatibus impedit quos recusandae cumque optio?
            Dolorum, molestias dolore architecto neque minima blanditiis! Ut
            esse maiores dolorum adipisci eaque ex rerum qui illum itaque?
            Voluptas facilis tempora aperiam quisquam mollitia sapiente sed
            totam, soluta nostrum aspernatur dolorum eligendi libero doloremque
            quos iure quod quo dicta a dolore nemo! Corporis sint nemo delectus
            inventore similique temporibus eligendi eos enim a perferendis ea,
            esse quisquam quam fugiat animi deleniti odit ad ut, debitis vero
            quo quia alias! Ex sint eaque optio sequi eum tempora sapiente
            asperiores laboriosam dicta dolorum iure, quaerat, expedita minima
            debitis maiores possimus commodi necessitatibus quidem incidunt
            tenetur accusamus repellat cumque molestias dignissimos. Quisquam
            sequi, optio fuga vel eveniet incidunt? Optio aliquid, consequatur
            neque obcaecati accusamus tempore at aut laboriosam quisquam. Earum
            voluptates accusamus adipisci facilis distinctio expedita qui magni
            molestias, unde quidem numquam quibusdam voluptatem libero minus
            repellat nobis alias ut nulla labore voluptatum quae exercitationem
            nihil omnis? Non ipsam et magnam obcaecati cupiditate nostrum maxime
            quam laborum libero nihil, sequi inventore ea nemo aspernatur
            quisquam deleniti deserunt aut corporis hic, repudiandae quia ab
            eaque! Obcaecati sed saepe quasi pariatur eligendi quibusdam
            asperiores iste, neque quaerat ipsum perferendis, aliquam, nostrum
            ut dolores iusto nobis eaque dignissimos temporibus. Laboriosam
            iusto maxime culpa tempore repellendus quo alias veniam aspernatur
            beatae! Nostrum, reprehenderit.`,
    },
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <NavBar />
          <div className="banner">
            <h1 className="p-4 event-banner-heading">Events</h1>
          </div>
          <main className="container mt-5 poppins">
            <div className="row">
              {events.map((event) => (
                <div className="col-12 mb-4" key={event.id}>
                  <div className="card event-card" style={{ width: "100%" }}>
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
                        <strong>More details:</strong>{" "}
                        <a href={event.link}>Here</a>
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
                            rel="noopener noreferrer"
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
          <Footer />
        </Fragment>
      )}
    </>
  );
};

export default FormalEventPage;
