import React from 'react';
import './main.scss';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            method: "get",
            hits: []
        };

    }
    submitHandler= async (e)=>{
        e.preventDefault();
        // url :   https://swapi.dev/api/people/
    
        if(this.state.method == 'get'){

          let raw = await fetch(this.state.url);
          let data = await raw.json();
          this.props.formData(data.count,data.results);
        }
    
    }
  
    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleInputUrl = e => {
        e.preventDefault();
        this.setState({ url: e.target.value });
    }
    handleIputMethod = (e) => {
        e.preventDefault();
        this.setState({ method: e.target.value });
        console.log(this.state)

    }
    handleReq = e => {
        e.preventDefault();
        let hits = this.state.hits;

        let methodUrl = <li>
            Method: {this.state.method}<br />
            Url: {this.state.url}
        </li>
        hits.push(methodUrl)
        this.setState({ hits })
       
        // console.log('this.state')
        // console.log('this.state.hits', this.state.hits)
    }


    render() {
        console.log('HHHH', this.state.url);
        let finalResult = this.state.hits;
        console.log('finalResult', finalResult);
        return (
            <section>
                <form onSubmit={this.submitHandler}>
                    <label>URL: <input
                        name="url"
                        placeholder="API"
                        value={this.state.url}
                        onChange={this.handleInputUrl}
                    /></label>
                    {/* <button onClick={this.handleReq}>GO</button> */}
                    <button >GO</button>

                    <div id="btns" onChange={this.handleIputMethod}>
                        <label>GET
                      <input type="radio" value="get" name="method" />
                        </label>

                        <label>POST
                <input type="radio" value="post" name="method" />
                        </label>
                        <label>UPDATE
                <input type="radio" value="put" name="method" />
                        </label>
                        <label>DELETE
                <input type="radio" value="delete" name="method" />
                        </label>

                    </div>
                </form>


                <span>

                    <h3>
                        {/* {this.props.formData(this.state.hits)} */}
                        {this.state.hits}
                    </h3>
                </span>

            </section>
        )
    }
}
