import React from "react";
import Products from "../Products";
import { CarbonImgData } from "../../../../../Constants/Data/OfferData";
import Contact_btn from '../../../contact_btn'
import bgimg from '../../../../../Constants/Images/duplex_steel/bgimg.jpg'



const DuplexSteel = () => {
  window.scrollTo({
    top: 800, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  var heading='Contact Modi Metals for Duplex Steel Materials Today'
  var text='Contact us for more information regarding our Duplex Steel material options, or request a quote for further pricing details today. Modi Metals is your trusted Duplex Steel supplier and manufacturer of premium Duplex Steel materials.'

  const value_f = " <0.25";
  return (
    <>
    
    <Products message={{text_heading:"Duplex Steel",img:bgimg}}/>

      <div className="products_type">
        <div className="stainless_steel">
          <h2 className="">DuplexSteel</h2>
          <p>
            Duplex stainless steels have a combination of two phases, ferrite
            and austenite in approximately equal measure. This allows them to
            benefit from the advantages of both austenitic and ferritic
            stainless steels, leading to increased strength, improved
            weldability, higher toughness and resistance to several types of
            corrosion. Commercially, they are also cheaper than austenitic
            stainless steels due to their lower nickel content.
          </p>
          <p>
            Duplex Stainless Steel Long Products are the family of steels that
            have a mixed micro-structure of 50% ferrite and 50% austenite. They
            are known to offer exceptional strength and astounding aesthetic
            qualities along with better resistance to corrosion and high
            temperature, superior hygienic surface finishing, and improved steel
            recyclability.
          </p>
          <p>
            At Modi Metals, we are committed to ensuring the development of
            highly sustainable long products that meet the expectations and
            requirements of our clients. As a result of our drive to
            continuously improve and transform our products, we manufacture
            customized duplex stainless products in our ultra-modern production
            facilities in multiple grades and sizes. By leveraging the expertise
            of the team of experts, we develop a wide range of
            corrosion-resistant duplex stainless steel products that maintain a
            uniform size and surface tolerance in diverse environments.
          </p>
          <div className="container_carbon ">
            <h5>The properties of duplex stainless steel</h5>
            <p>
              Typical duplex stainless steels show a higher yield strength than
              typical martensitic, austenitic and ferritic grades. However, they
              have a narrow range of working temperatures due to the
              precipitation of intermetallic phases that starts to occur above
              300 oC and the onset of brittleness as they approach cryogenic
              temperatures [2]. The table below presents selected properties of
              some common grades of duplex stainless steels.{" "}
            </p>
            <div className='table-responsive'>
              <table className="table table-success table-striped mt-4">
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td>
                      <p>
                        <span>ASTM A789 Grade S32520 Heat-Treated</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>ASTM A790 Grade S31803 Heat-Treated</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>ASTM A790 Grade S32304 Heat-Treated</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>ASTM A815 Grade S32550 Heat-Treated</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>ASTM A815 Grade S32205 Heat-Treated</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Elastic modulus</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>200 GPa&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>200 GPa&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>200 GPa&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>200 GPa&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>200 GPa&nbsp;</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Elongation</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>25 %&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>25 %&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>25 %&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>15 %&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>20 %&nbsp;</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Tensile strength</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>770 MPa&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>620 MPa&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>600 MPa&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>800 MPa&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>655 MPa&nbsp;</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Hardness, Brinell</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>310</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>290</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>290</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>302</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>290</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Yield strength</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>550 MPa&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>450 MPa&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>400 MPa&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>550 MPa&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>450 MPa&nbsp;</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Coefficient of thermal expansion</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>1E-5 1/K&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>1E-5 1/K&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>1E-5 1/K&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>1E-5 1/K&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>1E-5 1/K&nbsp;</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Specific heat capacity</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>440 - 502 J/(kg·K)&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>440 - 502 J/(kg·K)&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>440 - 502 J/(kg·K)&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>440 - 502 J/(kg·K)&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>440 - 502 J/(kg·K)&nbsp;</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Thermal conductivity</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>13 - 30 W/(m·K)&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>13 - 30 W/(m·K)&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>13 - 30 W/(m·K)&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>13 - 30 W/(m·K)&nbsp;</span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>13 - 30 W/(m·K)&nbsp;</span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="chemical_composition d-flex flex-column justify-content-lg-start">
            <h3 className="align-self-start">Chemical Composition</h3>
          <div className="table-responsive">
          <table className="table table-success table-striped ">
              <thead>
                <tr>
                  <th>
                    <strong>Standard</strong>
                  </th>
                  <th>
                    <strong>Grade</strong>
                  </th>
                  <th>
                    <strong>C%</strong>
                  </th>
                  <th>
                    <strong>Si%</strong>
                  </th>
                  <th>
                    <strong>Mn%</strong>
                  </th>
                  <th>
                    <strong>P%</strong>
                  </th>
                  <th>
                    <strong>S%</strong>
                  </th>
                  <th>
                    <strong>Cr%</strong>
                  </th>
                  <th>
                    <strong>Mo%</strong>
                  </th>
                  <th>
                    <strong>Ni(Max)</strong>
                  </th>
                  <th>
                    <strong>Cu%</strong>
                  </th>
                  <th>
                    <strong>N2(Max)</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ASTM A 182:2016</td>
                  <td>F-51</td>
                  <td>0.03</td>
                  <td>1</td>
                  <td>2</td>
                  <td>0.03</td>
                  <td>0.02</td>
                  <td>21-23</td>
                  <td>2.5-35</td>
                  <td>4.5-6.5</td>
                  <td>–</td>
                  <td>0.08-0.20</td>
                </tr>
                <tr>
                  <td>ASTM A 182:2013</td>
                  <td>F-60</td>
                  <td>0.03</td>
                  <td>1</td>
                  <td>2</td>
                  <td>0.03</td>
                  <td>0.02</td>
                  <td>22-23</td>
                  <td>3.0-3.5</td>
                  <td>4.5-6.5</td>
                  <td>–</td>
                  <td>0.14-0.20</td>
                </tr>
                <tr>
                  <td>ASTM A 182: 2013</td>
                  <td>F-53</td>
                  <td>0.03</td>
                  <td>0.8 1.2</td>
                  <td>0.035</td>
                  <td>0.02</td>
                  <td>24-26</td>
                  <td>3-5</td>
                  <td>6.0-8.0</td>
                  <td>0.5</td>
                  <td>0.24-0.32</td>
                  <td>–</td>
                </tr>
                <tr>
                  <td>ASTM A 276:2013</td>
                  <td>UNS S32205</td>
                  <td>0.03</td>
                  <td>1</td>
                  <td>2</td>
                  <td>0.03</td>
                  <td>0.02</td>
                  <td>22-23</td>
                  <td>3.0-3.5</td>
                  <td>4.5-6.5</td>
                  <td>–</td>
                  <td>0.14-0.2</td>
                </tr>
                <tr>
                  <td>ASTM A 276:2013</td>
                  <td>UNS S31803</td>
                  <td>0.03</td>
                  <td>1</td>
                  <td>2</td>
                  <td>0.03</td>
                  <td>0.02</td>
                  <td>21-23</td>
                  <td>2.5-3.5</td>
                  <td>4.5-6.5</td>
                  <td>–</td>
                  <td>0.08-0.20</td>
                </tr>
                <tr>
                  <td>ASTM A240:2005</td>
                  <td>UNS S32750</td>
                  <td>0.03</td>
                  <td>0.8</td>
                  <td>1.2</td>
                  <td>0.035</td>
                  <td>0.02</td>
                  <td>24-26</td>
                  <td>3-5</td>
                  <td>6.0-8.0</td>
                  <td>0.5</td>
                  <td>0.24-0.32</td>
                </tr>
                <tr>
                  <td>DIN EN 10088-3:2005</td>
                  <td>1.44.62</td>
                  <td>0.03</td>
                  <td>1</td>
                  <td>2</td>
                  <td>0.035</td>
                  <td>0.015</td>
                  <td>21-23</td>
                  <td>2.5-3.5</td>
                  <td>4.5-6.5</td>
                  <td>–</td>
                  <td>0.1-0.22</td>
                </tr>
                <tr>
                  <td>DIN EN 10088-3:2005</td>
                  <td>1.4460</td>
                  <td>0.05</td>
                  <td>1</td>
                  <td>2</td>
                  <td>0.035</td>
                  <td>0.03</td>
                  <td>25-28</td>
                  <td>1.3-2.0</td>
                  <td>4.5-6.5</td>
                  <td>–</td>
                  <td>0.05-0.2</td>
                </tr>
                <tr>
                  <td>EN 10095 :1999</td>
                  <td>1.4821</td>
                  <td>01-0.2</td>
                  <td>08-15</td>
                  <td>2</td>
                  <td>0.04</td>
                  <td>0.015</td>
                  <td>24.5-26.5</td>
                  <td>–</td>
                  <td>3.5-5.5</td>
                  <td>–</td>
                  <td>0.11</td>
                </tr>
                <tr>
                  <td>DIN EN 10088-3:2005</td>
                  <td>1.4410</td>
                  <td>0.03</td>
                  <td>1</td>
                  <td>2</td>
                  <td>0.035</td>
                  <td>0.015</td>
                  <td>24-26</td>
                  <td>3.0-4.5</td>
                  <td>6.0-8.0</td>
                  <td>–</td>
                  <td>0.24-0.35</td>
                </tr>
              </tbody>
            </table>
          </div>
         
          </div>

          
        </div>

        <Contact_btn  content={{heading:heading,text:text}}/>
      </div>
    </>
  );
};

export default DuplexSteel;
