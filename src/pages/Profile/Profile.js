import { Link, useNavigate } from "react-router-dom";
import "./Profile.scss";
import { useEffect } from "react";

const Profile = ({ isLoggedIn, profileData }) => {
  const navigate = useNavigate();
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <main className="content__wrapper">
      <div className="profile__wrapper">
        <div className="profile__content">
          <h2 className="profile__title">Your profile</h2>

          <section className="profile__basic-details">
            <h3 className="profile__section-title">Basic info</h3>

            <div className="profile__info-grp">
              <div className="profile__info">
                <p className="profile__label">Name</p>
                <p className="profile__data">
                  {profileData &&
                    `${profileData.firstname} ${profileData.surname}`}
                </p>
              </div>
              <div className="profile__info">
                <p className="profile__label">Email</p>
                <p className="profile__data">
                  {profileData && profileData.email}
                </p>
              </div>
              <div className="profile__info">
                <p className="profile__label">Member since</p>
                <p className="profile__data">
                  {profileData &&
                    new Date(profileData.updated_at).toDateString()}
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="profile__actions">
          <Link className="profile__actions-deactivate">Delete account</Link>
          <Link
            to={`${SERVER_URL}/auth/logout`}
            className="profile__actions-logout"
          >
            Logout
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Profile;
