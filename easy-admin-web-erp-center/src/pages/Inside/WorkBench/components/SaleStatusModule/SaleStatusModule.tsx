import React from 'react'
import EasyCard from '@/components/EasyCard/EasyCard'
import SaleStatusList from './components/SaleStatusList/SaleStatusList'

type Props = {}

const SaleStatusModule: React.FC<Props> = (props) => {
	return (
		<div>
			<EasyCard title={(<div> SALES STATUS </div>)}>
				<SaleStatusList></SaleStatusList>
			</EasyCard>
		</div>
	)
}

export default SaleStatusModule