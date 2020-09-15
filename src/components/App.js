import React from 'react';
import './styles/App.scss';

// components
import PokemonSearch from './PokemonSearch';
import Results from './Results';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			LastUpdated: '',
			TypeSelectedURL: '',
			FirstLetter: '',
		};
	}
	setTypeSelectedURL(i) {
		this.setState({
			TypeSelectedURL: i,
			LastUpdated: 'TypeSelectedURL',
		});
	}
	setFirstLetter(i) {
		this.setState({
			FirstLetter: i,
			LastUpdated: 'FirstLetter',
		});
	}
	clearSearch() {
		this.setState({
			LastUpdated: '',
			TypeSelectedURL: '',
			FirstLetter: '',
		});
	}

	render() {
		return (
			<div className="App">
				<div className="AppContainer">
					<h1>Pokedex</h1>
					<PokemonSearch
						onClick={(i, searchBy) => {
							if (searchBy === 'typeURL') this.setTypeSelectedURL(i);
							if (searchBy === 'firstLetter') this.setFirstLetter(i);
							if (searchBy === 'none') this.clearSearch();
						}}
					/>
					<Results
						LastUpdated={this.state.LastUpdated}
						TypeSelectedURL={this.state.TypeSelectedURL}
						FirstLetter={this.state.FirstLetter}
					/>
				</div>
			</div>
		);
	}
}

export default App;
