import React from 'react';
// import './results.scss';


export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            method: "",
            hits: []
        };
 
    }
    /*  
    Expects the count, headers, results to be sent in as props
    Renders the count
    Renders the Result Headers as “pretty” JSON
    Renders the Result Body as “pretty” JSON
    */
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
       
        let methodUrl =<li>
            Method: {this.state.method}<br/>sd
            Url: {this.state.url}
        </li>

        hits.push(methodUrl)
       

        this.setState({ hits })
        console.log('this.state')
        console.log('this.state.hits', this.state.hits)
    }

    
    render() {
        console.log('HHHH', this.state.url);
        let finalResult = this.state.hits;
        console.log('finalResult', finalResult);
        return (
            <section>
                <form>
                  <label>URL: <input
                        name="url"
                        placeholder="API"
                        value={this.state.url}
                        onChange={this.handleInputUrl}
                    /></label> 
                    <button onClick={this.handleReq}>GO</button>

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
                        {this.state.hits}
                    </h3>
                </span>

            </section>
        )
    }
}
