/* Página principal: proyectos, experiencia, habilidades y cinta de tecnologías. */
/* Para dejar medios fijos: coloca una URL en video o en images (hasta 3). */
const PROJECTS=[
  {icon:'box',company:'Azoe Essence',years:'2026 – actualidad',place:'Producto propio, en uso',title:'Plataforma de inventario, ventas y cobranza',
   desc:'SaaS multitenant para una perfumería: inventario por botella y por mililitro, ventas sin conexión como PWA, crédito por cuotas con mora, reportes y catálogo público con pedidos por WhatsApp.',
   impact:'Diseñada y construida de punta a punta, de la base de datos al despliegue.',tags:['React','TypeScript','NestJS','PostgreSQL','PWA'],video:'',cover:'assets/img/azoe/02-dashboard.webp',images:['assets/img/azoe/06-new-sale.webp','assets/img/azoe/08-account-detail.webp','assets/img/azoe/17-catalog-hero.webp'],caseUrl:'azoe-essence.html'},
  {icon:'cap',company:'Musa',years:'2024 – actualidad',place:'Lima, Perú (remoto)',title:'Learning Management System',
   desc:'Lideré el desarrollo del LMS desde la planificación hasta su puesta en producción, a cargo de la arquitectura y la ejecución del front-end.',
   impact:'Liderazgo del proyecto desde el concepto hasta producción.',tags:['React','TypeScript','Node.js','REST APIs'],video:'',images:[]},
  {icon:'dash',company:'Musa',years:'2024 – actualidad',place:'Lima, Perú (remoto)',title:'Gestión de métricas de cursos',
   desc:'Aplicación web para gestionar y visualizar las métricas de los cursos mediante paneles, pensada para el equipo académico.',
   impact:'Eficiencia del equipo académico 30% mayor.',tags:['React','Node.js','Dashboards'],video:'',images:[]},
  {icon:'flask',company:'Voxiva',years:'2022 – 2023',place:'Lima, Perú (remoto)',title:'Visualización de datos biológicos',
   desc:'Aplicación para recopilar y analizar visualmente, en tiempo real, los datos de experimentos biológicos. También mantuve y escalé proyectos en producción con entregas incrementales.',
   impact:'Nuevas funcionalidades sin interrumpir el servicio.',tags:['React','Redux','JavaScript','SASS'],video:'',images:[]},
  {icon:'video',company:'MyTeamAbroad',years:'2020 – 2022',place:'Madrid, España (remoto)',title:'Inspección de vehículos en tiempo real',
   desc:'Diseñé e implementé una solución de videollamada y transmisión en tiempo real que permite evaluar vehículos de forma remota.',
   impact:'Evaluación remota de vehículos en tiempo real.',tags:['Vue.js','Node.js','WebSockets'],video:'',images:[]},
  {icon:'box',company:'MyTeamAbroad',years:'2020 – 2022',place:'Madrid, España (remoto)',title:'Gestión de ventas de repuestos',
   desc:'Sistema web de gestión de ventas y pedidos de repuestos vehiculares para el equipo comercial.',
   impact:'Flujo operativo y comercial optimizado.',tags:['Vue.js','Laravel','PHP','SQL'],video:'',images:[]},
  {icon:'user',company:'Jobgether',years:'2019 – 2020',place:'Bruselas, Bélgica (remoto)',title:'Integración OAuth con LinkedIn',
   desc:'Integré la API de LinkedIn para autenticación e importación automática del perfil. Diseñé y mantuve endpoints en CakePHP para la plataforma de matching laboral, con alta disponibilidad y datos consistentes.',
   impact:'Mejor onboarding y mayor conversión de usuarios.',tags:['PHP','CakePHP','MySQL','REST APIs'],video:'',images:[]},
  {icon:'layout',company:'Oruga Studio',years:'2018 – 2019',place:'Caracas, Venezuela (presencial)',title:'Portales para clientes corporativos',
   desc:'Desarrollo y mantenimiento de portales y aplicaciones web para clientes corporativos de la agencia, desde landing pages hasta gestores de contenido (CMS). Entre ellos, el sitio web de la propia agencia.',
   impact:'Múltiples portales entregados y mantenidos.',tags:['React','PHP','SQL','Git'],video:'',
   cover:'assets/img/oruga/01-inicio.webp',images:['assets/img/oruga/02-servicios.webp','assets/img/oruga/03-portafolio.webp','assets/img/oruga/04-clientes.webp'],
   url:'https://www.orugastudio.com/'}
];

