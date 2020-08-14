import React from 'react';
import './styles/App.scss';

// components
import PokemonSearch from './PokemonSearch';
import Results from './Results';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>Pokedex</h1>
				{/* <PokemonSearch /> */}
				<Results />
			</div>
		);
	}
}

export default App;
