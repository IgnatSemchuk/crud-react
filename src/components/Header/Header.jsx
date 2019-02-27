import React from "react";
import {Form} from "react-bootstrap";
import './Header.css';

export const Header = (props) => {
  const {onSelectChange, limit} = props;

  return (
    <header>
      <Form.Control as="select"
                    onChange={(event) => onSelectChange(event.target.value)}
                    defaultValue={limit}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
      </Form.Control>
    </header>
  );
};
