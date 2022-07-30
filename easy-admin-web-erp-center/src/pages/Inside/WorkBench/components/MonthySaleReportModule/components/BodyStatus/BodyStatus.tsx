import React from 'react'
import { Button, Statistic } from 'antd'
import "./BodyStatus.less"

type Props = {}

const BodyStatus: React.FC<Props> = (props) => {
	return (
		<div className='body-status'>
			<Statistic title="Sale status" value={112893} />
			<Button type="primary">查看更多</Button>
		</div>
	)
}

export default BodyStatus