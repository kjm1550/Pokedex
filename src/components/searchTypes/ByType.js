import React from 'react';

class ByType extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: {},
			types: [],
		};
	}
	componentWillMount() {
		fetch('http://pokeapi.co/api/v2/type')
			.then((res) => res.json())
			.then((response) => {
				this.setState({
					type: response,
					types: response.results,
				});
			});
	}
	render() {
		return (
			<div>
				<p>Select a Type to Search For!</p>
				<div>
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
