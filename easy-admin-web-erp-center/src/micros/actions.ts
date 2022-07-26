
const emptyAction = () => {
    // 提示当前使用的是空 Action
    console.warn("Current execute action is empty!");
}

export interface IQiankunMicroAppsActions {
    actions: {
        onGlobalStateChange: typeof emptyAction,
        setGlobalState: typeof emptyAction,
    }
}

class QiankunMicroAppsActions implements IQiankunMicroAppsActions {
    /**
     * 定义一个actions对象 内置两个函数为qiankun主应用发送过来的函数
     * 在这里接受 是为了后期方便调用
     */
    actions = {
        onGlobalStateChange: emptyAction,
        setGlobalState: emptyAction,
    }

    /**
     * 设置actions对象内的函数
     */
    setActions(actions: any) {
        this.actions = actions
    }

    /**
     * 映射
     */
    onGlobalStateChange(...args: any) {
        // @ts-ignore
        return this.actions.onGlobalStateChange(...args)
    }

    /**
     * 映射
     */
    setGlobalState(...args: any) {
        // @ts-ignore
        return this.actions.setGlobalState(...args);
    }
}

export default new QiankunMicroAppsActions()