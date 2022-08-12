import {useEffect, useState} from "react";
import {IJsonResult} from "@/types/global";

export type CustormTableHookOptions<T,K> = {
    initailParams?:K
    api:(param:K) => Promise<IJsonResult<T[]>>
}

/**
 * 配合antd table 使用的 表格hook
 * @param options
 */
const useCustomTable = <T,K = any>(options:CustormTableHookOptions<T,K>) => {
    // 数据源
    const [dataSource,setDataSource] = useState<T[]>()

    const [talbeParams, setTalbeParams] = useState<K | undefined>(options.initailParams);

    const [tableLoading, setTableLoading] = useState<boolean>(false);

    useEffect(() => {
       if(options.initailParams) pullData(options.initailParams)
    }, [talbeParams]);

    // 数据拉取
    const pullData = (param:K) => {
        setTableLoading(true)
        options.api(param).then((res) => {
            setDataSource([...res.data])
        }).finally(() => {
            setTableLoading(false)
        })
    }
    // 请求参数变动
    const serachData = (param:K) => {
        pullData(param)
    }

    return {
        dataSource,
        tableLoading,
        serachData
    }
}

export default useCustomTable