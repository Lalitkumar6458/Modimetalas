import React from 'react'
import {  Link } from "react-router-dom";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GellaryComp from './gellaryComp';
import { CopperImgData } from '../../../Constants/Data/GalleryData'
import { BrassImgData } from '../../../Constants/Data/GalleryData'
import { FlangeImgData } from '../../../Constants/Data/GalleryData'
import { NutBoltImgData} from '../../../Constants/Data/GalleryData'
import { PipeImgData } from '../../../Constants/Data/GalleryData'

import {  AlboImgData } from '../../../Constants/Data/GalleryData'
import { RodImgData} from '../../../Constants/Data/GalleryData'
import { SqurImgData } from '../../../Constants/Data/GalleryData'
import { WireImgData } from '../../../Constants/Data/GalleryData'




const Gallery = () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });

  return (
    <>
      <div className="heading" style={{marginTop:'100px'}}>
        <div className="line_before"></div>
        <h3 className="headinng_text">Gallery</h3>
        <div className="line_after"></div>
      </div>

<div className='container'>

<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 "
    >
      <Tab eventKey="home" title="Copper">
      <GellaryComp data= {{CopperImgData:CopperImgData,title:'Copper Products'}} />
      </Tab>
      <Tab eventKey="profile" title="Brass">
      <GellaryComp data= {{CopperImgData:BrassImgData,title:'Brass Products'}} />
      </Tab>
      <Tab eventKey="contact" title="Flange" >
      <GellaryComp data= {{CopperImgData:FlangeImgData,title:'Flange Products'}} />
      </Tab>
      <Tab eventKey="Nut" title="Nut & Bolt" >
      <GellaryComp data= {{CopperImgData:NutBoltImgData,title:'Nut & Bolt Products'}} />
      </Tab>
      <Tab eventKey="Pipes" title="Pipes" >
      <GellaryComp data= {{CopperImgData: PipeImgData ,title:'Pipes Products'}} />
      </Tab>
      <Tab eventKey="Fittings" title="Fittings" >
      <GellaryComp data= {{CopperImgData:AlboImgData,title:'Fittings  Products'}} />
      </Tab>
      <Tab eventKey="Rods" title="Rods" >
      <GellaryComp data= {{CopperImgData:RodImgData,title:'Rods Products'}} />
      </Tab>
      <Tab eventKey="Pati" title="Pati & Angle" >
      <GellaryComp data= {{CopperImgData:SqurImgData,title:'Pati & Angle Products'}} />
      </Tab>
      <Tab eventKey="Wires" title="Wires" >
      <GellaryComp data= {{CopperImgData:WireImgData,title:'Wires Products'}} />
      </Tab>
    </Tabs>
    
</div>
   
   
   
  
   
   

  
   
  
    </>
    
  )
}

export default Gallery