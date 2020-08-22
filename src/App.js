import React, { useContext } from 'react';
import { TopContext } from './providers';
// import {connect} from 'react-redux';
// import actions from './actions';
import './App.css';


function App() {

  const {allFood, searchTerm, searchTermChanged, addNew} = useContext(TopContext);
  const food = searchTerm
  ? allFood.filter((food) => food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
  : allFood;

  return (
    <div>
      <div className="search">
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={searchTerm}
          onChange={e => searchTermChanged(e.target.value)}
        />
      </div>
      <div className="add-new"
        onClick={e => addNew(	{
          "name": searchTerm,
          "origin": "Nigeria",
          "continent": "Africa"
        })}>
        Add New
      </div>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Origin</th>
          <th>Continent</th>
        </tr>
        </thead>
        <tbody>
        {food.map(theFood => (
          <tr key={theFood.name}>
            <td>{theFood.name}</td>
            <td>{theFood.origin}</td>
            <td>{theFood.continent}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

// export default connect(store => store, actions)(App);
export default App;