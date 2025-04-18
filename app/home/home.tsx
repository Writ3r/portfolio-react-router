import { Container } from "react-bootstrap";
import { NavBar } from "~/components/ui/NavBar";
import { Footer } from "~/components/ui/Footer";
import { PortfolioCarousel } from "~/home/carousel/Carousel";
import { MyPortfolio } from "~/home/my_portfolio/MyPortfolio";
import { AboutMe } from "~/home/aboutme/AboutMe";
import { Experience } from "~/home/experience/Experience";
import { Skills } from "~/home/skills/Skills";
import { Projects } from "~/home/projects/Projects";

function SectionSeparator() {
  return <hr className="my-5" />;
}

function PageContent() {
  return (
    <>
      <PortfolioCarousel />
      <Container>
        <MyPortfolio />
        <SectionSeparator />
        <AboutMe />
        <SectionSeparator />
        <Experience />
        <SectionSeparator />
        <Skills />
        <SectionSeparator />
        <Projects />
      </Container>
    </>
  );
}

export function HomePage() {
  return (
    <>
      <NavBar />
      {/* makes the footer stuck down to page bottom when coupled with main's flex grow */}
      <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
          <PageContent />
        </main>
        <Footer />
      </div>
    </>
  );
}
