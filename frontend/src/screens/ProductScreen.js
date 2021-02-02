import React from "react";
import products from "../products";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  const {
    image,
    name,
    price,
    rating,
    numReviews,
    description,
    countInStock,
  } = product;
  return (
    <>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={image} alt={name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={rating} text={`${numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${price}</ListGroup.Item>
            <ListGroup.Item>Description: {description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {countInStock > 0
                      ? `${countInStock} in Stock`
                      : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {countInStock > 0 && (
                  <Button className="btn-block" type="button">
                    Add To Cart
                  </Button>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
