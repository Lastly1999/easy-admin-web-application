import { Button } from 'antd'
import React from 'react'
import EasyCard from '@/components/EasyCard/EasyCard'
import "./WelComeModule.less"

type Props = {}

const WelComeModule: React.FC<Props> = (props) => {
	return (
		<div className='wel-come-module'>
			<EasyCard title={(<div> 欢迎回来! </div>)}>
				<div className='wel-come-body'>
					<div className='widget-left'>
						<div className='text-muted'> Xoric Dashboard</div>
						<Button type="primary">查看更多</Button>
					</div>
					<div className='widget-img'>
						<img height={90} src="/src/assets/imgs/inside/widget-img.png" alt="#" />
					</div>
				</div>
			</EasyCard>
		</div>
	)
}

export default WelComeModule