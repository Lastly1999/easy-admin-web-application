import React from 'react'
import EasyCard from '@/components/EasyCard/EasyCard'
import { Divider } from "antd"
import BodyStatistics from "./components/BodyStatistics/BodyStatistics"
import BodyStatus from './components/BodyStatus/BodyStatus'
import "./MonthySaleReportModule.less"

type Props = {}

const MonthySaleReportModule: React.FC<Props> = (props) => {
	return (
		<div className='monthy-sale-report-module'>
			<EasyCard title={(<div> SALES REPORT </div>)}>
				<div className='monthy-sale-report-body'>
					<BodyStatistics></BodyStatistics>
					<Divider />
					<BodyStatus></BodyStatus>
				</div>
			</EasyCard>
		</div>
	)
}

export default MonthySaleReportModule