import React from "react";

import styled from "styled-components";

const CardBlackBottom = ({ img_src, title, text }) => {
  const Card = styled.div`
    width: 500px;
    height: auto;
    background-color: black;
    border-radius: 5px;
    color: white;
    padding-bottom: 1em;
    text-align: left;
  `;

  const CardImgContainer = styled.div`
    height: 200px;
    overflow: hidden;
  `;

  const CardImg = styled.img`
    width: 100%;
    border-radius: 5px;
  `;

  const CardTextContainer = styled.div`
    padding: 20px;
  `;

  return (
    <Card>
      <CardImgContainer>
        <CardImg src={img_src} alt="card img"></CardImg>
      </CardImgContainer>
      <CardTextContainer>
        <h2>{title}</h2>
        <p>{text}</p>
      </CardTextContainer>
    </Card>
  );
};

export default CardBlackBottom;
