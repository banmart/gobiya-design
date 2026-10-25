/* Gobiya homepage — interactions & motion (no libraries). Loaded by app/page.tsx. */
/* =====================================================================
   GOBIYA — interactions & motion (no libraries)
   ===================================================================== */
(()=>{
'use strict';
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)), lerp=(a,b,t)=>a+(b-a)*t;
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE=matchMedia('(hover:hover) and (pointer:fine)').matches;
const TS=RM?.12:1;                                   // global time scale
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let VW=innerWidth,VH=innerHeight;
try{history.scrollRestoration='manual'}catch(e){}

/* seeded random */
function rng(seed){let s=(seed*2654435761)>>>0||7;return()=>{s^=s<<13;s>>>=0;s^=s>>>17;s^=s<<5;s>>>=0;return s/4294967296}}

/* ---------- brand mark ---------- */
/* the Gobiya "g" logo, used wherever a mark is drawn by script */
const markSVG=()=>'<img src="/gobiya-mark-sm.webp" alt="" width="199" height="256" decoding="async">';

/* =====================================================================
   CARD FACES — generated SVG "page pattern" artwork (300×400)
   ===================================================================== */
const SV=(inner,bg)=>`<svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${bg?`<rect width="300" height="400" fill="${bg}"/>`:''}${inner}</svg>`;
const F='font-family="Inter,Helvetica,Arial,sans-serif"';
const FS='font-family="Instrument Serif,Georgia,serif" font-style="italic"';
const FM='font-family="ui-monospace,Menlo,Consolas,monospace"';
const pick=(r,a)=>a[Math.floor(r()*a.length)];
const pad=n=>String(n).padStart(2,'0');
const FACES={
 glow:r=>SV(`<circle cx="${60+r()*180}" cy="${110+r()*200}" r="${150+r()*80}" fill="url(#gOrbR)"/><circle cx="${60+r()*180}" cy="${80+r()*240}" r="${130+r()*90}" fill="url(#gOrbB)" opacity=".9"/><rect x="24" y="352" width="252" height="1" fill="#fff" opacity=".25"/><text x="24" y="378" ${FM} font-size="11" letter-spacing="2" fill="#fff" opacity=".7">GOBIYA / ${pad(1+Math.floor(r()*48))}</text>`,'#0b0b0f'),
 sunset:r=>SV(`<rect width="300" height="400" fill="url(#gGlow2)"/><circle cx="150" cy="${210+r()*50}" r="${74+r()*26}" fill="url(#gSun)"/>${[0,1,2,3,4,5].map(k=>`<rect x="0" y="${262+k*18}" width="300" height="${3+k*2.4}" fill="#08080e" opacity=".9"/>`).join('')}<text x="24" y="46" ${F} font-weight="600" font-size="24" letter-spacing="-1.2" fill="#fff">${pick(r,['Golden hour','Late table','Rooftop','Open late'])}</text><text x="24" y="64" ${FM} font-size="9" letter-spacing="1.6" fill="#fff" opacity=".7">${pick(r,['SILVER LAKE','KOREATOWN','ECHO PARK','VENICE'])} · TIL 11PM</text>`,'#08080e'),
 poster:r=>{const w=pick(r,['found.','near me','booked','cited','open now','local','trusted','asked']);return SV(`<text x="150" y="234" text-anchor="middle" ${FS} font-size="${w.length>6?66:88}" fill="#1d1d1f">${w}</text><circle cx="252" cy="58" r="9" fill="#e8321e"/><text x="24" y="62" ${FM} font-size="9.5" letter-spacing="1.8" fill="#1d1d1f">N°${pad(1+Math.floor(r()*30))} — LOS ANGELES</text><rect x="24" y="350" width="252" height="1" fill="#1d1d1f" opacity=".3"/><text x="24" y="376" ${F} font-size="12" font-weight="650" letter-spacing="-.5" fill="#1d1d1f">gobiya</text><text x="276" y="376" text-anchor="end" ${FM} font-size="9" fill="#1d1d1f" opacity=".6">2026</text>`,'#efe9df')},
 site:r=>{const [a,b]=pick(r,[['Dental care,','found.'],['Tacos,','near you.'],['Yoga in','Echo Park.'],['Law that','listens.'],['Fresh cuts,','booked.'],['Plumbing,','tonight.']]);const gx=pick(r,['url(#gHero)','url(#gBlue)','url(#gGlow1)','url(#gGlow2)']);
  return SV(`<circle cx="28" cy="27" r="7" fill="#1d1d1f"/><rect x="190" y="24" width="22" height="6" rx="3" fill="#d9d9de"/><rect x="220" y="24" width="22" height="6" rx="3" fill="#d9d9de"/><rect x="250" y="19" width="30" height="16" rx="8" fill="#1d1d1f"/>
  <text x="22" y="92" ${F} font-size="36" font-weight="600" letter-spacing="-2" fill="#1d1d1f">${a}</text><text x="22" y="130" ${FS} font-size="40" fill="#1d1d1f">${b}</text>
  <rect x="22" y="148" width="170" height="6" rx="3" fill="#e5e5ea"/><rect x="22" y="160" width="120" height="6" rx="3" fill="#e5e5ea"/>
  <rect x="22" y="178" width="80" height="24" rx="12" fill="#e8321e"/><text x="62" y="194" text-anchor="middle" ${F} font-size="9.5" font-weight="600" fill="#fff">Book now</text>
  <rect x="22" y="218" width="256" height="110" rx="10" fill="${gx}"/><circle cx="${90+r()*120}" cy="273" r="26" fill="#fff" opacity=".2"/>
  <rect x="22" y="340" width="80" height="44" rx="7" fill="#f0f0f3"/><rect x="110" y="340" width="80" height="44" rx="7" fill="#f0f0f3"/><rect x="198" y="340" width="80" height="44" rx="7" fill="#f0f0f3"/>`,'#fff')},
 serp:r=>{const q=pick(r,['dentist near me','web design los angeles','tacos koreatown open now','best yoga echo park']);
  const R=[['gobiya.com','#1d1d1f','Built already. Now make it found.'],['yelp.com','#d32323','Top 10 near you — updated 2026'],['maps.google','#34a853','Directions · Open now · 0.4 mi']];
  return SV(`<rect x="16" y="20" width="268" height="36" rx="18" fill="#f1f1f4"/><circle cx="37" cy="37" r="6" fill="none" stroke="#86868b" stroke-width="2"/><path d="M41.5 41.5l4 4" stroke="#86868b" stroke-width="2" stroke-linecap="round"/><text x="54" y="42" ${F} font-size="12" fill="#1d1d1f">${q}</text>
  ${R.map((x,i)=>{const y=86+i*100;return `${i===0?`<rect x="10" y="${y-16}" width="280" height="90" rx="12" fill="#fff7f5" stroke="#e8321e" stroke-width="1.5"/>`:''}<circle cx="29" cy="${y}" r="7" fill="${x[1]}"/><text x="43" y="${y+3.5}" ${F} font-size="9.5" fill="#515154">${x[0]}</text><text x="20" y="${y+27}" ${F} font-size="13.5" font-weight="600" letter-spacing="-.3" fill="#1a0dab">${x[2]}</text><rect x="20" y="${y+38}" width="250" height="5" rx="2.5" fill="#e5e5ea"/><rect x="20" y="${y+49}" width="180" height="5" rx="2.5" fill="#e5e5ea"/>`}).join('')}
  <text x="20" y="384" ${FM} font-size="9" fill="#86868b" letter-spacing="1.2">ABOUT 4,210,000 RESULTS</text>`,'#fff')},
 map:r=>{const px=110+r()*80,py=130+r()*50;return SV(`<path d="M0 260 C80 230 120 300 300 250 L300 400 L0 400Z" fill="#bcd7f0"/><rect x="${20+r()*40}" y="40" width="110" height="80" rx="10" fill="#cfe8d4"/>
  <g stroke="#fff" stroke-linecap="round"><path d="M-20 110 L320 70" stroke-width="13"/><path d="M60 -20 L120 420" stroke-width="10"/><path d="M-20 200 L320 180" stroke-width="8"/><path d="M220 -20 L190 420" stroke-width="12"/><path d="M0 40 L300 330" stroke-width="5"/></g>
  <circle cx="${px}" cy="${py+38}" r="26" fill="#e8321e" opacity=".15"/><path d="M${px} ${py-36}c-22 0-38 16-38 37 0 28 38 63 38 63s38-35 38-63c0-21-16-37-38-37z" fill="#e8321e"/><circle cx="${px}" cy="${py}" r="13" fill="#fff"/>
  <rect x="18" y="292" width="264" height="90" rx="14" fill="#fff"/><text x="34" y="322" ${F} font-size="14" font-weight="650" letter-spacing="-.4" fill="#1d1d1f">${pick(r,['Koreatown Dental','Wilshire Tacos','Echo Yoga','Vermont Cuts'])}</text><text x="34" y="342" ${F} font-size="10.5" fill="#515154">4.9 ★★★★★ · Open now · 0.4 mi</text><rect x="34" y="352" width="72" height="20" rx="10" fill="#1d1d1f"/><text x="70" y="365.5" text-anchor="middle" ${F} font-size="9" font-weight="600" fill="#fff">Directions</text><rect x="112" y="352" width="50" height="20" rx="10" fill="#f0f0f3"/><text x="137" y="365.5" text-anchor="middle" ${F} font-size="9" font-weight="600" fill="#1d1d1f">Call</text>`,'#e9eef0')},
 ai:r=>SV(`<circle cx="270" cy="20" r="120" fill="url(#gOrbB)" opacity=".7"/><text x="22" y="46" ${F} font-size="12.5" font-weight="650" fill="#fff">✦ AI Overview</text><text x="22" y="64" ${FM} font-size="8.5" letter-spacing="1.4" fill="#fff" opacity=".5">GENERATED · 3 SOURCES</text>
  <rect x="22" y="86" width="230" height="7" rx="3.5" fill="#2a2a30"/><rect x="22" y="100" width="200" height="7" rx="3.5" fill="#2a2a30"/>
  <rect x="16" y="120" width="268" height="58" rx="10" fill="#e8321e" opacity=".18"/><text x="26" y="143" ${F} font-size="12.5" font-weight="600" fill="#fff">Gobiya builds custom sites</text><text x="26" y="162" ${F} font-size="12.5" font-weight="600" fill="#fff">for Google, Maps &amp; AI search.</text>
  <rect x="22" y="196" width="246" height="7" rx="3.5" fill="#2a2a30"/><rect x="22" y="210" width="210" height="7" rx="3.5" fill="#2a2a30"/><rect x="22" y="224" width="170" height="7" rx="3.5" fill="#2a2a30"/>
  <rect x="22" y="330" width="82" height="24" rx="12" fill="#fff"/><text x="63" y="346" text-anchor="middle" ${F} font-size="9.5" font-weight="650" fill="#111">gobiya.com ↗</text><rect x="110" y="330" width="52" height="24" rx="12" fill="#232328"/><text x="136" y="346" text-anchor="middle" ${F} font-size="9.5" font-weight="600" fill="#fff">Maps</text><rect x="168" y="330" width="62" height="24" rx="12" fill="#232328"/><text x="199" y="346" text-anchor="middle" ${F} font-size="9.5" font-weight="600" fill="#fff">Reviews</text>`,'#111114'),
 chrome:r=>SV(`<rect width="300" height="400" fill="url(#gChrome)"/>${[0,1,2,3,4].map(k=>`<ellipse cx="150" cy="${190+r()*20}" rx="${40+k*34}" ry="${20+k*20}" fill="none" stroke="#fff" stroke-width="${1.6-k*.2}" opacity="${.7-k*.1}"/>`).join('')}<text x="24" y="376" ${F} font-size="13" font-weight="650" letter-spacing="-.5" fill="#fff">gobiya</text><text x="276" y="376" text-anchor="end" ${FM} font-size="9" fill="#fff" opacity=".7">CHROME / ${pad(1+Math.floor(r()*20))}</text>`,'#111'),
 stat:r=>{const [n,l,c]=pick(r,[['300+','LOCAL CLIENTS','Serving Los Angeles since 2010'],['2010','IN BUSINESS SINCE','Koreatown, Los Angeles'],['3×','DAILY APPOINTMENTS','Dental client, within 45 days'],['5★','CLIENT REVIEWS','In our clients’ words'],['$0','SITE REVIEW','Free, no obligation']]);const bg=pick(r,['#e8321e','#1d1d1f','#2f4dff']);
  return SV(`<text x="22" y="48" ${FM} font-size="9" letter-spacing="1.6" fill="#fff" opacity=".75">GOBIYA — RESULTS</text><text x="20" y="236" ${F} font-size="${n.length>4?84:100}" font-weight="500" letter-spacing="-6" fill="#fff">${n}</text><text x="24" y="266" ${FM} font-size="10" letter-spacing="1.6" fill="#fff" opacity=".85">${l}</text><rect x="24" y="350" width="252" height="1" fill="#fff" opacity=".35"/><text x="24" y="376" ${F} font-size="10.5" fill="#fff" opacity=".8">${c}</text>`,bg)},
 neon:r=>{const w=pick(r,['OPEN','FOUND','24/7','LA']);const c=pick(r,['#ff4a2b','#4a6cff']);
  return SV(`<rect x="0" y="300" width="300" height="100" fill="${c}" opacity=".08"/>${[[14,.12],[8,.22],[4,.45]].map(([s,o])=>`<text x="150" y="222" text-anchor="middle" ${F} font-size="${w.length>3?76:96}" font-weight="700" letter-spacing="-2" fill="none" stroke="${c}" stroke-width="${s}" stroke-linejoin="round" opacity="${o}">${w}</text>`).join('')}<text x="150" y="222" text-anchor="middle" ${F} font-size="${w.length>3?76:96}" font-weight="700" letter-spacing="-2" fill="none" stroke="#fff3ee" stroke-width="1.6">${w}</text><text x="150" y="276" text-anchor="middle" ${FM} font-size="9" letter-spacing="3" fill="${c}">— WILSHIRE BLVD —</text>`,'#050507')},
 blue:r=>SV(`<rect width="300" height="400" fill="url(#gBlue)"/><g fill="none" stroke="#f3f0ea" opacity=".35"><circle cx="150" cy="200" r="60"/><circle cx="150" cy="200" r="110"/><circle cx="150" cy="200" r="160"/></g><circle cx="${170+r()*40}" cy="${160+r()*30}" r="70" fill="#f3f0ea"/><circle cx="${100+r()*30}" cy="${240+r()*30}" r="34" fill="#e8321e"/><text x="24" y="376" ${F} font-size="13" font-weight="650" letter-spacing="-.5" fill="#fff">gobiya</text>`,'#2f4dff'),
 type:r=>SV(`<text x="22" y="200" ${F} font-size="150" font-weight="600" letter-spacing="-10" fill="#fff">Aa</text><text x="150" y="300" ${FS} font-size="140" fill="#e8321e">Aa</text><text x="24" y="48" ${FM} font-size="9" letter-spacing="1.6" fill="#fff" opacity=".65">INTER / INSTRUMENT SERIF</text><rect x="24" y="350" width="252" height="1" fill="#fff" opacity=".25"/><text x="24" y="376" ${FM} font-size="9" letter-spacing="1.6" fill="#fff" opacity=".65">TYPE SYSTEM — 0${1+Math.floor(r()*8)}</text>`,'#1d1d1f'),
 app:r=>SV(`<text x="22" y="44" ${FM} font-size="9" letter-spacing="1.6" fill="#86868b">TODAY</text><text x="20" y="96" ${F} font-size="50" font-weight="600" letter-spacing="-3" fill="#1d1d1f">${12+Math.floor(r()*30)} calls</text><text x="22" y="118" ${F} font-size="11" fill="#515154">from Google, Maps &amp; AI answers</text>
  ${[0,1,2,3].map(k=>`<rect x="16" y="${140+k*58}" width="268" height="48" rx="12" fill="#fff"/><circle cx="40" cy="${164+k*58}" r="11" fill="${['#e8321e','#2f4dff','#1d1d1f','#2fd37a'][k]}"/><text x="60" y="${161+k*58}" ${F} font-size="11" font-weight="650" fill="#1d1d1f">${['Maps · Directions','AI answer · Cited','Search · gobiya.com','Reviews · 5★'][k]}</text><text x="60" y="${175+k*58}" ${F} font-size="9" fill="#86868b">${['2 min ago','14 min ago','32 min ago','1 h ago'][k]}</text>`).join('')}
  <rect x="16" y="372" width="268" height="6" rx="3" fill="#e5e5ea"/><rect x="16" y="372" width="${120+r()*140}" height="6" rx="3" fill="#e8321e"/>`,'#f5f5f7')
};
const POOL=Object.keys(FACES);
const DARK=['glow','sunset','chrome','neon','ai','blue','stat','type'];
const face=(kind,seed)=>`<div class="face">${FACES[kind](rng(seed))}</div>`;

