(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["javaDetail"],{"36b7":function(e,t,a){},4499:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",[t("v-dubbo-flow",{key:e.traceId,attrs:{traceId:e.traceId,taskRunId:e.taskRunId,closeType:1}})],1)},s=[],l=a("b6b4"),o={components:{vDubboFlow:l["a"]},data:function(){return{traceId:this.$route.params.traceId,taskRunId:this.$route.params.taskRunId}}},i=o,n=(a("6ad5"),a("e607")),c=Object(n["a"])(i,r,s,!1,null,"2f6cab18",null);t["default"]=c.exports},"6ad5":function(e,t,a){"use strict";a("937f")},"937f":function(e,t,a){},b131:function(e,t,a){"use strict";a("36b7")},b6b4:function(e,t,a){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",[t("el-form",{staticClass:"demo-ruleForm"},[t("el-card",[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("基础信息")])]),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"traceId："}},[e._v("\n            "+e._s(e.traceId)+"\n          ")])],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"协议类型："}},[e._v("\n            "+e._s(e.type)+"\n          ")])],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"采集机器："}},[e._v("\n            "+e._s(e.host)+"\n          ")])],1)],1)],1),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("接口信息")])]),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"java方法："}},[e._v("\n            "+e._s(e.uri)+"\n          ")])],1)],1)],1),t("el-card",{staticClass:"box-card"},[t("el-collapse",{class:["lever1",{noBorderBottom:e.paramCollapse.length}],model:{value:e.paramCollapse,callback:function(t){e.paramCollapse=t},expression:"paramCollapse"}},[t("el-collapse-item",{attrs:{name:"1",title:"请求参数"}},[t("el-table",{staticClass:"responseDiffsTable",attrs:{data:e.requestParameterArray,border:"","max-height":"500"}},[t("el-table-column",{attrs:{label:"序号",align:"center",width:"50px"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.$index))])]}}])}),t("el-table-column",{attrs:{label:"参数值",prop:"parameterValue",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-tooltip",{attrs:{placement:"top",effect:"dark"}},[t("div",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(a.row.parameterValue))]),t("div",[e._v(e._s(a.row.parameterValue))])])]}}])}),t("el-table-column",{attrs:{label:"参数类型",prop:"parameterType",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-tooltip",{attrs:{placement:"top",effect:"dark"}},[t("div",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(a.row.parameterType))]),t("div",[e._v(e._s(a.row.parameterType))])])]}}])})],1)],1)],1)],1),t("el-card",{staticClass:"box-card"},[t("el-collapse",{class:["lever1",{noBorderBottom:e.responseCollapse.length}],model:{value:e.responseCollapse,callback:function(t){e.responseCollapse=t},expression:"responseCollapse"}},[t("el-collapse-item",{attrs:{name:"1",title:"响应内容"}},[t("el-form-item",[t("json-viewer",{attrs:{value:e.response,"expand-depth":5,expanded:!0,boxed:"",copyable:"",sort:""}})],1)],1)],1)],1),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("子调用对比结果")])]),t("el-form-item",{staticStyle:{float:"left"}},[t("el-input",{attrs:{size:"small",placeholder:"请输入接口过滤",clearable:""},model:{value:e.inputSearch,callback:function(t){e.inputSearch=t},expression:"inputSearch"}})],1),t("el-table",{attrs:{data:e.filterData,border:"","max-height":"500"}},[t("el-table-column",{attrs:{label:"序号",align:"center",width:"50px"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.$index))])]}}])}),t("el-table-column",{attrs:{label:"子调用类型",prop:"type",align:"center","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"子调用信息",prop:"uri",align:"center","min-width":"400","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"执行耗时(毫秒)",prop:"cost",align:"center","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return e.sonDetail(a.row)}}},[e._v("调用详情")])]}}])})],1)],1)],1),t("el-card",{staticClass:"add-record-bottom-component"},[t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.resetForm()}}},[e._v("关闭")])],1),t("el-dialog",{attrs:{title:"调用详情",visible:e.dialogVisible,width:"1000px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{staticClass:"demo-ruleForm"},[e.otherFlag?t("div",[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("接口信息")])]),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"接口uri："}},[e._v("\n                "+e._s(e.dialogUri)+"\n              ")])],1)],1)],1),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("请求参数")])]),t("el-table",{attrs:{data:e.dialogParameterArray,border:"","max-height":"500"}},[t("el-table-column",{attrs:{label:"序号",align:"center",width:"50px"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.$index))])]}}],null,!1,3869450744)}),t("el-table-column",{attrs:{label:"参数值",prop:"value",align:"center","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"参数类型",prop:"type",align:"center","show-overflow-tooltip":""}})],1)],1),t("el-card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("响应内容")])]),t("el-form-item",[t("json-viewer",{attrs:{value:e.dialogResponse,"expand-depth":5,boxed:"",copyable:"",sort:""}})],1)],1),t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("调用堆栈")])]),e._l(e.stackTraces,(function(a,r){return t("div",{key:r},[e._v("\n            "+e._s(a)+"\n          ")])}))],2)],1):e._e(),e.httpFlag?t("div",[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("接口信息")])]),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"接口uri："}},[e._v("\n                "+e._s(e.dialogUri)+"\n              ")])],1)],1)],1),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("请求参数")])]),t("h4",[e._v("接口headers")]),t("el-table",{attrs:{data:e.dialogHeadersArray,border:"","max-height":"500"}},[t("el-table-column",{attrs:{label:"key",prop:"key",align:"center","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"value",prop:"value",align:"center","show-overflow-tooltip":""}})],1),t("h4",[e._v("接口params")]),t("el-table",{attrs:{data:e.dialogParamsArray,border:"","max-height":"500"}},[t("el-table-column",{attrs:{label:"key",prop:"key",align:"center","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"value",prop:"value",align:"center","show-overflow-tooltip":""}})],1)],1),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("请求body")])]),t("el-form-item",[t("json-viewer",{attrs:{value:e.dialogBody,"expand-depth":5,boxed:"",copyable:"",sort:""}})],1)],1),t("el-card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("响应内容")])]),t("el-form-item",[t("json-viewer",{attrs:{value:e.dialogResponse,"expand-depth":5,boxed:"",copyable:"",sort:""}})],1)],1),t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("h3",[e._v("调用堆栈")])]),e._l(e.stackTraces,(function(a,r){return t("div",{key:r},[e._v("\n            "+e._s(a)+"\n          ")])}))],2)],1):e._e()]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1)],1)},s=[],l=(a("fc02"),a("868d")),o=(a("a450"),a("085b"),a("0cdc"),a("f829")),i=(a("4890"),a("6161"),a("365c")),n=a("258b"),c=a.n(n),d={name:"v-java-flow",components:{JsonViewer:c.a},props:["traceId","taskRunId","closeType"],data:function(){return{inputSearch:"",dialogVisible:!1,type:"",formLabelWidth:"110px",entranceInvocation:{},uri:"",host:"",request:[],parameterTypes:[],requestParameterArray:[],response:{},subInvocations:[],dialogUri:"",dialogRequest:[],dialogParameterTypes:[],dialogParameterArray:[],dialogHeaders:{},dialogParamsMap:{},dialogHeadersArray:[],dialogParamsArray:[],paramsKeyArray:[],paramsValueArray:[],dialogBody:{},dialogResponse:{},httpFlag:!1,otherFlag:!1,stackTraces:"",paramCollapse:[],responseCollapse:[]}},mounted:function(){this.getDetail()},computed:{filterData:function(){var e=JSON.parse(JSON.stringify(this.subInvocations));return this.inputSearch.trim()&&(e=this.subInvocations.filter(function(e){return Object(o["a"])(this,this),-1!==e.uri.indexOf(this.inputSearch.trim())}.bind(this))),e}},methods:{resetForm:function(){this.$store.dispatch("page/close",{tagName:this.$route.name,notNext:!0}),1==this.closeType?this.routerPush({name:"record",params:{},query:{}}):2==this.closeType&&this.routerPush({name:"playback",params:{},query:{}})},getDetail:function(){if(""!=this.traceId||""!=this.taskRunId){var e={traceId:this.traceId,taskRunId:this.taskRunId},t=this;i["a"].record.flowDetail(e).then(function(e){if(Object(o["a"])(this,this),"SUCCESS"===e.code){t.host=e.data.host,t.entranceInvocation=e.data.entranceInvocation,t.type=t.entranceInvocation.type,t.uri=t.entranceInvocation.uri,t.request=t.entranceInvocation.request||[],t.parameterTypes=t.entranceInvocation.parameterTypes;for(var a=0;a<t.request.length;a++){var r={};r.parameterValue=JSON.stringify(t.request[a]),r.parameterType=t.parameterTypes[a],t.requestParameterArray.push(r)}null!=t.entranceInvocation.response&&(t.response=t.entranceInvocation.response),t.subInvocations=e.data.subInvocations}else this.$message.error("获取dubbo详情失败:"+e.msg)}.bind(this))}},sonDetail:function(e){if(this.httpFlag=!1,this.otherFlag=!1,this.dialogVisible=!0,this.dialogResponse={},e.response&&(this.dialogResponse=e.response),this.dialogUri="","http"===e.type.toLowerCase()||"okhttp"===e.type.toLowerCase()||"apache-http-client"===e.type.toLowerCase()){if(this.httpFlag=!0,this.dialogHeadersArray=[],this.dialogParamsArray=[],this.dialogUri=e.uri,this.dialogHeaders=e.headers,"object"==Object(l["a"])(e.body)&&null!=e.body&&(this.dialogBody=e.body),"string"==typeof e.body&&(this.dialogBody=e.body),"{}"!==JSON.stringify(this.dialogHeaders))for(var t in this.dialogHeaders)this.dialogHeadersArray.push({key:t,value:this.dialogHeaders[t]});if(this.dialogParamsMap=e.paramsMap,"{}"!==JSON.stringify(this.dialogParamsMap))for(var a in this.dialogParamsMap)this.dialogParamsArray.push({key:a,value:this.dialogParamsMap[a]})}else if(this.dialogParameterArray=[],this.otherFlag=!0,this.dialogUri=e.uri,this.dialogRequest=e.request,this.dialogParameterTypes=e.parameterTypes,null!=this.dialogRequest)for(var r=0;r<this.dialogRequest.length;r++)this.dialogParameterArray.push({value:JSON.stringify(this.dialogRequest[r]),type:this.dialogParameterTypes[r]});this.stackTraces=e.stackTraces.split(/\n/)}}},p=d,u=(a("b131"),a("e607")),h=Object(u["a"])(p,r,s,!1,null,"c4146882",null);t["a"]=h.exports}}]);