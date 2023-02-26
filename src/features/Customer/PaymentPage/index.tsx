import React from 'react'
import Layout from '../../../layout/Customer'
import PaymentDetails from './PaymentDetails'
import ProductList from './ProductList'

function PaymentPage() {
  return (
    <Layout >
    <div className='flex p-14 '>
        <ProductList />
        <PaymentDetails />
    </div>
    </Layout>
  )
}

export default PaymentPage