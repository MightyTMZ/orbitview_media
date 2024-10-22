import LeadershipCard from "./LeadershipCard";
import AppPage from "../../components/AppPage/AppPage";

const Leadership = () => {
  const title = "Our Thought Leaders";
  const pageTitle = "Leadership";

  const leadershipTeam = [
    {
      name: "Tom Zhang",
      role: "CEO",
      image: "https://via.placeholder.com/300x300",
      bio: "/leadership/tom-zhang",
    },
    {
      name: "Aurick Anwar",
      role: "President",
      image: "https://via.placeholder.com/300x300", // Replace with actual image
      bio: "",
      further_bio_url: "",
    },

    {
      name: "Jerone Arristan",
      role: "COO",
      image: "https://via.placeholder.com/300x300",
      bio: "",
    },
  ];

  return (
    <AppPage title={title} pageTitle={pageTitle}>  

      <div className="leadership-container container mt-5 poppins">
        <div className="row">
          {leadershipTeam.map((leader) => (
            <LeadershipCard
              key={leader.name}
              name={leader.name}
              role={leader.role}
              image={leader.image}
              bio={leader.bio}
            />
          ))}
        </div>
      </div>
    </AppPage>
  );
};

export default Leadership;
