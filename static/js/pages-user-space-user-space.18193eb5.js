(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-space-user-space"],{2142:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{item:Object,index:[String,Number]},filters:{timeStamp:function(t){if(!t)return"";var e=new Date(t),i=e.getFullYear(),n=e.getMonth()+1;n<10&&(n="0"+n);var a=e.getDate();return a<10&&(a="0"+a),i+"-"+n+"-"+a}},methods:{open:function(){uni.navigateTo({url:"/pages/detail-video/detail-video?id="+this.item.id}),uni.setStorage({key:"history"})}},mounted:function(){}};e.default=n},"27f6":function(t,e,i){"use strict";i.r(e);var n=i("af54"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"3f61":function(t,e,i){"use strict";i.r(e);var n=i("61f5"),a=i("27f6");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var l,u=i("f0c5"),o=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"9bd75162",null,!1,n["a"],l);e["default"]=o.exports},"4b7c":function(t,e,i){"use strict";i.r(e);var n=i("2142"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"61f5":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"animated fadeIn"},[i("v-uni-image",{staticStyle:{width:"750upx",height:"320upx",filter:"blur(30px)"},attrs:{src:"/static/title.jpg",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"flex align-center justify-between"},[i("v-uni-image",{staticClass:"ml-3 rounded-circle",staticStyle:{width:"200upx",height:"200upx","margin-top":"-40upx"},attrs:{src:t.user.avatar||"/static/title.jpg",mode:""}}),i("v-uni-view",{staticClass:"flex flex-column "},[i("v-uni-view",{staticClass:"flex align-center ",staticStyle:{"justify-content":"space-around"}},[i("v-uni-view",{staticClass:"flex flex-column align-center "},[i("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(t.fensCount))]),i("v-uni-text",{staticClass:"text-main "},[t._v("粉丝")])],1),i("v-uni-text",{staticClass:"bg-main",staticStyle:{height:"45upx",width:"1upx"}}),i("v-uni-view",{staticClass:"flex flex-column px-2 align-center"},[i("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(t.followCount))]),i("v-uni-text",{staticClass:"text-main "},[t._v("关注")])],1)],1),i("v-uni-view",{staticStyle:{height:"15upx",width:"450upx"}}),t.user.id!==t.myuser_id?i("v-uni-view",{staticClass:" bg-main text-white text-center mr-2 rounded py-1",staticStyle:{width:"450upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doFollow.apply(void 0,arguments)}}},[t._v(t._s(t.follow?"已关注":"+关注"))]):t._e()],1)],1),i("v-uni-view",{staticClass:"flex flex-column px-3"},[i("v-uni-view",{staticClass:" font-lg"},[i("v-uni-text",{staticClass:" text-main font-weight-bold"},[t._v(t._s(t.user.nickname||t.user.username))]),i("v-uni-text",{staticClass:"font px-2 text-main"},[t._v("uid:"+t._s(t.user.id))])],1),i("v-uni-view",{staticClass:" bilibili text-ellipsis"},[t._v(t._s(t.user.desc||"什么也没写~"))])],1),i("v-uni-view",{staticClass:"flex align-center",staticStyle:{height:"44px"}},t._l(t.tabBars,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex-1 flex align-center justify-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(n)}}},[i("v-uni-text",{staticClass:"font-md font",class:t.tabIndex===n?"text-main":""},[t._v(t._s(e.name))])],1)})),1),i("v-uni-swiper",{style:"height:"+t.scrollHeight+"px;",attrs:{current:t.tabIndex,duration:300},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSwiper.apply(void 0,arguments)}}},t._l(t.tabBars,(function(e,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-scroll-view",{style:"height:"+t.scrollHeight+"px;",attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrolltolower(n)}}},[i("v-uni-view",{staticClass:"f-divider"}),t._l(t.list[n].data,(function(t,e){return i("media-list",{key:e,attrs:{item:t,index:e}})})),0===t.list[n].data.length?i("v-uni-view",{staticClass:"flex align-center justify-center text-secondary",staticStyle:{height:"200rpx"}},[t._v("暂无数据")]):t.list[n].data.length>10?i("v-uni-view",{staticClass:"flex align-center justify-center font-md text-secondary",staticStyle:{height:"80rpx"},attrs:{"hover-class":"bg-light"}},[t._v(t._s(e.loadText))]):t._e()],2)],1)})),1)],1)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},af54:function(t,e,i){"use strict";(function(t){var n=i("ee27");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("d0ff")),s=n(i("f3f3")),l=n(i("fd9d")),u=i("2f62"),o={components:{mediaList:l.default},data:function(){return{user_id:0,user:{avatar:"",desc:"",email:"",id:0,nickname:"",phone:"",sex:"未知",username:"undefined"},fensCount:0,followCount:0,follow:!1,tabIndex:0,tabBars:[{name:"作品",key:"video_list",page:1,loadText:"上拉加载更多"},{name:"收藏",key:"fava_list",page:1,loadText:"上拉加载更多"}],scrollHeight:0,list:[{data:[]},{data:[]}]}},created:function(){var t=uni.getSystemInfoSync();this.scrollHeight=t.windowHeight-44-44-t.statusBarHeight},onLoad:function(t){if(!t.user_id)return uni.showToast({title:"非法访问",icon:"none"}),uni.navigateBack({delta:1});this.user_id=t.user_id,this.getUserInfo(t.user_id),this.getProductionData()},computed:(0,s.default)({tab:function(){return this.tabBars[this.tabIndex]},url:function(){var t=this.tab;return"/".concat(t.key,"/").concat(t.page,"?user_id=").concat(this.user_id)}},(0,u.mapState)({myuser_id:function(t){return t.user?t.user.id:0}})),methods:{changeSwiper:function(t){this.tabIndex=t.detail.current,this.tabBars[this.tabIndex].page=1,this.getProductionData()},changeTab:function(t){this.tabIndex=t},getUserInfo:function(t){var e=this;this.$H.get("/user/user_info?user_id="+t,{token:!0,noJump:!0,toast:!1}).then((function(t){e.user=t.user,e.fensCount=t.fensCount,e.followCount=t.followCount,e.follow=t.follow}))},getProductionData:function(){var t=this,e=this.tabIndex,i=this.tabBars[e].page;this.$H.get(this.url).then((function(n){t.list[e].data=1===i?n:[].concat((0,a.default)(t.list[e].data),(0,a.default)(n)),t.tabBars[e].loadText=10===n.length?"上拉加载更多":"没有更多了"})).catch((function(n){i>1&&t.tabBars[e].page--,t.tabBars[e].loadText="上拉加载更多"}))},scrolltolower:function(t){this.tabBars[t].page++,this.getProductionData()},doFollow:function(){var e=this,i=this.follow?"/user/unfollow":"/user/follow",n=this.follow?"取消关注":"关注";this.$H.post(i,{follow_id:this.user_id},{token:!0}).then((function(i){e.follow=!e.follow,uni.showToast({title:n+"成功",icon:"none"}),t.log(i)})).catch((function(e){t.log(e)}))}}};e.default=o}).call(this,i("5a52")["default"])},fbd5:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:" flex align-center py-2 border-bottom ",staticStyle:{width:"100%"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"rounded-lg mx-2 flex-shrink",staticStyle:{width:"260rpx",height:"160rpx"},attrs:{mode:"aspectFill",src:t.item.cover}}),i("v-uni-view",{staticClass:"flex-1 flex flex-column mr-1"},[i("v-uni-text",{staticClass:"font",staticStyle:{"line-height":"1.2"}},[t._v(t._s(t.item.title))]),i("v-uni-text",{staticClass:"font-sm text-light-muted mt-auto"},[t._v(t._s(t._f("timeStamp")(t.item.created_time)))]),i("v-uni-view",{staticClass:"flex align-center justify-between text-muted line-h"},[i("v-uni-view",{staticClass:"line-h"},[i("v-uni-text",{staticClass:"iconfont iconbofangshu font-md mx-1"}),i("v-uni-text",{staticClass:"font-sm"},[t._v(t._s(t.item.play_count))])],1),i("v-uni-view",{staticClass:"line-h"},[i("v-uni-text",{staticClass:"iconfont icondanmushu font-md mx-1"}),i("v-uni-text",{staticClass:"font-sm"},[t._v(t._s(t.item.danmu_count))])],1),i("v-uni-text",{staticClass:"iconfont icongengduo"})],1)],1)],1)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},fd9d:function(t,e,i){"use strict";i.r(e);var n=i("fbd5"),a=i("4b7c");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var l,u=i("f0c5"),o=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"29fb220e",null,!1,n["a"],l);e["default"]=o.exports}}]);