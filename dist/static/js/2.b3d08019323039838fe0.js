webpackJsonp([2],{FT2V:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={data:function(){return{data:[],exchangeMoney:""}},computed:{filterData:function(){var t=this;return t.data.map(function(a){return(t.exchangeMoney*a.sell).toFixed(3)})}},components:{Navbar:e("lfLh").a},created:function(){var t=this;this.$http.get("https://api.mocki.io/v1/2a68ef2e").then(function(a){t.data=a.data})}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar"),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"text-center"},[e("i",{staticClass:"fas fa-dollar-sign fa-5x mt-5 mb-5"}),t._v(" "),e("form",[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"exchangeMoney"}},[t._v("金額(日幣):")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchangeMoney,expression:"exchangeMoney"}],staticClass:"form-control",attrs:{type:"number",id:"exchangeMoney","aria-describedby":"number"},domProps:{value:t.exchangeMoney},on:{input:function(a){a.target.composing||(t.exchangeMoney=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.data,function(a){return e("div",{key:a.country,staticClass:"col-sm-6 col-md-3"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(" "+t._s(a.country))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("\n                  銀行買進: "+t._s(a.buy)+"\n                ")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("\n                  銀行賣出: "+t._s(a.sell)+"\n                ")])])])])}),0)]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.filterData,function(a){return e("div",{key:a.country,staticClass:"col-sm-6 col-md-3"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("p",{staticClass:"card-text"},[t._v("\n                  可換: "+t._s(a)+" 元\n                ")])])])])}),0)])])])],1)},staticRenderFns:[]},i=e("VU/8")(s,n,!1,null,null,null);a.default=i.exports}});
//# sourceMappingURL=2.b3d08019323039838fe0.js.map