import{t as P}from"./shopAndAggregation-DU8iAvEc.js";import{E as k}from"./gameFacade-iy05o6vu.js";import{b as v,m as C}from"./formatters-DAqG1nVV.js";import{x as r,y as N}from"./i18n-CMlE-exc.js";function p(t){const e=Number(t);return Number.isFinite(e)?Math.floor(e):0}function T(t,e){return t&&typeof t.getPrestigeCost=="function"?t.getPrestigeCost(e):Math.max(1,(Number(e)||0)+1)}function w(t,e){return t&&typeof t.getPrestigeStoneCost=="function"?t.getPrestigeStoneCost(e):T(t,e)}function E(){const t=P.prestige_stone;return t?.img?t.img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/comet-shard.png"}function _(t){return t==null?"":typeof t=="string"||typeof t=="number"||typeof t=="boolean"?String(t):""}function g(t){return _(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function d(t,e={}){const s=!!e.signed;return`
        <div class="team-tooltip-stat-grid">
            ${[{key:"maxHp",label:"HP",cls:"hp"},{key:"attack",label:"ATK",cls:"atk"},{key:"spattack",label:"ATK SP",cls:"spatk"},{key:"defense",label:"DEF",cls:"def"},{key:"spdefense",label:"DEF SP",cls:"spdef"},{key:"speed",label:"SPD",cls:"spd"}].map(i=>{const o=p(t[i.key]),l=s?o>=0?`+${o}`:`${o}`:`${o}`;return`
                    <div class="team-tooltip-stat-cell">
                        <span class="team-tooltip-stat-pill ${i.cls}">${i.label}</span>
                        <span class="team-tooltip-stat-value">${l}</span>
                    </div>
                `}).join("")}
        </div>
    `}function F(t,e){if(!t)return"Pokemon";const s=t.isShadow?"Shadow ":"",i=t.isShiny?"Shiny ":"",o=s||i,l=Number(t.prestige)||0;return`${o}${N(e,t.name)}${C(l)}`}function D(t,e,s={}){if(!t||!e)return"";Number(e.prestige);const i=Math.max(1,Number(e.expToNext)||1),o=Math.max(0,Number(e.exp)||0),l=Math.max(0,Math.min(100,o/i*100)),h=v(e.name,e.rarity),x=Number(t.shards[h])||0,f=k(t,e),$=f.shards,S=f.stones,y=t.items?.prestige_stone&&Number(t.items.prestige_stone)||0,n=Number(s.teamContributionRate)||0,a=Number(s.pensionContributionRate)||0,u=[`<span class="team-tooltip-meta-chip">${r("state.levelShort","Lvl")} ${p(e.level)}</span>`,`<span class="team-tooltip-meta-chip">EXP ${p(o)}/${p(i)} (${l.toFixed(1)}%)</span>`,`<span class="team-tooltip-meta-chip">Shards ${p(x)}/${p($)}</span>`,`<span class="team-tooltip-meta-chip">${r("tooltip.prestigeStones","Prestige stones")} ${p(y)}/${p(S)}</span>`];s.locationLabel&&u.push(`<span class="team-tooltip-meta-chip">${g(s.locationLabel)}</span>`);const b=Array.isArray(s.extraLines)?s.extraLines.filter(m=>m!=null&&String(m).trim().length>0).map(m=>`<div class="team-tooltip-extra-line">${g(m)}</div>`).join(""):"";let c=`
        <div class="team-tooltip-body">
            <div class="team-tooltip-meta-row">${u.join("")}</div>
            ${b?`<div class="team-tooltip-extra">${b}</div>`:""}
            <div class="team-tooltip-section-label">${r("tooltip.teamStats","Stats")}</div>
            ${d(e)}
    `;return n>0&&(c+=`
            <div class="team-tooltip-section-label">${r("tooltip.teamContribution","Team contribution ({percent}%)",{percent:(n*100).toFixed(0)})}</div>
            ${d({maxHp:e.maxHp*n,attack:e.attack*n,spattack:e.spattack*n,defense:e.defense*n,spdefense:e.spdefense*n,speed:e.speed*n},{signed:!0})}
        `),a>0&&(c+=`
            <div class="team-tooltip-section-label">${r("tooltip.daycareContribution","Daycare contribution ({percent}%)",{percent:(a*100).toFixed(0)})}</div>
            ${d({maxHp:e.maxHp*a,attack:e.attack*a,spattack:e.spattack*a,defense:e.defense*a,spdefense:e.spdefense*a,speed:e.speed*a},{signed:!0})}
        `),c+="</div>",c}export{w as a,F as c,T as i,g as n,E as o,p as r,D as s,d as t};
