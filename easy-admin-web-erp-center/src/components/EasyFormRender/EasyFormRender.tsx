import React from 'react';
import {Form, FormItemProps, FormProps, Input, InputProps, SelectProps,Select} from "antd"

export type FormRenderOpt = {
    formItem:FormItemProps
    type:'select' | 'input'
    compProp: InputProps & SelectProps
}

type EasyFormRenderProps = {
    opt:FormRenderOpt[]
    config:FormProps
}

type Props = EasyFormRenderProps;

const EasyFormRender: React.FC<Props> = (props) => {

  return (
      <Form {...props.config}>
          {
              props.opt.map((item) => (
                  <Form.Item {...item.formItem}>
                      {
                         item.type === "input" && <Input {...item.compProp}/>
                      }
                      {
                          item.type === "select" && <Select {...item.compProp}/>
                      }
                  </Form.Item>
              ))
          }
      </Form>
  );
};

export default EasyFormRender;
