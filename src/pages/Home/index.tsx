import React from 'react'
import Banner from '../../features/Home/Banner'
import Collection from '../../features/Home/Collection'
import Layout from '../../layout'
import ClothesSlider from '../../features/ClothesSlider'

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