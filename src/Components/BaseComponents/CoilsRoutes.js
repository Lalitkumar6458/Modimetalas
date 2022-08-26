import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import { StainlessSteelCoilsData } from '../../Constants/Data/CoilsData'
import { SSsheetGradeData } from '../../Constants/Data/ProductData'
import SSsheet from './pages/ProductsPage/newProduct/SheetandPlate/SSsheet/SSsheet';
const CoilsRoutes = () => {
  return (
    <>

 <Route path="/SSCoils" element={<SSsheet name={{data:StainlessSteelCoilsData,Grade:SSsheetGradeData}}  />}/>
    

    </>
  )
}

export default CoilsRoutes