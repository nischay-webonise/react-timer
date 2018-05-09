import React from 'react';
import FormattedDate from './FormattedDate';
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount(){
    console.log("In Parent component Did Mount")
    setInterval(() => this.setState({date: new Date()}), 1000)
  }
  // using setInterval(function, interval)
  // using () => this.xyz so that 'this' will point to class object not window object

  render(){
    return (
      <FormattedDate unformatted_date={this.state.date} />
    )
  }

}
export default Clock;