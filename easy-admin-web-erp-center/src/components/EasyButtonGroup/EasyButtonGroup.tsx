import React from 'react';
import {Button, Col, Row} from "antd"
import "./EasyButtonGroup.less"
import {ButtonProps} from "antd/lib/button/button"
import {ColProps} from "antd/lib/grid/col";
import {RowProps} from "antd/lib/grid/row";

export type ButtonGroupItemProps = {
    text:string
    key: string | number | null
    colProps?:ColProps
} & ButtonProps

interface OwnProps {
    layoutConfig?:RowProps
    opt:ButtonGroupItemProps[]
    onClick:(item:ButtonGroupItemProps) => void
}

type Props = OwnProps;

const EasyButtonGroup: React.FC<Props> = (props) => {

    const itemClick = (item:ButtonGroupItemProps) => {
        if(props.onClick) props.onClick(item)
    }

    return (
      <div className="easy-button-group">
          <Row style={{width:"100%"}} {...props.layoutConfig}>
              {
                  props.opt.map((item) => (
                      <Col {...item.colProps}><Button onClick={() => itemClick(item)} {...item}>{item.text}</Button></Col>
                  ))
              }
          </Row>
      </div>
    )
};

export default EasyButtonGroup;
