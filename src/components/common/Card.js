import React from 'react';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokeUrl: this.props.pokemon.url,
			pokemonInfo: {},
			loaded: false,
		};
	}
	componentWillMount() {
		fetch(this.state.pokeUrl)
			.then((res) => res.json())
			.then((response) => {
				this.setState({
					pokemonInfo: response,
					pokemonSprites: response.sprites.front_default,

					loaded: true,
				});
			});
	}

	render() {
		return (
			<div>
				{this.state.loaded ? (
					<divc className={'pokemonCard ' + this.state.pokemonInfo.types[0].type.name}>
						<h3 className="cardHeader">{this.state.pokemonInfo.id + '. ' + this.props.pokemon.name}</h3>
						<img src={this.state.pokemonSprites} alt={'Picture of ' + this.props.pokemon.name} />
						<p>
							Height: {this.state.pokemonInfo.height / 10}m
							<br />
							Weight: {this.state.pokemonInfo.weight / 10}kg
						</p>
					</divc>
				) : (
					<div className="pokemonCard ">
						<p>Loading...</p>
					</div>
				)}
			</div>
		);
	}
}

export default Card;
