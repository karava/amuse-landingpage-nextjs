import Image from "next/image";

import quoteImage from "../../public/images/quote-icon.svg";

function OurVision() {
  return (
    <section id="vision" className="mx-auto mb-28 max-w-[1200px] px-5 pt-4">
      <h2 className="mb-5 bg-secondary-heading-gradient bg-clip-text text-center text-4xl font-bold text-transparent lg:mb-10 lg:text-[52px]">
        Our Vision
      </h2>

      <blockquote className="relative mx-auto max-w-[996px] rounded-[20px] bg-vision-gradient px-4 py-20 text-center text-2xl font-medium leading-10 text-white lg:px-20 lg:py-[60px] lg:text-[28px]">
        <Image
          src={quoteImage}
          className="absolute right-4 top-4 object-cover"
          alt="Quote icon from amuse.so"
        />
        <p>
          To amuse and grow, one curious mind at a time. Dive into a world where
          learning feels like play, and every discovery is a step towards a
          richer, more enlightened you. Let&apos;s keep a little mystery,
          though; the best discoveries are the ones you make yourself.
        </p>
      </blockquote>
    </section>
  );
}

export default OurVision;
