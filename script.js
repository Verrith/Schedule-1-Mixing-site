const icon = file => `https://schedule-1.fandom.com/wiki/Special:FilePath/${encodeURIComponent(file)}?width=96`;
const drugs = [
  {
    name: "OG Kush",
    effect: "Calming",
    image: "assets/drugs/og-kush.webp"
  },
  {
    name: "Sour Diesel",
    effect: "Refreshing",
    image: "assets/drugs/sour-diesel.webp"
  },
  {
    name: "Green Crack",
    effect: "Energizing",
    image: "assets/drugs/green-crack.webp"
  },
  {
    name: "Granddaddy Purple",
    effect: "Sedating",
    image: "assets/drugs/granddaddy-purple.webp"
  },
  {
    name: "Methamphetamine",
    effect: null,
    image: "assets/drugs/meth.webp"
  },
  {
    name: "Shrooms",
    effect: null,
    image: "assets/drugs/shrooms.webp"
  },
  {
    name: "Cocaine",
    effect: null,
    image: "assets/drugs/cocaine.webp"
  }
];
const data=[
['Cuke','Energizing',{Euphoric:'Laxative',Foggy:'Cyclopean',Gingeritis:'Thought-Provoking',Munchies:'Athletic',Slippery:'Munchies',Sneaky:'Paranoia',Toxic:'Euphoric'}],['Banana','Gingeritis',{Calming:'Sneaky',Cyclopean:'Thought-Provoking',Disorienting:'Focused',Energizing:'Thought-Provoking',Focused:'Seizure-Inducing','Long Faced':'Refreshing',Paranoia:'Jennerising',Smelly:'Anti-Gravity',Toxic:'Smelly'}],['Paracetamol','Sneaky',{Calming:'Slippery',Electrifying:'Athletic',Energizing:'Paranoia',Focused:'Gingeritis',Foggy:'Calming',Glowing:'Toxic',Munchies:'Anti-Gravity',Paranoia:'Balding',Spicy:'Bright-Eyed',Toxic:'Tropic Thunder'}],['Donut','Calorie-Dense',{'Anti-Gravity':'Slippery',Balding:'Sneaky','Calorie-Dense':'Explosive',Focused:'Euphoric',Jennerising:'Gingeritis',Munchies:'Calming',Shrinking:'Energizing'}],['Viagor','Tropic Thunder',{Athletic:'Sneaky',Disorienting:'Toxic',Euphoric:'Bright-Eyed',Laxative:'Calming',Shrinking:'Gingeritis'}],['Mouth Wash','Balding',{Calming:'Anti-Gravity','Calorie-Dense':'Sneaky',Explosive:'Sedating',Focused:'Jennerising'}],['Flu Medicine','Sedating',{Athletic:'Munchies',Calming:'Bright-Eyed',Cyclopean:'Foggy',Electrifying:'Refreshing',Euphoric:'Toxic',Focused:'Calming',Laxative:'Euphoric',Munchies:'Slippery',Shrinking:'Paranoia','Thought-Provoking':'Gingeritis'}],['Gasoline','Toxic',{Disorienting:'Glowing',Electrifying:'Disorienting',Energizing:'Euphoric',Euphoric:'Spicy',Gingeritis:'Smelly',Jennerising:'Sneaky',Laxative:'Foggy',Munchies:'Sedating',Paranoia:'Calming',Shrinking:'Focused',Sneaky:'Tropic Thunder'}],['Energy Drink','Athletic',{Disorienting:'Electrifying',Euphoric:'Energizing',Focused:'Shrinking',Foggy:'Laxative',Glowing:'Disorienting',Schizophrenic:'Balding',Sedating:'Munchies',Spicy:'Euphoric','Tropic Thunder':'Sneaky'}],['Motor Oil','Slippery',{Energizing:'Munchies',Euphoric:'Sedating',Foggy:'Toxic',Munchies:'Schizophrenic',Paranoia:'Anti-Gravity'}],['Mega Bean','Foggy',{Athletic:'Laxative',Calming:'Glowing',Energizing:'Cyclopean',Focused:'Disorienting',Jennerising:'Paranoia','Seizure-Inducing':'Focused',Shrinking:'Electrifying',Slippery:'Toxic',Sneaky:'Calming','Thought-Provoking':'Energizing'}],['Chili','Spicy',{'Anti-Gravity':'Tropic Thunder',Athletic:'Euphoric',Laxative:'Long Faced',Munchies:'Toxic',Shrinking:'Refreshing',Sneaky:'Bright-Eyed'}],['Battery','Bright-Eyed',{Cyclopean:'Glowing',Electrifying:'Euphoric',Euphoric:'Zombifying',Laxative:'Calorie-Dense',Munchies:'Tropic Thunder',Shrinking:'Munchies'}],['Iodine','Jennerising',{Calming:'Balding','Calorie-Dense':'Gingeritis',Euphoric:'Seizure-Inducing',Foggy:'Paranoia',Refreshing:'Thought-Provoking',Toxic:'Sneaky'}],['Addy','Thought-Provoking',{Explosive:'Euphoric',Foggy:'Energizing',Glowing:'Refreshing','Long Faced':'Electrifying',Sedating:'Gingeritis'}],['Horse Semen','Long Faced',{'Anti-Gravity':'Calming',Gingeritis:'Refreshing','Thought-Provoking':'Electrifying','Seizure-Inducing':'Energizing'}]
];
const special={Viagor:'Viagra Icon.png','Horse Semen':'Horse Semen Icon.png'};
const horseImage='https://static.wikia.nocookie.net/schedule-1/images/f/f1/Horsejuice%28blurred%29.png/revision/latest/scale-to-width-down/64?cb=20250420151404';
const ingredients=data.map(([name,base,replacements])=>({name,base,replacements,image:name==='Horse Semen'?horseImage:icon(special[name]||`${name} Icon.png`)}));
let mix=[],selectedDrug=null,selectedIngredient=null,actionMode='add';const $=s=>document.querySelector(s),grid=$('#ingredientGrid'),drugGrid=$('#drugGrid'),effects=$('#effects'),mixList=$('#mixList'),timeline=$('#timeline');
function drawDrugs(){drugGrid.innerHTML=drugs.map(d=>`<button class="drug ${selectedDrug?.name===d.name?'selected':''}" data-drug="${d.name}"><img src="${d.image}" alt=""><span><b>${d.name}</b><small>BASE: ${d.effect||'No effect'}</small></span></button>`).join('')}
function drawCatalog(q=''){q=q.toLowerCase();grid.innerHTML=ingredients.filter(i=>i.name.toLowerCase().includes(q)||i.base.toLowerCase().includes(q)).map(i=>`<button class="ingredient" data-name="${i.name}"><img class="icon" src="${i.image}" alt=""><span><span class="ingredient-top">${i.name}</span><small>BASE EFFECT: ${i.base}</small></span></button>`).join('')||'<p class="empty">No ingredients found.</p>'}
function calculate(){let active=selectedDrug?.effect?[selectedDrug.effect]:[],events=selectedDrug?[{drug:selectedDrug}]:[];for(const ingredient of mix){const changes=[];active=active.map(effect=>ingredient.replacements[effect]?(changes.push([effect,ingredient.replacements[effect]]),ingredient.replacements[effect]):effect);if(!active.includes(ingredient.base))active.push(ingredient.base);events.push({ingredient,changes,base:ingredient.base})}return{active,events}}
function render(){drawDrugs();const {active,events}=calculate();$('#stepCount').textContent=`${mix.length} ajout${mix.length>1?'s':''}`;effects.innerHTML=active.length?active.map(e=>`<span class="effect">${e}</span>`).join(''):'<p class="empty">Choisis une drogue ou un ingredient.</p>';const base=selectedDrug?`<li class="base-drug"><img src="${selectedDrug.image}" alt="">${selectedDrug.name}<small>BASE: ${selectedDrug.effect||'Aucun effet'}</small></li>`:'';mixList.innerHTML=base+(mix.length?mix.map(i=>`<li><img src="${i.image}" alt="">${i.name}</li>`).join(''):'')||'<li class="empty-line">Aucun produit ajoute</li>';timeline.innerHTML=events.length?events.map((e,n)=>e.drug?`<article class="event"><p class="event-title">BASE: ${e.drug.name}</p><p class="change"><b>${e.drug.effect||'Aucun effet de base'}</b></p></article>`:`<article class="event"><p class="event-title">${String(n).padStart(2,'0')} - ${e.ingredient.name}</p>${e.changes.length?e.changes.map(([a,b])=>`<p class="change"><b>${a}</b><span class="arrow">-></span>${b}</p>`).join(''):`<p class="change"><b>+ ${e.base}</b> ajoute au melange</p>`}</article>`).join(''):'<p class="empty">Les changements apparaitront ici.</p>';$('.liquid').style.height=`${Math.min(82,42+mix.length*4)}%`}
grid.addEventListener('click',e=>{const b=e.target.closest('[data-name]');if(!b)return;mix.push(ingredients.find(i=>i.name===b.dataset.name));actionMode='add';render()});mixList.addEventListener('click',e=>{const item=e.target.closest('[data-mix-index]');if(!item)return;mix.splice(Number(item.dataset.mixIndex),1);actionMode='add';render()});drugGrid.addEventListener('click',e=>{const b=e.target.closest('[data-drug]');if(b){selectedDrug=drugs.find(d=>d.name===b.dataset.drug);render()}});$('#search').addEventListener('input',e=>drawCatalog(e.target.value));$('#clearMix').addEventListener('click',()=>{mix=[];selectedIngredient=null;actionMode='add';render()});drawCatalog();render();

