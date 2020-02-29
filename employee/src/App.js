import React from 'react';
import Employees from './components/employees/employees';

function App() {
  return (
    <div className="App">
      <div className="jumbotron text-center">
            <h1>Employee Data</h1>
        </div>
      <Employees />
    </div>
  );
}

export default App;
