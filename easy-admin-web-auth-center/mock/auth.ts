import {MockMethod} from 'vite-plugin-mock'
import {mockJsonResultFail, mockJsonResultOk} from "./helps/mockJsonResult";

export function createFakeUserList() {
    return [
        {
            userId: '1',
            username: 'easy',
            realName: 'easy',
            avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
            desc: 'manager',
            password: '123456',
            token: 'fakeToken1',
            homePath: '/dashboard/analysis',
            roles: [
                {
                    roleName: 'Super Admin',
                    value: 'super',
                },
            ],
        },
        {
            userId: '2',
            username: 'test',
            password: '123456',
            realName: 'test user',
            avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
            desc: 'tester',
            token: 'fakeToken2',
            homePath: '/dashboard/workbench',
            roles: [
                {
                    roleName: 'Tester',
                    value: 'test',
                },
            ],
        },
    ];
}

export default [
    {
        url: '/api/auth/login',
        method: 'post',
        timeout: 1000,
        response: ({body}) => {
            if (!body) {
                return mockJsonResultFail("登录失败，请检查用户名或者密码是否正确哦！", null)
            } else {
                const existUser = createFakeUserList().find((item) => (item.username === body.userName && item.password === body.passWord))
                if (existUser) {
                    const {token, realName, roles, username} = existUser
                    return mockJsonResultOk({
                        realName,
                        roles,
                        token,
                        username,
                    }, "success")
                } else {
                    return mockJsonResultFail("登录失败，请检查用户名或者密码是否正确哦！", null)
                }
            }
        },
    },
] as MockMethod[]