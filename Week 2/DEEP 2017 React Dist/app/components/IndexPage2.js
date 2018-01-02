import React from 'react';
const styles = {
  page: {
    width: "100%",
    height: "100%",
    background: "",
    display: "flex",
    flexDirection: "column"
  },
  row1: {
    width: "100%",
    height: "100%",
    background: "",
    display: "flex",
    justifyContent: "space-between"
  },
  row2: {
    width: "100%",
    height: "100%",
    background: "",
    display: "flex",
    justifyContent: "space-around"
  },
  BoxRow1: {
    width: "30%",
    height: "100%",
    background :"green",
  },
  BoxRow2: {
    width: "45%",
    height: "100%",
    background :"purple",
  },
  BoxRow3: {
    width: "100%",
    height: "100%",
    background :"yellow",
  },
  BoxRow4: {
    width: "8%",
    height: "100%",
    background :"blue",
  },
  BoxRow5: {
    width: "100%",
    height: "100%",
    background :"pink",
  },

};

export default class IndexPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
          <div style = {styles.page}>
            <div style = {styles.row1}>
              <div style = {styles.BoxRow1}>
              </div>
              <div style = {styles.BoxRow1}>
              </div>
              <div style = {styles.BoxRow1}>
              </div>
            </div>
            <div style = {styles.row2}>
              <div style = {styles.BoxRow2}>
              </div>
              <div style = {styles.BoxRow2}>
              </div>
            </div>
            <div style = {styles.row1}>
              <div style = {styles.BoxRow3}>
              </div>
            </div>
            <div style = {styles.row1}>
              <div style = {styles.BoxRow4}>
              </div>
              <div style = {styles.BoxRow4}>
              </div>
              <div style = {styles.BoxRow4}>
              </div>
              <div style = {styles.BoxRow4}>
              </div>
              <div style = {styles.BoxRow4}>
              </div>
              <div style = {styles.BoxRow4}>
              </div>
              <div style = {styles.BoxRow4}>
              </div>
              <div style = {styles.BoxRow4}>
              </div>
              <div style = {styles.BoxRow4}>
              </div>
              <div style = {styles.BoxRow4}>
              </div>
            </div>
            <div style = {styles.row1}>
              <div style = {styles.BoxRow5}>
              </div>
            </div>
          </div>
        )
    }
}
