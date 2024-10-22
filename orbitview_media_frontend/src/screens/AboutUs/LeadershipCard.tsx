import "bootstrap/dist/css/bootstrap.min.css";
import "./LeadershipCard.css"; // Optional for custom styling

interface LeadershipProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const LeadershipCard = (props: LeadershipProps) => {
  return (
    <div className="col-md-4 mb-4" onClick={() => window.location.href = props.bio}>
      <div className="leadership-card h-100 shadow">
        <img
          src={props.image}
          className="leadership-card-img-top"
          alt={`${props.name} - ${props.role}`}
        />
        <div className="leadership-card-body text-start">
          <h5 className="leadership-card-title">{props.name}</h5>
          <p className="leadership-card-text text-muted">{props.role}</p>
          <p className="leadership-card-text">{props.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;
