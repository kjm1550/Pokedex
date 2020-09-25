import React from 'react';

// other components
import ByType from './searchTypes/ByType';
import FirstLetter from './searchTypes/FirstLetter';

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
					<h2>Filters: </h2>
					<button onClick={() => this.setType('type')}>Types</button>
					<button onClick={() => this.setType('letter')}>First Letter</button>
					<button
						onClick={() => {
							this.setType('');
							return this.props.onClick(8, 'none');
						}}
					>
						Clear Search
					</button>
				</div>
				<div>
					{this.state.SearchType === 'type' && <ByType onClick={(i, type) => this.props.onClick(i, 'typeURL', type)} />}
					{this.state.SearchType === 'letter' && <FirstLetter onClick={(i) => this.props.onClick(i, 'firstLetter')} />}
				</div>
				{(this.props.Type || this.props.FirstLetter) && (
					<div className="searchTool">
						<p>Applied Filters:</p>
						<div className="appliedFilters">
							{this.props.Type && <p>{this.props.Type}</p>}
							{this.props.FirstLetter && <p>{this.props.FirstLetter}</p>}
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default PokemonSearch;
