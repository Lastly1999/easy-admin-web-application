import * as auth from "./auth/auth"
import * as user from "./user/user"
import * as role from "./role/role"

export default {
    ...auth,
    ...user,
    ...role
}