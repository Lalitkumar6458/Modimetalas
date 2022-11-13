import React, { Fragment, useState,useEffect } from 'react'
import Header from './Header'
import Home from './pages/homepage/Home'
import AboutUs from './pages/About_Us/AboutUs';
import Products from './pages/ProductsPage/Products';
import ContactUs from './pages/Contact_us/ContactUs';
import MildSteel from './pages/ProductsPage/productComponent/MildSteel';
import CoilsRoutes from './CoilsRoutes';
import StainlessSteel from './pages/ProductsPage/productComponent/StainlessSteel';
import CarbonSteel from './pages/ProductsPage/productComponent/CarbonSteel';
import HighNickel from './pages/ProductsPage/productComponent/HighNickel';
import DuplexSteel from './pages/ProductsPage/productComponent/DuplexSteel';
import Stellite from './pages/ProductsPage/productComponent/Stellite';
import WeldingConsumable from './pages/ProductsPage/productComponent/WeldingConsumable';
import TitaniumAlloys from './pages/ProductsPage/productComponent/TitaniumAlloys';
import NickelFasteners from './pages/ProductsPage/productComponent/NickelFasteners';
import ProductModi from './pages/ProductsPage/ProductModi';
import SheetMain from './pages/ProductsPage/newProduct/SheetandPlate/SheetMain';
import SS201Grade from './pages/ProductsPage/newProduct/SheetandPlate/SSsheet/SS201Grade';
import SS202Grade from './pages/ProductsPage/newProduct/SheetandPlate/SSsheet/SS202Grade';
import SSallCom from './pages/ProductsPage/newProduct/SheetandPlate/SSsheet/SSallCom';
import Gallery from './pages/Gallery';
import { Routes, Route, Link } from "react-router-dom";

import Footer from './footer';
import SSsheet from './pages/ProductsPage/newProduct/SheetandPlate/SSsheet/SSsheet';
import { SS301Data } from '../../Constants/Data/ProductData';
import { SS304HData } from '../../Constants/Data/ProductData';
import { SS304LData } from '../../Constants/Data/ProductData';
import { SS310SData } from '../../Constants/Data/ProductData';
import { SS310HData } from '../../Constants/Data/ProductData';
import { SS316Data } from '../../Constants/Data/ProductData';
import { SS316LData } from '../../Constants/Data/ProductData';
import { SS316TiData } from '../../Constants/Data/ProductData';
import { SS321Data } from '../../Constants/Data/ProductData';
import { SS904LData } from '../../Constants/Data/ProductData';
import { SS409Data } from '../../Constants/Data/ProductData';
import { SS410Data } from '../../Constants/Data/ProductData';
import { SS420Data } from '../../Constants/Data/ProductData';
import { SS301Data1 } from '../../Constants/Data/ProductData';
import { SS202Data } from '../../Constants/Data/ProductData';
import { InconelSheetData } from '../../Constants/Data/InconelSheetData';
import { InconelGradeData } from '../../Constants/Data/InconelSheetData';
import { SSSheetData } from '../../Constants/Data/SheetData';
import { SSsheetGradeData } from '../../Constants/Data/ProductData';

import { Inconel600Data } from '../../Constants/Data/InconelSheetData';

import { Inconel601Data } from '../../Constants/Data/InconelSheetData';
import { Inconel625Data } from '../../Constants/Data/InconelSheetData';
import { Inconel718Data } from '../../Constants/Data/InconelSheetData';
import { Inconel750Data } from '../../Constants/Data/InconelSheetData';
import { Inconel706Data } from '../../Constants/Data/InconelSheetData';
import { InconelRA330Data } from '../../Constants/Data/InconelSheetData';
import { MonelSheetData } from '../../Constants/Data/SheetData';
import { MonelGradeData } from '../../Constants/Data/SheetData';
import { MONEL400SheetData } from '../../Constants/Data/SheetData';
import { MONELK500SheetData } from '../../Constants/Data/SheetData';
import { NickelGradeData } from '../../Constants/Data/SheetData';
import { NickelSheetsData } from '../../Constants/Data/SheetData';
import { Nickel200SheetsData } from '../../Constants/Data/SheetData';
import { Nickel201SheetsData } from '../../Constants/Data/SheetData';
import { Nickel212Data } from '../../Constants/Data/SheetData';
import { Nickel222Data } from '../../Constants/Data/SheetData';
import { Nickel270Data } from '../../Constants/Data/SheetData';

import { TitaniumSheetsData } from '../../Constants/Data/SheetData';
import { TitaniumGradeData } from '../../Constants/Data/SheetData';
import { TitaniumGrade1SheetsData } from '../../Constants/Data/SheetData';
import { TitaniumGrade2SheetsData } from '../../Constants/Data/SheetData';
import { TitaniumGrade3Sheets } from '../../Constants/Data/SheetData';
import { TitaniumGrade4Data } from '../../Constants/Data/SheetData';
import { TitaniumGrade5Data } from '../../Constants/Data/SheetData';

import { A286SheetsData } from '../../Constants/Data/SheetData';
import { SMO254SheetsData } from '../../Constants/Data/SheetData';

import { Alloy20SheetsData } from '../../Constants/Data/SheetData';

import { HastelloySheetsData } from '../../Constants/Data/SheetData';
import { HastelloyGradeData } from '../../Constants/Data/SheetData';
import { HastelloyC276Data } from '../../Constants/Data/SheetData';
import { HastelloyC22Data } from '../../Constants/Data/SheetData';
import { DuplexSuperduplexSheetsData } from '../../Constants/Data/SheetData';
import { SheetoptionData } from '../../Constants/Data/ProductData';

import { SheetData } from '../../Constants/Data/ProductData';
import { CoilsData } from '../../Constants/Data/ProductData';
import { RoundBarData } from '../../Constants/Data/ProductData';
import { WireData } from '../../Constants/Data/ProductData';

import { StainlessSteelCoilsData } from '../../Constants/Data/CoilsData'
import { SSCoilsGradeData } from '../../Constants/Data/ProductData';
import { InconelCoilsData } from '../../Constants/Data/CoilsData';
import { InconelCoilsGradeData } from '../../Constants/Data/CoilsData';

import { MonelCoilsData } from '../../Constants/Data/CoilsData';
import { MonelCoilsGradeData } from '../../Constants/Data/CoilsData';
import { NickelCoilsData } from '../../Constants/Data/CoilsData';
import { NickelCoilsGradeData } from '../../Constants/Data/CoilsData';
import { TitaniumCoilsData } from '../../Constants/Data/CoilsData';
import { TitaniumCoilsGradeData } from '../../Constants/Data/CoilsData';
import { A286CoilsData } from '../../Constants/Data/CoilsData';
import { SMO254CoilsData } from '../../Constants/Data/CoilsData';
import { HastelloyCoilsData } from '../../Constants/Data/CoilsData';
import { HastelloyCoilsGradeData } from '../../Constants/Data/CoilsData';
import { Alloy20CoilsData } from '../../Constants/Data/CoilsData';
import { DuplexCoilsData } from '../../Constants/Data/CoilsData';
import { DuplexCoilsGradeData } from '../../Constants/Data/CoilsData';
import { CoilsoptionData } from '../../Constants/Data/ProductData';

