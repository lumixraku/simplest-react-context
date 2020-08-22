import React from "react";
import Food from "./foods";
// all state
const DEFAULT_STATE = { allFood: Food, searchTerm: "" };

// 看起来 createContext(DEFAULT_STATE); 是初始变量  Default Value
const TopContext = React.createContext(DEFAULT_STATE);



export default class Provider extends React.Component {
	state = DEFAULT_STATE;

	// ????????
	searchTermChanged = (searchTerm) => {
		this.setState({ searchTerm });
	};

	addNew = (newFood) => {
		const { allFood } = this.state;
		const afterFoods = [...allFood, newFood];
		this.setState({
			allFood: afterFoods,
		});
	};

	render() {
		// ThemeContext.Provider 中的 value 会通过 context 往下传递
		return (
			<TopContext.Provider
				value={{
					...this.state,
					searchTermChanged: this.searchTermChanged,
					addNew: this.addNew,
				}}
			>
				{this.props.children}
			</TopContext.Provider>
		);
	}
}

export { TopContext }