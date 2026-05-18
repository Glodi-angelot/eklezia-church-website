import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import LatestSermons from "../components/home/LatestSermons";
import FoundationPreview from "../components/home/FoundationPreview";
import LatestAnnouncements from "../components/home/LatestAnnouncements";
import JoinCommunity from "../components/home/JoinCommunity";
import FinalCTA from "../components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <LatestSermons />
      <FoundationPreview />
      <LatestAnnouncements />
      <JoinCommunity />
      <FinalCTA />
    </>
  );
}