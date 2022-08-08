import services from "@/services/services"
import { BaseOptionType } from "antd/lib/select"
import { useEffect, useState } from "react"


const useDepartmentData = (init?: boolean) => {

	const [deps, setDeps] = useState<BaseOptionType[] | undefined>([])

	const getDeps = async () => {
		const { data } = await services.getDepartments()
		setDeps([{ name: "根部门", id: 0, children: [...data] }])
	}

	useEffect(() => {
		if (init) {
			getDeps()
		}
	}, [init])

	return {
		deps,
		getDeps
	}
}

export default useDepartmentData