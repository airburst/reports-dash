import React, { Component } from 'react';
// import MainRangeSelection from './Components/MainRangeSelection';
// import Cards from './Components/Cards';
// import MainContainer from './Components/MainContainer';
// import SubContainer from './Components/SubContainer';
import Widget from './Containers/Widget';
import BarChart from './Components/BarChart';
import LineChart from './Components/Charts/LineChart';
import { barData } from './Data/barData.json';
import '../node_modules/bootstrap/dist/css/bootstrap-flex.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>Dashboard</h2>
        </div>

        <div className="board">
          <div className="row dash-row">
            <Widget>
              <BarChart
                data={barData}
                color="cornflowerblue"
                />
            </Widget>
            <Widget title="Widget 2" colspan={2}>
              <LineChart />
            </Widget>
          </div>
          <div className="row dash-row">
            <Widget title="Widget 3" />
            <Widget title="Widget 4" />
            <Widget title="Widget 5" />
          </div>
          <div className="row dash-row">
            <Widget title="Widget 6" colspan={3} />
          </div>
        </div>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <div className="Header">
  //         <h2>Dashboard</h2>
  //       </div>
  //       <div className="container">
  //         <MainRangeSelection />
  //         <Cards />
  //         <MainContainer />
  //         <SubContainer />
  //       </div>
  //     </div>
  //   );
  // }
}

export default App;
