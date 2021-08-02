import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { FavCard } from "./FavCard";
export class FavList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: null,
    };
  }

  reRenderData = () => {
    axios
      .get(`https://prep12.herokuapp.com/favDrinks?email=omx302@gmail.com`)
      .then((resultData) => {
        this.setState({
          drinks: resultData.data.userDrinks.map((ele) => {
            return <FavCard reRenderData={this.reRenderData} drink={ele} />;
          }),
        });
      });
  };

  componentDidMount() {
    axios
      .get(`https://prep12.herokuapp.com/favDrinks?email=omx302@gmail.com`)
      .then((resultData) => {
        this.setState({
          drinks: resultData.data.userDrinks.map((ele) => {
            return <FavCard reRenderData={this.reRenderData} drink={ele} />;
          }),
        });
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

export default withAuth0(FavList);
