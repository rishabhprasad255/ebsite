import React from "react";
import Tab from "react-bootstrap/Table";
import { auth, db } from "../firebase/firebase";

function Table() {
  return (
    <div>
      <Tab bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </Tab>
    </div>
  );
}

export default Table;
