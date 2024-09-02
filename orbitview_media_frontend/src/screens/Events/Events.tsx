import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../fonts/Poppins.css";
import "./Events.css";

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
  {
    id: 1,
    title: "AI Agents: SwarmZero.ai",
    date: "2024-09-07",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual",
    link: "https://www.eventbrite.ca/e/ai-agents-swarmzeroai-x-orbitview-media-tickets-999774702047",
    description: "Unlock an insider advantage to the future of AI where agents can help automate your tasks or make you earn passive income, while acting autonomously and free from human assistance. ",
  },
];

const EventPage: React.FC = () => {
  let pageName = "Events";

  document.title = `${pageName} - OrbitView Media`

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

  return (
    <>
      <NavBar></NavBar>
      <div className="container mt-5 poppins">
        <h1 className="text-center mb-4">Upcoming Events</h1>
        <p className="lead text-center">
          Stay updated with our latest events and workshops
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
                        Register Now
                      </a>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default EventPage;
