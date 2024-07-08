import React from 'react'
import Navbar from '../features/Navbar/DashboardNavbar'
import ProductList from '../features/productList/components/ProductList'

const Home = () => {
  return (
    <>
    <div>
      <Navbar >
       <ProductList></ProductList>
       </Navbar>
     </div>
    </>
  )
}

export default Home