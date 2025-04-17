import { Container } from "react-bootstrap";
import { NavBar } from "~/components/ui/topnav/NavBar";
import { Footer } from "~/components/ui/footer/Footer";
import { PortfolioCarousel } from "~/home/carousel/Carousel";
import { MyPortfolio } from "~/home/my_portfolio/MyPortfolio";
import { AboutMe } from "~/home/aboutme/AboutMe";
import { Experience } from "~/home/experience/Experience";
import { Skills } from "~/home/skills/Skills";
import { Projects } from "~/home/projects/Projects";

export function Welcome({ message }: { message: string }) {
  return (
    <>
      {/* makes the footer stuck down to page bottom when coupled with main's flex grow */}
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <PortfolioCarousel />
        <main className="flex-grow-1">
          <Container>
            <MyPortfolio />
            <hr className="my-5"/>
            <AboutMe />
            <hr className="my-5"/>
            <Experience />
            <hr className="my-5"/>
            <Skills />
            <hr className="my-5"/>
            <Projects />
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
}
