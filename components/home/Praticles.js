import Image from "next/image";
import praticle from "../../public/images/particle.svg";

function Praticles() {
  return (
    <div className="particles">
      <Image
        src={praticle}
        alt="praticle image from amuse.so"
        className="absolute z-0 object-cover object-center"
      />
      <Image
        src={praticle}
        alt="praticle image from amuse.so"
        className="absolute z-0 object-cover object-center"
      />
      <Image
        src={praticle}
        alt="praticle image from amuse.so"
        className="absolute z-0 object-cover object-center"
      />
      <Image
        src={praticle}
        alt="praticle image from amuse.so"
        className="absolute z-0 object-cover object-center"
      />
      <Image
        src={praticle}
        alt="praticle image from amuse.so"
        className="absolute z-0 object-cover object-center"
      />
    </div>
  );
}

export default Praticles;
