import GridCards from "./GridCards";

function WhyAmuse() {
  return (
    <section id="why-amuse" className="mx-auto mb-28 max-w-[1200px] px-5 pt-4">
      <h2 className="mb-5 bg-secondary-heading-gradient bg-clip-text text-center text-4xl font-bold text-transparent lg:text-[52px]">
        Why Amuse?
      </h2>
      <p className="mx-auto mb-5 max-w-4xl text-center text-base font-medium text-primary-100 lg:mb-14 lg:text-xl">
        At Amuse App, we believe in the power of curiosity to drive learning and
        personal growth. Our approach is simple yet profound, designed around
        the science of how your brain absorbs and retains information.
        Here&apos;s why we do what we do:
      </p>
      <GridCards />
    </section>
  );
}

export default WhyAmuse;
