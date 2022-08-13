import services from "@/services/services";
import { DefaultOptionType } from "antd/lib/select";
import { useEffect, useState } from "react";

const useRoleData = (init?: boolean) => {

	const [roles, setRoles] = useState<DefaultOptionType[]>([]);

	useEffect(() => {
		if (init) {
			getRoles()
		}
	}, [init])

	const getRoles = async () => {
		const { data } = await services.getRoles({pageSize:9999999,pageNo:1})
		setRoles([...data])
	}

	return {
		roles,
		getRoles
	}
}

export default useRoleData