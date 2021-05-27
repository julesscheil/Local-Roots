import React from "react";

import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";


import API from "../../utils/API";
import "./style.css";
import ForSaleCard from '../../components/ForSaleCard/index'
import ForSalePostCard from '../../components/ForSalePostCard/index';
const Sale = () => {

  return (
    <Container>
      <Row><h2>Plants For Sale</h2>
      <ForSaleCard />
      </Row>
      <div className="container">
        <div className="post card">
          <div className="card-header">
            <h2>Create New Post</h2>
          </div>
       <ForSalePostCard />
        </div>

      </div> 
    </Container>
  );
};

export default Sale;
