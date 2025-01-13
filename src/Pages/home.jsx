import React, { useState } from 'react';
import "./home.css"
import "./Fonts/Nohemi/Nohemi.css"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function home() {

  document.title = "MineMap";

  return (
    <div>
      <div className="homeContainer"><div className="homeWrapper">
        <h1 className="homeTitle">Mine<span  style={{ color: '#06d892' }} >MAP</span></h1>
        <p className="headline">Using HEC-RAS and ArcGIS to help researchers locate and treat sources of acid mine drainage in West Virigina's waterways.</p>
        <a href="/problem"><button class="tryButton">The Problem <KeyboardDoubleArrowRightIcon style={{ verticalAlign: 'sub' }} /></button></a>
        </div></div>
    </div>
  )
}