const JOBS=[
  {t:'Ene 2024 – hoy',c:'Musa',r:'Desarrollador Full Stack',l:'Lima, Perú. Remoto',d:'Lideré un LMS desde la planificación hasta producción y desarrollé paneles de métricas de cursos que aumentaron un 30% la eficiencia del equipo académico.'},
  {t:'Jun 2022 – Jul 2023',c:'Voxiva',r:'Desarrollador Front-end',l:'Lima, Perú. Remoto',d:'Visualización en tiempo real de datos de experimentos biológicos con React y Redux, y escalado de proyectos en producción sin interrupciones.'},
  {t:'Jul 2020 – Mar 2022',c:'MyTeamAbroad',r:'Desarrollador Full Stack',l:'Madrid, España. Remoto',d:'Videollamada y transmisión en tiempo real para evaluar vehículos con Vue.js, Node.js y WebSockets, y un sistema de ventas de repuestos con Laravel.'},
  {t:'Jul 2019 – May 2020',c:'Jobgether',r:'Desarrollador Full Stack',l:'Bruselas, Bélgica. Remoto',d:'Autenticación OAuth con la API de LinkedIn y endpoints en CakePHP para la plataforma de matching laboral.'},
  {t:'Abr 2018 – Jul 2019',c:'Oruga Studio',r:'Desarrollador Web',l:'Caracas, Venezuela. Presencial',d:'Portales y aplicaciones web con React, PHP y SQL para clientes corporativos de la agencia.'}
];

const SKILLS=[
  {n:'Frontend y UI',icon:'layout',groups:[
    {g:'Frameworks y librerías',items:['React.js','Next.js','Vue.js','Redux','Zustand','TanStack Query','Tailwind CSS','HTML5','CSS3 / SASS']},
    {g:'Lenguajes',items:['TypeScript','JavaScript (ES6+)']}]},
  {n:'Backend y arquitectura',icon:'server',groups:[
    {g:'Entornos y frameworks',items:['Node.js','NestJS','Express','Prisma','PHP','Laravel','CakePHP']},
    {g:'Tiempo real y APIs',items:['WebSockets','RESTful APIs','Microservicios','PWA / offline-first']}]},
  {n:'Bases de datos e infraestructura',icon:'db',groups:[
    {g:'Bases de datos',items:['PostgreSQL','MySQL','MongoDB']},
    {g:'DevOps y herramientas',items:['Docker','Git / GitHub','CI/CD']}]}
];

/* Logos (PNG blanco con transparencia). Una empresa sin logo muestra su nombre. */
const LOGOS={
  'Musa':{src:'assets/img/logos/musa.png',k:1},
  'Voxiva':{src:'assets/img/logos/voxiva.png',k:.82},
  'Jobgether':{src:'assets/img/logos/jobgether.png',k:1.1},
  'Oruga Studio':{src:'assets/img/logos/oruga-studio.png',k:2.6},
  'MyTeamAbroad':{src:'assets/img/logos/myteamabroad.png',k:1.5}
};
const logoOr=(name,tag)=>{const l=LOGOS[name];return l?`<${tag} class="has-logo"><img class="logo" style="--k:${l.k}" src="${l.src}" alt="${esc(name)}"></${tag}>`:`<${tag}>${esc(name)}</${tag}>`};

/* Medios de cada proyecto. Solo se muestran los que existen: si un proyecto no tiene
   video ni capturas, la tarjeta queda solo con el texto.
   Para agregar medios, pon una URL en video, cover o images (hasta 3) dentro de PROJECTS. */
