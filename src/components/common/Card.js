import React from 'react';
import '../styles/Card.scss';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokeUrl: this.props.pokemon.url,
			pokemonInfo: {},
		};
	}
	componentWillMount() {
		fetch(this.state.pokeUrl)
			.then((res) => res.json())
			.then((response) => {
				this.setState({
					pokemonInfo: response,
					pokemonSprites: response.sprites.front_default,
				});
			});
	}

	render() {
		return (
			<div className="pokemonCard">
				<h3 className="cardHeader">{this.state.pokemonInfo.id + '. ' + this.props.pokemon.name}</h3>
				<img src={this.state.pokemonSprites} alt={'Picture of ' + this.props.pokemon.name} />
				<p>
					Height: {this.state.pokemonInfo.height / 10}m
					<br />
					Weight: {this.state.pokemonInfo.weight / 10}kg
				</p>
			</div>
		);
	}
}

export default Card;
