import Vue from 'vue';
import Component from 'vue-class-component'
import router from './router'
import './style.scss'
import Navbar from './navbar/navbar'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);

@Component<App>({
    components:{
        Navbar
    },
    router,
})
class App extends Vue {

}

const vm = new App()

vm.$mount('#app')

