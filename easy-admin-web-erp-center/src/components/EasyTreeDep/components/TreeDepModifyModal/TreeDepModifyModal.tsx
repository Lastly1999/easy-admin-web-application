import React, { useEffect, useState } from 'react';
import { FormProps, Modal, ModalProps, Form } from "antd"
import EasyFormRender, { FormRenderOpt } from "@/components/EasyFormRender/EasyFormRender";
import services from "@/services/services"
import { PutDepartmentRequest } from '@/services/Inside/department/model/request/departmentRequest';
import { openMessage } from '@/helps/antd/antd';

export type TreeDepModifyModalProps = {
    onSuccess: () => void
    depId: string | undefined
} & ModalProps

const TreeDepModifyModal: React.FC<TreeDepModifyModalProps> = (props) => {

    const [depSelects, setdepSelects] = useState<any[]>([])

    const getDepartments = async () => {
        const { data } = await services.getDepartments()
        setdepSelects([{ id: 0, name: "根部门", children: [...data] }])
    }

    useEffect(() => {
        if (props.depId) {
            services.getDepartmentInfo(props.depId).then(res => {
                form.setFieldsValue({
                    ...res.data,
                    depName: res.data.name,
                })
            })
        }
    }, [props.depId])

    useEffect(() => {
        if (!props.visible) {
            form.resetFields()
        } else {
            getDepartments()
        }
    }, [props.visible])

    const treeDepModifyFormRenderConf: FormRenderOpt[] = [
        {
            type: 'input',
            formItem: {
                name: "depName",
                label: "部门名称",
                rules: [{ required: true, message: "请输入部门名称" }]
            },
            compProp: {
                placeholder: "请输入",
            }
        },
        {
            type: 'treeSelect',
            formItem: {
                name: "parentId",
                label: "上级部门",
                rules: [{ required: true, message: "请选择上级部门" }]
            },
            compProp: {
                placeholder: "请选择",
                treeData: depSelects,
                fieldNames: {
                    label: "name",
                    value: "id"
                }
            }
        },
        {
            type: 'input',
            formItem: {
                name: "orderNum",
                label: "排序号",
                initialValue: 0
            },
            compProp: {}
        }
    ]

    const [form] = Form.useForm()

    const treeDepModifyFormConf: FormProps<any> | undefined = {
        form,
        labelCol: {
            span: 3
        },
        wrapperCol: {
            span: 21
        },
    }

    const handleOk = () => {
        form.validateFields().then((values: PutDepartmentRequest) => {
            putDepartment(values)
        })
    }

    const putDepartment = async (form: PutDepartmentRequest) => {
        const { statusCode } = await services.putDepartment(form)
        if (statusCode === 200) {
            props.onSuccess()
            openMessage({
                content: '新增成功！',
                type: 'success',
            })
        }
    }

    return (
        <Modal {...props} destroyOnClose width={650} onOk={handleOk}>
            <EasyFormRender opt={treeDepModifyFormRenderConf} config={treeDepModifyFormConf} />
        </Modal>
    );
};

export default TreeDepModifyModal;
