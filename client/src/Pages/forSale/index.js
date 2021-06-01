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
        
          <Row>
            <Card style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
            <h2 className="text-center">Plants For Sale</h2>

            <ForSaleCard user_id={props.user_id}/>
            </Card>
          </Row>
        
        <div className="container">
          <div className="post card mx-auto" style={{width:"50rem"}}>
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
