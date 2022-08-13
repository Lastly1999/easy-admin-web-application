import {useEffect, useState} from "react";
import services from "@/services/services";
import {MenusItemInfo} from "@/services/Inside/menu/model/menuResponse";


const useSystemAuthMenu = (init?:boolean) => {

    useEffect(() => {
        if(init) getAuthMenus()
    }, [init]);

    const [sysMenus, setSysMenus] = useState<MenusItemInfo[]>();

    const getAuthMenus = async () => {
        const {data} = await services.getMenus()
        setSysMenus([...data])
    }

    return {
        sysMenus
    }
}

export default useSystemAuthMenu