/* =====================================================================
   TEXT SPLIT + REVEALS
   ===================================================================== */
function split(el){
  let n=0;
  const walk=node=>[...node.childNodes].forEach(c=>{
    if(c.nodeType===3){
      const frag=document.createDocumentFragment();
      c.textContent.split(/(\s+)/).forEach(p=>{
        if(!p)return;
        if(/^\s+$/.test(p)){frag.append(document.createTextNode(' '));return}
        const w=document.createElement('span');w.className='w';
        const i=document.createElement('i');i.style.setProperty('--i',n++);i.textContent=p;w.append(i);frag.append(w);
      });
      c.replaceWith(frag);
    }else if(c.nodeType===1&&c.tagName!=='BR'&&!c.classList.contains('w'))walk(c);
  });
  walk(el);
}
$$('[data-split]').forEach(split);

const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rio.unobserve(e.target)}}),{threshold:.14,rootMargin:'0px 0px -4% 0px'});
function startReveals(){$$('[data-split],[data-r],.foot-word').forEach(e=>{if(!e.closest('.hero'))rio.observe(e)})}

/* ---------- toast ---------- */
const toastEl=$('#toast');let tt;
function toast(m){toastEl.textContent=m;toastEl.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toastEl.classList.remove('on'),2600)}

/* ---------- segmented controls ---------- */
const segs=[];
function seg(el,cb){
  const th=$('.thumb',el),bs=$$('button',el);
  const place=()=>{const a=bs.find(b=>b.getAttribute('aria-pressed')==='true')||bs[0];th.style.width=a.offsetWidth+'px';th.style.transform=`translateX(${a.offsetLeft}px)`};
  bs.forEach(b=>b.addEventListener('click',()=>{if(b.getAttribute('aria-pressed')==='true')return;bs.forEach(x=>x.setAttribute('aria-pressed',x===b));place();cb&&cb(b.dataset.v,b)}));
  segs.push(place);place();
  return{value:()=>(bs.find(b=>b.getAttribute('aria-pressed')==='true')||bs[0]).dataset.v,place};
}
const placeSegs=()=>segs.forEach(f=>f());

