import Image from "next/image";
import Link from "next/link";

import Logo from "@/app/assets/images/logo.svg";

export function Header() {
  return (
    <Link href="/" className="mx-auto my-0 w-full max-w-[1180px] px-0 py-8">
      <Image src={Logo} alt="Logo" />
    </Link>
  );
}
