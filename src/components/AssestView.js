import React from "react";
import { Table } from "react-bootstrap";
import assetListSample from '../data/assest.json';

const AssetsTableRow = () => {

  return assetListSample.assets.map((assetVals, index) => (
    <tr key={index}>
      <td>{assetVals.name}</td>
      <td>{assetVals.units.join(", ")}</td>
      <td>{assetVals.technology}</td>
      <td>{assetVals.owl}</td>
    </tr>
  ))
};


const AssestView = () => {

  return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Asset ID</th>
            <th>Unit</th>
            <th>Technology</th>
            <th>Owl Name</th>
          </tr>
        </thead>
        <tbody>{AssetsTableRow()}</tbody>
      </Table>
  );
};

export default AssestView;
