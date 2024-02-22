(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["playbackhttpDetail"],{"42a6":function(t,e,a){},8075:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.detailLoading,expression:"detailLoading"}]},[e("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"回放详情",name:"first"}},[e("el-form",{staticClass:"demo-ruleForm"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("基础信息")])]),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[e("el-form-item",{attrs:{label:"协议类型："}},[t._v("\n                "+t._s(t.type)+"\n              ")])],1),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"traceId："}},[t._v("\n                "+t._s(t.traceId)+"\n              ")])],1),e("el-col",{attrs:{span:6}},[e("el-form-item",{attrs:{label:"回放机器："}},[t._v("\n                "+t._s(t.host)+"\n              ")])],1)],1)],1),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("接口信息")])]),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-form",{attrs:{inline:!0}},[e("el-form-item",{attrs:{label:"接口uri："}},[t._v("\n                  "+t._s(t.uri)+"\n                ")])],1)],1),e("el-col",{attrs:{span:12}},[e("el-form",{attrs:{inline:!0}},[e("el-form-item",{attrs:{label:"请求方法："}},[t._v("\n                  "+t._s(t.method)+"\n                ")])],1)],1)],1)],1),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("对比结果")])]),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"状态："}},[t._v("\n                "+t._s(t.replayCode)+"\n              ")])],1),t.replayMessage?e("el-col",{staticClass:"red",attrs:{span:12}},[e("el-form-item",{attrs:{label:"失败原因："}},[t._v("\n                "+t._s(t.replayMessage)+"\n              ")])],1):t._e()],1)],1),0==t.replayStatus||4==t.replayStatus?e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("原始响应内容 / 回放响应内容")])]),e("vace-diff",{key:"acediff",attrs:{leftContent:t.acediffLeft,rightContent:t.acediffRight,elName:"acediff"}})],1):t._e(),t.responseDiffs.length>0?e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("响应结果差异对比")])]),e("el-table",{staticClass:"responseDiffsTable",attrs:{data:t.responseDiffs,"max-height":"500",border:""}},[e("el-table-column",{attrs:{label:"路径",prop:"path",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"原始响应结果数据",prop:"originData",align:"center",formatter:t.formatTableTDBlank},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tooltip",{attrs:{placement:"top",effect:"dark"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.row.originData))]),e("span",[t._v(t._s(a.row.originData))])])]}}],null,!1,1790917324)}),e("el-table-column",{attrs:{label:"回放响应结果数据",prop:"currentData",align:"center",formatter:t.formatTableTDBlank},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tooltip",{attrs:{placement:"top",effect:"dark"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.row.currentData))]),e("span",[t._v(t._s(a.row.currentData))])])]}}],null,!1,2765799980)}),e("el-table-column",{attrs:{label:"差异说明",prop:"diffType",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tooltip",{staticStyle:{"margin-left":"1%"},attrs:{placement:"top"}},[e("div",{staticClass:"tips-content text-tips-content",attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"rule-box"},[t._v("\n                      忽略后下一次回放不会对比该路径\n                    ")])]),e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.getIgnorePath(a.row.path,2)}}},[t._v("\n                    忽略对比\n                  ")])],1)]}}],null,!1,477857712)})],1)],1):t._e(),e("el-card",[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("子调用对比结果")])]),e("el-form",{staticClass:"subCallForm",attrs:{inline:""}},[e("el-form-item",[e("el-input",{attrs:{size:"small",placeholder:"请输入接口过滤",clearable:""},model:{value:t.inputSearch,callback:function(e){t.inputSearch=e},expression:"inputSearch"}})],1)],1),e("el-table",{attrs:{data:t.filterData,border:"","max-height":"500"}},[e("el-table-column",{attrs:{label:"序号",align:"center",width:"50"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.$index))])]}}])}),e("el-table-column",{attrs:{label:"类型",prop:"type",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"接口",prop:"currentUri",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"结果",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank},scopedSlots:t._u([{key:"default",fn:function(a){return[0==a.row.replayStatus?e("span",{staticClass:"green"},[t._v(t._s(a.row.replayStatusErrorCode))]):0!==a.row.replayStatus?e("span",{staticClass:"red"},[t._v(t._s(a.row.replayStatusErrorCode))]):t._e()]}}])}),e("el-table-column",{attrs:{label:"结果说明",prop:"replayStatusErrorMessage",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.sonDetail(a.row)}}},[t._v("详情")])]}}])})],1)],1)],1),e("el-card",{staticClass:"add-record-bottom-component"},[e("el-button",{attrs:{size:"small"},on:{click:t.resetForm}},[t._v("关闭")])],1),e("el-dialog",{attrs:{title:"对比详情",visible:t.dialogVisible,width:"90%",top:"50px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("el-form",{staticClass:"demo-ruleForm"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("对比结果")])]),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"状态："}},[0!=t.dialogReplayStatus?e("span",{staticClass:"red"},[t._v("对比失败")]):e("span",{staticClass:"green"},[t._v("对比成功")])])],1),0!=t.dialogReplayStatus?e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"状态说明："}},[e("span",{staticClass:"green"},[t._v(t._s(t.dialogReplayMessage))])])],1):t._e()],1)],1),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("接口信息")])]),e("el-form-item",{attrs:{label:"接口uri："}},[t._v("\n              "+t._s(t.dialogUri)+"\n            ")])],1),3==this.dialogReplayStatus?e("el-card",{staticClass:"box-card"},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("请求参数")])]),e("el-table",{attrs:{data:t.currentArgs,border:""}},[e("el-table-column",{attrs:{label:"序号",align:"center",width:"60px"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.$index))])]}}],null,!1,3869450744)}),e("el-table-column",{attrs:{label:"请求参数",prop:"type",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row))])]}}],null,!1,1525313800)})],1)],1):t._e(),3!=t.dialogReplayStatus?e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("入参对比")])]),e("el-form-item",[e("el-table",{attrs:{data:t.diaLogParameterArray,"max-height":"500"}},[e("el-table-column",{attrs:{label:"原始参数值",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tooltip",{attrs:{placement:"top",effect:"dark"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.row.value3))]),e("span",{staticClass:"pointer",on:{click:function(e){return t.showCompare(a.row.value3,a.row.mockValue)}}},[t._v(t._s(a.row.value3))])])]}}],null,!1,4085825155)}),e("el-table-column",{attrs:{label:"回放参数值",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tooltip",{attrs:{placement:"top",effect:"dark"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.row.mockValue))]),e("span",{staticClass:"pointer",on:{click:function(e){return t.showCompare(a.row.value3,a.row.mockValue)}}},[t._v(t._s(a.row.mockValue))])])]}}],null,!1,3712024803)}),e("el-table-column",{attrs:{label:"原始参数类型",prop:"type3",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"入参对比详情",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.showCompare(a.row.value3,a.row.mockValue)}}},[t._v(t._s(t.compareFlag?"隐藏":"展示"))])]}}],null,!1,1248482077)})],1)],1)],1):t._e(),t.compareFlag?e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("入参对比详情")])]),e("vace-diff",{key:t.dubboFlag?"compareFlag1":"compareFlag2",ref:"vaceDiff",attrs:{leftContent:t.leftContent,rightContent:t.rightContent,elName:t.dubboFlag?"compareFlag1":"compareFlag2"}})],1):t._e(),0!=t.dialogReplayStatus&&3!=t.dialogReplayStatus?e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("差异结果")])]),e("el-form-item",[e("el-table",{attrs:{data:t.dialogDiff}},[e("el-table-column",{attrs:{label:"路径",prop:"path",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"原始入参",prop:"originData",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"回放入参",prop:"currentData",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"差异说明",prop:"diffType",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tooltip",{staticStyle:{"margin-left":"1%"},attrs:{placement:"right"}},[e("div",{staticClass:"tips-content text-tips-content",attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"rule-box"},[t._v("\n                          忽略后下一次回放不会对比该路径。\n                        ")])]),e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.getIgnorePath(a.row.path,3)}}},[t._v("忽略对比")])],1)]}}],null,!1,2458484312)})],1)],1)],1):t._e(),3!=t.dialogReplayStatus?e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("MOCK返回结果")])]),e("json-viewer",{attrs:{value:t.dialogResponse,"expand-depth":5,boxed:"",copyable:"",sort:""}})],1):t._e(),e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("调用堆栈")])]),t._l(t.stackTraces,(function(a,r){return e("div",{key:r},[t._v("\n              "+t._s(a)+"\n            ")])}))],2)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1),e("el-dialog",{attrs:{visible:t.httpFlag,width:"60%"},on:{"update:visible":function(e){t.httpFlag=e}}},[e("el-form",{staticClass:"demo-ruleForm"},[e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("接口信息")])]),e("el-form-item",{attrs:{label:"接口uri："}},[t._v("\n              "+t._s(t.dialogUri)+"\n            ")])],1),3==this.dialogReplayStatus?e("el-card",{staticClass:"box-card"},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("请求参数")])]),e("el-table",{attrs:{data:t.currentArgs,border:""}},[e("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.$index))])]}}],null,!1,3869450744)}),e("el-table-column",{attrs:{label:"请求参数",prop:"type",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row))])]}}],null,!1,1525313800)})],1)],1):t._e(),e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("对比结果")])]),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:8}},[0!=t.dialogReplayStatus?e("el-form-item",{staticClass:"red",attrs:{label:"状态："}},[t._v("\n                  对比失败\n                ")]):t._e(),0==t.dialogReplayStatus?e("el-form-item",{staticClass:"green",attrs:{label:"状态："}},[t._v("\n                  对比成功\n                ")]):t._e()],1),0!=t.dialogReplayStatus?e("el-col",{staticClass:"red",attrs:{span:8}},[e("el-form-item",{attrs:{label:"状态说明："}},[t._v("\n                  "+t._s(t.dialogReplayMessage)+"\n                ")])],1):t._e()],1)],1),3!=t.dialogReplayStatus?e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("入参对比")])]),e("el-form-item",[e("h4",[t._v("headers对比")]),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("el-table",{attrs:{data:t.unionArray,border:"","max-height":"500"}},[e("el-table-column",{attrs:{label:"原始 key",prop:"key1",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"原始 value",prop:"value1",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"回放 key",prop:"key2",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"回放 value",prop:"value2",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}})],1)],1)],1)],1),e("el-form-item",[e("h4",[t._v("params对比")]),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("el-table",{attrs:{data:t.paramArray,"max-height":"500"}},[e("el-table-column",{attrs:{label:"原始 key",prop:"key1",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"原始 value",prop:"value1",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"回放 key",prop:"key2",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"回放 value",prop:"value2",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}})],1)],1)],1)],1),e("el-form-item",[e("h4",[t._v("请求body对比")]),e("vace-diff",{key:"bodyCompare",attrs:{"left-content":t.body,"right-content":t.replayBody,elName:"bodyCompare"}})],1)],1):t._e(),0!=t.dialogReplayStatus&&3!=t.dialogReplayStatus?e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("差异结果")])]),e("el-form-item",[e("el-table",{attrs:{data:t.dialogDiff,"max-height":"500"}},[e("el-table-column",{attrs:{label:"路径",prop:"path",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"原始入参",prop:"originData",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"回放入参",prop:"currentData",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"差异说明",prop:"diffType",align:"center","show-overflow-tooltip":"",formatter:t.formatTableTDBlank}}),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tooltip",{staticStyle:{"margin-left":"1%"},attrs:{placement:"right"}},[e("div",{staticClass:"tips-content text-tips-content",attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"rule-box"},[t._v("\n                          忽略后下一次回放不会对比该路径。\n                        ")])]),e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.getIgnorePath(a.row.path,3)}}},[t._v("忽略对比")])],1)]}}],null,!1,2458484312)})],1)],1)],1):t._e(),3!=t.dialogReplayStatus?e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("MOCK返回结果")])]),e("json-viewer",{attrs:{value:t.dialogResponse,"expand-depth":5,boxed:"",copyable:"",sort:""}})],1):t._e(),e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("调用堆栈")])]),t._l(t.stackTraces,(function(a,r){return e("div",{key:r},[t._v("\n              "+t._s(a)+"\n            ")])}))],2)],1)],1),e("el-dialog",{attrs:{title:"请选择忽略的路径",visible:t.dialogIgnoreVisible,width:"600px"},on:{"update:visible":function(e){t.dialogIgnoreVisible=e}}},[e("el-radio-group",{model:{value:t.radioValue,callback:function(e){t.radioValue=e},expression:"radioValue"}},t._l(t.options,(function(a){return e("el-radio",{key:a,attrs:{label:a}},[t._v("\n            "+t._s(a)+"\n          ")])})),1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogIgnoreVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.executeIgnore("change")}}},[t._v("确 定")])],1)],1)],1),e("el-tab-pane",{attrs:{label:"http流量详情",name:"third"}},[e("v-http-flow",{key:t.recordTraceId,attrs:{traceId:t.recordTraceId,taskRunId:t.recordTaskRunId,closeType:2}})],1)],1)],1)},l=[],s=(a("fc02"),a("868d")),o=(a("a450"),a("085b"),a("0cdc"),a("f829")),i=(a("4890"),a("6161"),a("365c")),n=a("258b"),c=a.n(n),d=a("8ad7"),p=a("f94c"),u={components:{JsonViewer:c.a,vaceDiff:d["a"],vHttpFlow:p["a"]},data:function(){return{detailLoading:!1,inputSearch:"",params:{},appName:"",options:[],radioValue:"",dialogIgnoreVisible:!1,acediffLeft:null,acediffRight:null,activeName:"first",replayMessage:"",replayCode:"",dialogVisible:!1,taskRunId:"",traceId:"",type:"",originEntranceInvocation:{},uri:"",host:"",request:[],parameterTypes:[],response:"",replayResponse:"",mockInvocations:[],responseDiffs:[],paramsMap:{},diaLogParameterArray:[],dialogUri:"",headers:{},dialogHeaders:{},replayHeaders:{},body:null,replayBody:null,dialogParamsMap:{},replayParamsMap:{},unionArray:[],paramArray:[],dialogResponse:{},dialogReplayMessage:"",dialogReplayStatus:"",dialogDiff:[],dubboFlag:!1,httpFlag:!1,otherFlag:!1,compareFlag:!1,leftContent:"",rightContent:"",replayStatus:"",recordTaskRunId:"",recordTraceId:"",stackTraces:"",currentArgs:[],method:""}},computed:{filterData:function(){var t=JSON.parse(JSON.stringify(this.mockInvocations))||[];return this.inputSearch.trim()&&(t=t.filter(function(t){return Object(o["a"])(this,this),-1!==t.currentUri.indexOf(this.inputSearch.trim())}.bind(this))),t}},created:function(){this.replayTraceId=this.$route.params.replayTraceId,this.replayTaskRunId=this.$route.params.replayTaskRunId,this.getDetail()},methods:{getDetail:function(){this.detailLoading=!0;var t={traceId:this.replayTraceId,replayTaskRunId:this.replayTaskRunId};i["a"].playback.getReplayDataDetail(t).then(function(t){Object(o["a"])(this,this),this.detailLoading=!1,"SUCCESS"===t.code?(this.appName=t.data.appName,this.host=t.data.host,this.traceId=t.data.traceId,this.recordTraceId=t.data.recordTraceId,this.recordTaskRunId=t.data.recordTaskRunId,this.recordTraceId=t.data.recordTraceId,this.replayStatus=t.data.replayStatus,this.originEntranceInvocation=t.data.originEntranceInvocation,this.replayResponse=JSON.stringify(t.data.replayResponse,null,4),this.type=this.originEntranceInvocation.type,this.headers=this.originEntranceInvocation.headers,this.paramsMap=this.originEntranceInvocation.paramsMap,this.uri=this.originEntranceInvocation.uri,this.request=this.originEntranceInvocation.request,this.parameterTypes=this.originEntranceInvocation.parameterTypes,this.method=this.originEntranceInvocation.method,this.response=JSON.stringify(this.originEntranceInvocation.response,null,4),this.mockInvocations=t.data.mockInvocations||[],this.replayCode=t.data.replayCode,this.replayMessage=t.data.replayMessage,null!=t.data.responseDiffs&&(this.responseDiffs=t.data.responseDiffs),this.acediffLeft=this.response||"",this.acediffRight=this.replayResponse||""):this.$message.error("获取http详情失败:"+t.msg)}.bind(this),function(t){Object(o["a"])(this,this),this.detailLoading=!1,this.$message.error("获取http详情失败:"+t.msg)}.bind(this))},getIgnorePath:function(t,e){i["a"].playback.guessUserWant({path:t}).then(function(a){Object(o["a"])(this,this),"SUCCESS"===a.code?(this.paths=a.data,this.params={appName:this.appName,fieldPath:this.uri,diffScope:e},3===e&&(this.uri=this.dialogUri),0==a.data.length?(params.fieldPath=t,2===e&&this.executeIgnore()):(this.dialogIgnoreVisible=!0,this.options=a.data,0!=this.options.length&&(this.radioValue=this.options[0]))):this.$message.error("获取对比数据失败:"+a.msg)}.bind(this))},executeIgnore:function(t){"change"===t&&(this.params.diffUri=this.uri,this.params.fieldPath=this.radioValue),i["a"].playback.ignoreReplayConfigPath(this.params).then(function(t){Object(o["a"])(this,this),"SUCCESS"===t.code?(this.$message.success("忽略成功"),this.dialogIgnoreVisible=!1):this.$message.error("忽略对比失败:"+t.msg)}.bind(this))},resetForm:function(){this.$store.dispatch("page/close",{tagName:this.$route.name,notNext:!0}),this.routerPush({name:"playback",params:{},query:{}})},sonDetail:function(t){if(this.compareFlag=!1,this.dubboFlag=!1,this.otherFlag=!1,this.dialogReplayStatus=t.replayStatus,this.dialogReplayMessage=t.replayStatusErrorMessage,this.dialogUri="",this.dialogResponse={},this.dialogDiff=[],this.dialogDiff=t.diffs,3==t.replayStatus&&(this.currentArgs=t.currentArgs),null!=t.originData)try{null!=t.originData&&null!=t.originData.response&&(this.dialogResponse=JSON.parse(t.originData.response))}catch(T){this.dialogResponse=t.originData.response}if("dubbo"===t.type.toLowerCase()){if(this.dialogVisible=!0,this.diaLogParameterArray=[],this.dubboFlag=!0,this.dialogUri=t.uri,null!==t.originData){if(null==t.originData.request)for(var e=0;e<t.currentArgs.length;e++){var a={value3:null,type3:null};a.mockValue=JSON.stringify(t.currentArgs[e],null,4),this.diaLogParameterArray.push(a)}else if(null==t.currentArgs)for(var r=0;r<t.originData.request.length;r++){var l={};l.value3=JSON.stringify(t.originData.request[r],null,4),l.type3=t.originData.parameterTypes[r],l.mockValue=null,this.diaLogParameterArray.push(l)}else if(null!=t.currentArgs&&null!=t.originData.request)for(var o=0;o<t.originData.request.length;o++){var i={};i.value3=JSON.stringify(t.originData.request[o],null,4),i.type3=t.originData.parameterTypes[o],i.mockValue=JSON.stringify(t.currentArgs[o],null,4),this.diaLogParameterArray.push(i)}}else if(null!=t.currentArgs)for(var n=0;n<t.currentArgs.length;n++){var c={value1:null,type1:null};c.mockValue=JSON.stringify(t.currentArgs[n],null,4),this.diaLogParameterArray.push(c)}}else if("http"===t.type.toLowerCase()||"okhttp"===t.type.toLowerCase()||"apache-http-client"===t.type.toLowerCase()){if(this.httpFlag=!0,this.unionArray=[],this.paramArray=[],this.httpFlag=!0,this.dialogUri=t.uri,null!=t.originData&&(this.dialogHeaders=t.originData.headers),this.replayHeaders=t.replayHeaders,"{}"!==JSON.stringify(this.dialogHeaders))for(var d in this.dialogHeaders){var p={};p.key=d,p.value=this.dialogHeaders[d],void 0===this.replayHeaders||void 0===this.replayHeaders[d]?this.unionArray.push({key1:p.key,value1:p.value,key2:"-",value2:"-"}):this.unionArray.push({key1:p.key,value1:p.value,key2:p.key,value2:p.value})}if("{}"!==JSON.stringify(this.replayHeaders))for(var u in this.replayHeaders){var h={};h.key=u,h.value=this.replayHeaders[u],void 0!==this.dialogHeaders&&void 0!==this.dialogHeaders[u]||this.unionArray.push({key1:"-",value1:"-",key2:h.key,value2:h.value})}if(null!=t.originData&&(this.dialogParamsMap=t.originData.paramsMap),this.replayParamsMap=t.replayParamsMap,"{}"!==JSON.stringify(this.dialogParamsMap))for(var f in this.dialogParamsMap){var m={};m.key=f,m.value=this.dialogParamsMap[f],void 0===this.replayParamsMap||void 0===this.replayParamsMap[f]?this.paramArray.push({key1:m.key,value1:m.value,key2:"-",value2:"-"}):this.paramArray.push({key1:m.key,value1:m.value,key2:m.key,value2:m.value})}if("{}"!==JSON.stringify(this.replayParamsMap))for(var g in this.replayParamsMap){var v={};v.key=g,v.value=this.replayParamsMap[g],void 0!==this.dialogParamsMap&&void 0!==this.dialogParamsMap[g]||this.paramArray.push({key1:"-",value1:"-",key2:v.key,value2:v.value})}null!=t.originData&&"object"==Object(s["a"])(t.originData.body)&&(this.body=JSON.stringify(t.originData.body,null,4)||""),"object"==Object(s["a"])(t.replayBody)&&(this.replayBody=JSON.stringify(t.replayBody,null,4)||""),null!=t.originData&&"string"==typeof t.originData.body&&(this.body=t.originData.body||""),"string"==typeof t.replayBody&&(this.replayBody=t.replayBody||"")}else if(this.dialogVisible=!0,this.diaLogParameterArray=[],this.otherFlag=!0,this.dialogUri=t.uri,null!==t.originData){if(null==t.originData.request)for(var y=0;y<t.currentArgs.length;y++){var b={value3:null,type3:null};b.mockValue=JSON.stringify(t.currentArgs[y],null,4),this.diaLogParameterArray.push(b)}else if(null==t.currentArgs)for(var _=0;_<t.originData.request.length;_++){var k={};k.value3=JSON.stringify(t.originData.request[_],null,4),k.type3=t.originData.parameterTypes[_],k.mockValue=null,this.diaLogParameterArray.push(k)}else if(null!=t.currentArgs&&null!=t.originData.request)for(var w=0;w<t.originData.request.length;w++){var C={};C.value3=JSON.stringify(t.originData.request[w],null,4),C.type3=t.originData.parameterTypes[w],C.mockValue=JSON.stringify(t.currentArgs[w],null,4),this.diaLogParameterArray.push(C)}}else if(null!=t.currentArgs)for(var S=0;S<t.currentArgs.length;S++){var D={value3:null,type3:null};D.mockValue=JSON.stringify(t.currentArgs[S],null,4),this.diaLogParameterArray.push(D)}this.stackTraces=t.stackTraces.split(/\n/)},showCompare:function(t,e){this.compareFlag=!this.compareFlag,this.compareFlag?this.$nextTick(function(){Object(o["a"])(this,this),this.leftContent=t||"",this.rightContent=e||""}.bind(this)):(this.leftContent="",this.rightContent="")}}},h=u,f=(a("fd9c"),a("e607")),m=Object(f["a"])(h,r,l,!1,null,"0d9a5d97",null);e["default"]=m.exports},"8f56":function(t,e,a){},dd32:function(t,e,a){"use strict";a("42a6")},f94c:function(t,e,a){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",[e("el-form",{staticClass:"demo-ruleForm"},[e("el-card",[e("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("h3",[e("span",[t._v("基础信息")]),e("div",{staticClass:"forCopy"},[e("el-input",{ref:"forCopyInput",staticClass:"forCopyInput",model:{value:t.curlRequest,callback:function(e){t.curlRequest=e},expression:"curlRequest"}}),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.changeValue}},[t._v("复制为curl命令")])],1)])]),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"traceId："}},[t._v("\n            "+t._s(t.traceId)+"\n          ")])],1),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"协议类型："}},[t._v("\n            "+t._s(t.type)+"\n          ")])],1)],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"采集机器："}},[t._v("\n            "+t._s(t.host)+"\n          ")])],1),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"流量环境："}},[t._v("\n            "+t._s(t.environment)+"\n          ")])],1)],1)],1),e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("接口信息")])]),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"接口uri："}},[t._v("\n            "+t._s(t.uri)+"\n          ")])],1),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"真实uri："}},[t._v("\n            "+t._s(t.requestURI)+"\n          ")])],1)],1)],1),e("el-card",{staticClass:"requestParams"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("请求参数")])]),e("el-collapse",{class:["lever2",{noBorderBottom:t.paramCollapse.length}],model:{value:t.paramCollapse,callback:function(e){t.paramCollapse=e},expression:"paramCollapse"}},[e("el-collapse-item",{attrs:{name:"1",title:"接口headers"}},[e("el-table",{attrs:{data:t.headersArray,border:"","max-height":"500"}},[e("el-table-column",{attrs:{label:"key",prop:"key",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"value",prop:"value",align:"center","show-overflow-tooltip":""}})],1)],1),t.requestBody?e("el-collapse-item",{attrs:{name:"2",title:"接口body"}},[e("json-viewer",{attrs:{value:t.requestBody,expanded:!0,"expand-depth":5,boxed:"",copyable:"",sort:""}})],1):t._e(),e("el-collapse-item",{attrs:{name:"3",title:"接口params"}},[e("el-table",{attrs:{data:t.paramsArray,border:"","max-height":"500"}},[e("el-table-column",{attrs:{label:"key",prop:"key",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"value",prop:"value",align:"center","show-overflow-tooltip":""}})],1)],1)],1)],1),t.showResponse?e("el-card",[e("el-collapse",{class:["lever1",{noBorderBottom:t.responseCollapse.length}],model:{value:t.responseCollapse,callback:function(e){t.responseCollapse=e},expression:"responseCollapse"}},[e("el-collapse-item",{attrs:{name:"1",title:"响应内容"}},[e("el-form-item",[e("json-viewer",{attrs:{value:t.response,"expand-depth":5,expanded:!0,boxed:"",copyable:"",sort:""}})],1)],1)],1)],1):t._e(),e("el-card",[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("子调用对比结果")])]),e("el-form-item",{staticStyle:{float:"left"}},[e("el-input",{attrs:{size:"small",placeholder:"请输入接口过滤",clearable:""},model:{value:t.inputSearch,callback:function(e){t.inputSearch=e},expression:"inputSearch"}})],1),e("el-table",{attrs:{data:t.filterData,border:"","max-height":"500"}},[e("el-table-column",{attrs:{label:"序号",align:"center",width:"50px"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.$index))])]}}])}),e("el-table-column",{attrs:{label:"子调用类型",prop:"type",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"子调用信息",prop:"uri",align:"center","min-width":"400","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"执行耗时(毫秒)",prop:"cost",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.sonDetail(a.row)}}},[t._v("调用详情")])]}}])})],1)],1)],1),e("el-card",{staticClass:"add-record-bottom-component"},[e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.resetForm()}}},[t._v("关闭")])],1),e("el-dialog",{attrs:{title:"调用详情",visible:t.dialogVisible,width:"1000px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("el-form",{staticClass:"demo-ruleForm"},[t.otherFlag?e("div",[e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("接口信息")])]),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"接口uri："}},[t._v("\n                "+t._s(t.dialogUri)+"\n              ")])],1)],1)],1),e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("请求参数")])]),e("el-form-item",[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("el-table",{attrs:{data:t.requestParameterArray,border:"","max-height":"500"}},[e("el-table-column",{attrs:{label:"序号",align:"center",width:"50px"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.$index))])]}}],null,!1,3869450744)}),e("el-table-column",{attrs:{label:"参数值",prop:"parameterValue",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"参数类型",prop:"parameterType",align:"center","show-overflow-tooltip":""}})],1)],1)],1)],1)],1),e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("响应内容")])]),e("el-form-item",[e("json-viewer",{attrs:{value:t.dialogResponse,"expand-depth":5,boxed:"",copyable:"",sort:""}})],1)],1),e("el-card",{attrs:{shadow:"hover"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("调用堆栈")])]),t._l(t.stackTraces,(function(a,r){return e("div",{key:r},[t._v("\n            "+t._s(a)+"\n          ")])}))],2)],1):t._e(),t.httpFlag?e("div",[e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("接口信息")])]),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"接口uri："}},[t._v("\n                "+t._s(t.dialogUri)+"\n              ")])],1)],1)],1),e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("请求参数")])]),e("el-form-item",[e("h4",[t._v("接口headers")])]),e("el-table",{attrs:{data:t.dialogHeadersArray,border:"","max-height":"500"}},[e("el-table-column",{attrs:{label:"key",prop:"key",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"value",prop:"value",align:"center","show-overflow-tooltip":""}})],1),e("el-form-item",[e("h4",[t._v("接口params")])]),e("el-table",{attrs:{data:t.dialogParamsArray,border:"","max-height":"500"}},[e("el-table-column",{attrs:{label:"key",prop:"key",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"value",prop:"value",align:"center","show-overflow-tooltip":""}})],1)],1),e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("请求body")])]),e("el-form-item",[e("json-viewer",{attrs:{value:t.dialogBody,"expand-depth":5,boxed:"",copyable:"",sort:""}})],1)],1),e("el-card",{attrs:{shadow:"hover"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("响应内容")])]),e("el-form-item",[e("json-viewer",{attrs:{value:t.dialogResponse,"expand-depth":5,boxed:"",copyable:"",sort:""}})],1)],1),e("el-card",{attrs:{shadow:"hover"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("调用堆栈")])]),t._l(t.stackTraces,(function(a,r){return e("div",{key:r},[t._v("\n            "+t._s(a)+"\n          ")])}))],2)],1):t._e()]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1)],1)},l=[],s=(a("fc02"),a("868d")),o=(a("a450"),a("1bc7"),a("32ea"),a("085b"),a("0cdc"),a("f829")),i=(a("4890"),a("6161"),a("365c")),n=a("258b"),c=a.n(n),d={name:"v-http-flow",props:["traceId","taskRunId","closeType"],components:{JsonViewer:c.a},data:function(){return{curlRequest:"",inputSearch:"",dialogVisible:!1,type:"",entranceInvocation:{},uri:"",requestURI:"",port:"",contentType:"",host:"",headers:{},headersArray:[],dialogHeadersArray:[],paramsMap:{},paramsArray:[],requestBody:null,dialogParamsArray:[],response:{},subInvocations:[],environment:"",dialogUri:"",requestParameterArray:[],dialogHeaders:{},dialogParamsMap:{},dialogBody:{},dialogResponse:{},httpFlag:!1,otherFlag:!1,paramCollapse:[],responseCollapse:[]}},computed:{filterData:function(){var t=JSON.parse(JSON.stringify(this.subInvocations));if(this.inputSearch.trim()){var e=this;t=this.subInvocations.filter(function(t){return Object(o["a"])(this,this),-1!==t.uri.indexOf(e.inputSearch.trim())}.bind(this))}return t},showResponse:function(){return Object.keys(this.response).length}},created:function(){this.getDetail()},methods:{resetForm:function(){this.$store.dispatch("page/close",{tagName:this.$route.name,notNext:!0}),1==this.closeType?this.routerPush({name:"record",params:{},query:{}}):2==this.closeType&&this.routerPush({name:"playback",params:{},query:{}})},getDetail:function(){if(""!=this.traceId||""!=this.taskRunId){var t={traceId:this.traceId,taskRunId:this.taskRunId};i["a"].record.flowDetail(t).then(function(t){if(Object(o["a"])(this,this),"SUCCESS"===t.code){if(this.host=t.data.host,this.curlRequest=t.data.curlRequest,this.environment=t.data.environment,this.entranceInvocation=t.data.entranceInvocation,this.type=this.entranceInvocation.type,this.uri=this.entranceInvocation.uri,this.requestURI=this.entranceInvocation.requestURI,this.port=this.entranceInvocation.port,this.contentType=this.entranceInvocation.contentType,this.headers=this.entranceInvocation.headers,"{}"!==JSON.stringify(this.headers))for(var e in this.headers){var a={};a.key=e,a.value=this.headers[e],this.headersArray.push(a)}if(this.paramsMap=this.entranceInvocation.paramsMap,"{}"!==JSON.stringify(this.paramsMap))for(var r in this.paramsMap){var l={};l.key=r,l.value=this.paramsMap[r],this.paramsArray.push(l)}this.entranceInvocation.body&&(this.requestBody=this.entranceInvocation.body),this.entranceInvocation.response&&(this.response=this.entranceInvocation.response),this.subInvocations=t.data.subInvocations}else this.$message.error("获取http详情失败:"+t.msg)}.bind(this))}},sonDetail:function(t){if(this.httpFlag=!1,this.otherFlag=!1,this.dialogVisible=!0,this.dialogResponse={},t.response&&(this.dialogResponse=t.response),this.dialogUri="","http"===t.type.toLowerCase()||"okhttp"===t.type.toLowerCase()||"apache-http-client"===t.type.toLowerCase()){if(this.dialogHeadersArray=[],this.dialogParamsArray=[],this.httpFlag=!0,this.dialogUri=t.uri,this.dialogHeaders=t.headers,"object"==Object(s["a"])(t.body)&&null!=t.body&&(this.dialogBody=t.body),"string"==typeof t.body&&(this.dialogBody=t.body),"{}"!==JSON.stringify(this.dialogHeaders))for(var e in this.dialogHeaders)this.dialogHeadersArray.push({key:e,value:this.dialogHeaders[e]});if(this.dialogParamsMap=t.paramsMap,"{}"!==JSON.stringify(this.dialogParamsMap))for(var a in this.dialogParamsMap)this.dialogParamsArray.push({key:a,value:this.dialogParamsMap[a]})}else if(this.otherFlag=!0,this.requestParameterArray=[],this.dialogUri=t.uri,t.request&&t.request.length)for(var r=0;r<t.request.length;r++)this.requestParameterArray.push({parameterValue:JSON.stringify(t.request[r]),parameterType:t.parameterTypes[r]});this.stackTraces=t.stackTraces.split(/\n/)},changeValue:function(){if(!this.curlRequest)return this.$message.error("复制失败：curlRequest为null");this.$refs.forCopyInput.select(),document.execCommand("copy"),this.$message.success("复制成功")}}},p=d,u=(a("dd32"),a("e607")),h=Object(u["a"])(p,r,l,!1,null,"08a61a45",null);e["a"]=h.exports},fd9c:function(t,e,a){"use strict";a("8f56")}}]);