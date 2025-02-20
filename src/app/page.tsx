import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Page } from "./_components/hero";
import { Services } from "./_components/services";
import { TestimonialsComponent } from "./_components/Testimonials";

export default function Home() {
  return (
    <main>
      <Page />
      <About />
      <Services />
      <TestimonialsComponent />
      <Footer />
    </main>
  );
}