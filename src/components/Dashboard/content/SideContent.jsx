import { Flex } from 'antd'
import React from 'react'
import ContentSidebar from './ContentSidebar'
import Activity from './Activity'
import OrderSummary from './OrderSummary'
import SellersList from './SellersList'

const SideContent = () => {
  return (
    <Flex vertical gap='2.3rem' style={{width: "300px"}}>
      <OrderSummary/>
        {/* <ContentSidebar/> */}
        <SellersList/>
        <Activity/>
    </Flex>
  )
}

export default SideContent