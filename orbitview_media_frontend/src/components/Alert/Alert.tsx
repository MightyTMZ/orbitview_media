import "./Alert.css";

const Alert = () => {
  const discordInviteLink = "https://discord.gg/kCKYjVFs5G";
  const LinkedInLink = "https://discord.gg/kCKYjVFs5G";
  return (
    <div className="alert alert-primary" role="alert">
      Join our <a href={discordInviteLink} id="discord-link-alert">Discord</a> or <a href={LinkedInLink} id="linkedin-link-alert">LinkedIn</a> community. The 
    </div>
  );
};

export default Alert;
