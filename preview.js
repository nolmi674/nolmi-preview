"use strict";
// Preview-only fixtures; no ordering, stock allocation or payment.
const products=window.NOLMI_CATALOG;
const grid=document.querySelector("#products"),search=document.querySelector("#search"),category=document.querySelector("#category");
function render(){
 const q=search.value.trim().toLocaleLowerCase("ja-JP");
 const matches=products.filter(p=>(category.value==="すべて"||p.category===category.value)&&p.name.toLocaleLowerCase("ja-JP").includes(q));
 grid.replaceChildren();
 const count=document.querySelector("#result-count");if(count)count.textContent=matches.length+"件の商品候補";
 for(const p of matches){
  const card=document.createElement("article");card.className="product";
  const art=document.createElement("div");art.className="placeholder";art.setAttribute("aria-label","商品画像は準備中");
  const heart=document.createElement("b");heart.textContent="♡";const hint=document.createElement("small");hint.textContent="画像準備中";if(typeof p.image==="string"&&/^images\/[a-zA-Z0-9_-]+\.(?:webp|png|jpg|jpeg)$/.test(p.image)){const img=document.createElement("img");img.src=p.image;img.alt=p.name;img.loading="lazy";img.decoding="async";img.addEventListener("error",()=>{art.replaceChildren(heart,hint);art.classList.remove("has-image");},{once:true});art.classList.add("has-image");art.append(img);}else{art.append(heart,hint);}const artLink=document.createElement("a");artLink.className="art-link";artLink.href="product.html?id="+encodeURIComponent(p.id);artLink.setAttribute("aria-label",p.name+"の詳細を見る");artLink.append(art);
  const body=document.createElement("div");body.className="details";
  const badge=document.createElement("span");badge.className="tag";badge.textContent="販売準備中";
  const name=document.createElement("h3");const link=document.createElement("a");link.href="product.html?id="+encodeURIComponent(p.id);link.textContent=p.name;name.append(link);
  const note=document.createElement("p");note.textContent=p.category+" · 価格・在庫未確定";
  body.append(badge,name,note);card.append(artLink,body);grid.append(card);
 }
 if(!matches.length){const empty=document.createElement("p");empty.textContent="該当する商品候補はありません。";grid.append(empty);}
}
search.addEventListener("input",render);category.addEventListener("change",render);
document.querySelectorAll("[data-category]").forEach(a=>a.addEventListener("click",()=>{category.value=a.dataset.category;render();}));
render();