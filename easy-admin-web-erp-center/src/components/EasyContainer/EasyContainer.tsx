import React from 'react'
import "./EasyContainer.less"

type EasyContainerProps = {
	children: JSX.Element | string
}

const EasyContainer: React.FC<EasyContainerProps> = (props) => {
	return (
		<div className='easy-container'>
			{props?.children}
		</div>
	)
}

export default EasyContainer