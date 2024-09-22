import Cta from "@/components/home/Cta";
import Hero from "@/components/home/Hero";
import OurVision from "@/components/home/OurVision";
import Plans from "@/components/home/Plans";
import WhyAmuse from "@/components/home/WhyAmuse";

export const metadata = {
  title: "Home",
};

function page() {
  return (
    <div className="">
      <Hero />
      <WhyAmuse />
      <OurVision />
      <Plans />
      <Cta />
    </div>
  );
}

export default page;