/* =====================================================================
   POINTER + SCROLL STATE
   ===================================================================== */
let MX=0,MY=0,PX=VW/2,PY=VH/2,mvx=0,lastPX=PX;
addEventListener('pointermove',e=>{PX=e.clientX;PY=e.clientY;MX=PX/VW*2-1;MY=PY/VH*2-1},{passive:true});
let SY=scrollY,lastSY=SY,vel=0;

/* visible-section registry so the frame loop only animates what's on screen */
const vis=new Set();
const vio=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?vis.add(e.target.id||e.target.className):vis.delete(e.target.id||e.target.className)),{rootMargin:'120px 0px'});
['top','work','services','deck','how','cmpPanel','distort','ai','devices','send','contact','footer'].forEach(id=>{const el=document.getElementById(id);el&&vio.observe(el)});

/* =====================================================================
   SCATTER (hero + closing CTA)
   ===================================================================== */
function makeScatter(host,n,seed){
  const r=rng(seed),cards=[];
  for(let i=0;i<n;i++){
    const el=document.createElement('div');el.className='card';
    el.innerHTML=face(POOL[(i+Math.floor(r()*3))%POOL.length],seed*97+i*13);
    const base=VW<700?68:clamp(VW*.085,76,150);
    el.style.setProperty('--w',(base*(.78+r()*.5)).toFixed(0)+'px');
    host.append(el);
    cards.push({el,x:r(),y:r(),z:-1150+r()*1380,ry:-34+r()*68,rz:-9+r()*18,sp:.55+r()*.9,ph:r()*6.28});
  }
  return{host,cards};
}
function runScatter(S,t,rel){
  const W=S.host.clientWidth,H=S.host.clientHeight,span=1.7*W;
  for(const c of S.cards){
    const d=(c.z+1150)/1380;
    let x=(c.x*span-t*.016*c.sp*(.45+d))%span;if(x<0)x+=span;x-=.35*W;
    const y=c.y*H*1.15-.1*H+Math.sin(t*.00042+c.ph)*20-rel*(.16+d*.62);
    c.el.style.transform=`translate3d(${(x+MX*d*46).toFixed(1)}px,${(y+MY*d*26).toFixed(1)}px,${c.z.toFixed(0)}px) rotateY(${(c.ry+MX*9+Math.sin(t*.0003+c.ph)*6).toFixed(2)}deg) rotateZ(${c.rz}deg)`;
  }
}
const heroS=makeScatter($('#heroScatter'),VW<700?15:26,3);
const ctaS=makeScatter($('#ctaScatter'),VW<700?12:20,11);
const smBlur=$('#smBlur'),smR=$('#smR'),smG=$('#smG');
let smearOn=false;
function smear(){
  if(RM)return;
  const sv=Math.min(Math.abs(vel)*.34,10),sx=Math.min(Math.abs(mvx)*.1,6),on=sv+sx>.45;
  if(on){
    smBlur.setAttribute('stdDeviation',`${sx.toFixed(2)} ${sv.toFixed(2)}`);
    const s=Math.sign(vel)||1;
    smR.setAttribute('dx',(sx*.9).toFixed(2));smR.setAttribute('dy',(sv*.55*s).toFixed(2));
    smG.setAttribute('dx',(-sx*.9).toFixed(2));smG.setAttribute('dy',(-sv*.55*s).toFixed(2));
  }
  if(on!==smearOn){smearOn=on;heroS.host.classList.toggle('smear',on);ctaS.host.classList.toggle('smear',on)}
}

/* =====================================================================
   WALL — tilted 3D grid of page patterns
   ===================================================================== */
const wall3d=$('#wall3d');
(()=>{const r=rng(21);let h='';
  for(let i=0;i<46;i++){
    const k=r(),cls=['tile'];if(k<.13)cls.push('w2');else if(k<.24)cls.push('h2');if(r()<.22)cls.push('frame');
    h+=`<div class="${cls.join(' ')}">${face(POOL[i%POOL.length],400+i)}</div>`;
  }
  wall3d.innerHTML=h;
})();
function runWall(){
  const sec=$('#work'),r=sec.getBoundingClientRect(),p=clamp((VH-r.top)/(VH+r.height));
  const u=wall3d.querySelector('.tile').offsetWidth||100;
  wall3d.style.setProperty('--wx',((p-.5)*-u*1.6+MX*-14).toFixed(1)+'px');
  wall3d.style.setProperty('--wy',((p-.5)*u*3.4+MY*-10).toFixed(1)+'px');
}

/* =====================================================================
   CATS — sticky list driving a morphing card cloud
   ===================================================================== */
const cats=$('#services'),catsStage=$('#catsStage'),catsLis=$$('#catsList li'),catsDesc=$('#catsDesc'),catsRuler=$('.cats-l .ruler');
const CK=18,catCards=[];
for(let i=0;i<CK;i++){const el=document.createElement('div');el.className='card';el.innerHTML=face(POOL[(i*5)%POOL.length],700+i);catsStage.append(el);catCards.push({el,c:{x:0,y:0,z:-400,ry:0,rz:0,s:.6,o:0}})}
const R1=rng(77),FIELD=[...Array(CK)].map(()=>[R1(),R1(),R1()]),PILE=[...Array(CK)].map(()=>[R1(),R1(),R1()]);
let catIdx=-1,cW=0,cH=0,cw=0,ch=0;
function measureCats(){cW=catsStage.clientWidth;cH=catsStage.clientHeight;cw=catCards[0].el.offsetWidth;ch=cw*4/3}
function layout(name,i,n,t){
  const W=cW,H=cH,w=cw,h=ch;
  switch(name){
    case'grid':{const cols=W<480?4:6,rows=Math.ceil(n/cols),gx=w*1.14,gy=h*1.12,s=Math.min(1.08,W*.98/(cols*gx),H*.98/(rows*gy));
      return{x:((i%cols)-(cols-1)/2)*gx*s,y:(Math.floor(i/cols)-(rows-1)/2)*gy*s,z:0,ry:0,rz:0,s,o:1}}
    case'rows':{const rw=i%3,k=Math.floor(i/3),per=Math.ceil(n/3),gap=w*1.18,spn=per*gap,s=Math.min(.95,H/(3.4*h));
      let x=(k*gap+t*.028*(rw%2?1:-1)*(1+rw*.35))%spn;if(x<0)x+=spn;x-=spn/2;
      return{x,y:(rw-1)*h*1.1*s,z:0,ry:0,rz:0,s,o:Math.abs(x)>W*.62?0:1}}
    case'ring':{const a=i/n*Math.PI*2+t*.00034,R=Math.min(W*.42,w*3.2);
      return{x:Math.sin(a)*R,y:Math.cos(a*2)*h*.06,z:Math.cos(a)*R-R*.3,ry:a*180/Math.PI,rz:0,s:1,o:1}}
    case'field':{const[a,b,c]=FIELD[i];
      return{x:(a-.5)*W*.92,y:(b-.5)*H*.86+Math.sin(t*.0006+i)*10,z:-650+c*760,ry:(a-.5)*-46,rz:(b-.5)*22,s:1,o:1}}
    case'carousel':{let d=i-(t*.00042)%n;d=((d+n/2)%n+n)%n-n/2;
      return{x:d*w*.6,y:0,z:-Math.abs(d)*w*.95,ry:clamp(-d*16,-72,72),rz:0,s:1.12,o:Math.abs(d)>5.5?0:1}}
    case'reveal':{const k=i-(n-1)/2,a=k*6.4*Math.PI/180,R=h*2.3;
      return{x:Math.sin(a)*R,y:h*1.95-Math.cos(a)*R,z:i*2,ry:0,rz:k*6.4,s:Math.min(1,H/(h*2.3)),o:1}}
    default:{const[a,b,c]=PILE[i];
      return{x:(a-.5)*w*1.1,y:(b-.5)*h*.5,z:i*3,ry:(c-.5)*16,rz:(c-.5)*44,s:1.05,o:1}}
  }
}
function setCat(i){
  if(i===catIdx)return;catIdx=i;
  catsLis.forEach((li,j)=>{li.classList.toggle('on',j===i);li.querySelector('button').style.setProperty('--o',j===i?1:clamp(.5-Math.abs(j-i)*.09,.16,.5))});
  catsDesc.innerHTML=`<b>0${i+1} / 07</b>${catsLis[i].dataset.desc}`;
}
catsLis.forEach((li,i)=>li.querySelector('button').addEventListener('click',()=>{
  const top=cats.getBoundingClientRect().top+scrollY,len=cats.offsetHeight-VH;
  scrollTo({top:top+len*(i+.5)/CATS_N,behavior:RM?'auto':'smooth'});
}));
const CATS_N=catsLis.length;
function runCats(t){
  const r=cats.getBoundingClientRect(),len=r.height-VH,p=clamp(-r.top/len);
  setCat(Math.min(CATS_N-1,Math.floor(p*CATS_N)));
  catsRuler.style.setProperty('--rp',(p*100).toFixed(2)+'%');
  const name=catsLis[catIdx].dataset.lay;
  for(let i=0;i<CK;i++){
    const T=layout(name,i,CK,t),c=catCards[i].c,k=.085;
    for(const key in T)c[key]=lerp(c[key],T[key],k);
    catCards[i].el.style.transform=`translate(-50%,-50%) translate3d(${c.x.toFixed(1)}px,${c.y.toFixed(1)}px,${c.z.toFixed(1)}px) rotateY(${c.ry.toFixed(2)}deg) rotateZ(${c.rz.toFixed(2)}deg) scale(${c.s.toFixed(3)})`;
    catCards[i].el.style.opacity=c.o.toFixed(3);
  }
}
catCards.forEach(c=>{c.el.style.left='50%';c.el.style.top='50%'});

