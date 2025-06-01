import { CompanionCard } from "~/components/companion-card";
import { CompanionsList } from "~/components/companions-list";
import { CTA } from "~/components/cta";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="1"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />

        <CompanionCard
          id="2"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="math"
          duration={30}
          color="#e5d0ff"
        />

        <CompanionCard
          id="3"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={120}
          color="#ffb3b3"
        />
      </section>

      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
}
