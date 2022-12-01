(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1006:function(e){e.exports=[{mechanic:"ac",description:"Increase AC",amount:"1",cost:"20000",id:"ac"},{mechanic:"adv damage reroll",description:"reroll any 1 and 2 on your [biotic, tech, or melee] damage rolls",amount:"1 damage type",cost:"40000",id:"adv_damage_reroll"},{mechanic:"advantage skill",description:"Advantage on skill check",amount:"1 skill type",cost:"15000",id:"advantage_skill"},{mechanic:"attack bonus",description:"+X to melee weapon attack and damage rolls",amount:"1",cost:"12000",id:"attack_bonus"},{mechanic:"auto-gel",description:"Use medi-gel as a reaction to taking hit point damage",amount:"1 medi-gel charge",cost:"8000",id:"auto-gel"},{mechanic:"auto-stabilize",description:"Instantly stabilize when you drop below 0 hit points.",amount:"1 per long rest",cost:"35000",id:"auto-stabilize"},{mechanic:"avoidance",description:"When subjected to an effect that lets you make a saving throw to take half damage, take no damage on a success.",amount:"1 saving throw type",cost:"45000",id:"avoidance"},{mechanic:"bonus ability",description:"Increases one ability score by 1-5",amount:"5",cost:"33000",id:"bonus_ability"},{mechanic:"condition-immunity",description:"Condition Immunity",amount:"1 condition",cost:"35000",id:"condition-immunity"},{mechanic:"damage reroll",description:"reroll any 1 on your [biotic, tech, or melee] damage rolls",amount:"1 damage type",cost:"20000",id:"damage_reroll"},{mechanic:"damage-immunity",description:"Damage immunity",amount:"1 damage type",cost:"55000",id:"damage-immunity"},{mechanic:"darkvision",description:"Darkvision up to certain distance. Can be toggled as bonus action.",amount:"20m",cost:"2000",id:"darkvision"},{mechanic:"grenades",description:"Increase grenade capacity",amount:"2",cost:"3000",id:"grenades"},{mechanic:"hw",description:"Increase Heavy Weapon charges",amount:"1",cost:"5000",id:"hw"},{mechanic:"improved medi-gel",description:"Additional hit die when expending medi-gel",amount:"1 die",cost:"12000",id:"improved_medi-gel"},{mechanic:"infrared vision",description:"Infrared vision up to certain distance. Can be toggled as bonus action.",amount:"20m",cost:"4000",id:"infrared_vision"},{mechanic:"medi-gel",description:"Increase Medi-gel capacity",amount:"2",cost:"2000",id:"medi-gel"},{mechanic:"null critical",description:"While you're wearing it, any critical hit against you becomes a normal hit.",amount:"-",cost:"20000",id:"null_critical"},{mechanic:"null-difficult terrain",description:"Ignore movement penalties of difficult terrain.",amount:"-",cost:"10000",id:"null-difficult_terrain"},{mechanic:"null-movement",description:"If an effect moves you against your will along the ground, you can use your reaction to reduce the distance you are moved by up to 4 meters.",amount:"-",cost:"5000",id:"null-movement"},{mechanic:"resistance-piercing",description:"Resistance to piercing damage",amount:"-",cost:"50000",id:"resistance-piercing"},{mechanic:"resistance-spell",description:"Resistance to cold, fire, force, lightning, or necrotic damage",amount:"1 damage type",cost:"20000",id:"resistance-spell"},{mechanic:"resistance-uncommon",description:"Resistance to acid, poison, psychic, radiant, or thunder",amount:"1 damage type",cost:"15000",id:"resistance-uncommon"},{mechanic:"resistance-weapon",description:"Resistance to bludgeoning or slashing",amount:"1 damage type",cost:"25000",id:"resistance-weapon"},{mechanic:"shield jump-start",description:"Once per short rest, as a reaction to taking damage, you may jump-start your shield regen and immediately gain shield points equal to your regen amount.",amount:"-",cost:"15000",id:"shield_jump-start"},{mechanic:"shield regen",description:"Increase shield regen",amount:"5",cost:"8000",id:"shield_regen"},{mechanic:"sp",description:"Additional shield points (regen remains base 5)",amount:"5",cost:"10000",id:"sp"},{mechanic:"speed",description:"Increase speed",amount:"2m",cost:"3000",id:"speed"},{mechanic:"spell bonus",description:"you gain a +X bonus to spell attack rolls and to the saving throw DCs of your spells.",amount:"1",cost:"20000",id:"spell_bonus"},{mechanic:"spell regen",description:"You regain 1d4 worth of spell slots or tech points when you take a short rest.",amount:"1 die",cost:"30000",id:"spell_regen"},{mechanic:"st",description:"Advantage on saving throws",amount:"1 saving throw type",cost:"35000",id:"st"},{mechanic:"st-condition",description:"Advantage on a saving throw against one condition",amount:"1 condition",cost:"15000",id:"st-condition"},{mechanic:"stabilize",description:"Instantly stabilize a companion",amount:"1 per long rest",cost:"20000",id:"stabilize"},{mechanic:"thermal clips",description:"Increase thermal clip capacity",amount:"4",cost:"1000",id:"thermal_clips"},{mechanic:"truesight",description:"Truesight up to certain distance. Can be toggled as bonus action.",amount:"20m",cost:"12000",id:"truesight"},{mechanic:"weapons",description:"Additional weapon slot",amount:"1 for small weapons, 2 for large weapons",cost:"3000",id:"weapons"}]},1050:function(e,t,o){"use strict";var n={props:{id:{type:String,default:""}}},c=o(3),r=o(5),l=o.n(r),d=o(181),m=o(970),h=o(161),component=Object(c.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("v-card",{staticClass:"mb-3",attrs:{id:this.id}},[t("v-card-title",{staticClass:"headline primary white--text"},[this._t("header")],2),t("v-card-text",[this._t("text")],2),t("v-card-actions",[this._t("actions")],2)],1)},[],!1,null,null,null),v=component.exports;l()(component,{VCard:d.a,VCardActions:m.a,VCardText:m.b,VCardTitle:h.a});var y=o(1006),f={components:{RuleCard:v},data:function(){return{mechanics:y}}},_=o(175),w=Object(c.a)(f,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("p",[e._v("Though we provide a list of armor mods and sets, we encourage you to create your own!")]),o("rule-card",[o("span",{attrs:{slot:"header"},slot:"header"},[e._v("Nomenclature")]),o("template",{slot:"text"},[o("dl",[o("dt",[e._v("Mechanic")]),o("dd",[e._v("The aspect that affects the gameplay. A mod or armor set can have one or more mechanics.")]),o("dt",[e._v("Mod")]),o("dd",[e._v("An item, containing one or more mechanics, that can be installed when creating custom armor.")]),o("dt",[e._v("Set")]),o("dd",[e._v("One or more pieces of armor that must be worn together and provide mechanics when worn. Mechanics contained within sets\nare meant to be integrated, and not salvageable from the armor. In addition, armor sets are not intended to be upgraded\nwith other mods.")])])])],2),o("rule-card",[o("span",{attrs:{slot:"header"},slot:"header"},[e._v("Creating a Mechanic")]),o("template",{slot:"text"},[o("p",[e._v("A 'mechanic' is a combination of a rule exception/addition, a potency, and a cost per potency level. Below you'll find a list of\nmechanics used in this system.")]),o("p",{staticClass:"title"},[e._v("Rule exception/addition")]),o("p",[e._v("The first step is deciding what you want your mechanic to do, e.g. add health, shields, or damage; provide advantage on saving throws, etc.")]),o("v-alert",{staticClass:"mb-4",attrs:{type:"info",value:"true"}},[e._v("We strongly recommend that you do not make new mechanics that increase the combat effectiveness of ranged weapons.\nThese mechanics should be reserved for "),o("em",[e._v("weapon")]),e._v(" mods.")]),o("p",{staticClass:"title"},[e._v("Potency")]),o("p",[e._v("Next, decide how the mechanic's potency will stack. For example, increased shield points have 5 points per potency. So, an Armor\nMod with +10 shield points would have a potency of 2. Armor Mods should never have a potency higher than 3. Keep this in mind\nwhen figuring out the lowest potency amount.")]),o("p",{staticClass:"title"},[e._v("Cost")]),o("p",[e._v("Figuring out the cost is mostly guesswork. Low-cost mechanics have minor combat applications, such as\nadditional carrying capacity or minor speed boosts. These range from 1,000 to 5,000 credits.\nMods that increase survivability (shields, AC, resistances) or damage should range between 5,000 and 20,000 credits")]),o("p",{staticClass:"title"},[e._v("Current Mechanic List")]),o("table",{staticClass:"table"},[o("thead",[o("tr",{staticClass:"text-xs-left"},[o("th",[e._v("Rule addition/exception")]),o("th",[e._v("Potency")]),o("th",[e._v("Cost")])])]),o("tbody",e._l(e.mechanics,function(t,n){return o("tr",[o("td",{attrs:{"data-table-key":"Rule"}},[e._v(e._s(t.description))]),o("td",{attrs:{"data-table-key":"Potency"}},[e._v(e._s(t.amount))]),o("td",{attrs:{"data-table-key":"Cost"}},[e._v(e._s(t.cost))])])}),0)])],1)],2),o("rule-card",[o("span",{attrs:{slot:"header"},slot:"header"},[e._v("Creating an Armor Mod")]),o("template",{slot:"text"},[o("p",[e._v("Creating a custom armor mod simply requires combining a slot (head, chest, arms, or legs), one or more mechanics, and a potency for\neach mechanic. Each potency is 2.5 times more expensive than it's previous level. If you have a potency of 1, the final cost equals the value\nin the Cost column. If you have a potency of 2, the final cost equals the value in the Cost column times 2.5. If you\nhave a potency of 3, the final cost equals the value in the Cost column times 5.")]),o("div",{staticClass:"mx-3 pa-2 grey lighten-2"},[o("p",{staticClass:"subheading"},[e._v("Example: +10 shields, +1 AC")]),o("ol",{staticClass:"pl-3"},[o("li",[e._v("Slot = Chest")]),o("li",[e._v("Mechanic 1 = +10 sheilds (potency 2)")]),o("li",[e._v("Cost 1 = 10,000 * 2.5 = 25,000")]),o("li",[e._v("Mechanic 2 = +5 sheild regen (potency 1)")]),o("li",[e._v("Cost 2 = 8,000")]),o("li",[e._v("Mechanic 2 = +3 AC (potency 3)")]),o("li",[e._v("Cost 2 = 20,000 * 5 = 100,000")]),o("li",[e._v("Mod Cost = 133,000")])])]),o("v-alert",{staticClass:"mt-4",attrs:{type:"info",value:"true"}},[e._v("When creating new mods, be mindful that their benefits can stack. You wouldn't want to create a +3 AC armor mod\nfor the head, chest, arms, and legs — this would result in a player being able to attain +12 AC.")])],1)],2),o("rule-card",[o("span",{attrs:{slot:"header"},slot:"header"},[e._v("Creating Armor Sets")]),o("template",{slot:"text"},[o("p",[e._v("An armor set can be one or many pieces of armor. Armor sets are cheaper than creating custom armor, even though they may\nbe more powerful. The justification is that an armor set is mass manufactured, so you get more benefits at the expense\nof not being able to customize the armor with additional mods.")]),o("p",[e._v("First, decide the type of armor (light, medium, or heavy) and which pieces it will contain.\nThen find the base cost by using the costs defined in the "),o("a",{on:{click:function(t){return e.showGlobalDialog("armor-customization")}}},[e._v("creating armor table")]),e._v(".\nNext, decide what mechanics (and their potency) you want to add to the armor. Calculate the total cost of all your mechanics, add it to the base cost of your armor piece.")]),o("p",[e._v("Next, you can decide if there are benefits for wearing multiple pieces of the armor. Benefits can be mechanics (with a potency)\nor a unique mechanic. Calculate the total of the of all set bonuses and distribute that total evenly across the armor pieces.")]),o("p",[e._v("Finally, with all costs calculated, reduce the total amount of each armor piece by 15%.")]),o("div",{staticClass:"mx-3 pa-2 grey lighten-2"},[o("p",{staticClass:"subheading"},[e._v("Example:")]),o("ol",{staticClass:"pl-3 mt-2"},[o("li",[e._v("Set Piece 1 = Medium Body Armor = 16,000 (Chest = 10,000, Arms = 3,000, Legs = 3,000)")]),o("li",[e._v("Set Piece 1 Mechanics = AC +2 (as a mod, this costs 50,000)")]),o("li",[e._v("Set Piece 1 Subtotal = 66,000")])]),o("ol",{staticClass:"pl-3 mt-2"},[o("li",[e._v("Set Piece 2 = Medium Head = 5,000")]),o("li",[e._v("Set Piece 2 Mechanics = Darkvision, toggled as a "),o("em",[e._v("free")]),e._v(" action (as a mod, 3,000, slight increase for free action)")]),o("li",[e._v("Set Piece 2 Subtotal = 8,000")])]),o("ol",{staticClass:"pl-3 mt-2"},[o("li",[e._v("Set Bonus (2 of 2): +10 Shields (as a mod, 25,000)")]),o("li",[e._v("Divide set bonus by number of pieces: 12,500")]),o("li",[e._v("Set Piece 1 Total = 12,500 + 66,000 - ((12,500 + 66,000) * 0.15) = 66,725")]),o("li",[e._v("Set Piece 1 Total = 12,500 + 8,000 - ((12,500 + 8,000) * 0.15) = 17,425")])])]),o("v-alert",{staticClass:"mt-4",attrs:{type:"info",value:!0}},[e._v("When creating armor sets, the cost is just a rule of thumb. If an armor set seems too expensive or cheap, raise or lower the cost to your needs.")])],1)],2)],1)},[],!1,null,null,null);t.a=w.exports;l()(w,{VAlert:_.a})},1201:function(e,t,o){"use strict";o.r(t);var n={components:{CreatingArmor:o(1050).a},head:function(){return{title:"Customizing Armor - For GMs | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Learn how to create new armor sets and mods"}]}},layout:"phb"},c=o(3),r=o(5),l=o.n(r),d=o(156),component=Object(c.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",[t("h2",{staticClass:"display-1 hidden-sm-and-down"},[this._v("Creating Armor")]),t("creating-armor")],1)},[],!1,null,null,null);t.default=component.exports;l()(component,{VContainer:d.a})}}]);