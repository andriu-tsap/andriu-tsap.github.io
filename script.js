const GH = "https://github.com/andriu-tsap/";
const PAGES = "https://andriu-tsap.github.io/";

const PROJECTS = [
  {"repo":"meta-ads-kit","type":"grafika","preview":"exports/01-1080x1080.png","demo":true,"tags":["Meta Ads","SVG"],"pl":["Nawila: kreacje Meta Ads","10 kreacji w czterech formatach i sześć grafik katalogowych."],"en":["Nawila: Meta Ads creatives","Ten ads in four formats and six catalog graphics."]},
  {"repo":"brand-identity-logo","type":"branding","preview":"exports/logo-kolor.png","demo":true,"tags":["Logo","Brand book"],"pl":["Łuk i Ziarno: identyfikacja kawiarni","Trzy wersje logo, favicon i dziewięciostronicowa księga znaku."],"en":["Łuk i Ziarno: café identity","Three logo variants, a favicon and a nine-page brand guide."]},
  {"repo":"youtube-channel-kit","type":"grafika","preview":"source/baner.svg","demo":true,"tags":["YouTube","SVG"],"pl":["Po napisach: oprawa YouTube","Baner, awatar, cztery miniatury i ekran końcowy."],"en":["Po napisach: YouTube channel kit","Banner, avatar, four thumbnails and an end screen."]},
  {"repo":"print-design-pack","type":"druk","preview":"exports/ulotka-a5.png","demo":true,"tags":["CMYK","PDF"],"pl":["Kąt Nośny i Pora Talerza: materiały do druku","Wizytówka, roll-up, ulotka i składane menu. Pliki CMYK z 3 mm spadu."],"en":["Kąt Nośny and Pora Talerza: print materials","Business card, roll-up, leaflet and folded menu. CMYK PDFs with 3 mm bleed."]},
  {"repo":"product-labels","type":"druk","preview":"source/jablko-makieta.svg","demo":true,"tags":["Etykiety","SVG"],"pl":["Tłocznia Półton: etykiety soków","Cztery smaki, edytowalne etykiety, siatki i makiety butelek."],"en":["Tłocznia Półton: juice labels","Four flavors, editable artwork, dieline guides and bottle mockups."]},
  {"repo":"wordpress-theme-firma","type":"wp","preview":"exports/serwis-nurt.jpg","demo":true,"tags":["WordPress","FSE"],"pl":["Serwis Nurt: motyw WordPress","Motyw blokowy FSE, wzorce bloków i statyczne demo czterech stron."],"en":["Serwis Nurt: WordPress block theme","A block theme, reusable patterns and a four-page static demo."]},
  {"repo":"price-monitor-bot","type":"auto","preview":"exports/dry-run.gif","demo":true,"tags":["Python","Playwright"],"pl":["Price Watch: monitor cen","Filtrowanie cen, historia SQLite oraz alerty e-mail i Telegram."],"en":["Price Watch: price monitor","Price filtering, SQLite history, email and Telegram alerts."]},
  {"repo":"excel-budzet-firmy","type":"auto","preview":"exports/Panel.png","demo":true,"tags":["Excel","Google Sheets"],"pl":["Budżet firmy: szablon Excel","Plan i wykonanie, przepływy pieniężne oraz panel wykresów."],"en":["Company budget: Excel template","Plan versus actuals, cash flow and a chart dashboard."]},
  { repo: "salon-booking", type: "www", demo: true, tags: ["HTML", "CSS", "JavaScript"],
    pl: ["Studio Linia: strona salonu z rezerwacją online", "Rezerwacja w 3 krokach: zabieg, specjalistka, dzień i godzina. Wolne terminy zależą od długości zabiegu."],
    en: ["Studio Linia: salon website with online booking", "3-step booking: service, specialist, day and time. Free slots depend on the service length."] },
  { repo: "remonty-firma-www", type: "www", demo: true, tags: ["HTML", "CSS", "JavaScript", "SVG"],
    pl: ["Fundament: strona firmy remontowej z kalkulatorem", "Klient liczy koszt remontu, porównuje zdjęcia przed i po i wysyła zapytanie z wynikiem kalkulatora."],
    en: ["Fundament: renovation company site with a cost calculator", "Visitors estimate the cost, compare before/after and send a quote request with the result attached."] },
  { repo: "sklep-herbaty", type: "shop", demo: true, tags: ["JavaScript", "localStorage", "E-commerce"],
    pl: ["Zielnik: sklep internetowy z herbatą", "Filtry, karta produktu, koszyk zapisywany w przeglądarce, paczkomaty InPost i BLIK."],
    en: ["Zielnik: online tea shop", "Filters, product dialog, persistent cart, InPost lockers and BLIK checkout."] },
  { repo: "saas-landing-fakturka", type: "www", demo: true, tags: ["Landing page", "JavaScript"],
    pl: ["Fakturka: landing aplikacji do faktur", "Na stronie głównej można wystawić przykładową fakturę: walidacja NIP, VAT i kwota słownie."],
    en: ["Fakturka: invoicing app landing page", "Visitors issue a sample invoice in the hero: NIP validation, VAT and amount in Polish words."] },
  { repo: "piekarnia-landing", type: "www", demo: true, tags: ["HTML", "CSS", "JavaScript"],
    pl: ["Piekarnia Zakwas: landing lokalnej piekarni", "Status „otwarte/zamknięte” na żywo, menu w zakładkach i zamówienie pieczywa na jutro."],
    en: ["Piekarnia Zakwas: local bakery landing page", "Live open/closed status, tabbed menu and next-day pre-order form."] },
  { repo: "dashboard-sprzedaz", type: "app", demo: true, tags: ["JavaScript", "SVG", "Dashboard"],
    pl: ["Panel sprzedaży: dashboard sklepu", "Wskaźniki, wykres przychodu bez bibliotek, tabela zamówień z filtrami, eksport CSV i tryb ciemny."],
    en: ["Sales dashboard for an online shop", "KPIs, hand-made SVG chart, filterable orders table, CSV export and dark mode."] },
  { repo: "email-templates", type: "email", demo: true, tags: ["HTML e-mail", "Outlook", "Dark mode"],
    pl: ["Szablony e-mail dla sklepu", "Potwierdzenie zamówienia, newsletter i porzucony koszyk. Działają w Gmailu, Outlooku i Apple Mail."],
    en: ["HTML email templates for a shop", "Order confirmation, newsletter and abandoned cart. Work in Gmail, Outlook and Apple Mail."] },
  { repo: "raport-excel-python", type: "auto", demo: false, tags: ["Python", "pandas", "openpyxl"],
    pl: ["Automatyczny raport sprzedaży w Excelu", "Jedna komenda zamienia eksporty ze sklepu i Allegro w raport z wykresami i czystymi danymi."],
    en: ["Automated Excel sales report", "One command turns shop and marketplace exports into a report with charts and clean data."] },
  { repo: "ai-ui-generator", type: "app", demo: true, tags: ["JavaScript", "UI/UX", "Praca inżynierska"],
    pl: ["Generator komponentów UI (praca inżynierska)", "Z opisu tekstowego tworzy komponenty HTML/CSS. Biblioteka ponad 500 szablonów, działa offline."],
    en: ["AI-assisted UI component generator (BEng thesis)", "Generates HTML/CSS components from a text prompt. 500+ templates, fully offline."], noShot: true },
  { repo: "lumora", type: "www", preview: "screenshots/desktop.png", demo: true, tags: ["Landing page", "GTM", "GA4"],
    pl: ["Lumora", "Landing B2B dla oświetlenia inwestycyjnego z formularzem kwalifikacji zapytań i zdarzeniami analitycznymi."],
    en: ["Lumora", "B2B landing page for commercial lighting with a lead qualification form and analytics events."] },
  { repo: "kawa-vigor", type: "shop", preview: "screenshots/desktop.png", demo: true, tags: ["E-commerce", "PL/DE", "localStorage"],
    pl: ["Kawa Vigor", "Sklep z kawą, subskrypcją co 2 lub 4 tygodnie, koszykiem lokalnym oraz przełącznikami PL/DE i PLN/EUR."],
    en: ["Kawa Vigor", "Coffee shop with two- or four-week subscriptions, a local cart, and PL/DE and PLN/EUR switches."] },
  { repo: "kowal-bud", type: "www", preview: "screenshots/desktop.png", demo: true, tags: ["Strona firmowa", "SVG", "OpenStreetMap"],
    pl: ["Kowal-Bud", "Pięć podstron firmy remontowej, suwak przed i po, formularz wyceny i mapa."],
    en: ["Kowal-Bud", "Five-page renovation company website with a before-and-after slider, quote form and map."] },
  { repo: "estetica-clinic", type: "www", preview: "screenshots/desktop.png", demo: true, tags: ["Strona firmowa", "SVG"],
    pl: ["Estetica Clinic", "Strona kliniki z rozwijanym cennikiem, rezerwacją wizyty i ilustracjami przed i po."],
    en: ["Estetica Clinic", "Clinic website with an expandable price list, appointment booking, and before-and-after illustrations."] },
  { repo: "trattoria-sole", type: "www", preview: "screenshots/desktop.png", demo: true, tags: ["One-page", "JavaScript"],
    pl: ["Trattoria Sole", "Strona restauracji z filtrowanym menu, rezerwacją stolika i odliczaniem do otwarcia."],
    en: ["Trattoria Sole", "Restaurant website with a filterable menu, table booking and opening countdown."] },
  { repo: "zielone-tarasy", type: "www", preview: "screenshots/desktop.png", demo: true, tags: ["JSON", "SVG", "CSV/XML"],
    pl: ["Osiedle Zielone Tarasy", "Wyszukiwarka mieszkań z rzutami SVG i podstroną jawności cen z eksportem CSV i XML."],
    en: ["Osiedle Zielone Tarasy", "Apartment finder with SVG floor plans and a price transparency page with CSV and XML exports."] },
  { repo: "techhurt-b2b", type: "shop", preview: "screenshots/desktop.png", demo: true, tags: ["B2B", "JSON", "SKU"],
    pl: ["TechHurt B2B", "Katalog 200 produktów z wariantami, cenami hurtowymi netto, koszykiem i szybkim zamówieniem po SKU."],
    en: ["TechHurt B2B", "Catalog of 200 products with variants, net wholesale prices, a cart and quick orders by SKU."] },
  { repo: "chatbot-faq-widget", type: "app", preview: "screenshots/desktop.png", demo: true, tags: ["JavaScript", "Shadow DOM", "JSON"],
    pl: ["ChatBot FAQ Widget", "Czat osadzany jednym skryptem, z bazą odpowiedzi JSON i formularzem kontaktowym przy braku odpowiedzi."],
    en: ["ChatBot FAQ Widget", "Embeddable FAQ chat with a JSON knowledge base and a fallback contact form."] },
  { repo: "stream-overlay-pack", type: "grafika", preview: "screenshots/desktop.png", demo: true, tags: ["OBS", "CSS", "1920 × 1080"],
    pl: ["Stream Overlay Pack", "Przezroczyste nakładki OBS: plansze, ramka kamery, pasek z nickiem i alerty follow/sub."],
    en: ["Stream Overlay Pack", "Transparent OBS overlays: stream screens, a camera frame, a nameplate and follow/sub alerts."] },
  { repo: "nova-analytics", type: "www", preview: "screenshots/desktop.png", demo: true, tags: ["SaaS", "Landing page", "Dark mode"],
    pl: ["Nova Analytics", "Landing SaaS z animowanym podglądem panelu, porównaniem planów oraz trybem jasnym i ciemnym."],
    en: ["Nova Analytics", "SaaS landing page with an animated dashboard preview, plan comparison, and light and dark modes."] }
];
const TYPES = { all: ["Wszystkie", "All"], www: ["Strony", "Websites"], shop: ["Sklepy", "Shops"], app: ["Aplikacje", "Web apps"], email: ["E-maile", "Emails"], grafika: ["Grafika", "Graphics"], druk: ["Druk", "Print"], branding: ["Branding", "Branding"], wp: ["WordPress", "WordPress"], auto: ["Automatyzacje", "Automation"] };