/* =====================================================================
   DECK — fanned stack + scroll-driven marquee line
   ===================================================================== */
const deckCards=$('#deckCards'),deckLine=$('#deckLine'),DKN=7,dks=[];
for(let i=0;i<DKN;i++){const el=document.createElement('div');el.className='dk';el.innerHTML=face(['sunset','site','poster','glow','serp','stat','map'][i],900+i);deckCards.append(el);dks.push(el)}
function runDeck(){
  const sec=$('#deck'),r=sec.getBoundingClientRect(),p=clamp((VH-r.top)/(VH+r.height));
  const w=dks[0].offsetWidth,h=w*4/3,open=clamp((p-.15)/.5);
  dks.forEach((el,i)=>{const k=i-(DKN-1)/2;
    el.style.transform=`translate(${(-w/2+k*w*.34*open).toFixed(1)}px,${(-h/2+Math.abs(k)*8*open).toFixed(1)}px) rotate(${(k*9*open+(1-open)*(i%2?3:-3)).toFixed(2)}deg)`});
  const lw=deckLine.scrollWidth;
  deckLine.style.transform=`translateX(${lerp(VW*.55,-lw+VW*.45,p).toFixed(1)}px)`;
}
deckLine.style.justifySelf='start';

/* =====================================================================
   EDITOR MOCK (used in "How it works" and the AI agent panel)
   ===================================================================== */
const ICO={undo:'<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 3L1.5 5.5 4 8M1.5 5.5h7a3.5 3.5 0 010 7H6"/></svg>',eye:'<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M1 7s2.2-4 6-4 6 4 6 4-2.2 4-6 4-6-4-6-4z"/><circle cx="7" cy="7" r="1.8"/></svg>',play:'<svg viewBox="0 0 10 10"><path d="M2 1l7 4-7 4z"/></svg>'};
const THUMBS=[['site','Hero','Services'],['map','Local','Maps'],['serp','Search','Results'],['stat','Proof','Numbers'],['poster','Intro','Editorial'],['app','Booking','Calls']];
function buildEditor(host,seed){
  host.innerHTML=`<div class="ed" data-step="0">
  <div class="ed-top"><div class="ed-logo"><span class="mark">${markSVG('#fff')}</span>gobiya studio</div><div class="ed-proj">Client: Koreatown Dental<small>/ Home</small></div><div class="ed-sp"></div><div class="ed-seg"><b class="on">Design</b><b>Content</b><b>Search</b></div><span class="ed-ico">${ICO.undo}</span><span class="ed-ico">${ICO.eye}</span><i class="ed-av">SM</i><span class="ed-pub">Send for your review ↗</span></div>
  <div class="ed-left"><div class="ed-tabs"><b class="on">Concepts</b><b>Brand</b><b>Photos</b></div><div class="ed-h">Design directions<small>04</small></div><div class="ed-search">Brief: family dental, Koreatown</div><div class="ed-chips"><b class="on">All</b><b>Hero</b><b>Local</b><b>Reviews</b><b>Booking</b></div><div class="ed-lbl">Proposed by your designer</div>
   <div class="ed-grid">${THUMBS.slice(0,4).map((x,i)=>`<div class="ed-th${i===0?' sel':''}"><div class="im">${face(x[0],seed+i)}</div><b>${x[1]}</b><small>${x[2]}</small></div>`).join('')}</div></div>
  <div class="ed-canvas"><div class="ed-page">
   <div class="ep-nav"><i></i><s></s><b></b><b></b><b></b></div>
   <div class="ep-hero"><h4><span class="tx">Your headline here</span><span class="caret"></span></h4><p></p><p></p><span class="ep-cta">Book a visit</span></div>
   <span class="ep-badge"><i></i>Schema ✓</span>
   <div class="ep-img">${face('site',seed)}</div>
   <div class="ep-foot"><span>LocalBusiness</span><span>FAQ</span><span>Maps</span></div>
  </div></div>
  <div class="ed-right"><div class="ed-rh"><b>Inspector</b><small>HERO</small></div><div class="ed-sub">Your designer is editing · Hero headline</div>
   <div class="ed-sec g-text"><h6>Text</h6><div class="ed-row">Font<span class="ed-fnt"><span class="fn">Inter</span>▾</span></div><div class="ed-row">Size<span class="ed-sl" style="--v:38%"><span class="sz">32</span></span></div><div class="ed-row">Tracking<span class="ed-sl" style="--v:30%"><span>-4%</span></span></div><div class="ed-row">Weight<span class="ed-sl" style="--v:55%"><span>600</span></span></div></div>
   <div class="ed-sec g-seo"><h6>SEO team checklist</h6><div class="ed-row">LocalBusiness schema<i class="ed-tg"></i></div><div class="ed-row">FAQ schema<i class="ed-tg"></i></div><div class="ed-row">Maps &amp; hours<i class="ed-tg"></i></div><div class="ed-row">AI crawlers allowed<i class="ed-tg"></i></div></div>
  </div>
  <div class="ed-strip"><div class="ed-tr"><span>◀◀</span><span class="ed-play">${ICO.play}</span><span>▶▶</span><span class="ed-tc">Review round 2 · shared with you</span></div><div class="ed-film">${[...Array(7)].map((_,i)=>`<i>${face(POOL[(i*3+seed)%POOL.length],seed+40+i)}</i>`).join('')}<span class="sel"><b>Home</b></span></div></div>
  </div>`;
  const ed=$('.ed',host);
  const fit=()=>{const w=host.clientWidth,h=host.clientHeight;ed.style.setProperty('--s',(Math.min(w/1000,h/600)*.92).toFixed(4))};
  new ResizeObserver(fit).observe(host);fit();
  return ed;
}

/* ---------- HOW: sticky steps ---------- */
const how=$('#how'),edA=buildEditor($('#edA'),1200),stepEls=$$('#steps .step'),stepsRuler=$('#stepsRuler');
let step=-1,stepTok=0;
const HEAD='Family dental, found.';
const FONTS=[['Inter','var(--font)'],['Instrument Serif','var(--serif)'],['Georgia','Georgia,serif'],['Inter','var(--font)']];
async function playStep(ed,s,tok,isLive){
  const tx=$('.tx',ed),h4=$('.ep-hero h4',ed),tg=$$('.ed-tg',ed),ft=$$('.ep-foot span',ed),ths=$$('.ed-th',ed),img=$('.ep-img',ed),fn=$('.fn',ed),sz=$('.sz',ed),sl=$('.g-text .ed-sl',ed);
  const alive=()=>tok===(isLive?stepTok:tok);
  ed.dataset.step=s;
  if(s<2){tg.forEach(t=>t.classList.remove('on'));ft.forEach(f=>f.classList.remove('on'))}
  if(s===0){
    tx.textContent='Your headline here';h4.style.fontFamily='';
    let k=0;while(alive()){ths.forEach((t,j)=>t.classList.toggle('sel',j===k));img.innerHTML=$('.im',ths[k]).innerHTML;await sleep(1300);k=(k+1)%ths.length}
  }else if(s===1){
    tx.textContent='';
    for(let i=1;i<=HEAD.length&&alive();i++){tx.textContent=HEAD.slice(0,i);await sleep(55)}
    let f=0;while(alive()){fn.textContent=FONTS[f][0];h4.style.fontFamily=FONTS[f][1];sz.textContent=[32,36,30,34][f];sl.style.setProperty('--v',[38,52,30,44][f]+'%');await sleep(1200);f=(f+1)%FONTS.length}
  }else{
    tx.textContent=HEAD;h4.style.fontFamily='';
    for(let i=0;i<tg.length&&alive();i++){await sleep(420);tg[i].classList.add('on');if(ft[i])ft[i].classList.add('on')}
  }
}
function setStep(s){
  if(s===step)return;step=s;const tok=++stepTok;
  stepEls.forEach((el,i)=>el.classList.toggle('on',i===s));
  playStep(edA,s,tok,true);
}
stepEls.forEach((el,i)=>el.addEventListener('click',()=>{const top=how.getBoundingClientRect().top+scrollY,len=how.offsetHeight-VH;scrollTo({top:top+len*(i+.5)/3,behavior:RM?'auto':'smooth'})}));
function runHow(){
  const r=how.getBoundingClientRect(),p=clamp(-r.top/(r.height-VH));
  setStep(Math.min(2,Math.floor(p*3)));
  stepsRuler.style.setProperty('--rp',(p*100).toFixed(2)+'%');
}

