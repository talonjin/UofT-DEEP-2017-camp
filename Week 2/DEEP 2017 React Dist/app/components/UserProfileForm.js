import React from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import $ from 'jquery'

//dumb component
export default class UserProfileForm extends React.Component {
  constructor(props){
    console.log("constructor funciton")
    super(props);

    this.state = {

      submittedData: []

    };

    this.userName = "";
    this.getNameData = this.getNameData.bind(this);
    this.userClickedSubmit = this.userClickedSubmit.bind(this);
  }

  componentDidMount() {
    console.log("component did mount")

    $.ajax({
      "url": "http://127.0.0.1:8000/user_profile/",
      "crossDomain": true,
      "async": true,
      "method": "GET",
      "types": "json",
    }).done(
      function(response) {
        console.log(response)
        console.log("respose, in the done function")
        this.setState({submittedData: response})
      }.bind(this)
    )
  }

  getNameData(someRandomObject, theTextThatComesFromTheTextField){
    this.userName = theTextThatComesFromTheTextField;
  }

  userClickedSubmit(){
    console.log(this.userName)
    var previousState = this.state.submittedData;
    previousState.push({userName: this.userName})
    this.setState({submittedData: previousState})

    $.ajax({
      "url": 'http://127.0.0.1:8000/user_profile/',
      "crossDomain": true,
      "async": true,
      "method": 'POST',
      "types": 'json',
      "data": {
        "userName": this.userName,
        "description": "forced data",
        "gpa": "4.0",
      }
    }) 
  }

  render(){
    console.log("I  am doing a wicked rcender")
    console.log(this.state)





    var theListOfItems = this.state.submittedData.map(
        (data) => {
          return (
            <ListItem primaryText = {data.userName}/>
          )
        }
    );
    





    return(
      <div className = "userProfileForm">
        <div className = "formContainer">
          <div className = "formRow">
            <div>What is your name?</div>
            <TextField
                floatingLabelText = "This is going to float"
                hintText = "John Doe"
                onChange = {this.getNameData}
            />
          </div>
          <div className = "formRow">
            <div>Description Of You!</div>

            <TextField
                floatingLabelText = "Tell me about you"
                multiLine = {true}
            />
          </div>

          <div className = "formRow">
            <div>Specify you GPA!</div>

            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                <RadioButton
                  value="1"
                  label="4.0"
                />
                <RadioButton
                  value="2"
                  label="4.0"
                />
                <RadioButton
                  value="3"
                  label="4.0"
                />
                <RadioButton
                  value="4"
                  label="4.0"
                />
            </RadioButtonGroup>

          </div>
          <br/>
          <br/>
          <RaisedButton
            label="Submit Data"
            primary={true}
            onTouchTap = {this.userClickedSubmit}
          />

        </div>
        <List>
            {theListOfItems}
        </List>
      </div>
    )
  }
}
