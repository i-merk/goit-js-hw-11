import{S as p,i}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const g="44654368-4937825c1744fe72f2410636e",y="https://pixabay.com/api/";async function m(o,t=1,n=20){const s=`${y}?key=${g}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${n}`;try{return(await(await fetch(s)).json()).hits}catch(e){throw console.error("Ошибка при получении изображений:",e),e}}const d=document.querySelector(".gallery");function h(){d.innerHTML=""}function f(o){const t=o.map(s=>b(s)).join("");d.insertAdjacentHTML("beforeend",t),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function b({webformatURL:o,largeImageURL:t,tags:n,likes:s,views:e,comments:r,downloads:a}){return`
    <div class="photo-card">
      <a href="${t}" class="gallery-link">
        <img src="${o}" alt="${n}" loading="lazy" class="gallery-image"/>
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${s}</p>
        <p class="info-item"><b>Views:</b> ${e}</p>
        <p class="info-item"><b>Comments:</b> ${r}</p>
        <p class="info-item"><b>Downloads:</b> ${a}</p>
      </div>
    </div>
  `}const L=document.querySelector(".search-form"),$=document.querySelector(".search-input"),u=document.querySelector(".load-more");let c=1,l="";L.addEventListener("submit",v);u.addEventListener("click",w);async function v(o){o.preventDefault();const t=$.value.trim();if(!t){i.error({title:"Ошибка",message:"Пожалуйста, введите запрос для поиска."});return}l=t,c=l=t,c=1,h();try{const n=await m(t,c);if(n.length===0){i.info({title:"Нет результатов",message:"Изображения по данному запросу не найдены. Попробуйте другой запрос."});return}f(n),i.success({title:"Успех",message:`Найдено ${n.length} изображений.`}),u.classList.remove("hidden")}catch{i.error({title:"Ошибка",message:"Произошла ошибка при поиске изображений. Пожалуйста, попробуйте позже."})}}async function w(){c+=1;try{const o=await m(l,c);if(o.length===0){i.info({title:"Конец списка",message:"Больше изображений по данному запросу нет."}),u.classList.add("hidden");return}f(o)}catch{i.error({title:"Ошибка",message:"Произошла ошибка при загрузке изображений. Пожалуйста, попробуйте позже."})}}
//# sourceMappingURL=commonHelpers.js.map
