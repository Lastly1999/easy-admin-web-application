import { createApp, App as AppInstance } from 'vue'
import App from './App'
// setup plugins
import setupPinia from "@/plugins/pinia"
import setupVueRouter from "@/plugins/router";
import { renderWithQiankun, qiankunWindow, QiankunLifeCycle } from 'vite-plugin-qiankun/dist/helper';

let VueApp: AppInstance | null = null

function render(props: any) {
	const { container } = props
	VueApp = createApp(App)
	setupVueRouter(VueApp)
	setupPinia(VueApp)
	VueApp.mount(
		container
			? container.querySelector('#app')
			: document.getElementById('app'),
	)
}

renderWithQiankun({
	mount(props) {
		console.log('mount');
		render(props);
	},
	bootstrap() {
		console.log('bootstrap');
	},
	unmount(props: any) {
		console.log('unmount');
		VueApp?.unmount()
	},
} as QiankunLifeCycle);

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
	render({});
}
