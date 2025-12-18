import EvolutionCard from "./evolutionCard";

interface EvolutionSpecies {
  name: string;
  url: string;
}

export default async function EvolutionTrack({ evolutionURL }: { evolutionURL: string }) {
  // console.log(evolutionURL);
  const data = await fetch(evolutionURL);
  const evolutionInfo = await data.json();

  const evolutionChain = [];
  evolutionChain.push(evolutionInfo.chain.species);

  if (evolutionInfo.chain?.evolves_to.length != 0) {
    {
      for (let i = 0; i < evolutionInfo.chain.evolves_to.length; i++) {
        evolutionChain.push(evolutionInfo.chain.evolves_to[i].species);
        if (evolutionInfo.chain.evolves_to[i]?.evolves_to.length != 0) {
          for (let j = 0; j < evolutionInfo.chain.evolves_to[i].evolves_to.length; j++) {
            evolutionChain.push(evolutionInfo.chain.evolves_to[i].evolves_to[j].species);
          }
        }
      }
    }
  }

  return (
    <div>
      <h2 className="text-gray-100 text-3xl text-center pb-6">Evolutionary Chain</h2>
      <div className="flex justify-center gap-6">
        {evolutionChain.map((species: EvolutionSpecies) => (
          <EvolutionCard key={species.name} species={species} />
        ))}
      </div>
    </div>
  );
}
