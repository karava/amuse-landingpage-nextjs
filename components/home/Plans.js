import Image from "next/image";

import freePlanImg from "../../public/images/three-cards-small.svg";
import paidPlanImg from "../../public/images/three-cards-golden.svg";

import icon from "../../public/images/check-filled.svg";

const PLANS = [
  {
    title: "Free Plan",
    img: freePlanImg,
    price: "$0",
    features: [
      "Daily access to three carefully selected cards",
      "Explore up to five diverse topics",
      "Engage with the community in discussions",
      "Track your learning progress",
    ],
  },
  {
    title: "Premium Plan",
    img: paidPlanImg,
    price: "$4.99/Month",
    features: [
      "Topic Archives: Access all completed topics anytime.",
      "Daily Review Trio:  3 Cards to Reinforce Past Lessons.",
      "Advanced AI: Enjoy more personalized, effective learning cards.",
      "Popular Topics: Gain exclusive access to trending topics.",
    ],
  },
];

function Plans() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 lg:mb-0 pt-4">
      <h2 className="mb-5 bg-secondary-heading-gradient bg-clip-text text-center text-4xl font-bold text-transparent lg:mb-10 lg:text-[52px]">
        Plans & Features
      </h2>

      <div className="relative z-10 grid grid-cols-1 items-center gap-5 lg:grid-cols-[45fr_55fr]">
        {PLANS.map((plan, index) => (
          <div
            key={index}
            className={`w-full rounded-3xl border border-white/10 bg-primary-900 p-8 pb-12 pr-11 ${index === 0 + 1 && "plan"}`}
          >
            <div className="mb-3 flex items-center gap-4">
              <Image
                src={plan.img}
                alt="Freeplan from amuse.so"
                className="h-16 w-16 object-cover"
              />
              <p className="text-[28px] font-semibold text-white">
                {plan.price}
              </p>
            </div>
            <p className="mb-4 border-b border-primary-700 pb-3 text-[32px] font-semibold text-white">
              {plan.title}
            </p>
            <ul className="flex flex-col gap-3">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-[14px] text-sm text-primary-100 lg:items-center lg:gap-3 lg:text-base"
                >
                  <Image src={icon} alt="Check icon from amuse.so website" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Plans;
