import axios from "axios";
import React, { Component } from "react";
import { Card, Button, Form, Modal } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

export class FavCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleClose = () => this.setState({ show: false });
  handelShow = () => this.setState({ show: true });

  removeFav = () => {
    axios
      .delete(
        `https://prep12.herokuapp.com/removeFavDrinks/${this.props.drink.drinkId}`,
        {
          params: { email: "omx302@gmail.com" },
        }
      )
      .then((result) => this.props.reRenderData());
  };

  updateFav = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://prep12.herokuapp.com/editFavDrinks/${this.props.drink.drinkId}?email=omx302@gmail.com`,
        {
          drinkName: e.target.drinkName.value,
          drinkImg: e.target.drinkImg.value,
          drinkId: e.target.drinkId.value,
        }
      )
      .then((result) => this.props.reRenderData());
  };

  render() {
    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.updateFav}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="drinkName"
                  type="text"
                  defaultValue={this.props.drink.drinkName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Img url</Form.Label>
                <Form.Control
                  type="text"
                  name="drinkImg"
                  defaultValue={this.props.drink.drinkImg}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  name="drinkId"
                  type="text"
                  defaultValue={this.props.drink.drinkId}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.drink.drinkImg}
            alt={this.props.drink.drinkName}
          />
          <Card.Body>
            <Card.Title>{this.props.drink.drinkName}</Card.Title>
            <Card.Text>ID:{this.props.drink.drinkId}</Card.Text>
            <Button onClick={this.removeFav} variant="danger">
              Remove
            </Button>
            <Button onClick={this.handelShow} variant="info">
              Update
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withAuth0(FavCard);
