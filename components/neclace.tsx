import React, { useState, useEffect } from 'react';
import Neclace2 from './neclace2'
import Neclace1 from './neclace1'
import s from "../styles/neclace.module.scss";

const Neclace = () => {

  const [status, setStatus] = useState(true);

  useEffect(() => {
    onLoadInfo()
  }, []);

  const onLoadInfo = async () => {
    setInterval(() => setStatus(false), 1000);
  }


  return (
    status && <Neclace2 /> || <Neclace1/> 
  );
};

export default Neclace;