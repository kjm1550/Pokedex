import Image from "next/image";

interface PokemonPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function Page({ params }: PokemonPageProps) {
  const { slug } = await params;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);
  const pokemonInfo = await data.json();

  return (
    <div className="max-w-10xl px-6 lg:px-12 mx-auto">
      <div className="">
        <h1 className="text-gray-100 capitalize text-6xl">{pokemonInfo.name}</h1>
      </div>
      <Image src={pokemonInfo.sprites.other["official-artwork"].front_default} alt="alt tag" height="600" width="600" />
    </div>
  );
}
