import React, { useState, useEffect } from 'react';
import Neclace from '../components/neclace'
import Neclace1 from '../components/neclace1'
import s from "../styles/clouds.module.scss";

const Clouds = () => {

  const [status, setStatus] = useState(true);

  useEffect(() => {
    onLoadInfo()
  }, []);

  const onLoadInfo = async () => {
    setInterval(() => setStatus(false), 1000);
  }


  return (
    status && <Neclace /> || <Neclace1 /> 
  );
};

export default Clouds;