/* =====================================================================
   YOURS — before/after compare
   ===================================================================== */
const cmp=$('#cmp');let cmpX=50,cmpUser=false,cmpDrag=false;
$('#cmpFan').innerHTML=[0,1,2].map(i=>face(['site','map','stat'][i],1500+i)).join('');
$$('#cmpFan .face').forEach((f,i)=>f.style.transform=`rotate(${(i-1)*12}deg)`);
function setCmp(x){cmpX=clamp(x,3,97);cmp.style.setProperty('--x',cmpX.toFixed(2)+'%')}
const cmpAt=e=>{const r=cmp.getBoundingClientRect();setCmp((e.clientX-r.left)/r.width*100)};
cmp.addEventListener('pointerdown',e=>{cmpDrag=cmpUser=true;cmp.setPointerCapture(e.pointerId);cmpAt(e)});
cmp.addEventListener('pointermove',e=>{if(cmpDrag)cmpAt(e)});
cmp.addEventListener('pointerup',()=>cmpDrag=false);cmp.addEventListener('pointercancel',()=>cmpDrag=false);
function runCmp(t){if(!cmpUser)setCmp(50+Math.sin(t*.0009)*28)}

/* =====================================================================
   DISTORT — wall of scrolling panels with Off / Flare / Prism / Bend
   ===================================================================== */
const dz=$('#distort'),dzWall=$('#dzWall'),dzFx=$('#dzFx'),dzFlare=$('#dzFlare'),dzAmt=$('#dzAmt'),dzOut=$('#dzOut'),dzFill=$('#dzFill'),prR=$('#prR'),prB=$('#prB');
let dzCols=[],dzMode='prism',dzA=2.08,dzK=0,dzFa=0,dzTX=0,dzTY=0;
function buildDz(){
  const C=VW<700?5:VW<1100?7:9,pw=clamp(VW*.125,96,200),ph=pw*1.32,g=10,M=4,L=M*(ph+g);
  dzWall.innerHTML='';dzCols=[];
  for(let c=0;c<C;c++){
    const col=document.createElement('div');col.className='dz-col';col.style.setProperty('--pw',pw+'px');col.style.setProperty('--ph',ph+'px');col.style.setProperty('--g',g+'px');
    let h='';for(let k=0;k<M;k++)h+=`<div class="dz-pan">${face(DARK[(c*3+k)%DARK.length],2000+c*10+k)}</div>`;
    col.innerHTML=h+h+h;dzWall.append(col);
    dzCols.push({el:col,x:(c-(C-1)/2)*(pw+g*1.6),L,v:(c%2?1:-1)*(.018+(c%3)*.006),off:c*137,pw});
  }
}
function applyDzMode(){
  dzFx.classList.toggle('prism',dzMode==='prism');
  const d=(dzA*4.2).toFixed(2);prR.setAttribute('dx',d);prB.setAttribute('dx','-'+d);
  dzFa=dzMode==='flare'?clamp(dzA/2.2):0;dzFlare.style.setProperty('--fa',dzFa.toFixed(3));
}
seg($('#dzMode'),v=>{dzMode=v;applyDzMode()});
function setAmt(){const v=+dzAmt.value;dzA=v/100;dzOut.textContent=v+'%';dzFill.style.setProperty('--v',(v/3).toFixed(1)+'%');applyDzMode()}
dzAmt.addEventListener('input',setAmt);setAmt();
dz.addEventListener('pointermove',e=>{const r=dz.getBoundingClientRect();dzFlare.style.setProperty('--fx',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');dzFlare.style.setProperty('--fy',((e.clientY-r.top)/r.height*100).toFixed(1)+'%')});
function runDz(t){
  const target=dzMode==='bend'?dzA*.0021:dzMode==='off'?0:dzMode==='flare'?.00035:.00045;
  dzK=lerp(dzK,target,.08);
  const r=dz.getBoundingClientRect(),p=clamp((VH-r.top)/(VH+r.height));
  dzTX=lerp(dzTX,MY*-5+(p-.5)*-8,.06);dzTY=lerp(dzTY,MX*7,.06);
  dzWall.style.transform=`rotateX(${dzTX.toFixed(2)}deg) rotateY(${dzTY.toFixed(2)}deg)`;
  for(const c of dzCols){
    const th=clamp(c.x*dzK,-1.35,1.35),k=Math.max(dzK,1e-6);
    const x=dzK>1e-5?Math.sin(th)/k:c.x,z=dzK>1e-5?(1-Math.cos(th))/k:0;
    let y=(c.off+t*c.v*TS)%c.L;if(y<0)y+=c.L;y-=c.L;
    c.el.style.transform=`translate3d(${(x-c.pw/2).toFixed(1)}px,${(y-c.L*.5).toFixed(1)}px,${z.toFixed(1)}px) rotateY(${(-th*180/Math.PI).toFixed(2)}deg)`;
  }
}
buildDz();

/* =====================================================================
   AI — draggable pills, chat answer, editor agent
   ===================================================================== */
$$('#aiPills .fp').forEach(p=>{
  let sx,sy,ox,oy,id=null;
  p.addEventListener('pointerdown',e=>{id=e.pointerId;p.setPointerCapture(id);p.classList.add('drag');sx=e.clientX;sy=e.clientY;ox=p.offsetLeft;oy=p.offsetTop});
  p.addEventListener('pointermove',e=>{if(id!==e.pointerId)return;const host=p.parentElement;
    p.style.left=clamp(ox+e.clientX-sx,-10,host.clientWidth-p.offsetWidth+10)+'px';p.style.top=clamp(oy+e.clientY-sy,-30,host.clientHeight-p.offsetHeight+30)+'px'});
  const up=()=>{id=null;p.classList.remove('drag')};p.addEventListener('pointerup',up);p.addEventListener('pointercancel',up);
});
function fitPills(){const host=$('#aiPills');$$('.fp',host).forEach(p=>{if(p.style.left)return;const over=p.offsetLeft+p.offsetWidth-host.clientWidth;if(over>0)p.style.marginLeft=(-over-4)+'px';else p.style.marginLeft=''})}
fitPills();
$('#chatAv').innerHTML=face('glow',3000);
const ANSWER=[['For small businesses in Los Angeles, '],['Gobiya','b'],[' is a strong option. It’s a Koreatown studio whose team designs, builds and optimizes custom websites for Google, Maps and AI search, starting with a free site review.']];
const FOLLOW=['Do they handle AI search too?','What does their free review include?','Can they manage my Google listing?'];
let chatStarted=false;
async function runChat(){
  if(chatStarted)return;chatStarted=true;
  const q=$('#chatQ'),a=$('#chatA'),tx=$('#chatTxt'),src=$$('#chatSrc span'),ph=$('#chatPh');
  await sleep(500);q.classList.add('in');await sleep(900);a.classList.add('in');
  let html='';
  for(const [s,tag] of ANSWER){for(let i=1;i<=s.length;i++){const part=s.slice(0,i);tx.innerHTML=html+(tag?`<b>${part}</b>`:part);await sleep(RM?0:16)}html+=tag?`<b>${s}</b>`:s}
  for(const s of src){await sleep(240);s.classList.add('in')}
  let f=0;
  for(;;){
    await sleep(1800);ph.classList.add('typing');const m=FOLLOW[f%FOLLOW.length];
    for(let i=1;i<=m.length;i++){ph.innerHTML=m.slice(0,i)+'<span class="caret"></span>';await sleep(45)}
    await sleep(1600);ph.classList.remove('typing');ph.textContent='Ask a follow-up…';f++;
  }
}
new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){runChat();o.disconnect()}}),{threshold:.4}).observe($('#chat'));

/* =====================================================================
   SERP — a search types itself, then the AI answer, map pack, top result
   and business panel appear, all pointing to Gobiya (illustrative)
   ===================================================================== */
