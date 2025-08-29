interface PokemonPageProps {
      params: Promise<{ slug: string[] }>;
    }

export default async function Page({params}: PokemonPageProps) {
  const { slug } = await params;
  return <p>Pokemon: {slug}</p>
}