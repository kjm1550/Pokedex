import React from 'react';
import './styles/App.scss';

// components
import PokemonSearch from './PokemonSearch';
import Results from './Results';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			TypeSelectedURL: '',
		};
	}
	handleClick(i) {
		this.setState({
			TypeSelectedURL: i,
		});
	}

	render() {
		return (
			<div className="App">
				<h1>Pokedex</h1>
				<PokemonSearch onClick={(i) => this.handleClick(i)} />
				<Results TypeSelectedURL={this.state.TypeSelectedURL} />
			</div>
		);
	}
}

export default App;
