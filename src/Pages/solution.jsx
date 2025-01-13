import React, { useState } from 'react';
import "./pageLayout.css";
import ArcGIS from './ArcGIS.png';
import HECRAS from './HEC-RAS.png';
import AMDCleanup from './amd cleanup.jpg';
import PinDropIcon from '@mui/icons-material/PinDrop';
import MapIcon from '@mui/icons-material/Map';
import WaterIcon from '@mui/icons-material/Water';

export default function Problem() {
  document.title = "Our Solution - MineMap";

  return (
    <div className="pageContainerContainer">
      <div className="pageContainer">
        <p className="smallHeader">Our Solution</p>
        <h1 className="title">MineMap</h1>
        <p className="subTitle">A "Google Maps" for AMD to increase AMD identification efficiency.</p>
        <div className="container">
          <div className="container1" data-aos="fade-up">
            <h3 style={{ textAlign: 'center', fontSize: '25px' }} className="containerTitle">Solution Overview</h3>
            <div className="container2">
              <div className="container3">
                <h3 style={{ textAlign: 'center' }} className="containerTitle">Platform</h3>
                <p><b>Primary Software</b></p>
                <ul>
                  <li><b>HEC-RAS:</b> A simulation software modelling water flow hydraulics.</li>
                  <li><b>ArcGIS:</b> A system to organize and analyze geographic information.</li>
                </ul>
                <div id='software' style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                  <div className="imgContainer" style={{ padding: '5px' }}><img src={ArcGIS}></img></div>
                  <div className="imgContainer" style={{ padding: '5px' }}><img src={HECRAS}></img></div>
                </div>

              </div>
              <div className="container3">
                <h3 style={{ textAlign: 'center' }} className="containerTitle">Product</h3>
                <p>Our platform layers water flow data, population density, and environmental factors to generate a dynamic, predictive <b>risk map for AMD sites</b>.</p>
                <p>This visual, data-driven tool <b>forecasts downstream contamination impacts</b> and helps stakeholders prioritize mitigation efforts.</p>
                <p style={{ textAlign: 'center', marginTop: '2.5vw' }}>
                  <WaterIcon sx={{ fontSize: '7vw' }} /> &nbsp;
                  <PinDropIcon sx={{ fontSize: '7vw' }} /> &nbsp;
                  <MapIcon sx={{ fontSize: '7vw' }} /></p>
              </div>
            </div>
          </div>

          <div className="container1" data-aos="fade-up">
            <div id='cleanup' className="imgContainer" style={{padding: '5px' }}><img src={AMDCleanup}></img>
            <p style={{fontSize: '10px', marginBottom: 0, color: '#ffffffa2'}} >&nbsp;Source: Penn State. <a style={{color: '#ffffffa2'}} href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons</a></p></div>
            <h3 style={{ textAlign: 'center' }} className="containerTitle">Replacing Boots-On-The-Ground Efforts</h3>
            <p>Our approach replaces the traditional, labor-intensive boots-on-the-ground detection methods with <b>advanced predictive analytics</b>, significantly reducing the time and resources required for AMD site identification.</p>
            <p>By integrating historical environmental records with real-time hydrological simulations, the platform not only addresses critical data gaps but also <b>provides actionable insights</b> that allows stakeholders to make informed decisions.</p>
          </div>

        </div>
        <br></br>
        <div className="container" data-aos="fade-up">
          <div className="container1">
            <h3 style={{ textAlign: 'center' }} className="containerTitle">Why MineMap?</h3>
            <p>This solution is <b>cost-effective, scalable, and user-friendly</b> and can be adopted by nonprofits, government agencies, and researchers. While tailored to West Virginia&apos;s AMD crisis, its adaptability allows for broader applications in regions facing similar water contamination issues.</p>
            <p>Ultimately, our platform <b>optimizes resource allocation, accelerates cleanup efforts, and mitigates AMD&apos;s environmental and societal impacts</b>, representing a significant step forward in sustainable environmental management.</p>
          </div>
        </div>
        <p style={{marginBottom: '100px'}}></p>
      </div>
    </div >
  );
}
