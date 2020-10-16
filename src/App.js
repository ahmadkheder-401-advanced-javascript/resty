import React from 'react';
import Main from './components/main/main';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Results from './components/Results/Results'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      result:[],
      headers:[]
      };
    }
    
    urlHandler = (count,result) =>{
      this.setState({count,result});
    }
render(){

  return (
    <div className="App">
        <Header />
        <Main formData ={this.urlHandler}/>
        {console.log('urlData', this.state.url)}
        <Results count={this.state.count} headers={this.state.headers} results={this.state.result} />
        <Footer />
    </div>
  );
}
}

export default App;
