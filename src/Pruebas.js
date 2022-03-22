import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';


import { ReactComponent as CameraIcon } from './icon/camera-rotate.svg'

export const Pruebas = () => {
  // const [facingMode, setFacingMode] = useState("user");
  // const getFacingMode = () => (facingMode === 'user' ? { exact: "environment" } : 'user');
  // const onChangeCamera = () => {
  //   setFacingMode(getFacingMode())
  // }
  const webCamRef = useRef(null);
  const [facingMode, setFacingMode] = useState("user");
  const getFacingMode = () => (facingMode === 'user' ? { exact: "environment" } : 'user');



  return (
    <Webcam
      ref={webCamRef}
      height={350}
      screenshotFormat="image/jpeg"
      width='100%'
      videoConstraints={{
        facingMode: facingMode
      }}
    />
  )
} 