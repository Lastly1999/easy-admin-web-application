import React from 'react'
import "./EasyCard.less"

type EasyCardProps = {
	title: string | JSX.Element
	children: React.ReactNode;
}

const EasyCard: React.FC<EasyCardProps> = (props) => {
	return (
		<div className='easy-card'>
			<h4 className='easy-card-title'>{props?.title}</h4>
			<div>
				{props?.children}
			</div>
		</div>
	)
}

export default EasyCard