import Image from "next/image";
import { hectogramsToPounds, metersToFeetAndInches, generationToNumber } from "@/utils";

import EvolutionTrack from "@/app/components/evolutionTrack";

interface PokemonPageProps {
  params: {
    slug: string[];
  };
}

export default async function Page({ params }: PokemonPageProps) {
  const { slug } = params;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);
  const pokemonInfo = await data.json();

  const dataSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${slug}`);
  const pokemonSpecies = await dataSpecies.json();

  console.log(pokemonInfo);

  const heightInMeters = pokemonInfo.height / 10;
  const { feet, inches } = metersToFeetAndInches(heightInMeters);
  const weightInKilograms = pokemonInfo.weight / 10;
  const weightInPounds = hectogramsToPounds(pokemonInfo.weight);
  const generation = generationToNumber(pokemonSpecies.generation.name);

  return (
    <div className="max-w-7xl px-6 lg:px-12 mx-auto">
      <div className="flex flex-col lg:flex-row items-center  gap-12">
        <div className="grow">
          <h1 className="text-gray-100 capitalize text-6xl pb-6">{pokemonInfo.name}</h1>
          {/* <p className="text-gray-200 text-xl">Stats {pokemonInfo.stats[0].base_stat}</p>
          <p className="text-gray-200 text-xl">type {pokemonInfo.types[0].type.name}</p> */}
          <table className="table-fixed w-full border-collapse">
            <tbody className="text-gray-200 text-xl">
              <tr className="border-b border-slate-400">
                <td>National Dex Number</td>
                <td>{pokemonSpecies.pokedex_numbers[0].entry_number}</td>
              </tr>
              <tr className="border-b border-slate-400">
                <td>Generation</td>
                <td>{generation}</td>
              </tr>
              <tr className="border-b border-slate-400">
                <td>Height</td>
                <td>
                  {feet}&apos;{inches}&quot; ({heightInMeters} m)
                </td>
              </tr>
              <tr className="border-b border-slate-400">
                <td>Weight</td>
                <td>
                  {weightInPounds} lbs ({weightInKilograms} kg)
                </td>
              </tr>
              <tr className="border-b border-slate-400">
                <td>Habitat</td>
                <td className="capitalize">{pokemonSpecies.habitat.name}</td>
              </tr>
              <tr className="border-b border-slate-400">
                <td>Capture Rate</td>
                <td>{pokemonSpecies.capture_rate}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="shrink-0">
          <Image src={pokemonInfo.sprites.other["official-artwork"].front_default} alt="alt tag" height="600" width="600" />
          {/* <Image src={pokemonInfo.sprites.other["official-artwork"].front_shiny} alt="alt tag" height="600" width="600" /> */}
        </div>
      </div>
      <EvolutionTrack evolutionURL={`${pokemonSpecies.evolution_chain.url}`} />
    </div>
  );
}
