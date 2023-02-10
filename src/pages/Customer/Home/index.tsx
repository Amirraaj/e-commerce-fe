import React from 'react'
import Banner from '../../../features/Customer/Home/Banner'
import Collection from '../../../features/Customer/Home/Collection'
import Layout from '../../../layout/Customer'
import ClothesSlider from '../../../features/Customer/ClothesSlider'

function Home() {
  return (
    <Layout>
      <Banner/>
      <Collection/>
      <div className="title text-primary font-bold text-center py-5 text-3xl">
        Products
      </div>
      <ClothesSlider title="Best Seller"/>
      <ClothesSlider title="New Products"/>
      <ClothesSlider title="Recommended For You"/>
    </Layout>
  )
}

export default Home