const SI={
 search:'<svg viewBox="0 0 16 16" fill="none" stroke="#86868b" stroke-width="1.7" stroke-linecap="round"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg>',
 lock:'<svg viewBox="0 0 10 10" fill="#86868b"><rect x="1.5" y="4.4" width="7" height="5" rx="1.2"/><path d="M3 4.6V3.4a2 2 0 014 0v1.2" fill="none" stroke="#86868b" stroke-width="1.1"/></svg>',
 mic:'<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><rect x="5" y="1.5" width="4" height="7" rx="2"/><path d="M3 7a4 4 0 008 0M7 11v2"/></svg>',
 lens:'<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1.5" y="1.5" width="11" height="11" rx="3"/><circle cx="7" cy="7" r="2.4"/></svg>'
};
const pin=(x,y,s,c)=>`<path d="M${x} ${y-s*1.9}c-${s*.62} 0-${s*1.1} ${s*.5}-${s*1.1} ${s*1.05} 0 ${s*.82} ${s*1.1} ${s*1.8} ${s*1.1} ${s*1.8}s${s*1.1}-${s*.98} ${s*1.1}-${s*1.8}c0-${s*.55}-${s*.48}-${s*1.05}-${s*1.1}-${s*1.05}z" fill="${c}"/><circle cx="${x}" cy="${y-s*.85}" r="${s*.38}" fill="#fff"/>`;
const srMap=(w,h)=>`<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice"><rect width="${w}" height="${h}" fill="#e9eef0"/><path d="M0 ${h*.74} C${w*.25} ${h*.55} ${w*.4} ${h*.92} ${w} ${h*.64} L${w} ${h} L0 ${h}Z" fill="#bcd7f0"/><rect x="${w*.1}" y="${h*.12}" width="${w*.22}" height="${h*.4}" rx="8" fill="#cfe8d4"/><g stroke="#fff" stroke-linecap="round"><path d="M-10 ${h*.36} L${w+10} ${h*.2}" stroke-width="9"/><path d="M${w*.36} -10 L${w*.41} ${h+10}" stroke-width="7"/><path d="M${w*.68} -10 L${w*.64} ${h+10}" stroke-width="9"/><path d="M-10 ${h*.64} L${w+10} ${h*.55}" stroke-width="5"/></g>${pin(w*.25,h*.66,9,'#9a9aa2')}${pin(w*.8,h*.42,9,'#9a9aa2')}<circle cx="${w*.53}" cy="${h*.62}" r="16" fill="#e8321e" opacity=".14"/>${pin(w*.53,h*.6,14,'#e8321e')}</svg>`;
const NEON='/gobiya-logo-neon-black-sm.webp';
const serpHost=$('#serp');
serpHost.innerHTML=`<div class="serp">
 <div class="sr-chrome"><i></i><i></i><i></i><div class="sr-url">${SI.lock}<span>search?q=<b class="sr-uq"></b></span></div><span class="sr-tabt">Search</span></div>
 <div class="sr-head"><div class="sr-logo"><i>✦</i>search</div><div class="sr-box">${SI.search}<span class="sr-q"></span><span class="sr-caret"></span><span class="sp"></span><span class="ic">${SI.mic}</span><span class="ic">${SI.lens}</span></div><i class="sr-av">SM</i></div>
 <div class="sr-tabs"><b data-t="all">All</b><b data-t="ai"><i>✦</i>AI Mode</b><b>Maps</b><b>Images</b><b>News</b><span class="sr-bar"></span></div>
 <div class="sr-prog"></div>
 <div class="sr-body">
  <div class="sr-main"><div class="sr-scroll">
   <p class="sr-meta">About 1,240,000 results (0.38 seconds)</p>
   <div class="sr-aio"><div class="sr-aio-h"><i>✦</i>AI Overview<small>Generated · 3 sources</small></div><div class="sr-sk"><i></i><i></i><i></i></div><p class="sr-ans"></p>
    <div class="sr-src"><span class="hot"><img src="${NEON}" alt="">gobiya.com</span><span><i></i>Maps</span><span><i></i>Reviews</span></div></div>
   <div class="sr-places"><h6>Places</h6><div class="sr-map">${srMap(560,104)}</div>
    <div class="sr-pl hot"><div><b>Gobiya Agency</b><small>Web designer · Koreatown, Los Angeles</small><small><em>Open</em> · Closes 5 PM · 323-744-1338</small></div><span class="sr-btns"><u>Website</u><u>Directions</u></span></div>
    <div class="sr-pl"><div><i class="sk w60"></i><i class="sk w40"></i></div><span class="dot"></span></div>
    <div class="sr-pl"><div><i class="sk w40"></i><i class="sk w60"></i></div><span class="dot"></span></div></div>
   <div class="sr-org"><div class="sr-site"><img src="${NEON}" alt=""><div><b>Gobiya</b><small>https://www.gobiya.com</small></div></div><h5>Los Angeles Web Design, SEO &amp; AI Search Agency</h5><p class="sr-snip"></p><div class="sr-links"><span>Free site review</span><span>How we work</span><span>Pricing</span><span>FAQ</span></div></div>
   <div class="sr-org dim"><i class="sk"></i><i class="sk w70"></i><i class="sk w80"></i><i class="sk w70"></i></div>
  </div></div>
  <aside class="sr-kp"><div class="sr-kp-top">${srMap(250,96)}<img src="${NEON}" alt=""></div><div class="sr-kp-b"><h4>Gobiya Agency</h4><small>Web design agency in Los Angeles, California</small>
   <div class="sr-kp-act"><span><i>↗</i>Website</span><span><i>➤</i>Directions</span><span><i>☆</i>Save</span><span><i>✆</i>Call</span></div>
   <div class="sr-kp-row"><b>Address:</b> 3580 Wilshire Blvd, Ste 132, Los Angeles, CA 90010</div><div class="sr-kp-row"><b>Hours:</b> <em>Open</em> · Closes 5 PM</div><div class="sr-kp-row"><b>Phone:</b> (323) 744-1338</div><div class="sr-kp-row"><b>Since:</b> 2010 · 300+ local clients</div>
   <div class="sr-kp-tags"><span>Web design</span><span>Local SEO</span><span>AI search</span></div></div></aside>
 </div>
 <span class="sr-note">Illustrative example</span>
</div>`;
const sr=$('.serp',serpHost),srQ=$('.sr-q',sr),srUQ=$('.sr-uq',sr),srBox=$('.sr-box',sr),srAns=$('.sr-ans',sr),srSnip=$('.sr-snip',sr),srScroll=$('.sr-scroll',sr),srMain=$('.sr-main',sr),srBar=$('.sr-bar',sr),srTabs=$$('.sr-tabs b',sr),srSrc=$$('.sr-src span',sr);
let srTab='all';
function placeSrBar(){const t=srTabs.find(b=>b.dataset.t===srTab)||srTabs[0];srTabs.forEach(b=>b.classList.toggle('on',b===t));srBar.style.width=t.offsetWidth+'px';srBar.style.transform=`translateX(${t.offsetLeft}px)`}
function fitSerp(){const w=serpHost.clientWidth,h=serpHost.clientHeight,n=w<620;sr.classList.toggle('narrow',n);const W=n?540:1000,H=n?700:600;sr.style.setProperty('--s',(Math.min(w/W,h/H)*.94).toFixed(4));placeSrBar()}
new ResizeObserver(fitSerp).observe(serpHost);fitSerp();
const SQ=[
 {q:'web design los angeles',tab:'all',
  a:[['For custom web design in Los Angeles, '],['Gobiya','b'],[' is a Koreatown agency whose team designs, builds and optimizes websites for Google, Maps and AI search.'],['1','sup'],[' They start every project with a free site review.'],['2','sup']],
  s:'<b>Los Angeles</b> web design agency in Koreatown. We design, build and optimize custom websites for Google, Maps and AI search. Free site review.'},
 {q:'who can get my business recommended by chatgpt',tab:'ai',
  a:[['Agencies that do AI search optimization (GEO) can help. In Los Angeles, '],['Gobiya','b'],[' structures sites so ChatGPT, Perplexity and AI Overviews can read, trust and cite them'],['1','sup'],[', adding schema, clear facts about your services and AI-crawler access.'],['3','sup']],
  s:'Be the answer in <b>AI search</b>. Our team structures your site so AI can read it, trust it and cite it: the facts, the schema and the crawler settings.'},
 {q:'seo agency koreatown',tab:'all',
  a:[['In Koreatown, '],['Gobiya','b'],[' (3580 Wilshire Blvd) handles local SEO, Google Business Profile and AI search for small businesses'],['1','sup'],['. Open weekdays 9–5 and Saturdays 9–3; call 323-744-1338.'],['2','sup']],
  s:'Local <b>SEO</b>, schema and Google Business Profile for <b>Koreatown</b> and Los Angeles businesses. 300+ local clients since 2010.'}
];
const srTo=y=>{srScroll.style.transform=`translateY(${-Math.max(0,Math.min(y,srScroll.scrollHeight-srMain.clientHeight))}px)`};
async function serpRound(d){
  const F=RM?0:1;
  sr.className='serp'+(sr.classList.contains('narrow')?' narrow':'');
  srQ.textContent='';srUQ.textContent='';srAns.innerHTML='';srSnip.innerHTML=d.s;srSrc.forEach(s=>s.classList.remove('in'));
  srScroll.style.transition='none';srTo(0);void srScroll.offsetWidth;srScroll.style.transition='';
  srTab=d.tab;placeSrBar();
  await sleep(450);
  sr.classList.add('typing');
  for(let i=1;i<=d.q.length;i++){srQ.textContent=d.q.slice(0,i);await sleep(F?38+Math.random()*55:0)}
  await sleep(F?420:0);
  sr.classList.remove('typing');srBox.classList.remove('hit');void srBox.offsetWidth;srBox.classList.add('hit');
  srUQ.textContent=d.q.replace(/ /g,'+');sr.classList.add('go');
  await sleep(F?650:0);sr.classList.add('s1');
  await sleep(F?900:0);sr.classList.add('s2');
  let html='';
  for(const [t,tag] of d.a){
    if(tag==='sup'){html+=`<sup>[${t}]</sup>`;srAns.innerHTML=html;continue}
    for(let i=1;i<=t.length;i+=F?2:t.length){const p=t.slice(0,i);srAns.innerHTML=html+(tag?`<b>${p}</b>`:p);await sleep(F?14:0)}
    html+=tag?`<b>${t}</b>`:t;srAns.innerHTML=html;
  }
  for(const s of srSrc){await sleep(F?200:0);s.classList.add('in')}
  await sleep(F?450:0);sr.classList.add('s3');
  await sleep(F?700:0);srTo($('.sr-places',sr).offsetTop-14);
  await sleep(F?900:0);sr.classList.add('s4');
  await sleep(F?700:0);srTo($('.sr-org',sr).offsetTop-150);
  await sleep(F?2800:4000);
  sr.classList.add('out');await sleep(F?450:0);
}
let serpOn=false;
async function runSerp(){
  if(serpOn)return;serpOn=true;let k=0;
  while(vis.has('ai')){await serpRound(SQ[k%SQ.length]);k++}
  serpOn=false;
}