import { StainlessSteelBarData } from '../../Constants/Data/BarData';
import { SSBarGradeData } from '../../Constants/Data/BarData';
import { StainlessSteel304BarData } from '../../Constants/Data/BarData';
import { StainlessSteel304LBarData } from '../../Constants/Data/BarData';
import { StainlessSteel304HBarData } from '../../Constants/Data/BarData';
import { StainlessSteel310SBarData } from '../../Constants/Data/BarData';
import { StainlessSteel316BarData } from '../../Constants/Data/BarData';
import { StainlessSteel310HBarData } from '../../Constants/Data/BarData';
import { StainlessSteel316HBarData } from '../../Constants/Data/BarData';
import { StainlessSteel316LBarData } from '../../Constants/Data/BarData';
import { StainlessSteel316TiBarData } from '../../Constants/Data/BarData';
import { StainlessSteel904BarData } from '../../Constants/Data/BarData';

import { InconelBarData } from '../../Constants/Data/BarData';
import { Inconel600BarData } from '../../Constants/Data/BarData';
import { Inconel601BarData } from '../../Constants/Data/BarData';
import { Inconel625BarData } from '../../Constants/Data/BarData';
import { Inconel800BarData } from '../../Constants/Data/BarData';
import { Inconel801BarData } from '../../Constants/Data/BarData';
import { Inconel825BarData } from '../../Constants/Data/BarData';
import { InconelBarGradeData } from '../../Constants/Data/BarData';
import { MonalBarData } from '../../Constants/Data/BarData';
import { MonelBarGradeData } from '../../Constants/Data/BarData';

import { NickelBarData } from '../../Constants/Data/BarData';
import { Nickel200BarData } from '../../Constants/Data/BarData';
import { Nickel201BarData } from '../../Constants/Data/BarData';
import { NickelBarGradeData } from '../../Constants/Data/BarData';

import { TitaniumBarData } from '../../Constants/Data/BarData';
import { TitaniumBarGradeData } from '../../Constants/Data/BarData';
import { TitaniumGr1BarData } from '../../Constants/Data/BarData';
import { TitaniumGr2BarData } from '../../Constants/Data/BarData';
import { TitaniumGr3BarData } from '../../Constants/Data/BarData';
import { TitaniumGr4BarData } from '../../Constants/Data/BarData';
import { TitaniumGr5BarData } from '../../Constants/Data/BarData';
import { SMO254BarData } from '../../Constants/Data/BarData';

import { HastelloyBarData } from '../../Constants/Data/BarData';
import { HastelloyC22BarData } from '../../Constants/Data/BarData';
import { HastelloyC276BarData } from '../../Constants/Data/BarData';
import { HastelloyBarGradeData } from '../../Constants/Data/BarData';
import { A286BarData } from '../../Constants/Data/BarData';

import { Alloy20BarData } from '../../Constants/Data/BarData';
import { DuplexBarData } from '../../Constants/Data/BarData';

import { SSWireData } from '../../Constants/Data/WireData';
import { WireGradeData } from '../../Constants/Data/WireData';
import { InconelWireData } from '../../Constants/Data/WireData';
import { MonelWireData } from '../../Constants/Data/WireData';
import { NickelWireData } from '../../Constants/Data/WireData';
import { TitaniumWireData } from '../../Constants/Data/WireData';
import { SMO254WireData } from '../../Constants/Data/WireData';
import { Alloy20WireData } from '../../Constants/Data/WireData';
import { HastelloyWireData } from '../../Constants/Data/WireData';
import { DuplexWireData } from '../../Constants/Data/WireData';

import { PipesData } from '../../Constants/Data/ProductData';
import { PipesGradeData } from '../../Constants/Data/PipesData';
import { SSPipesData } from '../../Constants/Data/PipesData';
import { InconelPipesData } from '../../Constants/Data/PipesData';
import { MonelPipesData } from '../../Constants/Data/PipesData';
import { NickelPipesData } from '../../Constants/Data/PipesData';
import { TitaniumPipesData } from '../../Constants/Data/PipesData';
import { HastelloyPipesData } from '../../Constants/Data/PipesData';
import { DuplexPipesData } from '../../Constants/Data/PipesData';


import { StainlessSteel201CoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel202CoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel304CoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel304LCoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel304HCoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel310SCoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel310HCoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel316CoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel316LCoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel316HCoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel316TiCoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel904LCoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel410SCoilsData } from '../../Constants/Data/CoilsData';
import { StainlessSteel420CoilsData } from '../../Constants/Data/CoilsData';

import { Inconel600CoilsData } from '../../Constants/Data/CoilsData';
import { Inconel601CoilsData } from '../../Constants/Data/CoilsData';
import { Inconel625CoilsData } from '../../Constants/Data/CoilsData';
import { Inconel800CoilsData } from '../../Constants/Data/CoilsData';

import { Inconel825CoilsData } from '../../Constants/Data/CoilsData';
import { Inconel925CoilsData } from '../../Constants/Data/CoilsData';
import { Inconel718CoilsData } from '../../Constants/Data/CoilsData';
import { Monel400CoilsData } from '../../Constants/Data/CoilsData';
import { MonelK500CoilsData } from '../../Constants/Data/CoilsData';
import { Nickel200CoilsData } from '../../Constants/Data/CoilsData';
import { Nickel201CoilsData } from '../../Constants/Data/CoilsData';

import { HastelloyB2CoilsData } from '../../Constants/Data/CoilsData';
import { HastelloyB3CoilsData } from '../../Constants/Data/CoilsData';
import { HastelloyC22CoilsData } from '../../Constants/Data/CoilsData';
import { HastelloyC2000CoilsData } from '../../Constants/Data/CoilsData';
import { HastelloyC276CoilsData } from '../../Constants/Data/CoilsData';
import { HastelloyXCoilsData } from '../../Constants/Data/CoilsData';



import { DuplexS31803CoilsData } from '../../Constants/Data/CoilsData';
import { Duplex2101CoilsData } from '../../Constants/Data/CoilsData';
import { Duplex2205CoilsData } from '../../Constants/Data/CoilsData';
import { Duplex2304CoilsData } from '../../Constants/Data/CoilsData';
import { Duplex2507CoilsData } from '../../Constants/Data/CoilsData';
import { DuplexS32750CoilsData } from '../../Constants/Data/CoilsData';

import { TitaniumGrade1CoilsData } from '../../Constants/Data/CoilsData';
import { TitaniumGrade2CoilsData } from '../../Constants/Data/CoilsData';
import { TitaniumGrade3CoilsData } from '../../Constants/Data/CoilsData';
import { TitaniumGrade4CoilsData } from '../../Constants/Data/CoilsData';
import { TitaniumGrade5CoilsData } from '../../Constants/Data/CoilsData';

import { SS201SheetData } from '../../Constants/Data/ProductData';

