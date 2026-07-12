// --- 1. CONFIGURATION DES IMAGES LOCALES ---
// Ces chemins doivent correspondre EXACTEMENT aux noms de vos fichiers dans le dossier assets
const localDrugImages = {
  "OG Kush": "assets/drugs/og-kush.webp",
  "Sour Diesel": "assets/drugs/sour-diesel.webp",
  "Green Crack": "assets/drugs/green-crack.webp",
  "Granddaddy Purple": "assets/drugs/granddaddy-purple.webp",
  "Methamphetamine": "assets/drugs/meth.webp",
  "Shrooms": "assets/drugs/shrooms.webp",
  "Cocaine": "assets/drugs/cocaine.webp"
};

const localIngredientImages = {
  "Cuke": "assets/ingredients/cuke.webp",
  "Banana": "assets/ingredients/banana.webp",
  "Paracetamol": "assets/ingredients/paracetamol.webp",
  "Donut": "assets/ingredients/donut.webp",
  "Viagor": "assets/ingredients/viagor.webp",
  "Mouth Wash": "assets/ingredients/mouth-wash.webp",
  "Flu Medicine": "assets/ingredients/flu-medicine.webp",
  "Gasoline": "assets/ingredients/gasoline.webp",
  "Energy Drink": "assets/ingredients/energy-drink.webp",
  "Motor Oil": "assets/ingredients/motor-oil.webp",
  "Mega Bean": "assets/ingredients/mega-bean.webp",
  "Chili": "assets/ingredients/chili.webp",
  "Battery": "assets/ingredients/battery.webp",
  "Iodine": "assets/ingredients/iodine.webp",
  "Addy": "assets/ingredients/addy.webp",
  "Horse Semen": "assets/ingredients/horse-semen.webp"
};

// Image de fallback pour Horse Semen (si le fichier local n'existe pas)
const horseImageFallback = 'https://static.wikia.nocookie.net/schedule-1/images/f/f1/Horsejuice%28blurred%29.png/revision/latest/scale-to-width-down/64?cb=20250420151404';

// --- 2. DONNÉES (DRUGS) ---
const drugs = [
  { name: "OG Kush", effect: "Calming", image: localDrugImages["OG Kush"] },
  { name: "Sour Diesel", effect: "Refreshing", image: localDrugImages["Sour Diesel"] },
  { name: "Green Crack", effect: "Energizing", image: localDrugImages["Green Crack"] },
  { name: "Granddaddy Purple", effect: "Sedating", image: localDrugImages["Granddaddy Purple"] },
  { name: "Methamphetamine", effect: null, image: localDrugImages["Methamphetamine"] },
  { name: "Shrooms", effect: null, image: localDrugImages["Shrooms"] },
  { name: "Cocaine", effect: null, image: localDrugImages["Cocaine"] }
];

