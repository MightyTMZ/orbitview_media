import { useState, Fragment, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./EditProfile.css";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePictureURL, setProfilePictureURL] = useState("");
  const [updatedSuccess, setUpdatedSuccess] = useState(false);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchUserData = async () => {
      if (accessToken) {
        try {
          const response = await fetch("http://127.0.0.1:8000/auth/users/me/", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${accessToken}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user data!");
          }

          const data = await response.json();
          setFirstName(data.first_name || "");
          setLastName(data.last_name || "");
          setEmail(data.email || "");
          setProfilePictureURL(data.profile_picture_url || "");
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No access token found, user may not be logged in.");
      }
    };

    fetchUserData();
  }, [accessToken]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const backendServerAddress = "https://orbitviewmedia.pythonanywhere.com";


    try {
      const response = await fetch(`${backendServerAddress}/auth/users/me/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${accessToken}`,
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          profile_picture_url: profilePictureURL,
        }),
      });

      if (!response.ok) {

        throw new Error("Failed to update profile!");
      }

      // const data = await response.json();
      setUpdatedSuccess(false)
      setTimeout(handleSubmit, 500)
      setUpdatedSuccess(true);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Fragment>
        <NavBar/>
        <div className="edit-profile-container">
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Profile Picture URL:</label>
              <input
                type="url"
                value={profilePictureURL}
                onChange={(e) => setProfilePictureURL(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            {updatedSuccess ? (
                <p className="text-success">Profile successfully updated!</p>
            ) : <></>}
          </form>
        </div>
        <Footer/>
    </Fragment>
  );
};

export default EditProfile;
