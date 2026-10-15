const countriesList = [
  { name: "Afeganistão", code: "af" }, { name: "África do Sul", code: "za" }, { name: "Albânia", code: "al" },
  { name: "Alemanha", code: "de" }, { name: "Andorra", code: "ad" }, { name: "Angola", code: "ao" },
  { name: "Anguila", code: "ai" }, { name: "Antígua e Barbuda", code: "ag" }, { name: "Arábia Saudita", code: "sa" },
  { name: "Argélia", code: "dz" }, { name: "Argentina", code: "ar" }, { name: "Armênia", code: "am" },
  { name: "Aruba", code: "aw" }, { name: "Austrália", code: "au" }, { name: "Áustria", code: "at" },
  { name: "Azerbaijão", code: "az" }, { name: "Bahamas", code: "bs" }, { name: "Bahrein", code: "bh" },
  { name: "Bangladesh", code: "bd" }, { name: "Barbados", code: "bb" }, { name: "Bélgica", code: "be" },
  { name: "Belize", code: "bz" }, { name: "Benim", code: "bj" }, { name: "Bermudas", code: "bm" },
  { name: "Bielorrússia", code: "by" }, { name: "Bolívia", code: "bo" }, { name: "Bósnia e Herzegovina", code: "ba" },
  { name: "Botsuana", code: "bw" }, { name: "Brasil", code: "br" }, { name: "Brunei", code: "bn" },
  { name: "Bulgária", code: "bg" }, { name: "Burkina Faso", code: "bf" }, { name: "Burundi", code: "bi" },
  { name: "Butão", code: "bt" }, { name: "Cabo Verde", code: "cv" }, { name: "Camarões", code: "cm" },
  { name: "Camboja", code: "kh" }, { name: "Canadá", code: "ca" }, { name: "Catar", code: "qa" },
  { name: "Cazaquistão", code: "kz" }, { name: "Chade", code: "td" }, { name: "Chile", code: "cl" },
  { name: "China", code: "cn" }, { name: "Chipre", code: "cy" }, { name: "Colômbia", code: "co" },
  { name: "Comores", code: "km" }, { name: "Congo", code: "cg" }, { name: "Coreia do Norte", code: "kp" },
  { name: "Coreia do Sul", code: "kr" }, { name: "Costa do Marfim", code: "ci" }, { name: "Costa Rica", code: "cr" },
  { name: "Croácia", code: "hr" }, { name: "Cuba", code: "cu" }, { name: "Curaçau", code: "cw" },
  { name: "Dinamarca", code: "dk" }, { name: "Djibouti", code: "dj" }, { name: "Dominica", code: "dm" },
  { name: "Egito", code: "eg" }, { name: "El Salvador", code: "sv" }, { name: "Emirados Árabes Unidos", code: "ae" },
  { name: "Equador", code: "ec" }, { name: "Eritreia", code: "er" }, { name: "Escócia", code: "gb-sct" },
  { name: "Eslováquia", code: "sk" }, { name: "Eslovênia", code: "si" }, { name: "Espanha", code: "es" },
  { name: "Estados Unidos", code: "us" }, { name: "Estônia", code: "ee" }, { name: "Eswatini", code: "sz" },
  { name: "Etiópia", code: "et" }, { name: "Fiji", code: "fj" }, { name: "Filipinas", code: "ph" },
  { name: "Finlândia", code: "fi" }, { name: "França", code: "fr" }, { name: "Gabão", code: "ga" },
  { name: "Gâmbia", code: "gm" }, { name: "Gana", code: "gh" }, { name: "Geórgia", code: "ge" },
  { name: "Gibraltar", code: "gi" }, { name: "Granada", code: "gd" }, { name: "Grécia", code: "gr" },
  { name: "Guam", code: "gu" }, { name: "Guatemala", code: "gt" }, { name: "Guiana", code: "gy" },
  { name: "Guiné", code: "gn" }, { name: "Guiné Equatorial", code: "gq" }, { name: "Guiné-Bissau", code: "gw" },
  { name: "Haiti", code: "ht" }, { name: "Holanda", code: "nl" }, { name: "Honduras", code: "hn" },
  { name: "Hong Kong", code: "hk" }, { name: "Hungria", code: "hu" }, { name: "Iêmen", code: "ye" },
  { name: "Ilhas Caimã", code: "ky" }, { name: "Ilhas Cook", code: "ck" }, { name: "Ilhas Faroé", code: "fo" },
  { name: "Ilhas Salomão", code: "sb" }, { name: "Ilhas Virgens Americanas", code: "vi" },
  { name: "Ilhas Virgens Britânicas", code: "vg" }, { name: "Índia", code: "in" }, { name: "Indonésia", code: "id" },
  { name: "Inglaterra", code: "gb-eng" }, { name: "Irã", code: "ir" }, { name: "Iraque", code: "iq" },
  { name: "Irlanda", code: "ie" }, { name: "Irlanda do Norte", code: "gb-nir" }, { name: "Islândia", code: "is" },
  { name: "Israel", code: "il" }, { name: "Itália", code: "it" }, { name: "Jamaica", code: "jm" },
  { name: "Japão", code: "jp" }, { name: "Jordânia", code: "jo" }, { name: "Kosovo", code: "xk" },
  { name: "Kuwait", code: "kw" }, { name: "Laos", code: "la" }, { name: "Lesoto", code: "ls" },
  { name: "Letônia", code: "lv" }, { name: "Líbano", code: "lb" }, { name: "Libéria", code: "lr" },
  { name: "Líbia", code: "ly" }, { name: "Liechtenstein", code: "li" }, { name: "Lituânia", code: "lt" },
  { name: "Luxemburgo", code: "lu" }, { name: "Macau", code: "mo" }, { name: "Macedônia do Norte", code: "mk" },
  { name: "Madagascar", code: "mg" }, { name: "Malásia", code: "my" }, { name: "Malawi", code: "mw" },
  { name: "Maldivas", code: "mv" }, { name: "Mali", code: "ml" }, { name: "Malta", code: "mt" },
  { name: "Marrocos", code: "ma" }, { name: "Maurício", code: "mu" }, { name: "Mauritânia", code: "mr" },
  { name: "México", code: "mx" }, { name: "Mianmar", code: "mm" }, { name: "Micronésia", code: "fm" },
  { name: "Moçambique", code: "mz" }, { name: "Moldávia", code: "md" }, { name: "Mongólia", code: "mn" },
  { name: "Montenegro", code: "me" }, { name: "Montserrat", code: "ms" }, { name: "Namíbia", code: "na" },
  { name: "Nepal", code: "np" }, { name: "Nicarágua", code: "ni" }, { name: "Níger", code: "ne" },
  { name: "Nigéria", code: "ng" }, { name: "Noruega", code: "no" }, { name: "Nova Caledônia", code: "nc" },
  { name: "Nova Zelândia", code: "nz" }, { name: "Omã", code: "om" }, { name: "País de Gales", code: "gb-wls" },
  { name: "Paquistão", code: "pk" }, { name: "Palestina", code: "ps" }, { name: "Panamá", code: "pa" },
  { name: "Papua-Nova Guiné", code: "pg" }, { name: "Paraguai", code: "py" }, { name: "Peru", code: "pe" },
  { name: "Polônia", code: "pl" }, { name: "Porto Rico", code: "pr" }, { name: "Portugal", code: "pt" },
  { name: "Quirguistão", code: "kg" }, { name: "Quênia", code: "ke" }, { name: "República Centro-Africana", code: "cf" },
  { name: "República Checa", code: "cz" }, { name: "República Democrática do Congo", code: "cd" },
  { name: "República Dominicana", code: "do" }, { name: "Romênia", code: "ro" }, { name: "Ruanda", code: "rw" },
  { name: "Rússia", code: "ru" }, { name: "Samoa", code: "ws" }, { name: "Samoa Americana", code: "as" },
  { name: "San Marino", code: "sm" }, { name: "Santa Lúcia", code: "lc" }, { name: "São Cristóvão e Neves", code: "kn" },
  { name: "São Tomé e Príncipe", code: "st" }, { name: "São Vicente e Granadinas", code: "vc" },
  { name: "Senegal", code: "sn" }, { name: "Serra Leoa", code: "sl" }, { name: "Sérvia", code: "rs" },
  { name: "Seychelles", code: "sc" }, { name: "Singapura", code: "sg" }, { name: "Síria", code: "sy" },
  { name: "Somália", code: "so" }, { name: "Sri Lanka", code: "lk" }, { name: "Sudão", code: "sd" },
  { name: "Sudão do Sul", code: "ss" }, { name: "Suécia", code: "se" }, { name: "Suíça", code: "ch" },
  { name: "Suriname", code: "sr" }, { name: "Taiti", code: "pf" }, { name: "Tailândia", code: "th" },
  { name: "Taiwan", code: "tw" }, { name: "Tajiquistão", code: "tj" }, { name: "Tanzânia", code: "tz" },
  { name: "Timor-Leste", code: "tl" }, { name: "Togo", code: "tg" }, { name: "Tonga", code: "to" },
  { name: "Trinidad e Tobago", code: "tt" }, { name: "Tunísia", code: "tn" }, { name: "Turcomenistão", code: "tm" },
  { name: "Turks e Caicos", code: "tc" }, { name: "Turquia", code: "tr" }, { name: "Ucrânia", code: "ua" },
  { name: "Uganda", code: "ug" }, { name: "Uruguai", code: "uy" }, { name: "Uzbequistão", code: "uz" },
  { name: "Vanuatu", code: "vu" }, { name: "Venezuela", code: "ve" }, { name: "Vietnã", code: "vn" },
  { name: "Zâmbia", code: "zm" }, { name: "Zimbábue", code: "zw" }
];

