import Vue from 'vue'
import Component from 'vue-class-component'
import * as Template from './navbar.html'

@Template
@Component
export default class Navbar extends Vue {

    naveMenus = [
        { menu: ' ホーム', path: '/', key:"1" },
        { menu: ' ユーザ登録', path: '/singUp', key:"2" },
        { menu: ' ログイン', path: '/login', key:"3" },
        { menu: ' ログアウト', path: '/logout', key:"4" },
        { menu: ' 検索', path: '/search', key:"5" },
        { menu: ' ジャンル別', path: '/gener', key:"6" },
        { menu: ' 注目はこちら', path: '/hot', key:"7" },
        { menu: ' ヘルプ', path: '/help', key:"8" },
    ];

    activeIndex = "0";

    handleSelect(path:any){
        console.log(path);
    }
}