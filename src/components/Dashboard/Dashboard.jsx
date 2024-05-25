import { Flex } from 'antd'
import React from 'react'
import MainContent from './content/MainContent'
import SideContent from './content/SideContent'
import Banner from './content/Banner'

const Dashboard = () => {
  return (
    <div style={{ flex: 1 }}>
    <Flex vertical gap="2.3rem">
        <Banner />
        <Flex horizontal gap="2.3rem">
            <MainContent />
            <SideContent />
        </Flex>
    </Flex>
</div>
  )
}

export default Dashboard