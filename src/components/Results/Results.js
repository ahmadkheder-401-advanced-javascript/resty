import React from 'react';
import ReactJson from 'react-json-view'
import { If, Then, Else } from '../if/If';
import JSONPretty from 'react-json-pretty';
class Results extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        console.log('proops', this.props);
        return (
            <If condition={props}>
      <div>
        <section className='container'>
          <h3> Count: {props.Count}</h3>
          <h3> Headers:  </h3>
          <p> <JSONPretty data ={props.headers} /></p>
          <h3> Results: </h3>
          <ul>
            {props.results.map(result => {
              return(
                <li key={result.name}> <JSONPretty data= {result}/></li>
              );
            })}
          </ul>
           
        </section>
      </div>
    </If>
        //     <>
        //     <ReactJson src={this.props} theme="monokai" />
        //   </>
        )
    }
}

export default Results;