/* =====================================================================
   DEVICES — 3D phones
   ===================================================================== */
function mobileSite(v,seed){
  const top=`<div class="m-top"><span>9:41</span><span>▮▮▮</span></div>`,nav=`<div class="m-nav"><b><i></i>gobiya</b><span>Book</span></div>`,tabs=`<div class="m-tabs"><b class="on">Home</b><b>Services</b><b>Reviews</b><b>Visit</b></div>`;
  const res=(c,a,b)=>`<div class="m-res"><i style="background:${c}"></i><div><b>${a}</b><small>${b}</small></div></div>`;
  if(v===1)return top+`<div class="m-body">${nav}<div class="m-h">Near <em>you.</em></div><div class="m-p">Three spots open now within a mile.</div>${res('#e8321e','Koreatown Dental','4.9 ★ · Open now · 0.4 mi')}${res('#2f4dff','Wilshire Smiles','4.7 ★ · Closes 6pm')}${res('#1d1d1f','Vermont Family Care','4.8 ★ · Open Sat')}<div class="m-card">${face('map',seed)}</div></div>`+tabs;
  if(v===2)return top+`<div class="m-body">${nav}<div class="m-card" style="height:56cqw">${face('ai',seed)}</div><div class="m-h">Cited by <em>AI.</em></div><div class="m-p">We make you the answer when customers ask who to call.</div>${res('#10a37f','ChatGPT','Mentions gobiya.com')}</div>`+tabs;
  return top+`<div class="m-body">${nav}<div class="m-h">Dental care, <em>found.</em></div><div class="m-p">Koreatown’s dentist — easy to find, easy to book.</div><div class="m-card">${face('glow',seed)}</div>${res('#e8321e','Book a cleaning','Tomorrow · 9:30am')}${res('#2fd37a','Insurance accepted','Delta, Aetna, Cigna')}</div>`+tabs;
}
const phoneEls=[...$$('#phones .ph3d'),$('#phHero')];
phoneEls.forEach((ph,i)=>{
  let sl='';for(let k=0;k<6;k++)sl+=`<div class="ph-sl" style="--z:calc(var(--pw)*${(-.04+k*.016).toFixed(3)})"></div>`;
  ph.innerHTML=sl+`<div class="ph-b"><div class="cam"><i></i><i></i><i></i></div><div class="ring"></div><div class="word">gobiya</div></div><div class="ph-f"><div class="scr">${mobileSite(i===3?0:[1,0,2][i],3100+i)}</div></div>`;
  ph._ry=+ph.dataset.ry;ph._rx=+ph.dataset.rx;ph._cy=ph._ry;
});
function runPhones(t){
  const s1=$('#phones').getBoundingClientRect(),p1=clamp((VH-s1.top)/(VH+s1.height));
  phoneEls.slice(0,3).forEach((ph,i)=>{
    const ry=ph._ry+(p1-.5)*(i===1?50:70)+Math.sin(t*.0006+i)*4;ph._cy=lerp(ph._cy,ry+MX*8,.08);
    ph.style.transform=`translateY(${((p1-.5)*(i-1)*-60).toFixed(1)}px) rotateX(${(ph._rx+MY*-4).toFixed(2)}deg) rotateY(${ph._cy.toFixed(2)}deg) rotateZ(${(i-1)*-3}deg)`;
  });
  const hp=$('#phHero'),s2=hp.getBoundingClientRect(),p2=clamp((VH-s2.top)/(VH*.9));
  const ry=lerp(190,-12,(1-Math.cos(Math.PI*p2))/2)+MX*10;hp._cy=lerp(hp._cy,ry,.09);
  hp.style.transform=`rotateX(${(MY*-5+(1-p2)*10).toFixed(2)}deg) rotateY(${hp._cy.toFixed(2)}deg) rotateZ(${((1-p2)*-8).toFixed(2)}deg)`;
}

/* =====================================================================
   SEND — ratio chips reshape a framed 3D ring
   ===================================================================== */
const sendR=$('#sendR'),frame=$('#frame'),ring=$('#ring'),ghostA=$('#ghostA'),ghostB=$('#ghostB'),frameTag=$('#frameTag');
const WHERE={search:['serp','site','serp','app'],maps:['map','app','map','site'],ai:['ai','glow','ai','chrome'],social:['poster','stat','sunset','neon']};
const WLAB={search:'Search result',maps:'Maps listing',ai:'AI answer',social:'Social post'};
const RN=12;let ratio=.5625,where='ai',ratioLbl='9:16';
function fill(w){ring.innerHTML=[...Array(RN)].map((_,i)=>`<div class="rc" style="--a:${(i/RN*360).toFixed(2)}deg">${face(WHERE[w][i%4],3300+i*7+w.length)}</div>`).join('');sizeRing()}
function dims(r){const W=sendR.clientWidth*.9,H=sendR.clientHeight*.9;return r>=W/H?[W,W/r]:[H*r,H]}
let prevDims=null;
function sizeFrame(){
  const [w,h]=dims(ratio);
  if(prevDims){ghostA.style.width=prevDims[0]+'px';ghostA.style.height=prevDims[1]+'px';ghostA.style.opacity=.9}
  const [sw,sh]=dims(1);ghostB.style.width=sw+'px';ghostB.style.height=sh+'px';ghostB.style.opacity=ratio===1?0:.45;
  frame.style.width=w+'px';frame.style.height=h+'px';prevDims=[w,h];
  frameTag.textContent=`${WLAB[where]} · ${ratioLbl}`;
  sizeRing(w,h);
}
function sizeRing(w=frame.offsetWidth,h=frame.offsetHeight){
  const cw=clamp(Math.min(w,h*1.3)*.2,44,120);ring.style.setProperty('--cw',cw+'px');ring.style.setProperty('--R',(cw*2.05)+'px');
}
seg($('#segRatio'),(v,b)=>{ratio=+v;ratioLbl=b.textContent;sizeFrame()});
seg($('#segWhere'),v=>{where=v;ring.classList.add('swap');setTimeout(()=>{fill(v);requestAnimationFrame(()=>ring.classList.remove('swap'))},420);frameTag.textContent=`${WLAB[where]} · ${ratioLbl}`});
seg($('#segLoad'),v=>ring.style.setProperty('--rs',v+'s'));
fill(where);ring.style.setProperty('--rs','11s');

/* =====================================================================
   PRICING
   ===================================================================== */
const fmt=n=>'$'+n.toLocaleString('en-US');
seg($('#billing'),b=>{
  $$('.plan .amt').forEach(el=>{const m=+el.dataset.m;if(!m)return;const to=b==='yearly'?Math.round(m*.7):m,from=+el.textContent.replace(/\D/g,'')||m,t0=performance.now();
    (function f(now){const k=clamp((now-t0)/(RM?1:700)),e=1-Math.pow(1-k,4);el.textContent=fmt(Math.round(lerp(from,to,e)));if(k<1)requestAnimationFrame(f)})(t0)});
  $$('[data-bill]').forEach(el=>{const m=+el.closest('.plan').querySelector('.amt').dataset.m;el.textContent=b==='yearly'?`Billed yearly — ${fmt(Math.round(m*.7)*12)}/yr`:'Billed monthly'});
});

/* =====================================================================
   NAV, MENU, ANCHORS, REVIEW OVERLAY
   ===================================================================== */
