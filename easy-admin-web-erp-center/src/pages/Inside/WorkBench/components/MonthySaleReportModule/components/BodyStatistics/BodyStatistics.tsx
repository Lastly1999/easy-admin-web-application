import React from 'react'
import { RingProgress } from '@ant-design/charts'
import { Statistic } from 'antd'
import "./BodyStatistics.less"

type Props = {}

const BodyStatistics: React.FC<Props> = (props) => {
	const config = {
		height: 70,
		width: 70,
		autoFit: false,
		percent: 0.7,
		color: ['#5B8FF9', '#E8EDF3'],
	};
	return (
		<div className='body-statistics'>
			<div className='body-statistics-left'>
				<Statistic title="This month Sale" value={112893} />
			</div>
			<div className='body-statistics-round'>
				<RingProgress {...config}></RingProgress>
			</div>
		</div>
	)
}

export default BodyStatistics