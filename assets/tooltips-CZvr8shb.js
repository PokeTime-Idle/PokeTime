import{z as P}from"./gameFacade-CcL6pZwY.js";import{Kt as r,Wt as k,ci as v,hn as C,ri as N}from"./i18n-data-tyJTW2Mz.js";function p(t){const e=Number(t);return Number.isFinite(e)?Math.floor(e):0}function T(t,e){return t&&typeof t.getPrestigeCost=="function"?t.getPrestigeCost(e):Math.max(1,(Number(e)||0)+1)}function H(t,e){return t&&typeof t.getPrestigeStoneCost=="function"?t.getPrestigeStoneCost(e):T(t,e)}function M(){const t=C.prestige_stone;return t?.img?t.img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/comet-shard.png"}function _(t){return t==null?"":typeof t=="string"||typeof t=="number"||typeof t=="boolean"?String(t):""}function g(t){return _(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function d(t,e={}){const s=!!e.signed;return`
        <div class="team-tooltip-stat-grid">
            ${[{key:"maxHp",label:"HP",cls:"hp"},{key:"attack",label:"ATK",cls:"atk"},{key:"spattack",label:"ATK SP",cls:"spatk"},{key:"defense",label:"DEF",cls:"def"},{key:"spdefense",label:"DEF SP",cls:"spdef"},{key:"speed",label:"SPD",cls:"spd"}].map(o=>{const i=p(t[o.key]),l=s?i>=0?`+${i}`:`${i}`:`${i}`;return`
                    <div class="team-tooltip-stat-cell">
                        <span class="team-tooltip-stat-pill ${o.cls}">${o.label}</span>
                        <span class="team-tooltip-stat-value">${l}</span>
                    </div>
                `}).join("")}
        </div>
    `}function w(t,e){if(!t)return"Pokemon";const s=t.isShadow?"Shadow ":"",o=t.isShiny?"Shiny ":"",i=s||o,l=Number(t.prestige)||0;return`${i}${k(e,t.name)}${N(l)}`}function F(t,e,s={}){if(!t||!e)return"";Number(e.prestige);const o=Math.max(1,Number(e.expToNext)||1),i=Math.max(0,Number(e.exp)||0),l=Math.max(0,Math.min(100,i/o*100)),h=v(e.name,e.rarity),x=Number(t.shards[h])||0,f=P(t,e),$=f.shards,S=f.stones,y=t.items?.prestige_stone&&Number(t.items.prestige_stone)||0,n=Number(s.teamContributionRate)||0,a=Number(s.pensionContributionRate)||0,u=[`<span class="team-tooltip-meta-chip">${r("state.levelShort","Lvl")} ${p(e.level)}</span>`,`<span class="team-tooltip-meta-chip">EXP ${p(i)}/${p(o)} (${l.toFixed(1)}%)</span>`,`<span class="team-tooltip-meta-chip">Shards ${p(x)}/${p($)}</span>`,`<span class="team-tooltip-meta-chip">${r("tooltip.prestigeStones","Prestige stones")} ${p(y)}/${p(S)}</span>`];s.locationLabel&&u.push(`<span class="team-tooltip-meta-chip">${g(s.locationLabel)}</span>`);const b=Array.isArray(s.extraLines)?s.extraLines.filter(m=>m!=null&&String(m).trim().length>0).map(m=>`<div class="team-tooltip-extra-line">${g(m)}</div>`).join(""):"";let c=`
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
        `),c+="</div>",c}export{H as a,w as c,T as i,g as n,M as o,p as r,F as s,d as t};
