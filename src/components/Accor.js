import React from "react";
import { Accordion, Card } from "react-bootstrap";
import style from "../css/Acor.module.css";

const questions = [
  {
    id: 1,
    q: "How do I track my Ebsite order ?",
    a: "Go to Orders in your Ebsite account to track your package.",
  },
  {
    id: 2,
    q: "How do I track my Ebsite delivery ?",
    a: "You can track the location of your package by choosing the Track option in Orders section.",
  },
  {
    id: 3,
    q: "How do I find my order details ?",
    a: "Go to Orders in your Ebsite account to find details for all your orders.",
  },
  {
    id: 4,
    q: "What if I miss my Ebsite order delivery ?",
    a: "Do not worry, the delivery agent will try to deliver again on the next working day.",
  },
];

function Accor() {
  return (
    <div className={style.accor}>
      <Accordion>
        {questions.map((item) => (
          <Card key={item.id}>
            <Accordion.Toggle as={Card.Header} eventKey={item.id}>
              {item.q}
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={item.id}>
              <Card.Body>{item.a}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}

export default Accor;
