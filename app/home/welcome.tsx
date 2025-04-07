import { NavBar } from "~/components/ui/NavBar";
import { Footer } from "~/components/ui/Footer";
import { MainContent } from "~/components/ui/MainContent";

export function Welcome({ message }: { message: string }) {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <NavBar></NavBar>
        <main
          style={{ backgroundColor: "rgb(79, 95, 128)" }}
          className="flex items-center justify-center pt-16 pb-4 flex-grow-1"
        >
          <MainContent />
        </main>
        <Footer />
      </div>
    </>
  );
}
