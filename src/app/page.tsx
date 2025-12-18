import Link from "next/link";
import Image from "next/image";

function getLastNumberFromUrl(url: string) {
  const match = url.match(/(\d+)(?!.*\d)/);
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  return null; // where no number is found
}

async function getPokemon() {
  // For now, just pulling the first 4 generations of pokemon
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=494");
  const { results } = await res.json();
  const pokemon = results.map((onePokemon: object) => {
    const imageNumber = getLastNumberFromUrl(onePokemon.url);
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageNumber}.png`;
    return {
      ...onePokemon,
      image,
    };
  });
  return pokemon;
}

export default async function Home() {
  const pokemon = await getPokemon();
  return (
    <div className="max-w-6xl px-4 lg:px-8 mx-auto">
      <h1 className="text-4xl my-8 text-center text-gray-100">The Pokedex</h1>
      <ul className="flex flex-wrap gap-4 lg:gap-6 items-center justify-center ">
        {/* Need to add typescript to it */}
        {pokemon.map((onePokemon: object, index: number) => (
          <li key={index} className="p-4">
            <Link href={`/pokemon/${getLastNumberFromUrl(onePokemon.url)}`} className="flex flex-col items-center group">
              <div className="relative">
                <Image src={onePokemon.image} alt={onePokemon.name} className="w-36 h-36 z-10 relative" width={144} height={144} />
                <span className="w-28 h-28 rounded-full absolute bg-gray-500/25 top-4 left-4 z-0 transition-all group-hover:bg-gray-500/50 group-hover:scale-120"></span>
              </div>
              <span className="font-bold text-gray-200 text-lg capitalize mt-2">
                {index + 1}. {onePokemon.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
