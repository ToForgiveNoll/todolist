import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    },
    directives: {
        // 自定义一个点击其他区域销毁当前元素的指令
        focus: {
            // 指令的定义
            inserted: function (el) {
                el.focus()
            }
        }
    }
}).$mount('#app');


