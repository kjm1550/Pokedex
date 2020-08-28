import React from 'react';
import '../styles/ByType.scss';

class ByType extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: {},
			types: [],
		};
	}
	componentWillMount() {
		fetch('https://pokeapi.co/api/v2/type')
			.then((res) => res.json())
			.then((response) => {
				this.setState({
					type: response,
					types: response.results.slice(0, 18),
				});
			});
	}
	render() {
		return (
			<div className="searchTool">
				<p>Select a Type to Search For!</p>
				<div className="searchToolButton">
					{this.state.types.map((type, index) => (
						<button key={index} className={type.name} onClick={() => this.props.onClick(type.url)}>
							{type.name}
						</button>
					))}
				</div>
			</div>
		);
	}
}

export default ByType;
