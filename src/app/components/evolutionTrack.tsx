import Link from "next/link";
import EvolutionCard from "./evolutionCard";

export default async function EvolutionTrack({ evolutionURL }: { evolutionURL: string }) {
  const data = await fetch(evolutionURL);
  const evolutionInfo = await data.json();

  return (
    <div>
      <h2 className="text-gray-100 text-3xl text-center pb-6">Evolutionary Chain</h2>
      <div className="flex justify-center gap-6">
        <EvolutionCard species={evolutionInfo.chain.species} />
        <EvolutionCard species={evolutionInfo.chain.species} />
        <EvolutionCard species={evolutionInfo.chain.species} />
      </div>
    </div>
  );
}
