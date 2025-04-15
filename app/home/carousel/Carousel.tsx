import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {
  Navbar,
  Carousel,
  CarouselItem,
  Button,
  CarouselCaption,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import video from "./Letter.webm";

interface VideoInput {
  videoUrl: string;
}

const VideoBackground = (props: VideoInput) => {
  return (
    <video
      className="video-intro"
      autoPlay
      loop
      muted
      style={{ maxWidth: "none" }}
    >
      <source src={props.videoUrl} type="video/mp4" />
    </video>
  );
};

interface CarouselCenterInnerInput {
  saying: string;
  code: string;
  explination: string;
}

const CarouselCenterInner = (props: CarouselCenterInnerInput) => {
  return (
    <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
      <div className="text-center white-text mx-5" style={{ color: "white" }}>
        <h1 className="mb-4">
          <strong>{props.saying}</strong>
        </h1>
        <p className="animated pulse infinite">
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
            style={{ color: "white" }}
          />
        </Button>
      </div>
    </div>
  );
};

export function PortfolioCarousel() {
  return (
    <section id="home" className="mb-5">
      <Carousel className="carouselPage">
        <CarouselItem>
          <div className="view">
            <VideoBackground videoUrl={video}></VideoBackground>
            <CarouselCenterInner
              saying="Keep It Simple, Silly"
              code="isEven = (x % 2 == 0)"
              explination="Simple code is trivial to extend and maintain"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="view">
            <VideoBackground videoUrl={video}></VideoBackground>
            <CarouselCenterInner
              saying="Try, Try Again"
              code="while ( ! ( succeed = try() ) );"
              explination="Keep trying until you have an answer"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="view">
            <VideoBackground videoUrl={video}></VideoBackground>
            <CarouselCenterInner
              saying="Treat Your Future Self"
              code="while ( away ) { Thread.sleep(1000); }"
              explination="Put the work in now to save time later"
            />
          </div>
        </CarouselItem>
      </Carousel>
    </section>
  );
}
