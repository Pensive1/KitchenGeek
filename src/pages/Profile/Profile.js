import { Link } from "react-router-dom";
import "./Profile.scss";

const Profile = () => {
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
                <p className="profile__data">John Doe</p>
              </div>
              <div className="profile__info">
                <p className="profile__label">Email</p>
                <p className="profile__data">jdoe@mail.com</p>
              </div>
            </div>
          </section>
        </div>

        <section className="profile__actions">
          <Link className="profile__actions-deactivate">Delete account</Link>
          <Link className="profile__actions-logout">Logout</Link>
        </section>
      </div>
    </main>
  );
};

export default Profile;
