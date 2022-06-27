import React from "react";

import { AwesomeSchema } from "./schemas";

type AwesomeInfoProps = {
  data?: AwesomeSchema;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const AwesomeInfo = (props: AwesomeInfoProps) => {
  return (
    <div>
      <h1>
        My name is {props.data?.person.firstName} {props.data?.person.lastName}
      </h1>
      <p>My pet's name is {props.data?.pet.name}</p>
      <button onClick={props.onClick}>Edit</button>
    </div>
  );
};

export default AwesomeInfo;
