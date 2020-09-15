import React from 'react';

import Card from './common/Card';

class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemonList: [],
			typePreFilterPokemonList: [],
			typeFilterPokemonList: [],
			letterPreFilterPokemonList: [],
			letterFilterPokemonList: [],
			finalPokemonList: [],
		};
	}

	componentDidMount() {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=251')
			.then((res) => res.json())
			.then((response) => {
				this.setState({
					pokemonList: response.results,
					finalPokemonList: response.results,
				});
			});
	}
	componentDidUpdate() {
		switch (this.props.LastUpdated) {
			case 'TypeSelectedURL':
				if (this.props.FirstLetter) {
					fetch(this.props.TypeSelectedURL)
						.then((res) => res.json())
						.then((response) => {
							this.setState({
								typePreFilterPokemonList: response.pokemon.map((pokemon) => pokemon.pokemon),
								typeFilterPokemonList: this.state.pokemonList.filter((o1) =>
									this.state.typePreFilterPokemonList.some((o2) => o1.name === o2.name)
								),
								finalPokemonList: this.state.letterPreFilterPokemonList.filter((o1) =>
									this.state.typePreFilterPokemonList.some((o2) => o1.name === o2.name)
								),
							});
						});
				} else {
					fetch(this.props.TypeSelectedURL)
						.then((res) => res.json())
						.then((response) => {
							this.setState({
								typePreFilterPokemonList: response.pokemon.map((pokemon) => pokemon.pokemon),
								typeFilterPokemonList: this.state.pokemonList.filter((o1) =>
									this.state.typePreFilterPokemonList.some((o2) => o1.name === o2.name)
								),
								finalPokemonList: this.state.pokemonList.filter((o1) =>
									this.state.typePreFilterPokemonList.some((o2) => o1.name === o2.name)
								),
							});
						});
				}
				break;
			case 'FirstLetter':
				if (this.props.TypeSelectedURL) {
					fetch('https://pokeapi.co/api/v2/pokemon?limit=1')
						.then((res) => res.json())
						.then((response) => {
							this.setState({
								finalPokemonList: this.state.typeFilterPokemonList.filter(
									(pokemon) => pokemon.name[0] === this.props.FirstLetter
								),
								letterFilterPokemonList: this.state.typeFilterPokemonList.filter(
									(pokemon) => pokemon.name[0] === this.props.FirstLetter
								),
								letterPreFilterPokemonList: this.state.pokemonList.filter(
									(pokemon) => pokemon.name[0] === this.props.FirstLetter
								),
							});
						});
				} else {
					fetch('https://pokeapi.co/api/v2/pokemon?limit=1')
						.then((res) => res.json())
						.then((response) => {
							this.setState({
								finalPokemonList: this.state.pokemonList.filter((pokemon) => pokemon.name[0] === this.props.FirstLetter),
								letterFilterPokemonList: this.state.pokemonList.filter(
									(pokemon) => pokemon.name[0] === this.props.FirstLetter
								),
								letterPreFilterPokemonList: this.state.pokemonList.filter(
									(pokemon) => pokemon.name[0] === this.props.FirstLetter
								),
							});
						});
				}
				break;
			default:
				fetch('https://pokeapi.co/api/v2/pokemon?limit=1')
					.then((res) => res.json())
					.then((response) => {
						this.setState((state) => {
							return { finalPokemonList: this.state.pokemonList };
						});
					});
				break;
		}
	}

	render() {
		return (
			<div className="resultCards">
				{this.state.finalPokemonList.map((pokemon, index) => (
					<Card key={pokemon.name} id={index + 1} pokemon={pokemon} />
				))}
			</div>
		);
	}
}

export default Results;
