webpackJsonp([18],{"6Q8u":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("n2Gk"),s=i("h+y+"),c=i("nA34"),o={name:"purchase",data:function(){return{goodlist:[{imgLocation:"static/imgs/cover1.jpg",videoName:"晚会频道",playNum:"22",viewNum:"11"},{imgLocation:"static/imgs/cover2.jpg",videoName:"学术频道",playNum:"2200",viewNum:"117"},{imgLocation:"static/imgs/cover1.jpg",videoName:"晚会频道",playNum:"22",viewNum:"11"}]}},components:{Shelf:e.a,videoCard:s.a,Button:c.a}},n={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"goods"},[i("div",{staticClass:"nav"},[i("div",{staticClass:"w"},[i("a",{class:{active:1===t.sortType},attrs:{href:"javascript:;"},on:{click:function(a){t.reset()}}},[t._v("综合排序")]),t._v(" "),i("a",{class:{active:2===t.sortType},attrs:{href:"javascript:;"},on:{click:function(a){t.sortByPrice(1)}}},[t._v("价格从低到高")]),t._v(" "),i("a",{class:{active:3===t.sortType},attrs:{href:"javascript:;"},on:{click:function(a){t.sortByPrice(-1)}}},[t._v("价格从高到低")])]),t._v(" "),i("section",{staticClass:"mt30 clearfix"},[i("div",{staticClass:"goodlist"},t._l(t.goodlist,function(a,e){return i("videoCard",{key:e,attrs:{msg:a},on:{cardClick:function(i){t.toLive(a)}}})}))])])])},staticRenderFns:[]};var r=i("Z0/y")(o,n,!1,function(t){i("h+qY")},"data-v-3b1c9ad0",null);a.default=r.exports},"h+qY":function(t,a){}});
//# sourceMappingURL=18.408f02142bb175979cc6.js.map