const SERVICES = [
  { pl: ["Landing page", "Jedna strona sprzedażowa lub wizytówka firmy, z formularzem kontaktowym."], en: ["Landing page", "One-page site for a product or a business, with a contact form."], p: "od 500 zł" },
  { pl: ["Strona firmowa", "Kilka podstron, projekt w Figmie, wersja mobilna, podstawy SEO."], en: ["Business website", "Several pages, Figma design, mobile version, SEO basics."], p: "od 900 zł" },
  { pl: ["Poprawki istniejącej strony", "Błędy w wyglądzie na telefonie, nowa sekcja, szybsze ładowanie."], en: ["Fixes to an existing site", "Mobile layout bugs, a new section, faster loading."], p: "od 100 zł" },
  { pl: ["Szablon e-mail lub newslettera", "Responsywny, działa w Outlooku, gotowy do Mailchimpa lub Klaviyo."], en: ["Email or newsletter template", "Responsive, Outlook-proof, ready for Mailchimp or Klaviyo."], p: "od 250 zł" },
  { pl: ["Automatyzacja w Pythonie lub Excelu", "Raporty, łączenie plików, porządkowanie danych, proste skrypty."], en: ["Python or Excel automation", "Reports, merging files, data clean-up, small scripts."], p: "od 300 zł" },
  { pl: ["Projekt UI w Figmie", "Makieta strony lub aplikacji, gotowa do przekazania programiście."], en: ["UI design in Figma", "Website or app mockup, ready for a developer."], p: "od 400 zł" },
  { pl: ["Grafika i wideo", "Banery, grafiki do social mediów, krótkie filmy na TikToka lub Reels."], en: ["Graphics and video", "Banners, social media graphics, short videos for TikTok or Reels."], p: "od 60 zł" }
];

