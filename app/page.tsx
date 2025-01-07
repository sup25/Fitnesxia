import Banner from "./modules/home/banner";
import BestPlan from "./modules/home/bestPlan";
import HeroComponent from "./modules/home/Hero";
import Offers from "./modules/home/offers";
import Testimonial from "./modules/home/testimonial";
import FreeTrial from "./modules/home/trial";
import WhyFitnesxia from "./modules/home/whyFitnesxia";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <Banner />;
      <FreeTrial />
      <Offers />
      <WhyFitnesxia />
      <BestPlan />
      <Testimonial />
    </>
  );
}
