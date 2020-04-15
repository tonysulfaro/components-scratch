import React from "react";

import styled from "styled-components";

const CardBoxShadowOnly = ({ title, text }) => {
  const Card = styled.div`
    padding: 1em;
    max-width: 500px;
    background-color: #fff;
    border: 1px solid rgba(211, 211, 211, 0.603);
    border-radius: 5px;
    box-shadow: 5px 5px 15px lightgray;
  `;

  return (
    <Card>
      <h2>{title}</h2>
      <p>{text}</p>
    </Card>
  );
};

export default CardBoxShadowOnly;