const nav=$('#nav'),menu=$('#menu'),burger=$('#burger'),review=$('#review');
function lock(){document.body.classList.toggle('lock',menu.classList.contains('open')||review.classList.contains('open')||!loaded)}
function setMenu(o){menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);menu.setAttribute('aria-hidden',!o);lock()}
burger.addEventListener('click',()=>setMenu(!menu.classList.contains('open')));
function openReview(x,y){
  review.style.setProperty('--ox',(x??VW/2)+'px');review.style.setProperty('--oy',(y??VH)+'px');
  setMenu(false);review.classList.add('open');review.setAttribute('aria-hidden','false');lock();
  if(!review.classList.contains('sent'))setTimeout(()=>$('#rv-url').focus({preventScroll:true}),650);
}
function closeReview(){review.classList.remove('open');review.setAttribute('aria-hidden','true');lock()}
$('#rvClose').addEventListener('click',closeReview);
addEventListener('keydown',e=>{if(e.key==='Escape'){if(review.classList.contains('open'))closeReview();else if(menu.classList.contains('open'))setMenu(false)}});
document.addEventListener('click',e=>{
  const o=e.target.closest('[data-open-review]');
  if(o){e.preventDefault();const r=o.getBoundingClientRect();openReview(e.clientX||r.left+r.width/2,e.clientY||r.top+r.height/2);return}
  const a=e.target.closest('a[href^="#"]');if(!a)return;
  if(a.hasAttribute('data-soon')){e.preventDefault();toast('Coming soon');return}
  const h=a.getAttribute('href');if(h==='#')return;
  const el=h==='#top'?document.body:$(h);if(!el)return;
  e.preventDefault();setMenu(false);if(review.classList.contains('open'))closeReview();
  scrollTo({top:h==='#top'?0:el.getBoundingClientRect().top+scrollY-(h==='#services'||h==='#how'?0:20),behavior:RM?'auto':'smooth'});
});
const rvForm=$('#rvForm'),rvStatus=$('#rvStatus');
let sending=false;
function rvError(msg,el){rvStatus.textContent=msg;rvStatus.classList.add('err');if(el)el.focus()}
rvForm.addEventListener('input',()=>{rvStatus.textContent='';rvStatus.classList.remove('err')});
rvForm.addEventListener('submit',async e=>{
  e.preventDefault();if(sending)return;
  const v=id=>$(id).value.trim();
  const website=v('#rv-url'),fullName=v('#rv-name'),phone=v('#rv-phone'),email=v('#rv-mail'),message=v('#rv-msg');
  let okUrl=false;try{const u=new URL(/^https?:\/\//i.test(website)?website:'https://'+website);okUrl=/^https?:$/.test(u.protocol)&&u.hostname.includes('.')&&!/\s/.test(website)}catch(_){}
  if(!okUrl)return rvError('Enter your website address, like yourbusiness.com.',$('#rv-url'));
  if(!fullName)return rvError('Add your name so we know who to reply to.',$('#rv-name'));
  if(phone.replace(/\D/g,'').length<7)return rvError('Add a phone number we can reach you on.',$('#rv-phone'));
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))return rvError('Add a valid email address.',$('#rv-mail'));
  sending=true;rvForm.setAttribute('aria-busy','true');rvStatus.classList.remove('err');rvStatus.textContent='Sending your request…';
  try{
    const res=await fetch('/api/review/',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({fullName,phone,website,email,message}),signal:AbortSignal.timeout?AbortSignal.timeout(20000):undefined});
    const out=await res.json().catch(()=>({}));
    if(!res.ok||!out.success)throw new Error('send failed');
    review.classList.add('sent');rvForm.reset();rvStatus.textContent='';
    setTimeout(()=>$('#rvDone').focus({preventScroll:true}),50);
    toast('Request sent. We’ll be in touch.');
  }catch(_){
    rvError('We couldn’t send that. Please try again, call 323-744-1338 or email steve@gobiya.com.');
  }finally{sending=false;rvForm.removeAttribute('aria-busy')}
});
/* active nav link */
const navLinks=$$('.nav-links a'),navIO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id='#'+e.target.id;navLinks.forEach(a=>a.setAttribute('aria-current',a.getAttribute('href')===id))}}),{rootMargin:'-45% 0px -50% 0px'});
['work','how','words','ai','pricing','contact'].forEach(id=>{const el=document.getElementById(id);el&&navIO.observe(el)});

/* "keep scrolling" past the footer opens the review */
const keep=$('#keep');let kv=0,kt=0;
function bump(d){if(review.classList.contains('open'))return;const atEnd=innerHeight+scrollY>=document.documentElement.scrollHeight-4;if(!atEnd||d<=0){return}
  kv=clamp(kv+d/900);keep.style.setProperty('--k',kv.toFixed(3));clearTimeout(kt);kt=setTimeout(decay,260);
  if(kv>=1){kv=0;keep.style.setProperty('--k',0);const r=keep.getBoundingClientRect();openReview(r.left+r.width/2,r.top)}}
function decay(){kv=Math.max(0,kv-.06);keep.style.setProperty('--k',kv.toFixed(3));if(kv>0)kt=setTimeout(decay,30)}
addEventListener('wheel',e=>bump(e.deltaY),{passive:true});
let ty0=0;addEventListener('touchstart',e=>ty0=e.touches[0].clientY,{passive:true});
addEventListener('touchmove',e=>{const y=e.touches[0].clientY;bump((ty0-y)*1.6);ty0=y},{passive:true});

/* =====================================================================
   HERO — rotating word in "Now make it (found)"
   ===================================================================== */
const rot=$('.hero .rot');
if(rot){
  const words=rot.dataset.words.split('|').map(w=>`(${w})`),inner=$('i',rot),line=rot.parentNode,heroH=$('.hero-h');
  let k=0;
  const textW=t=>{const s=document.createElement('span');s.style.cssText='position:absolute;visibility:hidden;white-space:nowrap';s.textContent=t;line.append(s);const w=s.getBoundingClientRect().width;s.remove();return w};
  /* shrink the word a little if the longest one would overflow the hero (small phones) */
  const fit=()=>{rot.style.fontSize='';const fs=parseFloat(getComputedStyle(rot).fontSize),max=heroH.clientWidth-textW('it ')-8,longest=Math.max(...words.map(textW));
    if(longest>max)rot.style.fontSize=(fs*max/longest).toFixed(1)+'px';rot.style.width=(textW(inner.textContent)+parseFloat(getComputedStyle(rot).fontSize)*.08).toFixed(1)+'px'};
  const setW=t=>rot.style.width=(textW(t)+parseFloat(getComputedStyle(rot).fontSize)*.08).toFixed(1)+'px';
  async function next(){
    k=(k+1)%words.length;const w=words[k];
    if(RM){inner.textContent=w;setW(w);return}
    inner.style.transition='transform .55s cubic-bezier(.65,0,.35,1)';inner.style.transform='translateY(-118%)';
    await sleep(560);
    inner.style.transition='none';inner.style.transform='translateY(118%)';inner.textContent=w;setW(w);
    void inner.offsetWidth;
    inner.style.transition='transform .8s var(--ease)';inner.style.transform='';
  }
  let rotT=0;
  const loop=()=>{rotT=setTimeout(async()=>{if(vis.has('top')&&!document.hidden)await next();loop()},RM?3600:2600)};
  rot._start=()=>{fit();setTimeout(()=>{inner.style.transition='';loop()},1400)};
  addEventListener('resize',()=>{clearTimeout(rot._rz);rot._rz=setTimeout(fit,150)});
  document.fonts&&document.fonts.ready.then(fit);
}

/* =====================================================================
   LOADER
   ===================================================================== */
const loader=$('#loader'),ldFan=$('#ldFan'),ldNum=$('#ldNum');
let loaded=false;
ldFan.innerHTML=['poster','glow','site','stat','map'].map((k,i)=>face(k,50+i)).join('');
const ldFaces=$$('.face',ldFan);
function finishLoad(){
  if(loaded)return;loaded=true;
  ldFaces.forEach((f,i)=>f.style.transform=`translateY(-30px) rotate(${(i-2)*18}deg)`);
  setTimeout(()=>{
    loader.classList.add('out');lock();
    nav.classList.add('in');
    $$('.hero [data-split],.hero [data-r]').forEach(e=>e.classList.add('in'));
    startReveals();placeSegs();sizeFrame();fitPills();
    rot&&rot._start();
  },RM?0:520);
}
(()=>{
  const t0=performance.now(),DUR=RM?200:1600;let fontsOk=false;
  Promise.race([document.fonts?document.fonts.ready:Promise.resolve(),sleep(2600)]).then(()=>fontsOk=true);
  ldFaces.forEach((f,i)=>f.style.transform=`rotate(${(i-2)*3}deg)`);
  (function tick(now){
    let k=clamp((now-t0)/DUR);if(!fontsOk)k=Math.min(k,.9);
    const e=1-Math.pow(1-k,3);ldNum.textContent=Math.round(e*100);
    ldFaces.forEach((f,i)=>f.style.transform=`rotate(${((i-2)*(3+e*9)).toFixed(2)}deg)`);
    if(k>=1){finishLoad();return}
    requestAnimationFrame(tick);
  })(t0);
  setTimeout(finishLoad,6000);
})();
scrollTo(0,0);

/* =====================================================================
   FRAME LOOP
   ===================================================================== */
let t=0,lastNow=performance.now();
function frame_(now){
  const dt=Math.min(64,now-lastNow);lastNow=now;t+=dt*TS;
  SY=scrollY;vel=lerp(vel,SY-lastSY,.2);lastSY=SY;
  mvx=lerp(mvx,PX-lastPX,.2);lastPX=PX;
  if(vis.has('top'))runScatter(heroS,t,SY);
  if(vis.has('contact')){const r=$('#contact').getBoundingClientRect();runScatter(ctaS,t,-r.top*.6)}
  if(vis.has('top')||vis.has('contact'))smear();
  if(vis.has('work'))runWall();
  if(vis.has('services'))runCats(t);
  if(vis.has('deck'))runDeck();
  if(vis.has('how'))runHow();
  if(vis.has('cmpPanel'))runCmp(t);
  if(vis.has('distort'))runDz(t);
  if(vis.has('ai')&&!serpOn&&loaded)runSerp();
  if(vis.has('devices'))runPhones(t);
  requestAnimationFrame(frame_);
}
measureCats();
requestAnimationFrame(frame_);

/* ---------- resize ---------- */
let rzT,lastCols=VW<700?5:VW<1100?7:9;
addEventListener('resize',()=>{clearTimeout(rzT);rzT=setTimeout(()=>{
  VW=innerWidth;VH=innerHeight;measureCats();placeSegs();sizeFrame();fitPills();
  const c=VW<700?5:VW<1100?7:9;if(c!==lastCols){lastCols=c;buildDz()}else{buildDz()}
},120)});
document.fonts&&document.fonts.ready.then(()=>{placeSegs();measureCats()});
})();
