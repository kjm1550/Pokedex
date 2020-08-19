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
		});
	}

	/*handleClick(i) {
		this.setState({
			TypeSelected: i,
		});
	}*/

	render() {
		return (
			<div>
				<div>
					<button onClick={() => this.setType('type')}>Types</button>
				</div>
				<div>{this.state.SearchType === 'type' && <ByType onClick={(i) => this.props.onClick(i)} />}</div>
			</div>
		);
	}
}

export default PokemonSearch;
