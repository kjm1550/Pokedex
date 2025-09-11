import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-500 flex flex-col items-center justify-center px-6 py-4 gap-2">
      <p>
        Crated by{" "}
        <Link href="https://kylemonk.dev" className="underline">
          Kyle Monk
        </Link>{" "}
        with help from{" "}
        <Link href="https://pokeapi.co/" className="underline">
          PokeAPI
        </Link>
        .
      </p>
      <p>
        Check out my GitHub. <Link href="test">test</Link>.
      </p>
    </footer>
  );
}