function render(){drawDrugs();const {active,events}=calculate(),amount=mix.length*12;$('#ingredientTotal').textContent=mix.length;$('#productName').textContent=selectedDrug?selectedDrug.name:'No product selected';$('#baseEffect').textContent=selectedDrug?.effect||'None';$('#heroItem').innerHTML=selectedDrug?`<img src="${selectedDrug.image}" alt="${selectedDrug.name}">`:'<span>?</span>';$('#addictionPercent').textContent=`${Math.min(100,amount)}%`;$('#meterFill').style.width=`${Math.min(100,amount)}%`;effects.innerHTML=active.length?active.map(e=>`<span class="effect">${e}</span>`).join(''):'<p class="empty">Choose a base product, then add ingredients.</p>';const base=selectedDrug?`<li class="base-drug"><img src="${selectedDrug.image}" alt=""><small>${selectedDrug.name}</small></li>`:'';mixList.innerHTML=base+(mix.length?mix.map((i,index)=>`<li data-mix-index="${index}" title="Click to remove ${i.name}"><img src="${i.image}" alt="${i.name}"><small>${i.name}</small></li>`).join(''):'')||'<li class="empty">No ingredients added.</li>';timeline.innerHTML=events.length?events.map((e,n)=>e.drug?`<article class="event"><p class="event-title">BASE: ${e.drug.name}</p><p class="change"><b>${e.drug.effect||'No base effect'}</b></p></article>`:`<article class="event"><p class="event-title">${String(n).padStart(2,'0')} - ${e.ingredient.name}</p>${e.changes.length?e.changes.map(([a,b])=>`<p class="change"><b>${a}</b><span class="arrow">→</span>${b}</p>`).join(''):`<p class="change"><b>+ ${e.base}</b> added to mix</p>`}</article>`).join(''):'<p class="empty">Your effect changes will show here.</p>'}
drawCatalog();render();

