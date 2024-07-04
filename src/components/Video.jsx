import React from 'react'
import video from '../../src/assets/video (online-video-cutter.com).mp4'
import { useOrientation } from 'react-use';

const Video = () => {

  const orientation = useOrientation();
  const isLandscape = orientation === 'landscape';

  return (
    <div style={{width:"100vw", height:"550px"}}>
      <video 
      width={isLandscape ? window.innerWidth : window.innerHeight}
      height={isLandscape ? window.innerHeight : window.innerWidth}
      style={{width:"1500px", height:"550px"}} autoPlay={true} loop={true} muted={true} src={video}></video>
    </div>
  )
}

export default Video