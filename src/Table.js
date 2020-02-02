import React from "react";
import { Table } from "reactstrap";

const data = [
  {
    id: 1,
    name: "Fly Potato",
    lane: "Top",
    mvpChamp: "Riven"
  },
  {
    id: 2,
    name: "Evil Jester",
    lane: "Jungle",
    mvpChamp: "Shaco"
  },
  {
    id: 3,
    name: "Valandil",
    lane: "Support",
    mvpChamp: "Alistar"
  }
];
export const TableFunc = () => {
  const { name } = data;
  return (
    <Table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Lane</th>
        <th>MVP Champ</th>
      </tr>
      {data.map(linha => (
        <tr>
          <td>{linha.id}</td>
          <td>{linha.name}</td>
          <td>{linha.lane}</td>
          <td>{linha.mvpChamp}</td>
        </tr>
      ))}
    </Table>
  );
};

/** (
  <Table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Lane</th>
      <th>MVP Champ</th>
    </tr>
    {data.map(linha => (
      <tr>
        <td>{linha.id}</td>
        <td>{linha.name}</td>
        <td>{linha.lane}</td>
        <td>{linha.mvpChamp}</td>
      </tr>
    ))}
  </Table>
);
*/