const T = {
  pl: {}, en: {
    nav_work: "Work", nav_services: "Services", nav_contact: "Contact", avail: "Available for new projects",
    h1: "I build websites and tools that bring small businesses more enquiries and less Excel work.",
    intro: "I'm a computer science (IoT) engineer based in Sosnowiec, Poland. I design in Figma, code in HTML, CSS and JavaScript, and automate repetitive work with Python.",
    cta: "Tell me about your project", cta2: "See my work", work_h: "Work",
    work_p: "27 portfolio projects. See the source code on GitHub and open the available demos. The brands are fictional, the solutions are real.",
    srv_h: "What I can do for you", srv_p: "Indicative prices. You get an exact quote after a short call, before you pay anything.",
    how_h: "How we'll work", s1h: "Call and quote", s1p: "You tell me what you need. Within a day you get the scope, deadline and a fixed price.",
    s2h: "Figma design", s2p: "For websites I show a mockup first. Changes at this stage are quick and free.",
    s3h: "Code and testing", s3p: "The site works on phones and desktops, loads fast and is readable for Google.",
    s4h: "Launch and support", s4p: "I help with the domain and hosting. Small fixes are free for 30 days.",
    about_h: "About me",
    about_p1: "I graduated in Computer Science (IoT Engineering) from Akademia Humanitas in Sosnowiec, thesis defended with distinction. My thesis is a UI component generator that turns a text prompt into ready HTML/CSS.",
    about_p2: "After graduating I completed a 6-month IT internship at Bayrone Sp. z o.o. I'm at my best where design meets code: I know how something should look and I can build it.",
    sk1: "Design", sk2: "Front-end", sk3: "Back-end & data", sk4: "Other", sk4v: "Video editing, Blender 3D, Git", sk5: "Languages", sk5v: "Ukrainian, English, Polish",
    ct_h: "Have a project? Get in touch.", ct_p: "I reply within a few hours. Polish clients can pay via Useme and get a VAT invoice.", thesis: "BEng thesis"
  }
};
document.querySelectorAll("[data-i18n]").forEach(el => (T.pl[el.dataset.i18n] = el.textContent));

