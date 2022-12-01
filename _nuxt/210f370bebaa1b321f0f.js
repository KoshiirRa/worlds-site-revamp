(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1021:function(t,e,r){"use strict";r(77),r(32);var n=r(14),o=r(21),l={props:{item:{type:Object,default:function(){return{}}},title:{type:Boolean,default:!0}},computed:Object(n.a)({},Object(o.d)("itemList",["rarityTextColors"]),{benefits:function(){return this.item.feature?this.item.feature.split("--").map(function(t){return t.trim()}):[]},setBonus:function(){return this.item.setBonus?this.item.setBonus.split("--").map(function(t){return t.trim()}):[]},andromeda:function(){return"x"===this.item.andromeda}}),methods:{setBonusGroup:function(t){var e=t.match(/\d of \d/);return e?e[0]:""},setBonusText:function(t){var e=t.split(":");return e[1]?e[1]:""}}},c=r(3),d=r(5),m=r.n(d),f=r(181),y=r(970),v=r(158),h=r(159),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-layout",[r("v-flex",{staticClass:"xs12"},[r("p",{staticClass:"display-1 font-weight-thin mb-2"},[t.title?r("span",[t._v(t._s(t.item.name))]):t._e()]),r("span",{staticClass:"text-uppercase body-2",class:t.rarityTextColors[t.item.rarity]},[t._v(t._s(t.item.rarity))]),t.andromeda?r("span",{staticClass:"text-uppercase body-2 secondary--text ml-3"},[t._v("Andromeda")]):t._e(),r("p",[r("em",[t._v(t._s(t.item.description))])])])],1),r("v-layout",{attrs:{row:"",wrap:"","flex-start":""}},[r("v-flex",{staticClass:"xs4 attribute mb-2"},[r("label",[t._v("Type")]),r("div",[t._v(t._s(t.item.type))])]),r("v-flex",{staticClass:"xs4 attribute mb-2"},[r("label",[t._v("Armor Type")]),r("div",[t._v(t._s(t.item.armorType))])]),r("v-flex",{staticClass:"xs4 attribute mb-2"},[r("label",[t._v("Cost")]),r("div",[t._v(t._s(t._f("groupDigits")(t.item.cost,",")))])]),r("v-flex",{staticClass:"xs12"},[r("div",{staticClass:"hr"}),r("ul",{staticClass:"list-unstyled"},t._l(t.benefits,function(e,n){return r("li",{key:n,staticClass:"subheading"},[t._v(t._s(e))])}),0),t.setBonus.length>0?r("v-card",{staticClass:"mt-4",attrs:{xs12:"",md8:""}},[r("v-card-text",[r("p",{staticClass:"ma-0 body-2"},[t._v("Set Bonuses")]),t._l(t.setBonus,function(e,n){return r("dl",{key:n},[r("dt",[r("strong",[t._v("("+t._s(t.setBonusGroup(e))+")")])]),r("dd",[t._v(t._s(t.setBonusText(e)))])])})],2)],1):t._e()],1)],1)],1)},[],!1,null,null,null);e.a=component.exports;m()(component,{VCard:f.a,VCardText:y.b,VFlex:v.a,VLayout:h.a})},1189:function(t,e,r){"use strict";r.r(e);r(22),r(26),r(23),r(124);var n=r(14),o=(r(32),r(33),r(34),r(975)),l=(r(38),r(15),r(39),r(323),r(21)),c=Object(l.a)("itemList"),d=c.mapActions,m=c.mapGetters,f={props:{itemKey:{type:String,default:""},noteOptions:{type:Array,default:function(){return[]}}},data:function(){return{typeOptions:["Chest","Head","Arms","Legs","Body Armor","Full Set"],armorTypeOptions:["Light","Medium","Heavy"]}},computed:Object(n.a)({},m(["filters","rarityOptions"]),{typeFilter:{get:function(){return this.filters[this.itemKey].type},set:function(t){this.updateFilter({key:this.itemKey,filterKey:"type",value:t})}},armorTypeFilter:{get:function(){return this.filters[this.itemKey].armorType},set:function(t){this.updateFilter({key:this.itemKey,filterKey:"armorType",value:t})}},noteFilter:{get:function(){return this.filters[this.itemKey].notes},set:function(t){this.updateFilter({key:this.itemKey,filterKey:"notes",value:t})}},rarityFilter:{get:function(){return this.filters[this.itemKey].rarity},set:function(t){this.updateFilter({key:this.itemKey,filterKey:"rarity",value:t})}}}),methods:Object(n.a)({},d(["updateFilter"]),{reset:function(){this.typeFilter=[],this.armorTypeFilter=[],this.noteFilter=[],this.rarityFilter=[]}})},y=r(3),v=r(5),h=r.n(v),x=r(177),_=r(156),C=r(158),O=r(159),S=r(235),component=Object(y.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pa-0",attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{row:"","justify-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-select",{attrs:{items:t.rarityOptions,label:"Rarity",multiple:"","menu-props":"{maxHeight:'400'}"},model:{value:t.rarityFilter,callback:function(e){t.rarityFilter=e},expression:"rarityFilter"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-select",{attrs:{items:t.typeOptions,label:"Type",multiple:"","menu-props":"{maxHeight:'400'}"},model:{value:t.typeFilter,callback:function(e){t.typeFilter=e},expression:"typeFilter"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-select",{attrs:{items:t.armorTypeOptions,label:"Armor Type",multiple:"","menu-props":"{maxHeight:'400'}"},model:{value:t.armorTypeFilter,callback:function(e){t.armorTypeFilter=e},expression:"armorTypeFilter"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-select",{attrs:{items:t.noteOptions,label:"Benefits",multiple:"","menu-props":"{maxHeight:'400'}"},model:{value:t.noteFilter,callback:function(e){t.noteFilter=e},expression:"noteFilter"}})],1),r("v-flex",{staticClass:"text-xs-center hidden-md-and-up",attrs:{xs12:""}},[r("v-btn",{on:{click:function(e){return t.reset()}}},[t._v("Reset")])],1)],1)],1)},[],!1,null,null,null),k=component.exports;h()(component,{VBtn:x.a,VContainer:_.a,VFlex:C.a,VLayout:O.a,VSelect:S.a});var w=r(976),F=r(1021),T=r(188),V={components:{SortOptions:w.a,ArmorSetInfo:F.a,BookmarkButton:T.a},props:{items:{type:Array,default:function(){return[]}}},data:function(){return{headers:[{label:"Name",key:"name",classes:"xs6 md4 lg3",sortable:!0},{label:"Cost",key:"cost",classes:"xs2 md1",sortable:!0},{label:"Armor Type",key:"armorType",classes:"xs2 md1"},{label:"Type",key:"placement",classes:"xs2 md2"},{label:"Notes",key:"notes",classes:"hidden-sm-and-down md4 lg5"}]}},computed:Object(n.a)({},Object(l.d)("itemList",["rarityTextColors"]))},B=r(181),j=r(970),L=r(164),A=r(964),K=r(965),E=Object(y.a)(V,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("sort-options",{attrs:{headers:t.headers,defaultSort:"0"}}),r("v-expansion-panel",{staticClass:"mb-2"},t._l(t.items,function(e,n){return r("v-expansion-panel-content",{key:n},[r("div",{attrs:{slot:"header"},slot:"header"},[r("v-layout",[r("v-flex",{class:t.headers[0].classes},[r("div",{class:t.rarityTextColors[e.rarity]},[r("strong",[t._v(t._s(e.name))]),e.andromeda?r("v-chip",{staticClass:"ml-2 v-chip--x-small",attrs:{color:"secondary",dark:"",flat:""}},[t._v("Andromeda")]):t._e()],1)]),r("v-flex",{class:t.headers[1].classes},[t._v(t._s(t._f("groupDigits")(e.cost,",")))]),r("v-flex",{class:t.headers[2].classes},[t._v(t._s(e.armorType))]),r("v-flex",{class:t.headers[3].classes},[t._v(t._s(e.type))]),r("v-flex",{class:t.headers[4].classes},[t._v(t._s(e.notes))])],1)],1),r("v-card",{staticClass:"grey lighten-3"},[r("v-card-text",[r("armor-set-info",{staticClass:"mt-2",attrs:{item:e}})],1),r("v-card-actions",[r("bookmark-button",{attrs:{card:e,type:"armorSet",props:{flat:!0}}})],1)],1)],1)}),1)],1)},[],!1,null,null,null),D=E.exports;h()(E,{VCard:B.a,VCardActions:j.a,VCardText:j.b,VChip:L.a,VExpansionPanel:A.a,VExpansionPanelContent:K.a,VFlex:C.a,VLayout:O.a});var $=r(999),H=r(1001),I=Object(l.a)("itemList"),M=I.mapActions,G=I.mapGetters,R={components:{ArmorSetFilters:k,ArmorSetList:D,MobileFilterContainer:$.a},data:function(){var t=new Set,e=!0,r=!1,n=void 0;try{for(var l,c=H[Symbol.iterator]();!(e=(l=c.next()).done);e=!0){var d=l.value;if(d.notes){var m=!0,f=!1,y=void 0;try{for(var v,h=d.notes.split(",").map(function(t){return t.trim()})[Symbol.iterator]();!(m=(v=h.next()).done);m=!0){var x=v.value;t.add(x)}}catch(t){f=!0,y=t}finally{try{m||null==h.return||h.return()}finally{if(f)throw y}}}}}catch(t){r=!0,n=t}finally{try{e||null==c.return||c.return()}finally{if(r)throw n}}return{items:H,noteOptions:Object(o.a)(t).sort(),itemKey:"armorSets"}},computed:Object(n.a)({},G(["order","sortBy","filters","searchString"]),{search:{get:function(){return this.searchString},set:function(t){this.updateSearchString(t)}},filtered:function(){var t=this,data=this.items,e=this.sortBy.key,r=this.order;return data.sort(function(a,b){var t="cost"===e?parseInt(a[e],10):a[e],n="cost"===e?parseInt(b[e],10):b[e];return(t===n?0:t>n?1:-1)*r}),this.search&&(data=data.filter(function(e){var r=e.name.toLowerCase().indexOf(t.searchString.toLowerCase())>=0,n=!!e.notes&&e.notes.toLowerCase().indexOf(t.searchString.toLowerCase())>=0,o=e.description.toLowerCase().indexOf(t.searchString.toLowerCase())>=0,l=!!e.feature&&e.feature.toLowerCase().indexOf(t.searchString.toLowerCase())>=0;return r||n||o||l})),this.filters.armorSets.type.length>0&&(data=data.filter(function(e){return t.filters.armorSets.type.includes(e.type)})),this.filters.armorSets.armorType.length>0&&(data=data.filter(function(e){return t.filters.armorSets.armorType.includes(e.armorType)})),this.filters.armorSets.rarity.length>0&&(data=data.filter(function(e){return t.filters.armorSets.rarity.includes(e.rarity)})),this.filters.armorSets.notes.length>0&&(data=data.filter(function(e){if(e.notes){var r=!0,n=!1,o=void 0;try{for(var l,c=e.notes.split(",").map(function(t){return t.trim()})[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var d=l.value;if(t.filters.armorSets.notes.includes(d))return e}}catch(t){n=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}}})),data}}),middleware:"resetListFilters",head:function(){return{title:"Armor Sets - Equipment | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"These pre-made armor pieces are available as mass produced alternatives to custom modding."}]}},layout:"phb",methods:Object(n.a)({},M(["updateSearchString"]))},J=r(971),N=Object(y.a)(R,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{class:{"px-0":t.$vuetify.breakpoint.xsOnly}},[r("div",{staticClass:"text-md-right"},[r("v-btn",{attrs:{to:"/phb/rules/equipment#armor",nuxt:"",outline:"",color:"secondary"}},[t._v("Armor Rules")]),r("v-btn",{attrs:{to:"/for-gms/armor-creation",nuxt:"",outline:"",color:"secondary"}},[t._v("Creating Armor")])],1),r("div",{staticClass:"mb-5 hidden-sm-and-down"},[r("h2",{staticClass:"display-1"},[t._v("Armor Sets")]),r("div",{staticClass:"hr mb-0"}),r("v-card",{attrs:{elevation:"0"}},[r("v-card-text",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),r("v-flex",{attrs:{xs12:""}},[r("armor-set-filters",{attrs:{itemKey:t.itemKey,noteOptions:t.noteOptions}})],1)],1)],1)],1)],1),r("armor-set-list",{attrs:{items:t.filtered}}),r("mobile-filter-container",{attrs:{title:"Filter Armor Sets"}},[r("template",{slot:"filters"},[r("armor-set-filters",{attrs:{itemKey:t.itemKey,noteOptions:t.noteOptions}})],1)],2)],1)},[],!1,null,null,null);e.default=N.exports;h()(N,{VBtn:x.a,VCard:B.a,VCardText:j.b,VContainer:_.a,VFlex:C.a,VLayout:O.a,VTextField:J.a})},975:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(e,"a",function(){return n})},976:function(t,e,r){"use strict";r(22),r(26);var n=r(14),o=r(21),l={props:{headers:{type:Array,default:function(){return[]}},defaultSort:{type:String,default:""}},computed:Object(n.a)({},Object(o.d)("itemList",{getOrder:"order",getSortBy:"sortBy"}),{order:{get:function(){return this.getOrder},set:function(t){this.updateList({key:"order",value:t})}},sortBy:{get:function(){return this.getSortBy},set:function(t){this.updateList({key:"sortBy",value:t})}}}),created:function(){this.headers.includes(this.sortBy)||(this.sortBy=this.headers[this.defaultSort])},methods:Object(n.a)({},Object(o.c)("itemList",["updateList"]),{sort:function(header){this.sortBy===header?this.order=-1*this.order:this.sortBy=header}})},c=r(3),d=r(5),m=r.n(d),f=r(177),y=r(158),v=r(178),h=r(159),x=r(151),_=r(152),C=r(186),O=r(176),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"text-xs-right mb-2 hidden-lg-and-up"},[r("v-menu",{attrs:{bottom:"",left:""}},[r("span",{staticClass:"subheading",attrs:{slot:"activator"},slot:"activator"},[t._v("Sort by: "+t._s(t.sortBy.label))]),r("v-list",t._l(t.headers,function(header){return header.sortable?r("v-list-tile",{key:header.key,on:{click:function(e){t.sortBy=header}}},[r("v-list-tile-title",[t._v(t._s(header.label)+" "),header.key===t.sortBy.key?r("v-icon",[t._v("check")]):t._e()],1)],1):t._e()}),1)],1),r("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){t.order=-1*t.order}}},[r("v-icon",[t._v(t._s(t.order>0?"arrow_downward":"arrow_upward"))])],1)],1),r("v-layout",{staticClass:"pl-4 pr-5 my-2 hidden-md-and-down",attrs:{row:""}},t._l(t.headers,function(header){return r("v-flex",{key:header.key,class:header.classes},[header.sortable?r("button",{staticClass:"body-2",on:{click:function(e){return t.sort(header)}}},[t._v(t._s(header.label)),t.sortBy.key===header.key?r("v-icon",{staticClass:"ml-2",attrs:{size:"16"}},[t._v(t._s(t.order>0?"arrow_downward":"arrow_upward"))]):t._e()],1):r("span",{staticClass:"body-1"},[t._v(t._s(header.label))])])}),1)],1)},[],!1,null,null,null);e.a=component.exports;m()(component,{VBtn:f.a,VFlex:y.a,VIcon:v.a,VLayout:h.a,VList:x.a,VListTile:_.a,VListTileTitle:C.c,VMenu:O.a})},999:function(t,e,r){"use strict";var n=r(14),o=r(21),l=Object(o.a)("phb"),c=l.mapActions,d=l.mapGetters,m={computed:Object(n.a)({},d(["mobileFilterDialog"])),methods:Object(n.a)({},c(["toggleMobileFilterDialog"]))},f=r(3),y=r(5),v=r.n(y),h=r(177),x=r(181),_=r(970),C=r(966),O=r(178),S=r(180),k=r(960),component=Object(f.a)(m,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.mobileFilterDialog,callback:function(e){t.mobileFilterDialog=e},expression:"mobileFilterDialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){return t.toggleMobileFilterDialog(e)}}},[r("v-icon",[t._v("close")])],1),r("v-toolbar-title",[t._v("Filter Spells")])],1),r("v-card-text",[t._t("filters")],2)],1)],1)},[],!1,null,null,null);e.a=component.exports;v()(component,{VBtn:h.a,VCard:x.a,VCardText:_.b,VDialog:C.a,VIcon:O.a,VToolbar:S.a,VToolbarTitle:k.b})}}]);