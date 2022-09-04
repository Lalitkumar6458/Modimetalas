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

import { GallerytabData } from '../../../Constants/Data/GalleryData';


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
      defaultActiveKey="Sheet/Plate"
      id="uncontrolled-tab-example"
      className="mb-3 "
    >
      {GallerytabData.map((item)=>{

        return(

          <Tab eventKey={item.title} title={item.title} >
          <GellaryComp data= {{CopperImgData:item.Data,title:item.title+' Products'}} />
          </Tab>
        )
      })}
     
      {/* <Tab eventKey="home" title="Flange" >
      <GellaryComp data= {{CopperImgData:FlangeImgData,title:'Flange Products'}} />
      </Tab>
      <Tab eventKey="Nut" title="Nut & Bolt" >
      <GellaryComp data= {{CopperImgData:NutBoltImgData,title:'Nut & Bolt Products'}} />
      </Tab>
      <Tab eventKey="Pipes" title="Polish Pipes" >
      <GellaryComp data= {{CopperImgData: PipeImgData ,title:'Polish Pipes Products'}} />
      </Tab>
      <Tab eventKey="Fittings" title="Fittings" >
      <GellaryComp data= {{CopperImgData:AlboImgData,title:'Fittings  Products'}} />
      </Tab>
      <Tab eventKey="Rods" title="Rods" >
      <GellaryComp data= {{CopperImgData:RodImgData,title:'Rods Products'}} />
      </Tab>
      <Tab eventKey="Pati" title="Channel & Angle" >
      <GellaryComp data= {{CopperImgData:SqurImgData,title:'Pati & Angle Products'}} />
      </Tab>
      <Tab eventKey="Wires" title="Wires" >
      <GellaryComp data= {{CopperImgData:WireImgData,title:'Wires Products'}} />
      </Tab>

      <Tab eventKey="Copper" title="Copper">
      <GellaryComp data= {{CopperImgData:CopperImgData,title:'Copper Products'}} />
      </Tab>
      <Tab eventKey="Brass" title="Brass">
      <GellaryComp data= {{CopperImgData:BrassImgData,title:'Brass Products'}} />
      </Tab>
      <Tab eventKey="Hexbar_Squrebar" title="Hexbar & Squrebar">
      <GellaryComp data= {{CopperImgData:BrassImgData,title:'Brass Products'}} />
      </Tab>
      <Tab eventKey="SeamlessPipe" title="Seamless Pipe">
      <GellaryComp data= {{CopperImgData:BrassImgData,title:'Brass Products'}} />
      </Tab>
      <Tab eventKey="WeldedPipe" title="Welded Pipe">
      <GellaryComp data= {{CopperImgData:BrassImgData,title:'Brass Products'}} />
      </Tab>
      <Tab eventKey="Hexbar_Squrebar" title="Tubes Pipe">
      <GellaryComp data= {{CopperImgData:BrassImgData,title:'Brass Products'}} />
      </Tab>
      <Tab eventKey="PipeFitting" title="Pipe Fitting">
      <GellaryComp data= {{CopperImgData:BrassImgData,title:'Brass Products'}} />
      </Tab>
      <Tab eventKey="DairyFitting" title="Valves & Dairy Fitting">
      <GellaryComp data= {{CopperImgData:BrassImgData,title:'Brass Products'}} />
      </Tab>
      <Tab eventKey="Hexbar_Squrebar" title="Circle & Ring">
      <GellaryComp data= {{CopperImgData:BrassImgData,title:'Brass Products'}} />
      </Tab>
      <Tab eventKey="Flat" title="Flat">
      <GellaryComp data= {{CopperImgData:BrassImgData,title:'Brass Products'}} />
      </Tab>
      <Tab eventKey="Flat" title="Electrode Wire">
      <GellaryComp data= {{CopperImgData:BrassImgData,title:'Brass Products'}} />
      </Tab> */}
    </Tabs>
    
</div>
   

   
  
   
   

  
   
  
    </>
    
  )
}

export default Gallery