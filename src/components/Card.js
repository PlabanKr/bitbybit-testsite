import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img
          src={require("../img/profile.jpg")}
          alt="profile picture"
        />
      </div>
      <div className="card-title">Lorem Ipsum</div>
      <div className="card-info">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent mattis molestie dolor vitae aliquam. Proin aliquet
          urna vitae volutpat tempor.
        </div>
        <div className="social-media">
          <img
            className="social-media-logo"
            src={require("../img/fblogo.png")}
            alt="facebook logo"
          />
          <img
            className="social-media-logo"
            src={require("../img/instagram.png")}
            alt="instagram logo"
          />
          <img
            className="social-media-logo"
            src={require("../img/twitter.png")}
            alt="twitter logo"
          />
          <img
            className="social-media-logo"
            src={require("../img/linkedin.png")}
            alt="linkedin logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
