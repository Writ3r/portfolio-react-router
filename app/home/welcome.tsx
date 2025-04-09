import { Container } from "react-bootstrap";
import { NavBar } from "~/components/ui/NavBar";
import { Footer } from "~/components/ui/Footer";
import { PortfolioCarousel } from "~/components/ui/carousel/Carousel";
import { Portfolio } from "~/components/ui/portfolio/Portfolio";

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
            <hr />
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
}
