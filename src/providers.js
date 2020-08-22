import React from "react";
import Food from "./foods";
// all state
const DEFAULT_STATE = { allFood: Food, searchTerm: "" };

// 看起来 createContext(DEFAULT_STATE); 是初始变量  Default Value
export const ThemeContext = React.createContext(DEFAULT_STATE);

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
      allFood: afterFoods
    })

  }

	render() {
		return (
			<ThemeContext.Provider
				value={{
					...this.state,
          searchTermChanged: this.searchTermChanged,
          addNew: this.addNew
				}}
			>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}
