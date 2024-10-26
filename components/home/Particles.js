import Image from "next/image";
import particle from "../../public/images/particle.svg";

function Particles() {
  return (
    <div className="particles">
      <Image
        src={particle}
        alt="particle image from amuse.so"
        className="absolute z-0 object-cover object-center"
      />
      <Image
        src={particle}
        alt="particle image from amuse.so"
        className="absolute z-0 object-cover object-center"
      />
      <Image
        src={particle}
        alt="particle image from amuse.so"
        className="absolute z-0 object-cover object-center"
      />
      <Image
        src={particle}
        alt="particle image from amuse.so"
        className="absolute z-0 object-cover object-center"
      />
      <Image
        src={particle}
        alt="particle image from amuse.so"
        className="absolute z-0 object-cover object-center"
      />
    </div>
  );
}

export default Particles;
