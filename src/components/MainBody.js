import Card from "./Card";
import CarouselElement from "./Carousel";
import LastSection from "./LastSection";
import "./MainBody.css";

const MainBody = () => {
  return (
    <div className="main-body" id="main-body">
      <section className="first">
        <div className="left">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent mattis molestie dolor vitae aliquam. Proin
            aliquet urna vitae volutpat tempor. Integer nisl risus,
            interdum efficitur rutrum in, iaculis id turpis. Nulla
            blandit dolor enim, accumsan vulputate justo aliquam a.
            Vivamus pretium porta hendrerit.
          </p>
          <button>Learn More</button>
        </div>
        <div className="right">
          <img
            src={require("../img/Octocat.png")}
            alt="Github octocat"
          />
        </div>
      </section>
      <section className="second">
        <div className="spacer svg-img">
          <div className="text">
            <h1>Lorem Ipsum</h1>
            <p>
              Ut malesuada hendrerit imperdiet. Praesent pulvinar
              auctor mi vitae bibendum. Morbi eget nulla velit. Class
              aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Suspendisse sed rutrum
              nisl, a pharetra velit. Curabitur ut sapien eu tellus
              posuere aliquet. Aenean eu laoreet augue. Mauris et
              tellus sit amet urna malesuada facilisis id eget sem.
              Integer eget iaculis libero. Ut sed maximus lacus.
              Integer consectetur libero volutpat velit tincidunt
              ornare. Vivamus bibendum nulla a nunc elementum aliquam.
            </p>
            <br />
            <p>
              Nulla vel leo nec ex volutpat faucibus. Ut rhoncus,
              magna eu elementum pharetra, tellus dolor vulputate dui,
              at egestas turpis sem vitae ligula. Cras pulvinar lectus
              turpis, quis auctor nunc varius at. Proin scelerisque mi
              sit amet metus varius commodo. Aliquam finibus et felis
              sed venenatis. Donec accumsan magna at placerat
              fringilla. Etiam erat tortor, maximus vitae dui eu,
              rhoncus sollicitudin est. Pellentesque accumsan sit amet
              ex vitae scelerisque. Donec convallis hendrerit auctor.
              Aenean volutpat mauris dui, laoreet egestas tellus
              pretium sed. Aenean suscipit bibendum arcu sed
              ullamcorper. Ut molestie non nunc nec tincidunt. Donec
              feugiat purus in felis placerat placerat.
            </p>
          </div>
        </div>
      </section>
      <section className="third">
        <Card />
        <Card />
        <Card />
      </section>
      <section className="fourth">
        <CarouselElement />
      </section>
      <section className="fifth">
        <LastSection />
      </section>
    </div>
  );
};

export default MainBody;