/* ================= BASE DE DADOS: TIMES POPULARES ================= */
const clubsList = [
  { name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/541.png" },
  { name: "FC Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" },
  { name: "Bayern München", logo: "https://media.api-sports.io/football/teams/157.png" },
  { name: "Manchester City", logo: "https://media.api-sports.io/football/teams/50.png" },
  { name: "Paris Saint-Germain", logo: "https://media.api-sports.io/football/teams/85.png" },
  { name: "Liverpool FC", logo: "https://media.api-sports.io/football/teams/40.png" },
  { name: "Arsenal FC", logo: "https://media.api-sports.io/football/teams/42.png" },
  { name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" },
  { name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" },
  { name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png" },
  { name: "Al-Nassr", logo: "https://media.api-sports.io/football/teams/2501.png" },
  { name: "Inter Miami", logo: "https://media.api-sports.io/football/teams/16180.png" },
  { name: "Flamengo", logo: "https://media.api-sports.io/football/teams/127.png" },
  { name: "Palmeiras", logo: "https://media.api-sports.io/football/teams/121.png" },
  { name: "São Paulo", logo: "https://media.api-sports.io/football/teams/126.png" },
  { name: "Corinthians", logo: "https://media.api-sports.io/football/teams/131.png" },
  { name: "Boca Juniors", logo: "https://media.api-sports.io/football/teams/451.png" },
  { name: "River Plate", logo: "https://media.api-sports.io/football/teams/435.png" },
  { name: "SL Benfica", logo: "https://media.api-sports.io/football/teams/211.png" },
  { name: "FC Porto", logo: "https://media.api-sports.io/football/teams/212.png" },
  { name: "Sporting CP", logo: "https://media.api-sports.io/football/teams/228.png" }
];

/* ================= MUTAÇÃO DE POSIÇÕES E RÓTULOS ================= */
function updatePosition() {
  const pos = document.getElementById("input-pos").value;
  document.getElementById("display-pos").innerText = pos;

  const isGK = pos === "GK";
  const labels = isGK 
    ? ["DIV", "HAN", "KIC", "REF", "SPD", "POS"]
    : ["PAC", "SHO", "PAS", "DRI", "DEF", "PHY"];

  const labelDescriptions = isGK
    ? ["DIV (Mergulho)", "HAN (Manejo)", "KIC (Chapéu)", "REF (Reflexos)", "SPD (Velocidade)", "POS (Posicionamento)"]
    : ["PAC (Ritmo)", "SHO (Remate)", "PAS (Passe)", "DRI (Drible)", "DEF (Defesa)", "PHY (Físico)"];

  for (let i = 1; i <= 6; i++) {
    document.getElementById(`lbl-s${i}`).innerText = labels[i-1];
    document.getElementById(`lbl-input-s${i}`).innerText = labelDescriptions[i-1];
  }

  validateAndCalculateOVR();
}

/* ================= ATUALIZAÇÃO DE NOME E INPUTS ================= */
function updateCardInfo() {
  const name = document.getElementById("input-name").value.trim();
  document.getElementById("display-name").innerText = name !== "" ? name : "NOME DO JOGADOR";
}

/* ================= CÁLCULO AUTOMÁTICO DE OVERALL ================= */
function validateAndCalculateOVR() {
  const s1 = parseInt(document.getElementById("input-s1").value) || 0;
  const s2 = parseInt(document.getElementById("input-s2").value) || 0;
  const s3 = parseInt(document.getElementById("input-s3").value) || 0;
  const s4 = parseInt(document.getElementById("input-s4").value) || 0;
  const s5 = parseInt(document.getElementById("input-s5").value) || 0;
  const s6 = parseInt(document.getElementById("input-s6").value) || 0;

  document.getElementById("val-s1").innerText = s1;
  document.getElementById("val-s2").innerText = s2;
  document.getElementById("val-s3").innerText = s3;
  document.getElementById("val-s4").innerText = s4;
  document.getElementById("val-s5").innerText = s5;
  document.getElementById("val-s6").innerText = s6;

  if (s1 > 0 && s2 > 0 && s3 > 0 && s4 > 0 && s5 > 0 && s6 > 0) {
    const pos = document.getElementById("input-pos").value;
    let ovr = 0;

    if (pos === "ST" || pos === "CF") {
      ovr = (s1 * 0.2) + (s2 * 0.4) + (s3 * 0.1) + (s4 * 0.2) + (s6 * 0.1);
    } else if (pos === "LW" || pos === "RW") {
      ovr = (s1 * 0.3) + (s2 * 0.2) + (s3 * 0.15) + (s4 * 0.3) + (s6 * 0.05);
    } else if (pos === "CAM" || pos === "CM") {
      ovr = (s1 * 0.1) + (s2 * 0.15) + (s3 * 0.35) + (s4 * 0.25) + (s5 * 0.05) + (s6 * 0.1);
    } else if (pos === "CDM" || pos === "CB") {
      ovr = (s1 * 0.1) + (s3 * 0.15) + (s4 * 0.1) + (s5 * 0.45) + (s6 * 0.2);
    } else if (pos === "LB" || pos === "RB") {
      ovr = (s1 * 0.3) + (s3 * 0.2) + (s4 * 0.15) + (s5 * 0.25) + (s6 * 0.1);
    } else if (pos === "GK") {
      ovr = (s1 * 0.2) + (s2 * 0.2) + (s3 * 0.1) + (s4 * 0.25) + (s5 * 0.05) + (s6 * 0.2);
    } else {
      ovr = (s1 + s2 + s3 + s4 + s5 + s6) / 6;
    }

    document.getElementById("display-ovr").innerText = Math.min(99, Math.max(1, Math.round(ovr)));
  } else {
    document.getElementById("display-ovr").innerText = "--";
  }
}

/* ================= FILTRO DE PAÍSES ================= */
function filterCountries() {
  const query = document.getElementById("input-search-country").value.toLowerCase();
  const dropdown = document.getElementById("country-dropdown");

  if (!query) {
    dropdown.classList.add("hidden");
    return;
  }

  const matches = countriesList.filter(c => c.name.toLowerCase().includes(query));
  if (matches.length === 0) {
    dropdown.classList.add("hidden");
    return;
  }

  dropdown.innerHTML = matches.map(c => `
    <div onclick="selectCountry('${c.name}', '${c.code}')" class="flex items-center space-x-3 px-4 py-2 hover:bg-slate-800 cursor-pointer border-b border-slate-800/50">
      <img src="https://flagcdn.com/w40/${c.code}.png" class="w-6 h-4 object-cover rounded shadow">
      <span class="text-sm font-semibold">${c.name}</span>
    </div>
  `).join('');

  dropdown.classList.remove("hidden");
}

function selectCountry(name, code) {
  document.getElementById("input-search-country").value = name;
  document.getElementById("display-flag").src = `https://flagcdn.com/w40/${code}.png`;
  document.getElementById("country-dropdown").classList.add("hidden");
}

/* ================= FILTRO DE CLUBES ================= */
function filterClubs() {
  const query = document.getElementById("input-search-club").value.toLowerCase();
  const dropdown = document.getElementById("club-dropdown");

  if (!query) {
    dropdown.classList.add("hidden");
    return;
  }

  const matches = clubsList.filter(c => c.name.toLowerCase().includes(query));
  if (matches.length === 0) {
    dropdown.classList.add("hidden");
    return;
  }

  dropdown.innerHTML = matches.map(c => `
    <div onclick="selectClub('${c.name}', '${c.logo}')" class="flex items-center space-x-3 px-4 py-2 hover:bg-slate-800 cursor-pointer border-b border-slate-800/50">
      <img src="${c.logo}" class="w-6 h-6 object-contain">
      <span class="text-sm font-semibold">${c.name}</span>
    </div>
  `).join('');

  dropdown.classList.remove("hidden");
}

function selectClub(name, logo) {
  document.getElementById("input-search-club").value = name;
  document.getElementById("display-club").src = logo;
  document.getElementById("club-dropdown").classList.add("hidden");
}

/* ================= FUNÇÕES DE SELEÇÃO ALEATÓRIA ================= */
function randomizePos() {
  const positions = ["ST", "CF", "LW", "RW", "CAM", "CM", "CDM", "LB", "RB", "CB", "GK"];
  const randomPos = positions[Math.floor(Math.random() * positions.length)];
  document.getElementById("input-pos").value = randomPos;
  updatePosition();
}

function randomizeCountry() {
  const randomC = countriesList[Math.floor(Math.random() * countriesList.length)];
  selectCountry(randomC.name, randomC.code);
}

function randomizeClub() {
  const randomClub = clubsList[Math.floor(Math.random() * clubsList.length)];
  selectClub(randomClub.name, randomClub.logo);
}

function randomizeStats() {
  for (let i = 1; i <= 6; i++) {
    const val = Math.floor(Math.random() * 30) + 70; // Notas aleatórias entre 70 e 99
    document.getElementById(`input-s${i}`).value = val;
  }
  validateAndCalculateOVR();
}

function randomizeAll() {
  randomizePos();
  randomizeCountry();
  randomizeClub();
  randomizeStats();
}

/* ================= UPLOAD E IMAGENS ================= */
function handleFileUpload(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      setCardPhoto(event.target.result);
    };
    reader.readAsDataURL(file);
  }
}

function handleUrlUpload() {
  const url = document.getElementById("input-photo-url").value;
  if (url.trim() !== "") {
    setCardPhoto(url);
  }
}

function setCardPhoto(src) {
  const img = document.getElementById("display-photo");
  const placeholder = document.getElementById("display-placeholder");
  img.src = src;
  img.classList.remove("hidden");
  placeholder.classList.add("hidden");
}

/* ================= NAVEGAÇÃO SHOWCASE ================= */
function goToShowcase() {
  const card = document.getElementById("card-container");
  const wrapper = document.getElementById("showcase-card-wrapper");

  wrapper.appendChild(card);
  document.getElementById("editor-screen").classList.add("hidden");
  document.getElementById("showcase-screen").classList.remove("hidden");
}

function goToEditor() {
  const card = document.getElementById("card-container");
  const col = document.querySelector("#editor-screen .lg\\:col-span-5");

  col.insertBefore(card, col.children[1]);
  document.getElementById("showcase-screen").classList.add("hidden");
  document.getElementById("editor-screen").classList.remove("hidden");
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  updatePosition();
});