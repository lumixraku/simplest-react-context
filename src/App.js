
import React from 'react';
// import {connect} from 'react-redux';
// import actions from './actions';
import './App.css';

// 虽然在 index 中看起来 App 组件没有任何props
// Consumer 中 通过 React.cloneElement 给 App 组件增加了 props
function App({food, searchTerm, searchTermChanged, addNew}) {
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