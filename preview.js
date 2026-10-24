"use strict";
// Preview-only fixtures; no ordering, stock allocation or payment.
const products=window.NOLMI_CATALOG;
const grid=document.querySelector("#products"),search=document.querySelector("#search"),category=document.querySelector("#category");
function render(){
 const q=search.value.trim().toLocaleLowerCase("ja-JP");
 const matches=products.filter(p=>(category.value==="すべて"||p.category===category.value)&&p.name.toLocaleLowerCase("ja-JP").includes(q));
 grid.replaceChildren();
 for(const p of matches){
  const card=document.createElement("article");card.className="product";
  const art=document.createElement("div");art.className="placeholder";art.setAttribute("aria-label","商品画像は準備中");
  const heart=document.createElement("b");heart.textContent="♡";const hint=document.createElement("small");hint.textContent="画像準備中";art.append(heart,hint);
  const body=document.createElement("div");body.className="details";
  const badge=document.createElement("span");badge.className="tag";badge.textContent="販売準備中";
  const name=document.createElement("h3");const link=document.createElement("a");link.href="product.html?id="+encodeURIComponent(p.id);link.textContent=p.name;name.append(link);
  const note=document.createElement("p");note.textContent=p.category+" · 価格・在庫未確定";
  body.append(badge,name,note);card.append(art,body);grid.append(card);
 }
 if(!matches.length){const empty=document.createElement("p");empty.textContent="該当する商品候補はありません。";grid.append(empty);}
}
search.addEventListener("input",render);category.addEventListener("change",render);
document.querySelectorAll("[data-category]").forEach(a=>a.addEventListener("click",()=>{category.value=a.dataset.category;render();}));
render();