// --- 3. DONNÉES (INGREDIENTS) ---
const data = [
  ['Cuke','Energizing',{Euphoric:'Laxative',Foggy:'Cyclopean',Gingeritis:'Thought-Provoking',Munchies:'Athletic',Slippery:'Munchies',Sneaky:'Paranoia',Toxic:'Euphoric'}],
  ['Banana','Gingeritis',{Calming:'Sneaky',Cyclopean:'Thought-Provoking',Disorienting:'Focused',Energizing:'Thought-Provoking',Focused:'Seizure-Inducing','Long Faced':'Refreshing',Paranoia:'Jennerising',Smelly:'Anti-Gravity',Toxic:'Smelly'}],
  ['Paracetamol','Sneaky',{Calming:'Slippery',Electrifying:'Athletic',Energizing:'Paranoia',Focused:'Gingeritis',Foggy:'Calming',Glowing:'Toxic',Munchies:'Anti-Gravity',Paranoia:'Balding',Spicy:'Bright-Eyed',Toxic:'Tropic Thunder'}],
  ['Donut','Calorie-Dense',{'Anti-Gravity':'Slippery',Balding:'Sneaky','Calorie-Dense':'Explosive',Focused:'Euphoric',Jennerising:'Gingeritis',Munchies:'Calming',Shrinking:'Energizing'}],
  ['Viagor','Tropic Thunder',{Athletic:'Sneaky',Disorienting:'Toxic',Euphoric:'Bright-Eyed',Laxative:'Calming',Shrinking:'Gingeritis'}],
  ['Mouth Wash','Balding',{Calming:'Anti-Gravity','Calorie-Dense':'Sneaky',Explosive:'Sedating',Focused:'Jennerising'}],
  ['Flu Medicine','Sedating',{Athletic:'Munchies',Calming:'Bright-Eyed',Cyclopean:'Foggy',Electrifying:'Refreshing',Euphoric:'Toxic',Focused:'Calming',Laxative:'Euphoric',Munchies:'Slippery',Shrinking:'Paranoia','Thought-Provoking':'Gingeritis'}],
  ['Gasoline','Toxic',{Disorienting:'Glowing',Electrifying:'Disorienting',Energizing:'Euphoric',Euphoric:'Spicy',Gingeritis:'Smelly',Jennerising:'Sneaky',Laxative:'Foggy',Munchies:'Sedating',Paranoia:'Calming',Shrinking:'Focused',Sneaky:'Tropic Thunder'}],
  ['Energy Drink','Athletic',{Disorienting:'Electrifying',Euphoric:'Energizing',Focused:'Shrinking',Foggy:'Laxative',Glowing:'Disorienting',Schizophrenic:'Balding',Sedating:'Munchies',Spicy:'Euphoric','Tropic Thunder':'Sneaky'}],
  ['Motor Oil','Slippery',{Energizing:'Munchies',Euphoric:'Sedating',Foggy:'Toxic',Munchies:'Schizophrenic',Paranoia:'Anti-Gravity'}],
  ['Mega Bean','Foggy',{Athletic:'Laxative',Calming:'Glowing',Energizing:'Cyclopean',Focused:'Disorienting',Jennerising:'Paranoia','Seizure-Inducing':'Focused',Shrinking:'Electrifying',Slippery:'Toxic',Sneaky:'Calming','Thought-Provoking':'Energizing'}],
  ['Chili','Spicy',{'Anti-Gravity':'Tropic Thunder',Athletic:'Euphoric',Laxative:'Long Faced',Munchies:'Toxic',Shrinking:'Refreshing',Sneaky:'Bright-Eyed'}],
  ['Battery','Bright-Eyed',{Cyclopean:'Glowing',Electrifying:'Euphoric',Euphoric:'Zombifying',Laxative:'Calorie-Dense',Munchies:'Tropic Thunder',Shrinking:'Munchies'}],
  ['Iodine','Jennerising',{Calming:'Balding','Calorie-Dense':'Gingeritis',Euphoric:'Seizure-Inducing',Foggy:'Paranoia',Refreshing:'Thought-Provoking',Toxic:'Sneaky'}],
  ['Addy','Thought-Provoking',{Explosive:'Euphoric',Foggy:'Energizing',Glowing:'Refreshing','Long Faced':'Electrifying',Sedating:'Gingeritis'}],
  ['Horse Semen','Long Faced',{'Anti-Gravity':'Calming',Gingeritis:'Refreshing','Thought-Provoking':'Electrifying','Seizure-Inducing':'Energizing'}]
];

// Construction de la liste des ingrédients avec les bonnes images
const ingredients = data.map(([name, base, replacements]) => {
  let image = localIngredientImages[name];
  
  // Si l'image locale n'est pas trouvée, on utilise le fallback (pour Horse Semen)
  if (!image) {
    if (name === 'Horse Semen') {
      image = horseImageFallback;
    } else {
      // Fallback générique (nom du fichier en minuscules)
      image = `assets/ingredients/${name.toLowerCase().replace(/\s+/g, '-')}.webp`;
    }
  }
  
  return { name, base, replacements, image };
});

// --- 4. ÉTAT DE L'APPLICATION ---
let mix = [];
let selectedDrug = null;

// Sélectionne les éléments DOM
const $ = s => document.querySelector(s);
const grid = $('#ingredientGrid');
const drugGrid = $('#drugGrid');
const effects = $('#effects');
const mixList = $('#mixList');
const timeline = $('#timeline');

// --- 5. FONCTIONS DE RENDU ---

function drawDrugs() {
  drugGrid.innerHTML = drugs.map(d => `
    <button class="drug ${selectedDrug?.name === d.name ? 'selected' : ''}" data-drug="${d.name}">
      <img src="${d.image}" alt="${d.name}">
      <span>
        <b>${d.name}</b>
        <small>BASE: ${d.effect || 'No effect'}</small>
      </span>
    </button>
  `).join('');
}

