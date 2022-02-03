import "./LastSection.css";
import SmallCard from "./SmallCard";

const LastSection = () => {
  return (
    <div className="last-section-body">
      <div className="left">
        <p className="upper-txt">Lorem Ipsum</p>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Laudantium, nisi nobis numquam rem repudiandae architecto
          adipisci obcaecati aliquam tenetur cumque nostrum quia
          officiis quos perspiciatis doloribus alias ipsam ducimus
          asperiores.
        </p>
        <button>Learn More</button>
      </div>
      <div className="right">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
};

export default LastSection;
