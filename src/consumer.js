import React from "react";
import { ThemeContext } from "./providers";



export default class Consumer extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<ThemeContext.Consumer>
				{
          // some thing like reducer ???
					// ({ allFood, searchTerm, searchTermChanged }) => {
          // props 来自 ThemeContext.Provider 的 value
            (props) => {
            const { allFood, searchTerm, searchTermChanged, addNew} = props;
						const food = searchTerm
							? allFood.filter((food) => food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
							: allFood;

						return React.Children.map(children, (child) =>
							React.cloneElement(child, {
								food,
								searchTerm,
                searchTermChanged,
                addNew
							})
						);
					}
				}
			</ThemeContext.Consumer>
		);
	}
}
