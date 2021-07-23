import React from 'react';
import { css } from "@emotion/react";
import RiseLoader from "react-spinners/RiseLoader";
const override = css`
  display: block;
  margin: 0 auto;
  
`;
const color='red';
const loading=true;
    const Loader = () => (
      <RiseLoader color={color} loading={loading} css={override}  />
    );  
export default Loader;