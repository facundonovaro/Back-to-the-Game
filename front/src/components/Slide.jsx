import React from "react";
import { Carousel } from "react-bootstrap";

const Slide = () => {
    return (
      <div className="carousel" >
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="https://imagizer.imageshack.com/img923/7968/F8ZLFe.jpg" />
                </Carousel.Item>

                  <Carousel.Item>
                    <img className="d-block w-100" src="https://imagizer.imageshack.com/img922/6716/9r4wjl.jpg" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img className="d-block w-100" src="https://imagizer.imageshack.com/img924/7099/gde4Il.jpg" />
                  </Carousel.Item>

                  <Carousel.Item>
                  <img className="d-block w-100" src="https://imagizer.imageshack.com/img922/9747/iWBZDE.jpg" />
                </Carousel.Item>
             </Carousel>
      </div>
    )
}

export default Slide;