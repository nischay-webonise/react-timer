import React from 'react';

class FormattedDate extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      unformmated_date: this.props.unformatted_date
    };
  }

  componentWillUpdate(){
    console.log('Child Component will update');
  }

  componentDidMount(){
    console.log("In Child component Did Mount")
    setInterval(() => this.setState({unformmated_date: new Date()}), 1000)
  }

  render(){
		return (
      <h1>{ this.state.unformmated_date.toLocaleTimeString() }</h1>
		)
	}
}

export default FormattedDate;