import React, { useState } from 'react';
import "./pageLayout.css";
import AMDImage from './amd.jpg';

export default function Problem() {
  document.title = "The Problem - MineMap";

  return (
    <div className="pageContainerContainer">
      <div className="pageContainer">
        <p className="smallHeader">The Problem</p>
        <h1 className="title">Acid Mine Drainage</h1>
        <p className="subTitle">AMD devastates rivers and streams, posing a pressing concern for aquatic life and human health.</p>
        <div className="container" data-aos="fade-up">
          <div className="container1">
          <div id='cleanup' className="imgContainer" style={{padding: '5px' }}><img src={AMDImage}></img>
          <p style={{fontSize: '10px', marginBottom: 0, color: '#ffffffa2'}} >&nbsp;Source: Wayne National Forest. <a style={{color: '#ffffffa2'}} href="https://creativecommons.org/publicdomain/mark/1.0/">Creative Commons</a></p></div>
            <h3 className="containerTitle">What is Acid Mine Drainage?</h3>
            <p><b>Acid Mine Drainage (AMD)</b> is a critical environmental issue in West Virginia, stemming from <b>abandoned coal mines</b> where toxic byproducts such as heavy metals and acidic runoff seep into waterways.</p>
            <p>These contaminants <b>harm aquatic ecosystems, degrade water quality, and pose significant health risks</b> to nearby communities.</p>
          </div>
        </div>
        <br></br>
        <div className="container">
          <div className="container1" data-aos="fade-up">
            <h3 className="containerTitle">Why is AMD Such a Pressing Concern?</h3>
            <p>The West Virginia Water Quality Status Assessment identified AMD as the leading water quality problem in the state, impacting <b>over 2,400 miles of streams</b>.</p>
            <p>Moreover, AMD contributes to <b>CO<sub>2</sub> emissions</b> through chemical reactions and <b>inhibits sustainable development</b> by burdening rural communities with ecological and economic challenges.</p>
          </div>
          <div className="container1" data-aos="fade-up">
            <h3 className="containerTitle">How is MineMap Tackling AMD?</h3>
            <p>Current AMD detection relies on resource-intensive <b>boots-on-the-ground efforts</b>, which are costly and inefficient. Addressing this issue aligns with Sustainable Development Goals 6 (Clean Water and Sanitation), 3 (Good Health and Well-being), and 14 (Life Below Water).</p>
            <p>Our mission is to <b>improve AMD identification</b>, enabling stakeholders to redirect resources from detection to remediation.</p>
          </div>
        </div>
        <a href="/solution"><button className="readMore" data-aos="zoom-in">Read About Our Solution &gt;&gt;</button></a>
      </div>
    </div>
  );
}
