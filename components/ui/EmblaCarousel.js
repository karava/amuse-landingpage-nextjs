// "use client";

// import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";

// const EmblaCarousel = (props) => {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(options);

//   return (
//     <section className="embla lg:hidden">
//       <div className="embla__viewport overflow-hidden" ref={emblaRef}>
//         <div className="embla__container flex justify-center items-center gap-5">
//           {slides.map((slide, index) => (
//             <div className="embla__slide min-w-full" key={index}>
//               <div className="embla__slide__number">
//                 <Image
//                   src={slide}
//                   width={600}
//                   height={600}
//                   alt="slide from amuse.so"
//                   className=" "
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EmblaCarousel;

"use client";
import React from "react";

import useEmblaCarousel from "embla-carousel-react";

import "../../app/styles/embla.css";
import Image from "next/image";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, startIndex: 1 });

  return (
    <section className="embla mt-10 xl:hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <Image
                  src={slide}
                  width={600}
                  height={600}
                  alt="slide from amuse.so"
                  className=" "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
