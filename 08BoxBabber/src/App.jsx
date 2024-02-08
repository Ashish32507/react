import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/product/product'
import AddNewProcut from './components/newProduct/newproduct'



function App() {

  const productData = [
    {
      day:25,
      month:"June",
      year:2005,
      name:"Maggi"
    },
    {
      day:28,
      month:"April",
      year:2010,
      name:"Pasta"
    },
    {
      day:12,
      month:"August",
      year:2024,
      name:"Gulab Jamun"
    },
    {
      day:10,
      month:"Nov",
      year:2023,
      name:"Tide"
    }
  ]

  function printProductData(data){
    console.log(data);
  }
  return (
    <>
      <AddNewProcut ashish={printProductData}/> 
      <Product data={productData} />
    </>
  )
}

export default App;