const imgHTML=(u,t)=>`<button type="button" class="zoom" data-src="${esc(u)}" aria-label="Ampliar captura de ${esc(t)}"><img src="${esc(u)}" alt="Captura de ${esc(t)}" loading="lazy" decoding="async"></button>`;
function mediaHTML(p){
  const main=p.video
    ?`<div class="slot video filled"><video controls playsinline preload="metadata" src="${esc(p.video)}"></video></div>`
    :p.cover?`<div class="slot video filled cover">${imgHTML(p.cover,p.title)}</div>`:'';
  const imgs=(p.images||[]).slice(0,3);
  const thumbs=imgs.length?`<div class="thumbs">${imgs.map(u=>`<div class="slot img filled">${imgHTML(u,p.title)}</div>`).join('')}</div>`:'';
  return main||thumbs?`<div class="media">${main}${thumbs}</div>`:'';
}

function renderProjects(){
  const box=document.getElementById('projects');
  box.innerHTML=PROJECTS.map(p=>{
    const media=mediaHTML(p);
    return `
  <article class="project${media?'':' no-media'}" data-tags="${esc(p.tags.join('|'))}">
    ${media}
    <div class="info">
      <div class="info-head">
        <div class="meta"><span class="badge">${svg(p.icon)}</span><div>${logoOr(p.company,'b')}<small>${esc(p.years)}, ${esc(p.place)}</small></div></div>
        <h3>${esc(p.title)}</h3>
      </div>
      <div class="info-body">
        <p>${esc(p.desc)}</p>
        <div class="impact">${svg('trend')}<span>${esc(p.impact)}</span></div>
        <ul class="tags">${p.tags.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>
        ${p.caseUrl||p.url?`<div class="links">${p.caseUrl?`<a class="btn case-link" href="${p.caseUrl}">${svg('layers')}Ver caso de estudio</a>`:''}${p.url?`<a class="btn" href="${esc(p.url)}" target="_blank" rel="noopener">${svg('open')}Visitar sitio</a>`:''}</div>`:''}
      </div>
    </div>
  </article>`}).join('');
  box.addEventListener('click',e=>{const b=e.target.closest('.zoom');if(b)openLB(b.dataset.src)});
}

function renderFilters(){
  const all=['Todos',...new Set(PROJECTS.flatMap(p=>p.tags).filter(t=>['React','Vue.js','Node.js','NestJS','Redux','Laravel','PHP','WebSockets','TypeScript'].includes(t)))];
  const f=document.getElementById('filters');
  f.innerHTML=all.map((t,i)=>`<button class="chip" type="button" aria-pressed="${i===0}" data-t="${esc(t)}">${esc(t)}</button>`).join('');
  f.addEventListener('click',e=>{
    const b=e.target.closest('.chip');if(!b)return;
    f.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c===b));
    const t=b.dataset.t;
    document.querySelectorAll('.project').forEach(a=>{a.hidden=!(t==='Todos'||a.dataset.tags.split('|').includes(t))});
  });
}

function renderTimeline(){
  document.getElementById('timeline').innerHTML=JOBS.map(j=>`<li><time>${esc(j.t)}</time><div class="job">${logoOr(j.c,'h3')}<span>${esc(j.r)}</span><em>${esc(j.l)}</em><p>${esc(j.d)}</p></div></li>`).join('');
}
function renderSkills(){
  document.getElementById('skills').innerHTML=SKILLS.map(s=>`<div class="tier"><header><h3>${esc(s.n)}</h3><span class="badge">${svg(s.icon)}</span></header>${s.groups.map(g=>`<div class="grp"><h4>${esc(g.g)}</h4><ul>${g.items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}</div>`).join('');
}

function renderMarquee(){
  const items=[...new Set(SKILLS.flatMap(s=>s.groups.flatMap(g=>g.items)))];
  const li=(t,dup)=>`<li${dup?' aria-hidden="true"':''}>${esc(t)}</li>`;
  document.getElementById('track').innerHTML=items.map(t=>li(t,false)).join('')+items.map(t=>li(t,true)).join('');
}

hydrateIcons();renderFilters();renderProjects();renderTimeline();renderSkills();renderMarquee();typewriter();codeTitles();