let lang = "pl", filter = "all";
const $ = s => document.querySelector(s);

function renderFilters() {
  const used = new Set(PROJECTS.map(p => p.type));
  $("#filters").innerHTML = Object.entries(TYPES).filter(([k]) => k === "all" || used.has(k))
    .map(([k, v]) => `<button type="button" data-f="${k}" aria-pressed="${k === filter}">${v[lang === "pl" ? 0 : 1]}</button>`).join("");
}
function renderProjects() {
  const L = lang === "pl" ? 0 : 1;
  $("#projects").innerHTML = PROJECTS.filter(p => filter === "all" || p.type === filter).map(p => {
    const [title, desc] = p[lang];
    const demo = PAGES + p.repo + "/";
    const shot = p.noShot ? `<span class="ph">${title}</span>` : `<img src="${p.preview ? demo + p.preview : `img/${p.repo}.jpg`}" alt="" loading="lazy">`;
    return `<li class="project">
      <a class="shot" href="${p.demo ? demo : GH + p.repo}" tabindex="-1" aria-hidden="true">${shot}</a>
      <h3>${title}</h3><p>${desc}</p>
      <ul class="tags">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
      <div class="plinks">${p.demo ? `<a href="${demo}">${["Zobacz demo", "Live demo"][L]}</a>` : ""}<a href="${GH + p.repo}">${["Kod na GitHubie", "Source code"][L]}</a></div>
    </li>`;
  }).join("");
}
function renderServices() {
  $("#services").innerHTML = SERVICES.map(s => `<tr><td>${s[lang][0]}</td><td>${s[lang][1]}</td><td>${lang === "pl" ? s.p : s.p.replace("od", "from")}</td></tr>`).join("");
}
function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => (el.textContent = T[l][el.dataset.i18n] ?? T.pl[el.dataset.i18n]));
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === l));
  document.title = l === "pl" ? "Andrii Tsap — strony internetowe, sklepy i automatyzacje" : "Andrii Tsap — websites, shops and automation";
  try { localStorage.setItem("lang", l); } catch {}
  renderFilters(); renderProjects(); renderServices();
}
$("#filters").addEventListener("click", e => { const b = e.target.closest("[data-f]"); if (!b) return; filter = b.dataset.f; renderFilters(); renderProjects(); });
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
let saved; try { saved = localStorage.getItem("lang"); } catch {}
setLang(saved === "en" ? "en" : "pl");
