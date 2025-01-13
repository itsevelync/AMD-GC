import React, { useState } from 'react';
import "./pageLayout.css";
import TeamPic1 from './teampic1.jpg';
import TeamPic2 from './teampic2.JPEG';

export default function Problem() {
  document.title = "About Us - MineMap";

  return (
    <div className="pageContainerContainer">
      <div className="pageContainer">
        <p className="smallHeader">About Us</p>
        <h1 id="contributors" className="title">MineMap Contributors</h1>
        <p className="subTitle">These are the people who make MineMap possble.</p>
        <div className="container">
          <div className="container1" data-aos="fade-up">
            <h3 style={{ textAlign: 'center', fontSize: '25px' }} className="containerTitle">About Us</h3>
            <p>Our team is composed of <b>five undergraduate students at the Georgia Institute of Technology</b>. Our technical expertise, institutional support, and collaborative mission make us uniquely equipped to tackle AMD challenges. We have experience in using <b>simulation-based tools and predictive analysis</b>, which formed the foundation of MineMap.</p>
            <div id='teamdiv' style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center', marginTop: '20px' }}>
              <div style={{ minWidth: '25%', marginRight:'20px'}}>
                <h3>Team Members</h3>
                <ul>
                  <li>Evelyn Chen</li>
                  <li>Gauri Sharma</li>
                  <li>Helen Honecker</li>
                  <li>Sarvesh Tiku</li>
                  <li>Vidjut Rajagopal</li>
                </ul>
              </div>
              <div id='teampic1' className="imgContainer" style={{ padding: '5px' }}><img src={TeamPic1}></img></div>
              <div className="imgContainer" style={{ padding: '5px' }}><img src={TeamPic2}></img></div>
            </div>
          </div>

          <div className="container1" data-aos="fade-up">
            <h3 style={{ textAlign: 'center', fontSize: '25px' }} className="containerTitle">Collaborators and Guidance</h3>
            <p>Our team is advised by the <b>GT Grand Challenges program</b>, led by <b>Dr. Jeffrey Davis</b> and <b>Dr. Ilya Gokhman</b>. Along with guidance from Georgia Tech, we are also supported by researchers and professors from <b>West Virginia University (WVU)</b>, who bring deep domain expertise and local knowledge of AMD issues. A notable collaborator includes <b>Dr. Dorothy Vesper</b>, a low-temperature geochemist and expert in coal-mine drainage and how contaminants move through water. Her extensive experience in AMD remediation has guided our approach to tackling the problem. We have also <b>interviewed stakeholders directly involved in AMD cleanup efforts</b> to hear their unique perspective from tackling AMD head on.</p>
            <p>This interdisciplinary collaboration ensures our platform is <b>technically robust, scientifically accurate, and meets the needs of key stakeholders</b>. By combining Georgia Tech&apos;s innovation with WVU&apos;s on-the-ground expertise, we can create a sustainable and impactful resource for AMD monitoring and mitigation.</p>
          </div>

        </div>
        <p style={{ marginBottom: '100px' }}></p>
      </div>
    </div >
  );
}