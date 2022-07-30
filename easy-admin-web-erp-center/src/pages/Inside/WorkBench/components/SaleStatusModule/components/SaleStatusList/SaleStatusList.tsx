import React from 'react'
import { Statistic } from 'antd'
import "./SaleStatusList.less"
import { PieChartTwoTone } from '@ant-design/icons'

type Props = {}

const SaleStatusList: React.FC<Props> = (props) => {
	return (
		<div className='list-group'>
			<div className='list-group-item'>
				<Statistic title="This month Sale" value={112893} />
				<PieChartTwoTone style={{ fontSize: '40px' }} />
			</div>
			<div className='list-group-item'>
				<Statistic title="This month Sale" value={112893} />
				<PieChartTwoTone style={{ fontSize: '40px' }} />
			</div>
			<div className='list-group-item'>
				<Statistic title="This month Sale" value={112893} />
				<PieChartTwoTone style={{ fontSize: '40px' }} />
			</div>
			<div className='list-group-item'>
				<Statistic title="This month Sale" value={112893} />
				<PieChartTwoTone style={{ fontSize: '40px' }} />
			</div>
		</div>
	)
}

export default SaleStatusList