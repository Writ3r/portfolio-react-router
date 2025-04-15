import { Carousel, CarouselItem, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { type PropsWithChildren, type ComponentProps } from "react";

import video from "./Letter.webm";

const VideoBackground = (props: { videoUrl: string }) => {
  return (
    <video className="video-intro" autoPlay loop muted>
      <source src={props.videoUrl} type="video/mp4" />
    </video>
  );
};

function PortfolioCarouselItem(props: {
  saying: string;
  code: string;
  explination: string;
}) {
  return (
    <div className="view">
      <VideoBackground videoUrl={video}></VideoBackground>
      <div className="mask d-flex justify-content-center align-items-center">
        <div className="text-center white-text mx-5">
          <h1 className="mb-4">
            <strong>{props.saying}</strong>
          </h1>
          <p className="animate__animated animate__pulse animate__infinite">
            <strong>{props.code}</strong>
          </p>
          <p className="mb-4 d-none d-md-block">
            <strong>{props.explination}</strong>
          </p>
          <Button
            variant="outline-light"
            href="https://github.com/Writ3r/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            SOURCE CODE
            <FontAwesomeIcon
              className="ml-2 animate__animated animate__tada animate__infinite"
              icon={faGraduationCap}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function PortfolioCarousel() {
  return (
    <section id="home" className="mb-5">
      <Carousel className="full-page-carousel">
        <CarouselItem>
          <PortfolioCarouselItem
            saying="Keep It Simple, Silly"
            code="isEven = (x % 2 == 0)"
            explination="Simple code is trivial to extend and maintain"
          />
        </CarouselItem>
        <CarouselItem>
          <PortfolioCarouselItem
            saying="Try, Try Again"
            code="while ( ! ( succeed = try() ) );"
            explination="Keep trying until you have an answer"
          />
        </CarouselItem>
        <CarouselItem>
          <PortfolioCarouselItem
            saying="Treat Your Future Self"
            code="while ( away ) { Thread.sleep(1000); }"
            explination="Put the work in now to save time later"
          />
        </CarouselItem>
      </Carousel>
    </section>
  );
}
