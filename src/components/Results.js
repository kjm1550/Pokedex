import React from 'react';
import './styles/Results.css';

import Card from './common/Card';

class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemonList: [],
		};
	}

	componentWillMount() {
		fetch('http://pokeapi.co/api/v2/pokemon?limit=151')
			.then((res) => res.json())
			.then((response) => {
				this.setState({
					pokemonList: response.results,
				});
			});
	}

	render() {
		return (
			<div className="resultCards">
				{this.state.pokemonList.map((pokemon, index) => (
					<Card key={pokemon.name} id={index + 1} pokemon={pokemon} />
				))}
			</div>
		);
	}
}

export default Results;
