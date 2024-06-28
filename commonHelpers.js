import{S as d,i as a}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="44654368-4937825c1744fe72f2410636e",m="https://pixabay.com/api/";async function p(n){const t=`${m}?key=${f}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=200`,o=await fetch(t);if(!o.ok)throw new Error("Не удалось выполнить запрос");return(await o.json()).hits}const u=document.querySelector(".gallery");function y(){u.innerHTML=""}const g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(n){const t=n.map(o=>b(o)).join("");u.insertAdjacentHTML("beforeend",t),g.refresh()}function b({webformatURL:n,largeImageURL:t,tags:o,likes:s,views:e,comments:r,downloads:i}){return`
    <div class="photo-card">
      <a href="${t}" class="gallery-link">
        <img src="${n}" alt="${o}" loading="lazy" class="gallery-image"/>
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${s}</p>
        <p class="info-item"><b>Views:</b> ${e}</p>
        <p class="info-item"><b>Comments:</b> ${r}</p>
        <p class="info-item"><b>Downloads:</b> ${i}</p>
      </div>
    </div>
  `}const L=document.querySelector(".search-form"),S=document.querySelector(".search-input"),v=document.querySelector(".load-more"),l=document.querySelector(".loader");let c=1;L.addEventListener("submit",$);v.addEventListener("click",onLoadMoreClick);async function $(n){n.preventDefault();const t=S.value.trim();if(!t){a.error({title:"Ошибка",message:"Search images"});return}c=t,c=1,y(),o();try{const e=await p(t,c);if(e.length===0){a.info({title:"Нет результатов",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(e),a.success({title:"Успех",message:`Найдено ${e.length} изображений.`})}finally{s()}function o(){l.classList.remove("hidden")}function s(){l.classList.add("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
