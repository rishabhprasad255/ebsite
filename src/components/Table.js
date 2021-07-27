import React from "react";
import Tab from "react-bootstrap/Table";

function Table({ price, title }) {
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
            <td>{title}</td>
            <td>{price}</td>
          </tr>
        </tbody>
      </Tab>
    </div>
  );
}

export default Table;
