import { Flex } from 'antd'
import React from 'react'
import Banner from './Banner'
import MenuList from './MenuList'
import SellersList from './SellersList'
import RevenueComponent from './RevenueGraph'
import CustomerMapComponent from './CustomerGraph'

const MainContent = () => {
  return (
    <>
    <div style={{flex: 1}}>
        <Flex vertical gap="2.3rem">
        <MenuList/>
          <RevenueComponent/>
          <CustomerMapComponent/>
            {/* <SellersList/> */}
        </Flex>
    </div>
    </>
  )
}

export default MainContent