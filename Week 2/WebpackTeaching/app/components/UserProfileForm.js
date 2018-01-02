import React from 'react'
import TextField from 'material-ui/TextField'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

const styles = {
  radioButton: {
    marginBottom: 16,
  },
};

export default class UserProfileForm extends React.Component {
    constructor(props){
        super(props)
        this.userName = "";
        this.getNameData = this.getNameData.bind(this) //confusing fix for error
        //this.getPasswordData = this.getPasswordData.bind(this)
        this.userClickedSubmit = this.userClickedSubmit.bind(this)

        this.state = {
            submittedData: []
        }

    }

 //defining functions 
    getNameData(someRandomObject, theTextThatComesFromTheTextField) {
        this.userName = theTextThatComesFromTheTextField
    }
    
    getPasswordData(someRandomObject, theTextThatComesFromThePassword) {
        this.userPassword = theTextThatComesFromThePassword
    }

    userClickedSubmit() {
        console.log(this.userName)
        var previousState = this.state.submittedData;
        previousState.push({userName: this.userName})
        this.setState({submittedData: previousState})
    }

    render() {
        console.log(this.state)

        var theListOfItems = this.state.submittedData.map(
            (data) => {
                return (
                    <ListItem primaryText = {data.userName}/> 
                )
            }
        )

        return(

            <div className = "userProfileForm">
                <div className = "formContainer">
                    <div> What is your name? </div>
                    <TextField
                        floatingLabelText = "will float"
                        hintText = "hint"
                        onChange = {this.getNameData}
                    />
                </div>
                <div className = "formPassword"> 
                    <div> What is your Password </div>
                    <TextField 
                        type="password"
                        hintText="Password Field"
                        floatingLabelText="Password"
                    />
                </div>
                <div className = "formGPA">
                    <div> WHT IS UR GPA?!?!? </div>
                    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                        <RadioButton
                            value="light"
                            style={styles.radioButton}
                            label="fdfja"
                        />
               
                    
                        <RadioButton
                            value="light"
                            style={styles.radioButton}
                            label="fiaosd"
                        />
                    </RadioButtonGroup>
                    
                    </div>
                    <div> 
                        <RaisedButton label="Submit" primary = {true} onTouchTap = {this.userClickedSubmit}/>
                    </div>
                    <List>
                        {theListOfItems}
                    </List> 
                </div>   

        )
    }




}