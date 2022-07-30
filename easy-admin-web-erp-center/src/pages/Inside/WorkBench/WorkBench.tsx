import React from 'react'
// components
import { Row, Col } from "antd"
import WelComeModule from "./components/WelComeModule/WelComeModule"
import SaleReportModule from "./components/SalesReportModule/SalesReportModule"
import MonthySaleReportModule from "./components/MonthySaleReportModule/MonthySaleReportModule"
import SaleStatusModule from "./components/SaleStatusModule/SaleStatusModule"
import SocialSourceModule from './components/SocialSourceModule/SocialSourceModule'
import RecentActiveModule from './components/RecentActiveModule/RecentActiveModule'
import "./WorkBench.less"

type Props = {}

const WorkBench: React.FC<Props> = (props) => {
	return (
		<Row gutter={[16, 16]}>
			<Col span={6} flex='end'>
				<div className='wel-come-left-module'>
					<WelComeModule></WelComeModule>
					<MonthySaleReportModule></MonthySaleReportModule>
				</div>
			</Col>
			<Col span={18}>
				<SaleReportModule></SaleReportModule>
			</Col>
			<Col span={8}>
				<SaleStatusModule></SaleStatusModule>
			</Col>
			<Col span={8}>
				<SocialSourceModule></SocialSourceModule>
			</Col>
			<Col span={8}>
				<RecentActiveModule></RecentActiveModule>
			</Col>
		</Row>
	)
}

export default WorkBench