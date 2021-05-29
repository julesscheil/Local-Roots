import React from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import "./style.css";
import ForSaleCard from "../../components/ForSaleCard/index";
import NewSale from "../../components/ForSalePostCard/index";

const Sale = (props) => {

  return (
    <Container style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <CardGroup>
        <Card >
          <Row>
            <h2>Plants For Sale</h2>

            <ForSaleCard />
          </Row>
        </Card>
        <div className="container">
          <div className="post card">
            <div className="card-header">
              <h2>Create New Post</h2>
            </div>
            <NewSale user_id={props.user_id}/>
          </div>
        </div>
      </CardGroup>
    </Container>
  );
};

export default Sale;
