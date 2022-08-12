import {Select, SelectProps} from 'antd'
import React from 'react'

type EasyIconSelectProps = {} & SelectProps

export const antDesignIcons: string[] = [
	'StepBackwardOutlined',
	'StepForwardOutlined',
	'FastBackwardOutlined',
	'FastForwardOutlined',
	'ShrinkOutlined',
	'ArrowsAltOutlined',
	'DownOutlined',
	'UpOutlined',
	'LeftOutlined',
	'RightOutlined',
	'CaretUpOutlined',
	'CaretDownOutlined',
	'CaretLeftOutlined',
	'CaretRightOutlined',
	'UpCircleOutlined',
	'DownCircleOutlined',
	'LeftCircleOutlined',
	'RightCircleOutlined',
	'DoubleRightOutlined',
	'DoubleLeftOutlined',
	'VerticalLeftOutlined',
	'VerticalRightOutlined',
	'VerticalAlignTopOutlined',
	'VerticalAlignMiddleOutlined',
	'VerticalAlignBottomOutlined',
	'ForwardOutlined',
	'BackwardOutlined',
	'RollbackOutlined',
	'EnterOutlined',
	'RetweetOutlined',
	'SwapOutlined',
	'SwapLeftOutlined',
	'SwapRightOutlined',
	'ArrowUpOutlined',
	'ArrowDownOutlined',
	'ArrowLeftOutlined',
	'ArrowRightOutlined',
	'PlayCircleOutlined',
	'UpSquareOutlined',
	'DownSquareOutlined',
	'LeftSquareOutlined',
	'RightSquareOutlined',
	'LoginOutlined',
	'LogoutOutlined',
	'MenuFoldOutlined',
	'MenuUnfoldOutlined',
	'BorderBottomOutlined',
	'BorderHorizontalOutlined',
	'BorderInnerOutlined',
	'BorderOuterOutlined',
	'BorderLeftOutlined',
	'BorderRightOutlined',
	'BorderTopOutlined',
	'BorderVerticleOutlined',
	'PicCenterOutlined',
	'PicLeftOutlined',
	'PicRightOutlined',
	'RadiusBottomleftOutlined',
	'RadiusBottomrightOutlined',
	'RadiusUpleftOutlined',
	'RadiusUprightOutlined',
	'FullscreenOutlined',
	'FullscreenExitOutlined',
]

const EasyIconSelect: React.FC<EasyIconSelectProps> = (props) => {
	return (
		<Select {...props} dropdownRender={() => <div></div>}>EasyIconSelect</Select>
	)
}

export default EasyIconSelect