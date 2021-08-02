import axios from "axios";
import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
export class DrinkCard extends Component {
  addToFav = () => {
    axios.post(
      `https://prep12.herokuapp.com/addDrinks?email=${this.props.auth0.user.email}`,
      this.props.drink
    );
  };

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={this.props.drink.strDrinkThumb}
          alt={this.props.drink.strDrink}
        />
        <Card.Body>
          <Card.Title>{this.props.drink.strDrink}</Card.Title>
          <Card.Text>ID:{this.props.drink.idDrink}</Card.Text>
          <Button onClick={this.addToFav} variant="primary">
            Add to Fav
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default withAuth0(DrinkCard);
