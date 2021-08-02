import axios from "axios";
import React, { Component } from "react";
import DrinkCard from "./DrinkCard";
export class DrinksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://prep12.herokuapp.com/drinks")
      .then((resultData) => {
        this.setState({
          drinks: resultData.data.map((ele) => {
            return <DrinkCard drink={ele} />;
          }),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {this.state.drinks}
      </div>
    );
  }
}

export default DrinksList;
