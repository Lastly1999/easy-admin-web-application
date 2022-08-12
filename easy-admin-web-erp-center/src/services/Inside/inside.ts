import * as auth from "./auth/auth"
import * as user from "./user/user"
import * as role from "./role/role"
import * as department from "./department/department"
import * as menu from "./menu/menu"

export default {
    ...auth,
    ...user,
    ...role,
    ...department,
    ...menu
}