import React from 'react';
// import './App.css';
import Main from './components/main/main';
import Header from './components/header/header'
import Footer from './components/footer/footer'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        url: "",
        method: "",
        hits:[]
    };
    
}
render(){

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Header />
        <Main/>
          {/* {
            <div>
              <h1>hi</h1>
              <p>{Main.state}</p>
            </div>
          } */}
        {/* </Main> */}
        {/* <Main/>
        {Main.state} */}
        {/* <Main/> */}
        <Footer />


      {/* </header> */}
    </div>
  );
}
}

export default App;
