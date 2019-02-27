import React from "react";
import {Table} from "react-bootstrap";
import {UserRow} from "../UserRow/UserRow";
import {TableHeaderCell} from "../TableHeaderCell/TableHeaderCell";

export class TableUsers extends React.Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
        <tr>
          <TableHeaderCell title="#" order="desc"/>
          <TableHeaderCell title="First Name" order="asc"/>
          <TableHeaderCell title="Email" order="asc"/>
          <td>Actions</td>
        </tr>
        </thead>
        <tbody>
        {
          this.props.users.map((user, index) => {
            return <UserRow {...user} mode={index % 2 ? 'edit' : 'view'} key={user.id}/>;
          })
        }
        </tbody>
      </Table>
    );
  }
}
