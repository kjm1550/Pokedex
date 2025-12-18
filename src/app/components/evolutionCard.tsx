import Link from "next/link";
import Image from "next/image";
import { getPokemonIdFromUrl } from "@/utils";

interface EvolutionSpecies {
  name: string;
  url: string;
}

export default async function EvolutionCard({ species }: { species: EvolutionSpecies }) {
  console.log(species);
  return (
    <Link href={`/pokemon/${getPokemonIdFromUrl(species.url)}`}>
      <div className="bg-slate-700 p-4 rounded-lg flex flex-col items-center gap-2">
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(species.url)}.png`} alt={species.name} height="150" width="150" />
        <h3 className="text-gray-200 capitalize text-md">{species.name}</h3>
      </div>
    </Link>
  );
}