function drawCatalog(q = '') {
  q = q.toLowerCase();
  const filtered = ingredients.filter(i => 
    i.name.toLowerCase().includes(q) || i.base.toLowerCase().includes(q)
  );
  
  grid.innerHTML = filtered.map(i => `
    <button class="ingredient" data-name="${i.name}">
      <img class="icon" src="${i.image}" alt="${i.name}">
      <span>
        <span class="ingredient-top">${i.name}</span>
        <small>BASE EFFECT: ${i.base}</small>
      </span>
    </button>
  `).join('') || '<p class="empty">No ingredients found.</p>';
}

function calculate() {
  let active = selectedDrug?.effect ? [selectedDrug.effect] : [];
  let events = selectedDrug ? [{ drug: selectedDrug }] : [];

  for (const ingredient of mix) {
    const changes = [];
    active = active.map(effect => 
      ingredient.replacements[effect] 
        ? (changes.push([effect, ingredient.replacements[effect]]), ingredient.replacements[effect]) 
        : effect
    );
    if (!active.includes(ingredient.base)) {
      active.push(ingredient.base);
    }
    events.push({ ingredient, changes, base: ingredient.base });
  }

  return { active, events };
}

function render() {
  drawDrugs();
  const { active, events } = calculate();
  
  $('#stepCount').textContent = `${mix.length} ajout${mix.length > 1 ? 's' : ''}`;
  $('#ingredientTotal').textContent = mix.length;
  $('#addictionPercent').textContent = `${Math.min(100, mix.length * 12)}%`;
  $('#meterFill').style.width = `${Math.min(100, mix.length * 12)}%`;

  $('#productName').textContent = selectedDrug ? selectedDrug.name : 'No product selected';
  $('#baseEffect').textContent = selectedDrug?.effect || 'None';
  
  $('#heroItem').innerHTML = selectedDrug 
    ? `<img src="${selectedDrug.image}" alt="${selectedDrug.name}">` 
    : '<span>?</span>';

  effects.innerHTML = active.length
    ? active.map(e => `<span class="effect">${e}</span>`).join('')
    : '<p class="empty">Choose a base product, then add ingredients.</p>';

  const baseItem = selectedDrug 
    ? `<li class="base-drug"><img src="${selectedDrug.image}" alt=""><small>${selectedDrug.name}</small></li>` 
    : '';
  
  mixList.innerHTML = baseItem + (mix.length 
    ? mix.map((i, index) => `
        <li data-mix-index="${index}" title="Click to remove ${i.name}">
          <img src="${i.image}" alt="${i.name}">
          <small>${i.name}</small>
        </li>
      `).join('')
    : '<li class="empty">No ingredients added.</li>');

  timeline.innerHTML = events.length
    ? events.map((e, n) => {
        if (e.drug) {
          return `<article class="event"><p class="event-title">BASE: ${e.drug.name}</p><p class="change"><b>${e.drug.effect || 'No base effect'}</b></p></article>`;
        }
        return `<article class="event">
          <p class="event-title">${String(n).padStart(2, '0')} - ${e.ingredient.name}</p>
          ${e.changes.length 
            ? e.changes.map(([a, b]) => `<p class="change"><b>${a}</b><span class="arrow">→</span>${b}</p>`).join('')
            : `<p class="change"><b>+ ${e.base}</b> added to mix</p>`}
        </article>`;
      }).join('')
    : '<p class="empty">Your effect changes will show here.</p>';

  $('.liquid').style.height = `${Math.min(82, 42 + mix.length * 4)}%`;
}

// --- 6. ÉVÉNEMENTS ---

grid.addEventListener('click', e => {
  const btn = e.target.closest('[data-name]');
  if (!btn) return;
  
  const ingredient = ingredients.find(i => i.name === btn.dataset.name);
  if (ingredient) {
    mix.push(ingredient);
    render();
  }
});

mixList.addEventListener('click', e => {
  const item = e.target.closest('[data-mix-index]');
  if (!item) return;
  
  const index = Number(item.dataset.mixIndex);
  mix.splice(index, 1);
  render();
});

drugGrid.addEventListener('click', e => {
  const btn = e.target.closest('[data-drug]');
  if (btn) {
    selectedDrug = drugs.find(d => d.name === btn.dataset.drug);
    render();
  }
});

$('#search').addEventListener('input', e => drawCatalog(e.target.value));
$('#clearMix').addEventListener('click', () => {
  mix = [];
  render();
});

// --- 7. INITIALISATION ---
console.log("Loading assets...");
console.log("Drug Images:", localDrugImages);
console.log("Ingredient Images:", localIngredientImages);

drawCatalog();
render();