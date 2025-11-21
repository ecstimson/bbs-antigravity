import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { FeaturedWork } from "@/components/home/featured-work";
import { Process } from "@/components/home/process";
import { SocialProof } from "@/components/home/social-proof";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ResourcesCTA } from "@/components/home/resources-cta";
import { FinalCTA } from "@/components/home/cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        {/* <FeaturedWork /> */}
        <Process />
        <SocialProof />
        <WhyChooseUs />
        <ResourcesCTA />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