// Exact image files used by the Ingredients page on the Schedule 1 Wiki.
// Correction de wikiIngredientImages (supprimer les backslashes)
const wikiIngredientImages = {
  Cuke: 'assets/ingredients/cuke.webp',
  Banana: 'assets/ingredients/banana.webp',
  Paracetamol: 'assets/ingredients/paracetamol.webp',
  Donut: 'assets/ingredients/donut.webp',
  Viagor: 'assets/ingredients/viagor.webp',
  'Mouth Wash': 'assets/ingredients/mouth-wash.webp',
  'Flu Medicine': 'assets/ingredients/flu-medicine.webp',
  Gasoline: 'assets/ingredients/gasoline.webp',
  'Energy Drink': 'assets/ingredients/energy-drink.webp',
  'Motor Oil': 'assets/ingredients/motor-oil.webp',
  'Mega Bean': 'assets/ingredients/mega-bean.webp',
  Chili: 'assets/ingredients/chili.webp',
  Battery: 'assets/ingredients/battery.webp',
  Iodine: 'assets/ingredients/iodine.webp',
  Addy: 'assets/ingredients/addy.webp',
  'Horse Semen': 'assets/ingredients/horsejuice.webp' // Remplacez par le nom exact du fichier sur le wiki
};
ingredients.forEach(ingredient=>{ingredient.image=wikiIngredientImages[ingredient.name]||ingredient.image});
drawCatalog();
render();
// Local copies prevent the wiki host from blocking images on GitHub Pages.
const localIngredientImages={
  Cuke:'assets/ingredients/cuke.webp',Banana:'assets/ingredients/banana.webp',Paracetamol:'assets/ingredients/paracetamol.webp',Donut:'assets/ingredients/donut.webp',Viagor:'assets/ingredients/viagor.webp','Mouth Wash':'assets/ingredients/mouth-wash.webp','Flu Medicine':'assets/ingredients/flu-medicine.webp',Gasoline:'assets/ingredients/gasoline.webp','Energy Drink':'assets/ingredients/energy-drink.webp','Motor Oil':'assets/ingredients/motor-oil.webp','Mega Bean':'assets/ingredients/mega-bean.webp',Chili:'assets/ingredients/chili.webp',Battery:'assets/ingredients/battery.webp',Iodine:'assets/ingredients/iodine.webp',Addy:'assets/ingredients/addy.webp'
};
ingredients.forEach(ingredient=>{if(localIngredientImages[ingredient.name])ingredient.image=localIngredientImages[ingredient.name]});
drawCatalog();
render();
