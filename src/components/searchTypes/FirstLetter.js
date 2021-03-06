import React from 'react';

class ByType extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			letters: [
				'a',
				'b',
				'c',
				'd',
				'e',
				'f',
				'g',
				'h',
				'i',
				'j',
				'k',
				'l',
				'm',
				'n',
				'o',
				'p',
				'q',
				'r',
				's',
				't',
				'u',
				'v',
				'w',
				'x',
				'y',
				'z',
			],
			activeIndex: '',
		};
	}
	handleClick(index) {
		this.setState({
			activeIndex: index,
		});
	}

	render() {
		return (
			<div className="searchTool">
				<p>Select the First Letter to Search For!</p>
				<div className="searchToolButton">
					{this.state.letters.map((letter, index) => (
						<button
							key={index}
							onClick={() => {
								this.props.onClick(letter);
								this.handleClick(index);
							}}
							className={index === this.state.activeIndex ? 'active' : ''}
						>
							{letter}
						</button>
					))}
				</div>
			</div>
		);
	}
}

export default ByType;
