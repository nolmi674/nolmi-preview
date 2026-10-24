"use strict";
const root=document.getElementById("product-detail");
const id=new URLSearchParams(location.search).get("id");
const product=window.NOLMI_CATALOG.find(item=>item.id===id);
const heading=document.createElement("h1");
const description=document.createElement("p");
if(!product){heading.textContent="商品候補が見つかりません";description.textContent="商品一覧から選び直してください。";}
else{heading.textContent=product.name;description.textContent=product.description;const badge=document.createElement("span");badge.className="tag";badge.textContent=product.category+" · 販売準備中";root.append(badge);}
root.append(heading,description);
const availability=document.createElement("p");
availability.className="notice";
availability.textContent="販売価格・在庫・発送時期は未確定です。購入・予約はできません。";
root.append(availability);
