import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <div className="flex items-center justify-center m-8">
      <Link href="/">
        <Image src="/pokedex-logo.png" alt="Pokedex Logo" className="w-100 h-20 mr-3" width={800} height={80} />
      </Link>
    </div>
  );
}
