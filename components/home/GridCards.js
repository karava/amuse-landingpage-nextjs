import Image from "next/image";

import img1 from "../../public/images/why-section/three-cards.svg";
import img2 from "../../public/images/why-section/topics.svg";
import img3 from "../../public/images/why-section/learning.svg";
import img4 from "../../public/images/why-section/light.png";

import Praticles from "./Praticles";

function GridCards() {
  return (
    <div className="flex flex-col gap-6 text-center text-white">
      <div className="flex flex-col items-stretch gap-5 lg:flex-row">
        <div className="card flex-1 rounded-3xl bg-card-gradient pt-[90px]">
          <Praticles />
          <div className="relative mx-auto max-w-[320px]">
            <Image
              src={img1}
              alt="Three cards image from amuse.so"
              className="relative z-10 mx-auto mb-[60px] w-56 object-cover"
            />
            <p className="mb-2 text-2xl font-medium lg:text-3xl">
              Three Cards a Day
            </p>
            <p className="mb-8 text-base text-[#c1c1c1]">
              Escape information overload! We curate just three cards daily for
              optimal retention, making every piece of knowledge count.
            </p>
          </div>
        </div>
        <div className="card flex-[2] rounded-3xl bg-card-gradient pt-[65px]">
          <Praticles />
          <div className="mx-auto max-w-[380px]">
            <Image
              src={img2}
              alt="Three cards image from amuse.so"
              className="relative z-10 mb-[60px] object-cover px-5 lg:px-0"
            />
            <p className="mb-2 text-2xl font-medium lg:text-3xl">
              Curated Topics
            </p>
            <p className="mb-8 text-base text-[#c1c1c1]">
              Focusing on five key topics enhances meaningful learning, aligning
              with cognitive science principles that emphasize less is more for
              effective learning.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col items-stretch gap-5 lg:flex-row">
        <div className="card flex flex-[2] flex-col-reverse justify-end rounded-3xl bg-card-gradient pt-36 lg:flex-col lg:pt-10">
          <Praticles />
          <div className="mx-auto max-w-[380px]">
            <p className="mb-2 text-2xl font-medium lg:text-3xl">
              Spaced Learning
            </p>
            <p className="mb-8 text-base text-[#c1c1c1] lg:mb-[74px]">
              Our spaced repetition model fast-tracks lasting learning by
              reinforcing memory over time. It aligns with how your brain
              prefers to learn, providing the space to digest and grow.
            </p>
          </div>
          <Image
            src={img3}
            alt="Three cards image from amuse.so"
            className="relative z-10 mx-auto mb-28 flex w-full object-cover px-7 lg:max-w-[609px] lg:px-0"
          />
        </div>

        <div className="card flex-1 rounded-3xl bg-card-gradient pt-[111px]">
          <Praticles />
          <div className="mx-auto max-w-[320px]">
            <Image
              src={img4}
              alt="Three cards image from amuse.so"
              className="relative z-10 mx-auto mb-9 w-52 object-cover"
            />
            <p className="mb-2 text-2xl font-medium lg:text-3xl">
              Spark Your Curiosity
            </p>
            <p className="mb-8 text-base text-[#c1c1c1]">
              Amuse is crafted to ignite daily interest, inviting you on a
              journey of discovery and growth through curiosity, not just
              sharing knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridCards;
