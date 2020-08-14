import React from 'react';

// other components
import ByType from './searchTypes/ByType';

class PokemonSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			SearchType: '',
		};
	}

	setType(searchBy) {
		this.setState({
			SearchType: searchBy,
			test: 'yep',
		});
	}

	render() {
		return (
			<div>
				<div>
					<button onClick={() => this.setType('type')}>Types</button>
				</div>
				<div>{this.state.SearchType === 'type' && <ByType />}</div>
			</div>
		);
	}
}

export default PokemonSearch;
