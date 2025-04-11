import { Container } from "react-bootstrap";
import { NavBar } from "~/components/ui/topnav/NavBar";
import { Footer } from "~/components/ui/Footer";
import { PortfolioCarousel } from "~/components/ui/carousel/Carousel";
import { Portfolio } from "~/components/ui/portfolio/Portfolio";
import { AboutMe } from "~/components/ui/aboutme/AboutMe";
import { Experience } from "~/components/ui/experience/Experience";

export function Welcome({ message }: { message: string }) {
  return (
    <>
      {/* makes the footer stuck down to page bottom when coupled with main's flex grow */}
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <PortfolioCarousel />
        <main className="flex-grow-1">
          <Container>
            <Portfolio />
            <hr className="my-5"/>
            <AboutMe />
            <hr className="my-5"/>
            <Experience />
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
}
