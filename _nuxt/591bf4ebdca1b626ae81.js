(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1221:function(e,t,n){"use strict";n.r(t);n(23);var r=n(14),d=n(974),o=n(189),m=n(21),c={components:{RuleCard:d.a},computed:Object(r.a)({},Object(m.d)("phb",{version:"version",pages:"pages"}),{rules:function(){var e=this;return o.filter(function(t){return t.section===e.pages[e.$route.name].rules})},title:function(){return this.pages[this.$route.name].name}}),head:function(){return{title:"".concat(this.title," | Mass Effect 5e"),meta:[{hid:"description",name:"description",content:"Using Monsters from ME5e"}]}},layout:"phb"},l=n(3),h=n(5),v=n.n(h),f=n(156),component=Object(l.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",[t("h2",{staticClass:"display-1 hidden-sm-and-down"},[this._v(this._s(this.title))]),this._l(this.rules,function(e,n){return t("div",{key:n},[t("rule-card",{attrs:{id:e.id}})],1)})],2)},[],!1,null,null,null);t.default=component.exports;v()(component,{VContainer:f.a})},973:function(e,t,n){var map={"./01-01-using-this-homebrew.md":239,"./01-02-introduction.md":240,"./01-03-universe-to-explore.md":241,"./01-04-using-these-rules.md":242,"./01-05-how-to-play.md":243,"./01-06-adventures.md":244,"./02-01-step-by-step-characters.md":245,"./02-02-choose-a-race.md":246,"./02-03-choose-a-class.md":247,"./02-04-determine-ability-scores.md":248,"./02-05-describe-your-character.md":249,"./02-06-appearance.md":250,"./02-07-alignment.md":251,"./02-08-background.md":252,"./02-09-personality.md":253,"./02-10-languages.md":254,"./02-11-choose-equipment.md":255,"./02-12-coming-together.md":256,"./03-01-beyond-first-level.md":257,"./03-02-multiclassing.md":258,"./03-03-inspiration.md":259,"./03-04-paragon-renegade.md":260,"./04-01-using-ability-scores.md":261,"./04-02-ability-scores-and-modifiers.md":262,"./04-03-advantage-and-disadvantage.md":263,"./04-04-proficiency-bonus.md":264,"./04-05-ability-checks.md":265,"./04-06-strength.md":266,"./04-07-dexterity.md":267,"./04-08-constitution.md":268,"./04-09-intelligence.md":269,"./04-10-wisdom.md":270,"./04-11-charisma.md":271,"./04-12-saving-throws.md":272,"./05-01-missions.md":273,"./05-02-time.md":274,"./05-03-movement.md":275,"./05-04-environment.md":276,"./05-05-social-interaction.md":277,"./05-06-resting.md":278,"./05-07-between-missions.md":279,"./06-01-starting-equipment.md":280,"./06-02-armor.md":281,"./06-03-custom-armor.md":282,"./06-04-weapons.md":283,"./06-05-mods.md":284,"./06-06-medi-gel.md":285,"./06-07-thermal-clips.md":286,"./06-08-grenades.md":287,"./06-09-heavy-weapon-charges.md":288,"./06-10-omni-gel.md":289,"./06-11-tools-kits.md":290,"./06-12-omni-tool-programs.md":291,"./07-01-wealth.md":292,"./07-02-selling-items.md":293,"./07-03-discounts.md":294,"./07-04-lifestyle-expenses.md":295,"./07-05-cost-of-things.md":296,"./08-01-vehicle-concept.md":297,"./08-02-transports-starships.md":298,"./08-03-basic-information.md":299,"./08-04-systems.md":300,"./08-05-crew.md":301,"./08-06-starship-combat.md":302,"./08-07-travel.md":303,"./08-08-other-rules.md":304,"./08-10-creating-vehicles.md":305,"./09-01-order-of-combat.md":306,"./09-02-movement-and-position.md":307,"./09-03-actions-in-combat.md":308,"./09-04-making-an-attack.md":309,"./09-05-cover.md":310,"./09-06-damage-and-healing.md":311,"./09-07-shields.md":312,"./10-01-what-is-a-spell.md":313,"./10-02-spell-types.md":314,"./10-03-spell-level.md":315,"./10-04-learning-spells.md":316,"./10-05-spell-slots.md":317,"./10-06-casting-a-spell.md":318,"./10-07-primer-and-detonators.md":319,"./11-01-monster-overview.md":320,"./11-02-monster-types.md":321,"./11-03-getting-monsters.md":322};function r(e){var t=d(e);return n(t)}function d(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=d,e.exports=r,r.id=973},974:function(e,t,n){"use strict";n(32);var r={components:{MarkdownContent:n(65).a},props:{id:{type:String,default:""}},computed:{item:function(){return n(973)("./".concat(this.id,".md"))},title:function(){return this.item.attributes.title},newRule:function(){return this.item.attributes.new},changeRule:function(){return this.item.attributes.change},hash:function(){return this.id.split("-").splice(2).join("-")}}},d=n(3),o=n(5),m=n.n(o),c=n(181),l=n(970),h=n(161),v=n(164),component=Object(d.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"elevation-0 transparent",attrs:{id:e.hash}},[n("v-card-title",{staticClass:"headline"},[e._v(e._s(e.title)),e.newRule?n("v-chip",{attrs:{color:"secondary","text-color":"white",small:""}},[e._v("new")]):e._e(),e.changeRule?n("v-chip",{attrs:{color:"orange accent-2","text-color":"black",small:""}},[e._v("change")]):e._e()],1),n("v-card-text",[n("markdown-content",{attrs:{component:e.item.vue}})],1)],1)},[],!1,null,null,null);t.a=component.exports;m()(component,{VCard:c.a,VCardText:l.b,VCardTitle:h.a,VChip:v.a})}}]);