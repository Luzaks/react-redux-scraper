import React from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import InfoGame from './Games/InfoGame';
import BuyGame from './Games/BuyGame';


function App() {

  return (
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5 cardy">
            <div className="row no-gutters">
              <div className="col-4">
                <img className="card-img" src={require('../assets/img/pok.jpg')} alt="pokemon"/>
              </div>
              <div className="col-8">
                <div className="card-body">
                  <div className="card-title h3 text-center">
                    <InfoGame />
                  </div>
                  <BuyGame />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
