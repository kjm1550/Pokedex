import React from 'react';
import './styles/PokemonSearch.scss';

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
		});
	}

	render() {
		return (
			<div>
				<div className="searchProcesses">
					<button onClick={() => this.setType('type')}>Types</button>
				</div>
				<div>{this.state.SearchType === 'type' && <ByType onClick={(i) => this.props.onClick(i)} />}</div>
			</div>
		);
	}
}

export default PokemonSearch;
