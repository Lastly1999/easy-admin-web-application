import * as auth from "./auth/auth"
import * as user from "./user/user"
import * as role from "./role/role"
import * as department from "./department/department"

export default {
    ...auth,
    ...user,
    ...role,
    ...department
}