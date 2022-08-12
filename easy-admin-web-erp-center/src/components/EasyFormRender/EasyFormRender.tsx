import React from 'react';
import {
    Form,
    FormItemProps,
    FormProps,
    Input,
    InputProps,
    SelectProps,
    Select,
    TreeSelect,
    TreeProps,
    TreeSelectProps,
    SwitchProps, Switch
} from "antd"
import EasyIconSelect from "@/components/EasyIconSelect/EasyIconSelect";

export type FormRenderOpt = {
    formItem: FormItemProps
    type: 'select' | 'input' | 'treeSelect' | 'iconSelect' | 'switch'
    compProp: InputProps & SelectProps & TreeSelectProps & SwitchProps
}

type EasyFormRenderProps = {
    opt: FormRenderOpt[]
    config?: FormProps
}

const EasyFormRender: React.FC<EasyFormRenderProps> = (props) => {

    const formItemInput = (configItem: FormRenderOpt) => {
        const compItem: { [index: string]: any } = {
            input: <Input {...configItem.compProp} />,
            select: <Select {...configItem.compProp}/>,
            treeSelect: <TreeSelect {...configItem.compProp} />,
            switch:<Switch {...configItem.compProp}/>,
            iconSelect:<EasyIconSelect {...configItem.compProp}></EasyIconSelect>
        }
        return configItem?.type && compItem[configItem.type]
    }

    return (
        <Form {...props.config}>
            {
                props.opt.map((item) => (
                    <Form.Item {...item.formItem}>
                        {
                            formItemInput(item)
                        }
                    </Form.Item>
                ))
            }
        </Form>
    );
};

export default EasyFormRender;