import { Monel400BarData } from '../../Constants/Data/BarData';
import { MonelK500BarData } from '../../Constants/Data/BarData';
import { RoundBarOptionData } from '../../Constants/Data/BarData';
import SheetImg from "../../Constants/Images/SheetImg/headingImg.jpg"
import SubSheetImg from "../../Constants/Images/SheetImg/SubSheet.jpg"

import CoilsImg from "../../Constants/Images/CoilsImg/Bgimg1.png"
import CoilsImg1 from "../../Constants/Images/BaseImage/CoilsImg1.jpg"
import BarHImg from "../../Constants/Images/BarImg/BarHImg.jpg"
import WireImg from "../../Constants/Images/WireImg/Wire6.jpeg"
import PipeImg from '../../Constants/Images/PipesImg/PipeImg.jpg'
import BarHeadingimg from "../../Constants/Images/BarImg/BarHeadingImg.jpg"
import WireHImg from "../../Constants/Images/WireImg/WireHImg1.jpeg"

import WeldingWire from './pages/ProductsPage/newProduct/WeldingWire';


import Alloysimg from "../../Constants/Images/BaseImage/AlloysImg.jpg"


import { PipeFitingsData } from '../../Constants/Data/PipeFitings';
import { FlangeData } from '../../Constants/Data/FlangeData';

import BgFitingsimg from "../../Constants/Images/Pipefitings/BgFitingImg.jpg"
import bgFlangeimg from "../../Constants/Images/FlangeImg/BgFlangeimg.jpg"
import PipeFitings from './pages/ProductsPage/newProduct/PipeFitings';
import { ButtweldWeldPipeFittingsData } from '../../Constants/Data/PipeFitings';
import { ThreadedPipeFittingsData } from '../../Constants/Data/PipeFitings';
import { SocketWeldPipeFittingsData } from '../../Constants/Data/PipeFitings';
import { CategoriesButtdata } from '../../Constants/Data/PipeFitings';
import { SocketCatgoryData } from '../../Constants/Data/PipeFitings';
import { ThreadedCatgoryData } from '../../Constants/Data/PipeFitings';
import { OletsCatgoryData } from '../../Constants/Data/PipeFitings';
import bgFitings from "../../Constants/Images/Pipefitings/ButImg8.png"
import Bgfitongsimg from "../../Constants/Images/Pipefitings/TrBgImg2.png"
import BgFitingsImg1 from "../../Constants/Images/Pipefitings/TrBgImg1.png"
import Oimg from "../../Constants/Images/Pipefitings/OImg1.png"
import Fimg from '../../Constants/Images/ferul_img/img1.jpg'
import ScrollButton from './ScrollTop';

