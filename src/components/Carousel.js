import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const CarouselElement = () => {
  return (
    <div className="outer">
      <h2>Carousel</h2>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        <div
          className="slides"
          style={{ backgroundColor: "#ED8611" }}
        >
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium nemo adipisci recusandae voluptatum, earum
            sapiente quaerat sequi vero, inventore officiis vel
            necessitatibus, aperiam eligendi sit deserunt totam.
            Atque, architecto soluta!
          </p>
        </div>
        <div
          className="slides"
          style={{ backgroundColor: "#F76565" }}
        >
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium nemo adipisci recusandae voluptatum, earum
            sapiente quaerat sequi vero, inventore officiis vel
            necessitatibus, aperiam eligendi sit deserunt totam.
            Atque, architecto soluta!
          </p>
        </div>
        <div
          className="slides"
          style={{ backgroundColor: "#60F2F2" }}
        >
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium nemo adipisci recusandae voluptatum, earum
            sapiente quaerat sequi vero, inventore officiis vel
            necessitatibus, aperiam eligendi sit deserunt totam.
            Atque, architecto soluta!
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselElement;
