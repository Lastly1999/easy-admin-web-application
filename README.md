## :sweat_smile: 一个构建于qiankun.js 的微应用基础框架 (不知道为什么要从0开发这个项目)

### 目前microApp 设计架构 :gem:
###### 统一使用 [TypeScript](超链接地址 "超链接title")  使用 [Vite3](超链接地址 "超链接title") 构建应用和dev服务
###### 统一使用pnpm进行管理（这边不使用 [Monorepo](超链接地址 "超链接title")  原因是希望项目还是能独立运行 不进行强制关联）
### 目前框架存在的微应用
###### 基础 SSO 授权中心 微应用 ( [Vue3](超链接地址 "超链接title") + [Vite3](超链接地址 "超链接title") + [TypeScript](超链接地址 "超链接title") + [Pinia](超链接地址 "超链接title") + [Antd](超链接地址 "超链接title")) (开发中... 基础功能权限验证已实现)
###### 基础 ERP 管理中心 微应用基座 ( [React](超链接地址 "超链接title") + [Vite3](超链接地址 "超链接title") + [TypeScript](超链接地址 "超链接title") + [Redux-Tookit](超链接地址 "超链接title") [Redux-Router V6](超链接地址 "超链接title") + [Antd](超链接地址 "超链接title")) (开发中... RBAC基础功能权限验证实现中)
###### 管理中心 business业务中心 微应用 ( [React](超链接地址 "超链接title") + [Vite3](超链接地址 "超链接title") + [TypeScript](超链接地址 "超链接title") + [Redux-Tookit](超链接地址 "超链接title") [Redux-Router V6](超链接地址 "超链接title") + [Antd](超链接地址 "超链接title"))（目前暂未强制实现，后期可根据具体使用情况指定技术栈）

### 快速速用:zap: 
###### 到各个项目目录下 进行安装 后期会加入npm-run-all package管理
##### 安装依赖
```shell
pnpm i
```
##### 运行
```shell
pnpm run dev --'your env config name'
```

### 配套服务 :eight_pointed_black_star:
##### [easy-admin-serivce-node](超链接地址 "超链接title") 服务在这里
