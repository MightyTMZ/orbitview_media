import { useState, useEffect, Fragment } from "react";
import "./AccountInfo.css";

const AccountInfo = () => {
  // const [firstName, setFirstName] = useState("-");
  // const [lastName, setLastName] = useState("-");
  // const [email, setEmail] = useState("-");
  const [profilePictureURL, setProfilePictureURL] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  );
  // const [memberShipTier, setMemberShipTier] = useState("-");

  useEffect(() => {
    const fetchUserData = async () => {
      const accessToken = localStorage.getItem("accessToken");

      const backendServerAddress = "https://orbitviewmedia.pythonanywhere.com";

      if (accessToken) {
        try {
          const response = await fetch(`${backendServerAddress}/auth/users/me/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${accessToken}`, // Corrected header key
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user data!");
          }

          const data = await response.json(); // Parse the JSON response
          console.log(data);

          // Update state with the fetched user data
          // setFirstName(data.first_name);
          // setLastName(data.last_name);
          // setEmail(data.email);
          setProfilePictureURL(data.profile_pic);
          // setMemberShipTier(data.membership_tier);
        } catch (error: any) {
          console.error("Error during fetching user data:", error);
        }
      } else {
        console.log("No access token found, user may not be logged in.");
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isAuthenticated");
  
    window.location.href = "/login";
  }

  return (
    <Fragment>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <i className="fas fa-bell"></i>
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDarkDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={profilePictureURL} alt="profile picture" id="pfp" />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDarkDropdownMenuLink"
        >
          <li>
            <a className="dropdown-item" href="/#/user/profile">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={handleLogOut}>
              Logout
            </a>
          </li>
        </ul>
      </li>
    </Fragment>
  );
};

export default AccountInfo;
