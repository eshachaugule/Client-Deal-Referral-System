import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import '../CreateNewAccount/CreateAccount.css';
import { useEffect, useState } from 'react';

const FormSignup = ({ submitForm }) => {

  const { handleChange, handleSubmit, handleDropdown, values, errors } = useForm(
    submitForm,
    validate
  );

  const regions = [
    {id:"1",name:"Asia Pacific"},
    {id:"2",name:"Europe, Middle East and Africa"},
    {id:"3",name:"North America"},
    {id:"4",name:"Latin America"}
  ];
  const countries = [
    {id:"1",regionId:"1",name:"Australia"},
    {id:"2",regionId:"1",name:"Japan"},
    {id:"3",regionId:"1",name:"Malaysia"},
    {id:"4",regionId:"1",name:"India"},
    {id:"5",regionId:"1",name:"China"},
    {id:"6",regionId:"1",name:"Singapore"},
    {id:"7",regionId:"2",name:"Ireland"},
    {id:"8",regionId:"2",name:"United Kingdom"},
    {id:"9",regionId:"2",name:"Hungary"},
    {id:"10",regionId:"2",name:"Germany"},
    {id:"11",regionId:"2",name:"Cameroon"},
    {id:"12",regionId:"2",name:"United Arab Emirates"},
    {id:"13",regionId:"2",name:"Bahrain"},
    {id:"14",regionId:"2",name:"Nigeria"},
    {id:"15",regionId:"3",name:"Canada"},
    {id:"16",regionId:"3",name:"United States"},
    {id:"17",regionId:"4",name:"Mexico"},
    {id:"18",regionId:"4",name:"Uruguay"},
    {id:"19",regionId:"4",name:"Jamaica"},
    {id:"20",regionId:"4",name:"Costa Rica"},
  ]

  const industries = [
    {id:"1",name:"Consumer Discretionary"},
    {id:"2",name:"Consumer Staples"},
    {id:"3",name:"Technology"},
    {id:"4",name:"Financials"},
    {id:"5",name:"Materials"},
    {id:"6",name:"Energy"},
    {id:"7",name:"Healthcare"},
    {id:"8",name:"Industrials"},
    {id:"9",name:"Real Estate"},
    {id:"10",name:"Hospitality"},
    {id:"11",name:"Telecommunications"},
    {id:"12",name:"Transportation"},
    {id:"13",name:"Utilities"},
    {id:"14",name:"Education"},
    {id:"15",name:"Media and Entertainment"}
  ];
  const products = [
    {id:"1",industryId:"1",name:"Car"},
    {id:"2",industryId:"1",name:"Computer"},
    {id:"3",industryId:"1",name:"Clothing"},
    {id:"4",industryId:"1",name:"Jewellery"},
    {id:"5",industryId:"1",name:"Watches"},
    {id:"6",industryId:"1",name:"Furniture"},
    {id:"7",industryId:"1",name:"Toys"},
    {id:"8",industryId:"1",name:"Sports Equipment"},
    {id:"9",industryId:"1",name:"Musical Instruments"},
    {id:"10",industryId:"1",name:"Outdoor Gear"},
    {id:"11",industryId:"1",name:"Travel Accessories"},
    {id:"12",industryId:"2",name:"Food and Beverages"},
    {id:"13",industryId:"2",name:"Pet Supplies"},
    {id:"14",industryId:"2",name:"Health Products"},
    {id:"15",industryId:"2",name:"Baby Products"},
    {id:"16",industryId:"3",name:"Home Appliances"},
    {id:"17",industryId:"3",name:"Electronics"},
    {id:"18",industryId:"4",name:"Banking Services"},
    {id:"19",industryId:"4",name:"Investment Management"},
    {id:"20",industryId:"4",name:"Insurance"},
    {id:"21",industryId:"4",name:"Wealth Management"},
    {id:"22",industryId:"5",name:"Mining Equipment"},
    {id:"23",industryId:"5",name:"Precious Metals"},
    {id:"24",industryId:"5",name:"Chemicals"},
    {id:"25",industryId:"6",name:"Oil & Gas"},
    {id:"26",industryId:"6",name:"Renewable Energy"},
    {id:"27",industryId:"7",name:"Pharmaceuticals"},
    {id:"28",industryId:"8",name:"Tools"},
    {id:"29",industryId:"8",name:"Office Supplies"},
    {id:"30",industryId:"9",name:"Residential Property"},
    {id:"31",industryId:"9",name:"Commercial Property"},
    {id:"32",industryId:"9",name:"REITs"},
    {id:"33",industryId:"10",name:"Hotels"},
    {id:"34",industryId:"10",name:"Restaurants"},
    {id:"35",industryId:"10",name:"Cruise Ships"},
    {id:"36",industryId:"10",name:"Theme Parks"},
    {id:"37",industryId:"10",name:"Casinos"},
    {id:"38",industryId:"11",name:"Internet Service Providers"},
    {id:"39",industryId:"11",name:"Cable Companies"},
    {id:"40",industryId:"11",name:"Mobile Phone Operators"},
    {id:"41",industryId:"11",name:"Telecom Equipment Manufacturers"},
    {id:"42",industryId:"12",name:"Airways"},
    {id:"43",industryId:"12",name:"Railways"},
    {id:"44",industryId:"12",name:"Shipping Companies"},
    {id:"45",industryId:"12",name:"Trucking Companies"},
    {id:"46",industryId:"12",name:"Automobile Manufacturers"},
    {id:"47",industryId:"13",name:"Electricity Providers"},
    {id:"48",industryId:"13",name:"Natural Gas Providers"},
    {id:"49",industryId:"13",name:"Water Companies"},
    {id:"50",industryId:"13",name:"Waste Management Companies"},
    {id:"51",industryId:"14",name:"Schools"},
    {id:"52",industryId:"14",name:"Universities"},
    {id:"53",industryId:"14",name:"Online Education Platforms"},
    {id:"54",industryId:"14",name:"Textbook Publishers"},
    {id:"55",industryId:"15",name:"Television Networks"},
    {id:"56",industryId:"15",name:"Movie Studios"},
    {id:"57",industryId:"15",name:"Music Labels"},
    {id:"58",industryId:"15",name:"Streaming Services"},
    {id:"59",industryId:"15",name:"Video Game Companies"},
  ]

  const [ region, setRegion] = useState([]);
  const [ country, setState] = useState([]);

  const [ industry, setIndustry] = useState([]);
  const [ product, setProduct] = useState([]);


  useEffect(()=>{
    setRegion(regions);
  },[])

  const handleRegion = (id) => {
    const dt = countries.filter(x => x.regionId === id);
    setState(dt);

    const regionMap = region.filter(x => x.id === id)
    const finalRegion = regionMap.map(
        (element) => {
            return (element.name)
        }
    )
    values.region = String(finalRegion)
    console.log(String(finalRegion))
  }

  useEffect(()=>{
    setIndustry(industries);
  },[])

  const handleIndustry = (id) => {
    const dt = products.filter(x => x.industryId === id);
    setProduct(dt);

    const industryMap = industry.filter(x => x.id === id)
    const finalIndustry = industryMap.map(
        (element) => {
            return (element.name)
        }
    )
    values.industry = String(finalIndustry)
    console.log(String(finalIndustry))
  }


  return (
    <><div className='form-content-left'>
    <form className='formm' noValidate>
    <h1 className='heading'>
          Enter the client information below to
      </h1>
      <div className='form-inputs'>
          <label className='form-label'>Client Name*</label>
          <input
            className='form-input'
            type='text'
            name='clientname'
            placeholder='Enter the name of your client'
            value={values.clientname}
            onChange={handleChange}
          />
          {errors.clientname && <p>{errors.clientname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Client Company</label>
          <input
            className='form-input'
            type='text'
            name='clientcompany'
            placeholder='Enter the company name of the client'
            value={values.clientcompany}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs' >
          <label className='form-label' >Bank Department</label>
          </div>
          <div className='form-inputs'>
            <input
            className='radio'
            type='radio'
            name='companydepartment'
            value="corporatebanking"
            onChange={handleChange}
          />Corporate Banking
          <input
            className='radio2'
            type='radio'
            name='companydepartment'
            placeholder='Select company department'
            value="globalmarkets"
            onChange={handleChange}
          />Global Markets
          <input
            className='radio2'
            type='radio'
            name='companydepartment'
            placeholder='Select company department'
            value="investmentbanking"
            onChange={handleChange}
          />Investment Banking
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Deal Type*</label>
          </div>
          <div className='form-inputs'>
          <input
            className='radio'
            type='radio'
            name='dealtype'
            value="Private"
            onChange={handleChange}
          />                      Private
          <input
            className='radio2'
            type='radio'
            name='dealtype'
            value="Public"
            onChange={handleChange}
          />          Public
          {errors.dealtype && <p>{errors.dealtype}</p>}
        </div>
    </form>
  </div>
    <div className='form-content-rightt'>
      <form onSubmit={handleSubmit} className='formmm' noValidate>
      <h1 className='headingg'>
           get the best referral deal for them!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Region*</label>

            <div className="App">
                  <select id="ddlRegion" className='form-input' onChange={(e) => handleRegion(e.target.value)}>
                    <option value="0" selected disabled >Select Region</option>
                  {
                    region && 
                    region !== undefined ?
                    region.map((ctr,index) => {
                        return(
                            <option key={index} value={ctr.id}>{ctr.name}</option>
                        )
                    })
                    :"No Region"
                  }

                  </select>
                  {errors.region && <p>{errors.region}</p>}

            </div>

        </div>
        <div className='form-inputs'>
          <label className='form-label'>Country</label>
      <select id="ddlStates" className='form-input' onChange={(e) => handleDropdown(e.target.value)}>
        <option value="0" selected disabled >Select Country</option>
        {
          country && 
          country !== undefined ?
          country.map((ctr,index) => {
              return(
                  <option key={index} value={ctr.name}>{ctr.name}</option>
              )
          })
          :"No Country"
        }
      </select>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Industry*</label>
    
          <div className="App">
            <select id="ddlIndustry" className='form-input' onChange={(e) => handleIndustry(e.target.value)}>
              <option value="0" selected disabled >Select Industry</option>
              {
              industry && 
              industry !== undefined ?
              industry.map((ctr,index) => {
                  return(
                      <option key={index} value={ctr.id}>{ctr.name}</option>
                  )
              })
              :"No Industry"
            
            }

            </select>    
            {errors.industry && <p>{errors.industry}</p>}

          </div>

        </div>
        <div className='form-inputs'>
          <label className='form-label'>Product*</label>
         

          <select id="ddlStates" className='form-input' onChange={(e) => handleDropdown(e.target.value)}>
                  <option value = "0" selected disabled >Select Product</option>
                  {
                  product && 
                  product !== undefined ?
                  product.map((ctr,index) => {
                      return(
                          <option key={index} value={ctr.name}>{ctr.name}</option>
                      )
                  })
                  :"No Product"

                }

          </select>
          {errors.product && <p>{errors.product}</p>}

        </div>
        
        <button className='form-input-btnn' type='submit'>
          Get Referral Employee Name
        </button>

      </form>
    </div>
    </>
  );
};

export default FormSignup;