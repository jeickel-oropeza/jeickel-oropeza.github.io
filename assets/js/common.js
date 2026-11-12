/* Código compartido por todas las páginas: íconos, utilidades, lightbox, contacto y títulos animados. */
const ICONS={
  mail:'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  grid:'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  linkedin:'<path fill="currentColor" stroke="none" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.889 1.637-1.83 3.37-1.83 3.601 0 4.267 2.37 4.267 4.455v6.266zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  pin:'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  copy:'<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  play:'<polygon points="6 3 20 12 6 21 6 3"/>',
  image:'<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  swap:'<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>',
  trash:'<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
  trend:'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  cap:'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  dash:'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  flask:'<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
  video:'<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  box:'<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.94 4.58a2 2 0 0 0 .76.24 2 2 0 0 0 .76-.24L20.7 7"/>',
  user:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
  layout:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  loop:'<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
  server:'<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
  db:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  lang:'<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>'
};
/* Nombres de Material Symbols. LinkedIn queda como SVG porque Material Symbols no incluye logos de marcas. */
const MS={ticks:'done_all',mail:'mail',code:'code',grid:'grid_view',clock:'schedule',globe:'public',pin:'location_on',phone:'call',copy:'content_copy',x:'close',play:'play_arrow',image:'image',swap:'swap_horiz',trash:'delete',trend:'trending_up',cap:'school',dash:'dashboard',flask:'science',video:'videocam',box:'inventory_2',user:'how_to_reg',layout:'web',lang:'translate',layers:'stacks',store:'storefront',chat:'chat',cloud:'cloud',bulb:'lightbulb',tenant:'domain',offline:'cloud_off',drop:'water_drop',card:'credit_card',shield:'shield_lock',loop:'autorenew',server:'dns',db:'database',back:'arrow_back',open:'open_in_new',arrow:'arrow_forward'};
const svg=(n,c='ico')=>MS[n]?`<span class="${c} ms" aria-hidden="true">${MS[n]}</span>`:`<svg class="${c}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]||''}</svg>`;
function hydrateIcons(root=document){root.querySelectorAll('svg[data-i]').forEach(el=>{el.outerHTML=svg(el.dataset.i)})}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const lb=document.getElementById('lb'),lbImg=document.getElementById('lbImg');
function openLB(u){lbImg.src=u;lb.hidden=false;document.getElementById('lbClose').focus()}
function closeLB(){lb.hidden=true;lbImg.src=''}
lb.addEventListener('click',e=>{if(e.target!==lbImg)closeLB()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!lb.hidden)closeLB()});

let tt;function toast(m){const t=document.getElementById('toast');t.textContent=m;t.hidden=false;clearTimeout(tt);tt=setTimeout(()=>t.hidden=true,2200)}
document.getElementById('copy').addEventListener('click',()=>{
  const a=document.getElementById('addr').textContent;
  const sel=()=>{const r=document.createRange();r.selectNodeContents(document.getElementById('addr'));const s=getSelection();s.removeAllRanges();s.addRange(r);toast('Correo seleccionado. Presiona Ctrl+C para copiarlo')};
  try{navigator.clipboard.writeText(a).then(()=>toast('Correo copiado'),sel)}catch(e){sel()}
});

/* Escribe el título letra por letra cuando la sección entra en pantalla */
/* Hace aparecer un globo: puntos de "escribiendo", luego el mensaje, un saludo y una flotación suave */
function popBubble(b,typingMs=1200){
  b.classList.add('show');
  setTimeout(()=>{b.classList.remove('show');b.classList.add('sent','wave')},typingMs);
  setTimeout(()=>{b.classList.remove('wave');b.classList.add('idle')},typingMs+650);
}
function typewriter(){
  const el=document.getElementById('twText');const full='Hablemos de tu próximo proyecto';let started=false;
  const hola=document.getElementById('hola'),hola2=document.getElementById('hola2');
  const type=()=>{let i=0;
    /* El resto del texto queda invisible en su lugar: así las líneas no cambian mientras se escribe */
    const step=()=>{i++;el.innerHTML=esc(full.slice(0,i))+'<span class="caret"></span><span class="rest">'+esc(full.slice(i))+'</span>';
      if(i<full.length){const c=full[i-1];setTimeout(step,c===' '?140:55+Math.random()*70)}
      else{el.classList.add('done');setTimeout(()=>popBubble(hola2,1400),500)}};
    step()};
  /* Secuencia: globo "¡Hola!", se escribe el título y luego el globo "Escríbeme y conversemos" */
  const run=()=>{if(started)return;started=true;
    popBubble(hola,1300);
    setTimeout(type,2000)};
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){run();io.disconnect()}},{threshold:.35});
    io.observe(el.closest('h2'));
  } else run();
}
/* Títulos de sección: se escriben como un componente <Título /> al entrar en pantalla */
function codeTitles(){
  document.querySelectorAll('.code-title').forEach(h=>{
    const name=h.dataset.code;
    const segs=[{t:'<',c:'tok'},{t:name,c:''},{t:' />',c:'tok'}];
    const html=n=>{let out='',left=n;for(const g of segs){if(left<=0)break;const part=g.t.slice(0,left);left-=part.length;out+=g.c?`<span class="${g.c}">${esc(part)}</span>`:esc(part)}return out};
    const total=segs.reduce((a,g)=>a+g.t.length,0);
    h.innerHTML=`<span class="tw-ghost" aria-hidden="true">${html(total)}</span><span class="tw-text" aria-hidden="true"></span>`;
    const tx=h.querySelector('.tw-text');let started=false;
    const run=()=>{if(started)return;started=true;let i=0;
      const step=()=>{i++;tx.innerHTML=html(i);if(i<total)setTimeout(step,45+Math.random()*60);else tx.classList.add('done')};
      setTimeout(step,200)};
    if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){run();io.disconnect()}},{threshold:.6});io.observe(h)}else run();
  });
}

/* Año del pie de página */
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
