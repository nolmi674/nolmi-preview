"use strict";
const root=document.getElementById("product-detail");
const id=new URLSearchParams(location.search).get("id");
const product=window.NOLMI_CATALOG.find(item=>item.id===id);
const heading=document.createElement("h1");
const description=document.createElement("p");
if(!product){heading.textContent="商品候補が見つかりません";description.textContent="商品一覧から選び直してください。";}
else{heading.textContent=product.name;description.textContent=product.description;const badge=document.createElement("span");badge.className="tag";badge.textContent=product.category+" · "+(product.verified===true?"販売準備中":"商品情報確認中");root.append(badge);}
root.append(heading,description);
const availability=document.createElement("p");
availability.className="notice";
availability.textContent="販売価格・在庫・発送時期は未確定です。購入・予約はできません。";
root.append(availability);
if(product){const panel=document.createElement("section");panel.className="product-facts";const title=document.createElement("h2");title.textContent="商品情報";panel.append(title);for(const [label,value] of [["カテゴリ",product.category],["商品仕様","確認中"],["仕入先商品情報",product.verified===true?"照合済み":"未照合"],["販売価格","未定"],["在庫・発送","未定"]]){const line=document.createElement("p");const strong=document.createElement("strong");strong.textContent=label+"：";line.append(strong,document.createTextNode(value));panel.append(line);}root.append(panel);}
