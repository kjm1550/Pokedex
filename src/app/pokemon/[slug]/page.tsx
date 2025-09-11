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
    <div>
      <h1 className="text-gray-100 capitalize">{pokemonInfo.name}</h1>
    </div>
  );
}
