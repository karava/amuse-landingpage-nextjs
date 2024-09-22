import Image from "next/image";

import logo from "../../public/images/logo.svg";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="Logo image of amuse" className="" />
    </Link>
  );
}

export default Logo;
