import Image from "next/image";

import footerImg from "../public/images/footer-logo.svg";

function Footer() {
  return (
    <footer className="relative z-10">
      <p className="mb-10 text-center font-medium text-primary-100">
        © 2024 All right reserved. Amuse
      </p>

      <Image
        src={footerImg}
        alt="Footer logo from amuse.so"
        className="mx-auto mb-4 max-w-full object-cover"
      />
    </footer>
  );
}

export default Footer;
