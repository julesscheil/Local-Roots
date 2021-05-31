import React from "react";
import { Container, Row, CardGroup, Card } from "react-bootstrap";
import MySalesCard from "../../components/myPostCard/index";

const MySales = (props) => {
  return (
    <div>
      <Container>
        <CardGroup>
          <Row>
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>My Sales</h2>
              <MySalesCard user_id={props.user_id}/>
            </Card>
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
};

export default MySales;
