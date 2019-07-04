(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1004:function(t,e,r){"use strict";var n={props:{type:{type:String,default:""},name:{type:String,default:""}}},c=(r(1016),r(3)),o=r(5),l=r.n(o),d=r(237),component=Object(c.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("v-img",{staticClass:"me-icon",attrs:{src:"/images/"+this.type+"/"+this.name+".svg",title:""+this.name}})],1)},[],!1,null,null,null);e.a=component.exports;l()(component,{VImg:d.a})},1016:function(t,e,r){"use strict";var n=r(983);r.n(n).a},1017:function(t,e,r){(t.exports=r(9)(!1)).push([t.i,".me-icon{width:100%}",""])},1023:function(t,e,r){"use strict";var n={props:{data:{type:Array,default:function(){return[]}}},computed:{text:function(){var t=this;return this.data.map(function(i){return t.increase(i)}).join(", ")}},methods:{increase:function(data){return"+".concat(data.amount," ").concat(data.ability)}}},c=r(3),component=Object(c.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.text))])},[],!1,null,null,null);e.a=component.exports},1041:function(t,e,r){var map={"./adaptation.md":510,"./all-seeing-eyes.md":511,"./amphibious.md":512,"./bio-electric-focus.md":513,"./bio-electric-ward.md":514,"./bioluminescence.md":515,"./bite.md":516,"./blood-rage.md":517,"./brothers-in-arms.md":518,"./careful.md":519,"./contra-gravitic-levitation.md":520,"./cybernetic-augmentation.md":521,"./eidetic-memory.md":522,"./extremophile.md":523,"./four-eyes.md":524,"./fragile.md":525,"./fury-of-the-small.md":526,"./hermetic-suit-volus.md":527,"./hermetic-suit.md":528,"./high-speed-metabolism.md":529,"./hunter-mode.md":530,"./innate-biotics.md":531,"./integrated-protection.md":532,"./limited-regeneration.md":533,"./living-construct.md":534,"./lucky.md":535,"./martial-training.md":536,"./menacing.md":537,"./mind-meld.md":538,"./natural-diplomat.md":539,"./natural-hunters.md":540,"./no-feats.md":541,"./non-differentiated-cells.md":542,"./photographic-memory.md":543,"./powerful-build.md":544,"./psychometry.md":545,"./quad-strand-dna.md":546,"./quadrupedal.md":547,"./raw-agility.md":548,"./repair-matrix.md":549,"./saving-face.md":550,"./savvy-dealings.md":551,"./shoulder-mounts.md":552,"./shrewd-negotiator.md":553,"./solar-dependency.md":554,"./survivalist.md":555,"./tentacles.md":556,"./thick-hide.md":557,"./thulium-skin.md":558,"./toughness.md":559,"./twice-as-bright.md":560};function n(t){var e=c(t);return r(e)}function c(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=c,t.exports=n,n.id=1041},1042:function(t,e,r){var map={"./ardat-yakshi.md":506,"./awakened-collector.md":507,"./unshackled-ai.md":508,"./variant-human.md":509};function n(t){var e=c(t);return r(e)}function c(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=c,t.exports=n,n.id=1042},1049:function(t,e,r){"use strict";var n=r(1004),c=r(1023),o={},l=r(3),d=Object(l.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my-3 mx-2"},[e("div",{staticClass:"title mb-1"},[this._t("header")],2),e("div",[this._t("text")],2)])},[],!1,null,null,null).exports,m=(r(23),{components:{Trait:d},props:{id:{type:String,default:""}},computed:{name:function(){return this.item.attributes.name},item:function(){if(this.id)return r(1041)("./".concat(this.id,".md"))}}}),h=Object(l.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("trait",[e("span",{attrs:{slot:"header"},slot:"header"},[this._v(this._s(this.name))]),e("template",{slot:"text"},[e("div",{staticClass:"markdown-content"},[e("markdown-content",{attrs:{component:this.item.vue}})],1)])],2)},[],!1,null,null,null).exports,v={props:{id:{type:String,default:""}},computed:{name:function(){return this.item.attributes.name},item:function(){if(this.id)return r(1042)("./".concat(this.id,".md"))}}},f=Object(l.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"headline"},[this._v(this._s(this.name))]),e("div",{staticClass:"markdown-content"},[e("markdown-content",{attrs:{component:this.item.vue}})],1)])},[],!1,null,null,null).exports,_={components:{MeIcon:n.a,Increases:c.a,Trait:d,RacialTrait:h,Variant:f},props:{race:{type:Object,default:function(){return{}}}}},x=r(5),y=r.n(x),w=r(177),C=r(181),k=r(970),O=r(158),V=r(178),j=r(159),E=Object(l.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"mt-3 hidden-print"},[r("v-card-text",[r("markdown-file",{attrs:{id:t.race.id,itemType:"races"}}),r("v-btn",{attrs:{href:"http://masseffect.wikia.com/wiki/"+("unshackled_ai"==t.race.id?"Artificial_Intelligence":t.race.name),target:"_blank",color:"primary"}},[t._v("Read more "),r("v-icon",[t._v("keyboard_arrow_right")])],1)],1)],1),r("v-card",{staticClass:"mt-3 hidden-print"},[r("v-card-text",[r("p",{staticClass:"headline"},[t._v("Available Classes")]),r("v-layout",{staticClass:"mt-3",attrs:{row:"",wrap:"","justify-space-around":""}},t._l(t.race.availableClasses,function(e){return r("v-flex",{key:e,staticClass:"xs4 sm2 lg1 text-xs-center"},[r("me-icon",{attrs:{name:e,type:"classes"}}),r("p",[t._v(t._s(e))])],1)}),1)],1)],1),r("v-card",{staticClass:"mt-3"},[r("v-card-text",[r("p",{staticClass:"hidden-screen"},[t._v(t._s(t.race.snippet))]),r("p",{staticClass:"subheading hidden-screen"},[t._v("Available Classes: "),r("small",[t._v(t._s(t.race.availableClasses.join(", ")))])]),r("p",{staticClass:"headline"},[t._v(t._s(t.race.name)+" Traits")]),r("trait",[r("span",{attrs:{slot:"header"},slot:"header"},[t._v("Ability Score Increase")]),r("template",{slot:"text"},[r("increases",{attrs:{data:t.race.abilityScoreIncrease}})],1)],2),r("trait",[r("span",{attrs:{slot:"header"},slot:"header"},[t._v("Age")]),r("span",{attrs:{slot:"text"},slot:"text"},[t._v(t._s(t.race.age))])]),r("trait",[r("span",{attrs:{slot:"header"},slot:"header"},[t._v("Alignment")]),r("span",{attrs:{slot:"text"},slot:"text"},[t._v(t._s(t.race.alignment))])]),r("trait",[r("span",{attrs:{slot:"header"},slot:"header"},[t._v("Size")]),r("span",{attrs:{slot:"text"},slot:"text"},[t._v(t._s(t.race.size))])]),r("trait",[r("span",{attrs:{slot:"header"},slot:"header"},[t._v("Speed")]),r("span",{attrs:{slot:"text"},slot:"text"},[t._v(t._s(t.race.speed))])]),t._l(t.race.traits,function(t){return r("racial-trait",{key:t,attrs:{id:t}})}),r("trait",[r("span",{attrs:{slot:"header"},slot:"header"},[t._v("Optional Starting Credits")]),r("span",{attrs:{slot:"text"},slot:"text"},[t._v(t._s(t.race.startingCredits))])])],2)],1),t.race.variants?r("v-card",{staticClass:"mt-3"},[r("v-card-text",t._l(t.race.variants,function(t){return r("variant",{key:t,attrs:{id:t}})}),1)],1):t._e()],1)},[],!1,null,null,null);e.a=E.exports;y()(E,{VBtn:w.a,VCard:C.a,VCardText:k.b,VFlex:O.a,VIcon:V.a,VLayout:j.a})},1177:function(t,e,r){var map={"./angara.md":587,"./asari.md":588,"./batarian.md":589,"./drell.md":590,"./elcor.md":591,"./geth.md":592,"./hanar.md":593,"./human.md":594,"./krogan.md":595,"./prothean.md":596,"./quarian.md":597,"./salarian.md":598,"./turian.md":599,"./volus.md":600,"./vorcha.md":601};function n(t){var e=c(t);return r(e)}function c(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=c,t.exports=n,n.id=1177},1226:function(t,e,r){"use strict";r.r(e);r(23);var n=r(14),c=r(1049),o=r(21),l={components:{RaceInfo:c.a},data:function(){return{race:r(1177)("./".concat(this.$route.params.id,".md")).attributes,id:this.$route.params.id}},computed:Object(n.a)({},Object(o.d)(["races"])),head:function(){return{title:"".concat(this.race.name," - Races | Mass Effect 5e"),meta:[{hid:"description",name:"description",content:this.race.snippet}]}},layout:"phb"},d=r(3),m=r(5),h=r.n(m),v=r(177),f=r(156),_=r(158),x=r(178),y=r(237),w=r(159),C=r(151),k=r(152),O=r(186),V=r(176),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"xs12 md9"},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",md8:""}},[r("h2",{staticClass:"display-3"},[t._v(t._s(t.race.name))])]),r("v-flex",{staticClass:"text-xs-right hidden-sm-and-down",attrs:{md4:""}},[r("v-menu",[r("v-btn",{attrs:{slot:"activator",dark:""},slot:"activator"},[r("span",[t._v("Change Race")]),r("v-icon",[t._v("arrow_drop_down")])],1),r("v-list",t._l(t.races,function(e){return r("v-list-tile",t._b({key:e},"v-list-tile",{to:{name:"phb-races-id",params:{id:e}}},!1),[r("v-list-tile-title",[t._v(t._s(t._f("fidtt")(e)))])],1)}),1)],1)],1)],1),r("race-info",{attrs:{race:t.race}})],1),r("v-flex",{staticClass:"hidden-sm-and-down md3"},[r("v-img",{attrs:{src:t.race.bodyImg,height:"80vh",contain:""}}),"prothean"==t.id?r("p",{staticClass:"text-xs-center"},[r("small",[r("em",[t._v("image courtesy of JTickner")])])]):t._e()],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:v.a,VContainer:f.a,VFlex:_.a,VIcon:x.a,VImg:y.a,VLayout:w.a,VList:C.a,VListTile:k.a,VListTileTitle:O.c,VMenu:V.a})},983:function(t,e,r){var content=r(1017);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("38b4efaa",content,!0,{sourceMap:!1})}}]);