import Banner from "./modules/home/banner";
import HeroComponent from "./modules/home/Hero";
import FreeTrial from "./modules/home/trial";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <Banner />;
      <FreeTrial />
    </>
  );
}