import { ANSINormFlangesData } from '../../Constants/Data/FlangeData';
import { UNINormFlangesData } from '../../Constants/Data/FlangeData';
import { ENNormFlangesData } from '../../Constants/Data/FlangeData';
import { BSNormFlangesData } from '../../Constants/Data/FlangeData';
import { JISNormFlangesData } from '../../Constants/Data/FlangeData';
import { DINNormFlangesData } from '../../Constants/Data/FlangeData';
import Flange_new from './pages/ProductsPage/newProduct/Flange_new';
import { oletFittingsData } from '../../Constants/Data/PipeFitings';
import { FerrulePipeFittingsData } from '../../Constants/Data/PipeFitings';
import { FerruleCatgoryData } from '../../Constants/Data/PipeFitings';
import SpecialAlloysP from './pages/ProductsPage/SpecialAlloysP';
import { SpecialAlloysgrade } from '../../Constants/Data/SpecialAlloys';
const BaseIndex = () => {
  const [loading, setLoading] = useState(true);
      



  return (
    <>
    <Header/>
    <Routes>
    {SpecialAlloysgrade.map((item,index)=>{
      return(

        <Route path={item.link} element={<SpecialAlloysP name={{data:SpecialAlloysgrade[index]}}  />} />
      )

    })}
    {/* <Route path="/SpecialAlloys/InconelAlloys" element={<SpecialAlloysP name={{data:SpecialAlloysgrade[0]}}  />} />
    <Route path="/SpecialAlloys/Hastelloy" element={<SpecialAlloysP name={{data:SpecialAlloysgrade[2]}}  />} />
    <Route path="/SpecialAlloys/SuperMonelAlloys" element={<SpecialAlloysP name={{data:SpecialAlloysgrade[1]}}  />} />
    <Route path="/SpecialAlloys/DuplexAlloys" element={<SpecialAlloysP name={{data:SpecialAlloysgrade[3]}}  />} />
    <Route path="/SpecialAlloys/SuperDuplexAlloys" element={<SpecialAlloysP name={{data:SpecialAlloysgrade[4]}}  />} />
    <Route path="/SpecialAlloys/CuproNickelAlloys" element={<SpecialAlloysP name={{data:SpecialAlloysgrade[5]}}  />} />
    <Route path="/SpecialAlloys/SMO254" element={<SpecialAlloysP name={{data:SpecialAlloysgrade[6]}}  />} />
    <Route path="/SpecialAlloys/Alloy20" element={<SpecialAlloysP name={{data:SpecialAlloysgrade[7]}}  />} />
    <Route path="/SpecialAlloys/Alloy20" element={<SpecialAlloysP name={{data:SpecialAlloysgrade[7]}}  />} /> */}

   
    <Route path="/ANSI_Norm_Flanges" element={<Flange_new name={{data:ANSINormFlangesData,Grade:TitaniumCoilsGradeData,heading:"ANSI Norm Flanges"}} />}/>
    <Route path="/UNI_Norm_Flanges" element={<Flange_new name={{data:UNINormFlangesData,Grade:TitaniumCoilsGradeData,heading:"UNI Norm Flanges"}} />}/>
    <Route path="/EN_Norm_Flanges" element={<Flange_new name={{data:ENNormFlangesData,Grade:TitaniumCoilsGradeData,heading:"EN Norm Flanges"}} />}/>
    <Route path="/BS_Norm_Flanges" element={<Flange_new name={{data:BSNormFlangesData,Grade:TitaniumCoilsGradeData,heading:"BS Norm Flanges"}} />}/>
    <Route path="/JIS_Norm_Flangess" element={<Flange_new name={{data:JISNormFlangesData,Grade:TitaniumCoilsGradeData,heading:"JIS Norm Flanges"}} />}/>
    <Route path="/DIN_Norm_Flanges" element={<Flange_new name={{data:DINNormFlangesData,Grade:TitaniumCoilsGradeData,heading:"DIN Norm Flanges"}} />}/>
  
    <Route path="/Buttweld_Pipe_Fittings" element={<PipeFitings name={{data:ButtweldWeldPipeFittingsData,Grade:TitaniumCoilsGradeData,heading:"Buttweld Pipe Fittings",img:bgFitings,Category:CategoriesButtdata}} />}/>
    <Route path="/Threaded_Pipe_Fittings" element={<PipeFitings name={{data:ThreadedPipeFittingsData,Grade:TitaniumCoilsGradeData,heading:"Threaded Pipe Fittings",img:Bgfitongsimg,Category:ThreadedCatgoryData}} />}/>
    <Route path="/MGalvanized_Pipe_Fittings" element={<PipeFitings name={{data:SocketWeldPipeFittingsData,Grade:TitaniumCoilsGradeData,heading:"Socket Weld Pipe Fittings",img:BgFitingsImg1,Category:SocketCatgoryData}} />}/>

    <Route path="/Olets_Pipe_Fittings" element={<PipeFitings name={{data:oletFittingsData,Grade:TitaniumCoilsGradeData,heading:"Olets Pipe Fittings",img:Oimg,Category:OletsCatgoryData}} />}/>
    <Route path="/Ferrule_Pipe_Fittings" element={<PipeFitings name={{data:FerrulePipeFittingsData,Grade:TitaniumCoilsGradeData,heading:"Ferrule Pipe Fittings",img:Fimg,Category:FerruleCatgoryData}} />}/>
    <Route path="/TitaniumGr1CoilsGrade" element={<SSallCom name={{data:TitaniumGrade1CoilsData,Grade:TitaniumCoilsGradeData,heading:"Titanium Gr1 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/TitaniumGr2CoilsGrade" element={<SSallCom name={{data:TitaniumGrade2CoilsData,Grade:TitaniumCoilsGradeData,heading:"Titanium Gr2 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/TitaniumGr3CoilsGrade" element={<SSallCom name={{data:TitaniumGrade3CoilsData,Grade:TitaniumCoilsGradeData,heading:"Titanium Gr3 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/TitaniumGr4CoilsGrade" element={<SSallCom name={{data:TitaniumGrade4CoilsData,Grade:TitaniumCoilsGradeData,heading:"Titanium Gr4 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/TitaniumGr5CoilsGrade" element={<SSallCom name={{data:TitaniumGrade5CoilsData,Grade:TitaniumCoilsGradeData,heading:"Titanium Gr5 COILS & STIRPS",img:CoilsImg1}} />}/>


    <Route path="/DuplexS31803Coils" element={<SSallCom name={{data:DuplexS31803CoilsData,Grade:DuplexCoilsGradeData,heading:"DuplexS31803 COILS & STIRPS",img:CoilsImg1}} />}/>
    
    
    
    <Route path="/Duplex2101Coils" element={<SSallCom name={{data:Duplex2101CoilsData,Grade:DuplexCoilsGradeData,heading:"Duplex 2101 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/Duplex2205Coils" element={<SSallCom name={{data:Duplex2205CoilsData,Grade:DuplexCoilsGradeData,heading:"Duplex 2205 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/Duplex2304_S32304Coils" element={<SSallCom name={{data:Duplex2304CoilsData,Grade:DuplexCoilsGradeData,heading:"Duplex 2304/S32304 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/SuperDuplex2507Coils" element={<SSallCom name={{data:Duplex2507CoilsData,Grade:DuplexCoilsGradeData,heading:"SuperDuplex2507 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/SuperDuplexS32750_S32760Coils" element={<SSallCom name={{data:DuplexS32750CoilsData,Grade:DuplexCoilsGradeData,heading:"SuperDuplexS32750/S32760 Coils",img:CoilsImg1}} />}/>




    <Route path="/HastelloyB2Coils" element={<SSallCom name={{data:HastelloyB2CoilsData,Grade:HastelloyCoilsGradeData,heading:"HastelloyB2 COILS & STIRPS",img:CoilsImg1}} />}/>

    <Route path="/HastelloyB3Coils" element={<SSallCom name={{data:HastelloyB3CoilsData,Grade:HastelloyCoilsGradeData,heading:"HastelloyB3 COILS & STIRPS",img:CoilsImg1}} />}/>

    <Route path="/HastelloyC22Coils" element={<SSallCom name={{data:HastelloyC22CoilsData,Grade:HastelloyCoilsGradeData,heading:"HastelloyC22 COILS & STIRPS",img:CoilsImg1}} />}/>

    <Route path="/HastelloyC2000Coils" element={<SSallCom name={{data:HastelloyC2000CoilsData,Grade:HastelloyCoilsGradeData,heading:"HastelloyC2000 COILS & STIRPS",img:CoilsImg1}} />}/>

    <Route path="/HastelloyC276Coils" element={<SSallCom name={{data:HastelloyC276CoilsData,Grade:HastelloyCoilsGradeData,heading:"HastelloyC276 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/HastelloyXCoils" element={<SSallCom name={{data:HastelloyXCoilsData,Grade:HastelloyCoilsGradeData,heading:"HastelloyX Coils",img:CoilsImg1}} />}/>




    <Route path="/Monel400Coils" element={<SSallCom name={{data:Monel400CoilsData,Grade:MonelCoilsGradeData,heading:"Monel400 Coils",img:CoilsImg1}} />}/>
    <Route path="/MonelK500Coils" element={<SSallCom name={{data:MonelK500CoilsData,Grade:MonelCoilsGradeData,heading:"MonelK500 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/Nickel200CoilsGrade" element={<SSallCom name={{data:Nickel200CoilsData,Grade:NickelCoilsGradeData,heading:"Nickel200 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/Nickel201CoilsGrade" element={<SSallCom name={{data:Nickel201CoilsData,Grade:NickelCoilsGradeData,heading:"Nickel201 COILS & STIRPS",img:CoilsImg1}} />}/>






    <Route path="/Inconel600CoilsGrade" element={<SSallCom name={{data:Inconel600CoilsData,Grade:InconelCoilsGradeData,heading:"Inconel600 COILS & STIRPS",img:CoilsImg1}} />}/>

    <Route path="/Inconel601CoilsGrade" element={<SSallCom name={{data:Inconel601CoilsData,Grade:InconelCoilsGradeData,heading:"Inconel601 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/Inconel625CoilsGrade" element={<SSallCom name={{data:Inconel625CoilsData,Grade:InconelCoilsGradeData,heading:"Inconel625 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/Inconel718CoilsGrade" element={<SSallCom name={{data:Inconel718CoilsData,Grade:InconelCoilsGradeData,heading:"Inconel718 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/Inconel800CoilsGrade" element={<SSallCom name={{data:Inconel800CoilsData,Grade:InconelCoilsGradeData,heading:"Inconel800 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/Inconel825CoilsGrade" element={<SSallCom name={{data:Inconel825CoilsData,Grade:InconelCoilsGradeData,heading:"Inconel825 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/Inconel925CoilsGrade" element={<SSallCom name={{data:Inconel925CoilsData,Grade:InconelCoilsGradeData,heading:"Inconel925 COILS & STIRPS",img:CoilsImg1}} />}/>


    

    <Route path="/SS201CoilsGrade" element={<SSallCom name={{data: StainlessSteel201CoilsData,Grade:SSCoilsGradeData,heading:"SS 201 COILS & STIRPS",img:CoilsImg1}} />}/>
    <Route path="/SS202CoilsGrade" element={<SSallCom name={{data: StainlessSteel202CoilsData,Grade:SSCoilsGradeData,heading:"SS 202 COILS & STIRPS",img:CoilsImg1}} />}/>  
     <Route path="/SS304CoilsGrade" element={<SSallCom name={{data: StainlessSteel304CoilsData,Grade:SSCoilsGradeData,heading:"SS 304 COILS & STIRPS",img:CoilsImg1}} />}/>   
    <Route path="/SS304LCoilsGrade" element={<SSallCom name={{data: StainlessSteel304LCoilsData,Grade:SSCoilsGradeData,heading:"SS 304L COILS & STIRPS",img:CoilsImg1}} />}/>  
     <Route path="/SS304HCoilsGrade" element={<SSallCom name={{data: StainlessSteel304HCoilsData,Grade:SSCoilsGradeData,heading:"SS 304H COILS & STIRPS",img:CoilsImg1}} />}/>  
     <Route path="/SS310SCoilsGrade" element={<SSallCom name={{data: StainlessSteel310SCoilsData,Grade:SSCoilsGradeData,heading:"SS 310S COILS & STIRPS",img:CoilsImg1}} />}/>   
    <Route path="/SS310HCoilsGrade" element={<SSallCom name={{data: StainlessSteel310HCoilsData,Grade:SSCoilsGradeData,heading:"SS 310H COILS & STIRPS",img:CoilsImg1}} />}/>   
    <Route path="/SS316HCoilsGrade" element={<SSallCom name={{data: StainlessSteel316HCoilsData,Grade:SSCoilsGradeData,heading:"SS 316H COILS & STIRPS",img:CoilsImg1}} />}/>   
    <Route path="/SS316TiCoilsGrade" element={<SSallCom name={{data: StainlessSteel316TiCoilsData,Grade:SSCoilsGradeData,heading:"SS 316Ti COILS & STIRPS",img:CoilsImg1}} />}/>  
    
    <Route path="/SS316LCoilsGrade" element={<SSallCom name={{data: StainlessSteel316LCoilsData,Grade:SSCoilsGradeData,heading:"SS 316L COILS & STIRPS",img:CoilsImg1}} />}/>
     <Route path="/SS904LCoilsGrade" element={<SSallCom name={{data: StainlessSteel904LCoilsData,Grade:SSCoilsGradeData,heading:"SS 904L COILS & STIRPS",img:CoilsImg1}} />}/>  
     <Route path="/SS410SCoilsGrade" element={<SSallCom name={{data: StainlessSteel410SCoilsData,Grade:SSCoilsGradeData,heading:"SS 410 COILS & STIRPS",img:CoilsImg1}} />}/> 
       <Route path="/SS420CoilsGrade" element={<SSallCom name={{data: StainlessSteel420CoilsData,Grade:SSCoilsGradeData,heading:"SS 420 COILS & STIRPS",img:CoilsImg1}} />}/>



    <Route path="/SSPipes" element={<SSsheet name={{data:SSPipesData,Grade:PipesGradeData,heading:"SS Pipes/Tubes",img:PipeImg}}  />}/>

    <Route path="/InconelPipes" element={<SSsheet name={{data:InconelPipesData,Grade:PipesGradeData,heading:"Inconel Pipes/Tubes",img:PipeImg}}  />}/>

    <Route path="/MonelPipes" element={<SSsheet name={{data:MonelPipesData,Grade:PipesGradeData,heading:"Monel Pipes/Tubes",img:PipeImg}}  />}/>
    <Route path="/NickelPipes" element={<SSsheet name={{data:NickelPipesData,Grade:PipesGradeData,heading:"Nickel Pipes/Tubes",img:PipeImg}}  />}/>
    <Route path="/titaniumPipes" element={<SSsheet name={{data:TitaniumPipesData,Grade:PipesGradeData,heading:"titanium Pipes/Tubes",img:PipeImg}}  />}/>
    <Route path="/HastelloyPipes" element={<SSsheet name={{data:HastelloyPipesData,Grade:PipesGradeData,heading:"Hastelloy Pipes/Tubes",img:PipeImg}}  />}/>
    <Route path="/DuplexSuperduplexPipes" element={<SSsheet name={{data:DuplexPipesData,Grade:PipesGradeData,heading:"Duplex/Superduplex Pipes/Tubes",img:PipeImg}}  />}/>

  
    <Route path="/SSWire" element={<SSsheet name={{data:SSWireData,Grade:WireGradeData,img:WireHImg,heading:"SS Wire"}}  />}/>
    <Route path="/InconelWire" element={<SSsheet name={{data:InconelWireData,Grade:WireGradeData,img:WireHImg,heading:"Inconel Wire"}}  />}/>
    <Route path="/MonelWire" element={<SSsheet name={{data:MonelWireData,Grade:WireGradeData,img:WireHImg,heading:"Monel Wire"}}  />}/>
    <Route path="/NickelWire" element={<SSsheet name={{data:NickelWireData,Grade:WireGradeData,img:WireHImg,heading:"Nickel Wire"}}  />}/>
    <Route path="/titaniumCWire" element={<SSsheet name={{data:TitaniumWireData,Grade:WireGradeData,img:WireHImg,heading:"titanium Wire"}}  />}/>
    <Route path="/DuplexSuperduplexWire" element={<SSsheet name={{data:DuplexWireData,Grade:WireGradeData,img:WireHImg,heading:"Duplex & Superduplex Wire"}}  />}/>
    <Route path="/SMO254Wire" element={<SSsheet name={{data:SMO254WireData,Grade:WireGradeData,img:WireHImg,heading:"SMO254 Wire"}}  />}/>
    <Route path="/HastelloyWire" element={<SSsheet name={{data:HastelloyWireData,Grade:WireGradeData,img:WireHImg,heading:"Hastelloy Wire"}}  />}/>
    <Route path="/Alloy20Wire" element={<SSsheet name={{data:Alloy20WireData,Grade:WireGradeData,img:WireHImg,heading:"Alloy20 Wire"}}  />}/>




{/* ============Round bar Route start=================== */}

    <Route path="/HastelloyRoundBar" element={<SSallCom name={{data: HastelloyBarData,Grade:HastelloyBarGradeData,img:BarHeadingimg,heading:"Hastelloy ROUND BAR"}} />}/>
    <Route path="/HastelloyC22BarGrade" element={<SSallCom name={{data: HastelloyC22BarData,Grade:HastelloyBarGradeData,img:BarHeadingimg,heading:"Hastelloy C22 ROUND BAR"}} />}/>
    <Route path="/HastelloyC276BarGrade" element={<SSallCom name={{data: HastelloyC276BarData,Grade:HastelloyBarGradeData,img:BarHeadingimg,heading:"Hastelloy C276 ROUND BAR"}} />}/>

    <Route path="/DuplexSuperduplexRoundBar" element={<SSallCom name={{data: DuplexBarData,Grade:RoundBarOptionData,img:BarHeadingimg,heading:"Duplex/Superduplex ROUND BAR"}} />}/>
    <Route path="/Alloy20RoundBar" element={<SSallCom name={{data: Alloy20BarData,Grade:RoundBarOptionData,img:BarHeadingimg,heading:"Alloy20 ROUND BAR"}} />}/>
    <Route path="/SMO254RoundBar" element={<SSallCom name={{data: SMO254BarData,Grade:RoundBarOptionData,img:BarHeadingimg,heading:"SMO254 ROUND BAR"}} />}/>
    <Route path="/A286RoundBar" element={<SSallCom name={{data: A286BarData,Grade:RoundBarOptionData,img:BarHeadingimg,heading:"A286 ROUND BAR"}} />}/>


    <Route path="/titaniumCRoundBar" element={<SSsheet name={{data:TitaniumBarData,Grade:TitaniumBarGradeData,img:BarHeadingimg,heading:"Titanium ROUND BAR"}}  />}/>
    <Route path="/TitaniumGr1BarGrade" element={<SSallCom name={{data: TitaniumGr1BarData,Grade:TitaniumBarGradeData,img:BarHeadingimg,heading:"Titanium Gr1 ROUND BAR"}} />}/>
    <Route path="/TitaniumGr2BarGrade" element={<SSallCom name={{data: TitaniumGr2BarData,Grade:TitaniumBarGradeData,img:BarHeadingimg,heading:"Titanium Gr2 ROUND BAR"}} />}/>
    <Route path="/TitaniumGr3BarGrade" element={<SSallCom name={{data: TitaniumGr3BarData,Grade:TitaniumBarGradeData,img:BarHeadingimg,heading:"Titanium Gr3 ROUND BAR"}} />}/>
    <Route path="/TitaniumGr4BarGrade" element={<SSallCom name={{data: TitaniumGr4BarData,Grade:TitaniumBarGradeData,img:BarHeadingimg,heading:"Titanium Gr4 ROUND BAR"}} />}/>
    <Route path="/TitaniumGr5BarGrade" element={<SSallCom name={{data: TitaniumGr5BarData,Grade:TitaniumBarGradeData,img:BarHeadingimg,heading:"Titanium Gr5 ROUND BAR"}} />}/>



    <Route path="/NickelRoundBar" element={<SSsheet name={{data:NickelBarData,Grade:NickelBarGradeData,img:BarHeadingimg,heading:"Nickel ROUND BAR"}}  />}/>
    <Route path="/Nickel200BarGrade" element={<SSallCom name={{data: Nickel200BarData,Grade:NickelBarGradeData,img:BarHeadingimg,heading:"Nickel 200 ROUND BAR"}} />}/>
    <Route path="/Nickel201BarGrade" element={<SSallCom name={{data: Nickel201BarData,Grade:NickelBarGradeData,img:BarHeadingimg,heading:"Nickel 201 ROUND BAR"}} />}/>

    <Route path="/MonelRoundBar" element={<SSsheet name={{data:MonalBarData,Grade:MonelBarGradeData,img:BarHeadingimg,heading:"Monel ROUND BAR"}}  />}/>
    <Route path="/Monel400BarGrade" element={<SSallCom name={{data:Monel400BarData,Grade:MonelBarGradeData,img:BarHeadingimg,heading:"Monel 400 ROUND BAR"}} />}/>
    <Route path="/MonelK500BarGrade" element={<SSallCom name={{data:MonelK500BarData,Grade:MonelBarGradeData,img:BarHeadingimg,heading:"Monel K500 ROUND BAR"}} />}/>

    <Route path="/InconelRoundBar" element={<SSsheet name={{data:InconelBarData,Grade:InconelBarGradeData,img:BarHeadingimg,heading:"Inconel ROUND BAR"}}  />}/>
    <Route path="/Inconel600BarGrade" element={<SSallCom name={{data: Inconel600BarData,Grade:InconelBarGradeData,img:BarHeadingimg,heading:"Inconel 600 ROUND BAR"}} />}/>
    <Route path="/Inconel601BarGrade" element={<SSallCom name={{data: Inconel601BarData,Grade:InconelBarGradeData,img:BarHeadingimg,heading:"Inconel 601 ROUND BAR"}} />}/>
    <Route path="/Inconel625BarGrade" element={<SSallCom name={{data: Inconel625BarData,Grade:InconelBarGradeData,img:BarHeadingimg,heading:"Inconel 625 ROUND BAR"}} />}/>
    <Route path="/Inconel800BarGrade" element={<SSallCom name={{data: Inconel800BarData,Grade:InconelBarGradeData,img:BarHeadingimg,heading:"Inconel 800 ROUND BAR"}} />}/>
    <Route path="/Inconel801BarGrade" element={<SSallCom name={{data: Inconel801BarData,Grade:InconelBarGradeData,img:BarHeadingimg,heading:"Inconel 801 ROUND BAR"}} />}/>
    <Route path="/Inconel825BarGrade" element={<SSallCom name={{data: Inconel825BarData,Grade:InconelBarGradeData,img:BarHeadingimg,heading:"Inconel 825 ROUND BAR"}} />}/>






    <Route path="/SSRoundBar" element={<SSsheet name={{data:StainlessSteelBarData,Grade:SSBarGradeData,heading:"STAINLESS STEEL ROUND BAR",img:BarHeadingimg}}  />}/>
   
    <Route path="/SS304BarGrade" element={<SSallCom name={{data:StainlessSteel304BarData,Grade:SSBarGradeData,heading:"STAINLESS STEEL 304 ROUND BAR",img:BarHeadingimg}} />}/>
    <Route path="/SS304LBarGrade" element={<SSallCom name={{data:StainlessSteel304LBarData,Grade:SSBarGradeData,heading:"STAINLESS STEEL 304L ROUND BAR",img:BarHeadingimg}} />}/>
    <Route path="/SS304HBarGrade" element={<SSallCom name={{data:StainlessSteel304HBarData,Grade:SSBarGradeData,heading:"STAINLESS STEEL 304H ROUND BAR",img:BarHeadingimg}} />}/>
    <Route path="/SS310SBarGrade" element={<SSallCom name={{data:StainlessSteel310SBarData,Grade:SSBarGradeData,heading:"STAINLESS STEEL 310S ROUND BAR",img:BarHeadingimg}} />}/>
    <Route path="/SS310HBarGrade" element={<SSallCom name={{data:StainlessSteel310HBarData,Grade:SSBarGradeData,heading:"STAINLESS STEEL 310H ROUND BAR",img:BarHeadingimg}} />}/>
    <Route path="/SS316BarGrade" element={<SSallCom name={{data:StainlessSteel316BarData,Grade:SSBarGradeData,heading:"STAINLESS STEEL 316 ROUND BAR",img:BarHeadingimg}} />}/>
    <Route path="/SS316HBarGrade" element={<SSallCom name={{data:StainlessSteel316HBarData,Grade:SSBarGradeData,heading:"STAINLESS STEEL 316H ROUND BAR",img:BarHeadingimg}} />}/>
    <Route path="/SS316LBarGrade" element={<SSallCom name={{data:StainlessSteel316LBarData,Grade:SSBarGradeData,heading:"STAINLESS STEEL 316L ROUND BAR",img:BarHeadingimg}} />}/>
    <Route path="/SS316TiBarGrade" element={<SSallCom name={{data:StainlessSteel316TiBarData,Grade:SSBarGradeData,heading:"STAINLESS STEEL 316Ti ROUND BAR",img:BarHeadingimg}} />}/>
    <Route path="/SS904LBarGrade" element={<SSallCom name={{data:StainlessSteel904BarData,Grade:SSBarGradeData,heading:"STAINLESS STEEL 904L ROUND BAR",img:BarHeadingimg}} />}/>

        <Route  exact path="/" element={<Home />} />
        <Route path="*" element={<Home />} />

        <Route path="about" element={<AboutUs />} />
        <Route path="productModi" element={<ProductModi  />}/>
        <Route path="/SheetMain" element={<SheetMain name={{data:SheetData,img:SheetImg,heading:"Sheet & Plate"}}  />}/>
        <Route path="/Coils" element={<SheetMain name={{data:CoilsData,heading:"COILS & Stirps",img:CoilsImg}}  />}/>
        <Route path="/ROUND_BAR" element={<SheetMain name={{data:RoundBarData,heading:"ROUND BAR",img:BarHImg}}  />}/>
        <Route path="/WIRE" element={<SheetMain name={{data:WireData,heading:"Wire",img:WireImg}}  />}/>
        <Route path="/Pipes_tubes" element={<SheetMain name={{data:PipesData,heading:"Pipes & Tubes",img:PipeImg}}  />}/>
        <Route path="/SSsheet" element={<SSsheet name={{data:SSSheetData,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL SHEET AND PLATE"}} />}/>
        <Route path="/Pipe_Fittings" element={<SheetMain name={{data:PipeFitingsData,img:BgFitingsimg,heading:"Pipe Fittings"}}  />}/>
        <Route path="/Flanges" element={<SheetMain name={{data:FlangeData,img:bgFlangeimg,heading:"Flanges"}}  />}/>
        


        <Route path="/SS202Grade" element={<SSallCom name={{data: SS202Data,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 202 SHEET AND PLATE"}} />}/>
        <Route path="/SS201Grade" element={<SSallCom name={{data: SS201SheetData,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 201 SHEET AND PLATE"}} />}/>

        
        {/* <Route path="/SS202Grade" element={<SS202Grade name={{data:SS202Data}} />}/> */}
        <Route path="/SS301Grade" element={<SSallCom name={{data: SS301Data1,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 301 SHEET AND PLATE"}} />}/>
       
        <Route path="/SS304Grade" element={<SSallCom name={{data: SS301Data,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 304 SHEET AND PLATE"}} />}/>
        <Route path="/SS304HGrade" element={<SSallCom name={{data:SS304HData,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 304H SHEET AND PLATE"}} />}/>
        <Route path="/SS304LGrade" element={<SSallCom name={{data:SS304LData,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 304L SHEET AND PLATE"}} />}/>
        <Route path="/SS310SGrade" element={<SSallCom name={{data:SS310SData,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 310S SHEET AND PLATE"}} />}/>
        <Route path="/SS310HGrade" element={<SSallCom name={{data:SS310HData,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 310H SHEET AND PLATE"}} />}/>
        <Route path="/SS316HGrade" element={<SSallCom name={{data:SS316LData,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 316H SHEET AND PLATE"}} />}/>
        <Route path="/SS316TiGrade" element={<SSallCom name={{data:SS316TiData,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 316Ti SHEET AND PLATE"}} />}/>
        <Route path="/SS321Grade" element={<SSallCom name={{data:SS321Data,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 321 SHEET AND PLATE"}} />}/>
        <Route path="/SS904LGrade" element={<SSallCom name={{data:SS904LData,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 904L SHEET AND PLATE"}} />}/>
        <Route path="/SS409Grade" element={<SSallCom name={{data:SS409Data,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 409 SHEET AND PLATE"}} />}/>
        {/* <Route path="/SS409LGrade" element={<SSallCom name={{data:SS409LData}} />}/> */}
        <Route path="/SS410SGrade" element={<SSallCom name={{data:SS410Data,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 410 SHEET AND PLATE"}} />}/>
        <Route path="/SS420Grade" element={<SSallCom name={{data:SS420Data,Grade:SSsheetGradeData,img:SubSheetImg,heading:"STAINLESS STEEL 420 SHEET AND PLATE"}} />}/>





        <Route path="/Inconel600Grade" element={<SSallCom name={{data:Inconel600Data,Grade:InconelGradeData,img:SubSheetImg,heading:"INCONEL 600 SHEET AND PLATE"}} />}/>
        <Route path="/Inconel601Grade" element={<SSallCom name={{data:Inconel601Data,Grade:InconelGradeData,img:SubSheetImg,heading:"INCONEL 601 SHEET AND PLATE"}} />}/>
        <Route path="/Inconel625Grade" element={<SSallCom name={{data: Inconel625Data,Grade:InconelGradeData,img:SubSheetImg,heading:"INCONEL 625 SHEET AND PLATE"}} />}/>
        <Route path="/Inconel718Grade" element={<SSallCom name={{data:Inconel718Data,Grade:InconelGradeData,img:SubSheetImg,heading:"INCONEL 718 SHEET AND PLATE"}} />}/>
        <Route path="/Inconel750Grade" element={<SSallCom name={{data:Inconel750Data ,Grade:InconelGradeData,img:SubSheetImg,heading:"INCONEL 750 SHEET AND PLATE"}} />}/>
        <Route path="/Inconel706Grade" element={<SSallCom name={{data: Inconel706Data,Grade:InconelGradeData,img:SubSheetImg,heading:"INCONEL 600 SHEET AND PLATE"}} />}/>
        <Route path="/InconelRA330Grade" element={<SSallCom name={{data:InconelRA330Data,Grade:InconelGradeData,img:SubSheetImg,heading:"INCONEL 600 SHEET AND PLATE"}} />}/>
        <Route path="/InconelSheet" element={<SSsheet name={{data:InconelSheetData,Grade:InconelGradeData,img:SubSheetImg ,img:SubSheetImg,heading:"INCONEL SHEET AND PLATE"}}  />}/>

        <Route path="/MonelSheet" element={<SSsheet name={{data:MonelSheetData,Grade:MonelGradeData,img:SubSheetImg,heading:"MONEL SHEET AND PLATE"}}  />}/>
        <Route path="/Monel400Sheets" element={<SSallCom name={{data:MONEL400SheetData,Grade:MonelGradeData,img:SubSheetImg,heading:"MONEL 400 SHEET AND PLATE"}} />}/>
        <Route path="/MonelK500Sheets" element={<SSallCom name={{data:MONELK500SheetData,Grade:MonelGradeData,img:SubSheetImg,heading:"MONEL K500 SHEET AND PLATE"}} />}/>

        <Route path="/NickelSheet" element={<SSsheet name={{data:NickelSheetsData,Grade:NickelGradeData,img:SubSheetImg,heading:"NICKEL SHEET AND PLATE"}}  />}/>
        <Route path="/Nickel200Grade" element={<SSallCom name={{data:Nickel200SheetsData,Grade:NickelGradeData,img:SubSheetImg,heading:"NICKEL 200 SHEET AND PLATE"}} />}/>
        <Route path="/Nickel201Grade" element={<SSallCom name={{data:Nickel201SheetsData,Grade:NickelGradeData,img:SubSheetImg,heading:"NICKEL 201 SHEET AND PLATE"}} />}/>
        <Route path="/Nickel212Grade" element={<SSallCom name={{data:Nickel212Data,Grade:NickelGradeData,img:SubSheetImg,heading:"NICKEL 212 SHEET AND PLATE"}} />}/>
        <Route path="/Nickel270Grade" element={<SSallCom name={{data:Nickel270Data,Grade:NickelGradeData,img:SubSheetImg,heading:"NICKEL 270 SHEET AND PLATE"}} />}/>
        <Route path="/Nickel222Grade" element={<SSallCom name={{data:Nickel222Data,Grade:NickelGradeData,img:SubSheetImg,heading:"NICKEL 222 SHEET AND PLATE"}} />}/>


        <Route path="/titaniumSheet" element={<SSsheet name={{data:TitaniumSheetsData,Grade:TitaniumGradeData,img:SubSheetImg,heading:"TITANIUM SHEET AND PLATE"}}  />}/>
        <Route path="/TitaniumGr1Grade" element={<SSallCom name={{data:TitaniumGrade1SheetsData,Grade:TitaniumGradeData,img:SubSheetImg,heading:"TITANIUM GR1 SHEET AND PLATE"}} />}/>
        <Route path="/TitaniumGr2Grade" element={<SSallCom name={{data:TitaniumGrade2SheetsData,Grade:TitaniumGradeData,img:SubSheetImg,heading:"TITANIUM GR2 SHEET AND PLATE"}} />}/>
        <Route path="/TitaniumGr3Grade" element={<SSallCom name={{data:TitaniumGrade3Sheets,Grade:TitaniumGradeData,img:SubSheetImg,heading:"TITANIUM GR3 SHEET AND PLATE"}} />}/>
        <Route path="/TitaniumGr4Grade" element={<SSallCom name={{data:TitaniumGrade4Data,Grade:TitaniumGradeData,img:SubSheetImg,heading:"TITANIUM GR4 SHEET AND PLATE"}} />}/>
        <Route path="/TitaniumGr5Grade" element={<SSallCom name={{data:TitaniumGrade5Data,Grade:TitaniumGradeData,img:SubSheetImg,heading:"TITANIUM GR5 SHEET AND PLATE"}} />}/>


        <Route path="/A286Sheet" element={<SSallCom name={{data:A286SheetsData,Grade:SheetoptionData,img:SubSheetImg,heading:"A286 SHEET AND PLATE"}} />}/>
        <Route path="/SMO254Sheet" element={<SSallCom name={{data:SMO254SheetsData,Grade:SheetoptionData,img:SubSheetImg,heading:"SMO254 SHEET AND PLATE"}} />}/>
        <Route path="/Alloy20Sheet" element={<SSallCom name={{data:Alloy20SheetsData,Grade:SheetoptionData,img:SubSheetImg,heading:"ALLOY20 SHEET AND PLATE"}} />}/>

        <Route path="/HastelloySheet" element={<SSallCom name={{data:HastelloySheetsData,Grade:HastelloyGradeData,img:SubSheetImg,heading:"HASTELLOY SHEET AND PLATE"}} />}/>
        <Route path="/HastelloyC22Sheet" element={<SSallCom name={{data:HastelloyC22Data,Grade:HastelloyGradeData,img:SubSheetImg,heading:"HASTELLOY C22 SHEET AND PLATE"}} />}/>
        <Route path="/HastelloyC276Sheet" element={<SSallCom name={{data:HastelloyC276Data,Grade:HastelloyGradeData,img:SubSheetImg,heading:"HASTELLOY C276 SHEET AND PLATE"}} />}/>
        <Route path="/DuplexSuperduplexSheet" element={<SSsheet name={{data:DuplexSuperduplexSheetsData,Grade:SheetoptionData,img:SubSheetImg,heading:"DUPLEX & SUPERDUPLEX SHEET AND PLATE"}} />}/>


 <Route path="/SSCoils" element={<SSsheet name={{data:StainlessSteelCoilsData ,Grade:SSCoilsGradeData,heading:"STAINLESS STEEL COILS & STIRPS",img:CoilsImg1}}  />}/>
 <Route path="/InconelCoils" element={<SSsheet name={{data:InconelCoilsData,Grade:InconelCoilsGradeData,heading:"INCONEL COILS & STIRPS",img:CoilsImg1}}  />}/>
 <Route path="/MonelCoils" element={<SSsheet name={{data:MonelCoilsData,Grade:MonelCoilsGradeData,heading:"MONEL COILS & STIRPS",img:CoilsImg1}}  />}/>
 <Route path="/NickelCoils" element={<SSsheet name={{data:NickelCoilsData,Grade:NickelCoilsGradeData,heading:"NICKEL COILS & STIRPS",img:CoilsImg1}}  />}/>
 <Route path="/titaniumCoils" element={<SSsheet name={{data:TitaniumCoilsData,Grade:TitaniumCoilsGradeData,heading:"TITANIUM COILS & STIRPS",img:CoilsImg1}}  />}/>
 <Route path="/A286Coils" element={<SSsheet name={{data:A286CoilsData,Grade:CoilsoptionData,heading:"A286 COILS",img:CoilsImg1}}  />}/>
 <Route path="/SMO254Coils" element={<SSsheet name={{data:SMO254CoilsData,Grade:CoilsoptionData,heading:"SMO254 COILS & STIRPS",img:CoilsImg1}}  />}/>

 <Route path="/HastelloyCoils" element={<SSsheet name={{data:HastelloyCoilsData,Grade:HastelloyCoilsGradeData,heading:"HASTELLOY COILS & STIRPS",img:CoilsImg1}}  />}/>
 <Route path="/Alloy20Coils" element={<SSsheet name={{data:Alloy20CoilsData,Grade:CoilsoptionData,heading:"ALLOY20 COILS",img:CoilsImg1}}  />}/>


 <Route path="/DuplexSuperduplexCoils" element={<SSsheet name={{data:DuplexCoilsData,Grade:DuplexCoilsGradeData,heading:"DUPLEX/SUPERDUPLEX COILS & STIRPS",img:CoilsImg1}}  />}/>
    
 <Route path="/Welding_Consumables" element={<WeldingWire   />}/>
        <Route path="products" element={<Products  message={{text_heading:"Special Alloys",img:Alloysimg}} />}>
          
      
        </Route> 
        <Route path="products/mildSteel" element={<MildSteel />}/>
        <Route path="products/stainless_steel" element={<StainlessSteel />}/>
        <Route path="products/carbon_steel" element={<CarbonSteel />}/>
        <Route path="products/high_nickel_alloys" element={<HighNickel />}/>
        <Route path="products/duplex_steel" element={<DuplexSteel />}/>
        <Route path="products/stellite" element={<Stellite />}/>
        <Route path="products/welding_consumbles" element={<WeldingConsumable />}/>
        <Route path="products/titanium_alloys" element={<TitaniumAlloys/>}/>
        <Route path="products/nickel_fasteners" element={<NickelFasteners/>}/>

        <Route path="contact" element={<ContactUs />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default BaseIndex