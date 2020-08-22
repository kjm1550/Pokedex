import React from 'react';
import './styles/Results.scss';

import Card from './common/Card';

class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemonList: [],
			filterPokemonList: [],
			finalPokemonList: [],
		};
	}

	componentWillMount() {
		fetch('http://pokeapi.co/api/v2/pokemon?limit=251')
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
				fetch(this.props.TypeSelectedURL)
					.then((res) => res.json())
					.then((response) => {
						this.setState({
							filterPokemonList: response.pokemon.map((pokemon) => pokemon.pokemon),
							finalPokemonList: this.state.pokemonList.filter((o1) =>
								this.state.filterPokemonList.some((o2) => o1.name === o2.name)
							),
						});
					});
				break;
			case 'FirstLetter':
				fetch('http://pokeapi.co/api/v2/pokemon?limit=1')
					.then((res) => res.json())
					.then((response) => {
						this.setState({
							finalPokemonList: this.state.pokemonList.filter((pokemon) => pokemon.name[0] === this.props.FirstLetter),
						});
					});
				break;
			default:
				fetch('http://pokeapi.co/api/v2/pokemon?limit=1')
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
