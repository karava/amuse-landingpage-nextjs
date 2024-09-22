import Image from "next/image";

import smallThreeCards from "../../public/images/three-cards-small.svg";

import mainBanner from "../../public/images/main-banner.png";
import Praticles from "./Praticles";
import EmblaCarousel from "../ui/EmblaCarousel";
import MobileApps from "../MobileApps";

function Hero() {
  return (
    <section className="relative mx-auto mb-32 max-w-[1200px] overflow-x-hidden text-center lg:px-0">
      <div className="hidden lg:block">
        <Praticles />
      </div>
      <div className="mx-auto lg:max-w-[800px]">
        <Image
          src={smallThreeCards}
          alt="Small three cards image on hero section on amuse.so"
          className="mx-auto inline-block object-cover object-center"
        />
        <h1 className="mx-auto mb-6 max-w-[650px] bg-mainheading-gradient bg-clip-text text-[40px] font-extrabold leading-[1.2] text-transparent lg:max-w-full lg:text-[68px]">
          Unlock Your Potential, One Spark at a Time
        </h1>
        <p className="mb-10 text-base font-medium text-primary-100">
          Amuse App - Where Curiosity Meets Growth
        </p>
      </div>

      <MobileApps />

      <Image
        src={mainBanner}
        alt="Main banner image from amuse.so"
        className="mx-auto mt-10 hidden max-w-[1164px] xl:inline-block"
      />
      <EmblaCarousel
        slides={[
          "/images/slide-1.png",
          "/images/slide-2.png",
          "/images/slide-3.png",
        ]}
        options={{}}
      />
    </section>
  );
}

export default Hero;
