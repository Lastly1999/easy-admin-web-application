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
		const { data } = await services.getRoles()
		setRoles([...data])
	}

	return {
		roles,
		getRoles
	}
}

export default useRoleData