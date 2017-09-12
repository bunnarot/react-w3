import React from 'react';
import { Route, Link } from 'react-router-dom';
import Content from './content.component';
import input from './input.component';
class Output extends React.Component {


  render() {
    const location = this.props.location;
    const params = this.props.match.params;
    return (
      <div>

          {location.search !== "" ? <p><strong>Query String:</strong> {JSON.stringify(location.topicBox, null, 2)}</p>:null}
          <h1>show</h1><br/><br/>
          {JSON.stringify(location.x, null, 2)}
      </div>
    );
  }
}
export default Output ;
