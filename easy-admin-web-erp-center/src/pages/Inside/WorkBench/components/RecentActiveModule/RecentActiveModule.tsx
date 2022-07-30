import React, { useEffect, useState } from 'react'
import EasyCard from '@/components/EasyCard/EasyCard'
import { Radar, RadarConfig } from '@ant-design/charts'

type Props = {}

const RecentActiveModule: React.FC<Props> = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = () => {
		fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json')
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => {
				console.log('fetch data failed', error);
			});
	};
	const config: RadarConfig= {
		data,
		height: 337,
		xField: 'item',
		yField: 'score',
		seriesField: 'user',
		meta: {
			score: {
				alias: '分数',
				min: 0,
				max: 80,
			},
		},
		xAxis: {
			line: null,
			tickLine: null,
			grid: {
				line: {
					style: {
						lineDash: null,
					},
				},
			},
		},
		// 开启面积
		area: {},
		// 开启辅助点
		point: {
			size: 2,
		},
	};
	return (
		<div>
			<EasyCard title={(<div>RECENT ACTIVITY</div>)}>
				<Radar {...config} />
			</EasyCard>
		</div>
	)
}

export default RecentActiveModule