const APARTMENT = [43.30764738914805, 17.00801671362797];

const ROUTES = {
  beach: {
    category: "beaches",
    label: { hr: "Public Beach", en: "Public Beach", de: "Public Beach" },
    points: [
      [43.30764738914805, 17.00801671362797],
      [43.30772694078273, 17.00816357724788],
      [43.30740970481162, 17.008631944235535],
      [43.307026424932815, 17.009221859730438],
      [43.30696745858466, 17.00930937466931],
      [43.30685306370608, 17.00915865449681],
      [43.30662663196011, 17.00886531739316],
      [43.30591548929824, 17.008114957829154],
      [43.305810527240546, 17.008012857067143],
      [43.305444927634426, 17.007659556030195],
      [43.304718439325676, 17.007050192759035],
      [43.30425140654046, 17.00671309818659],
      [43.303691198341724, 17.006166940149814],
      [43.303603923337874, 17.006079425210945],
      [43.30365109903119, 17.00584929333466],
      [43.30398132786358, 17.00500655691286],
      [43.30472433618242, 17.003731107730836],
      [43.304942519435876, 17.00342156415076],
      [43.3049484162697, 17.003377806681325],
      [43.30485878433392, 17.003202776803583],
      [43.30472433618242, 17.0030731250423],
      [43.3046898736976, 17.003052509136417]
    ]
  },

  ribola: {
    category: "shops",
    label: { hr: "Ribola", en: "Ribola", de: "Ribola" },
    points: [
      [43.30764738914805, 17.00801671362797],
      [43.30772977392489, 17.008149781588376],
      [43.3075231352073, 17.00845865977244],
      [43.30718671136491, 17.00896980334089],
      [43.307041700512954, 17.00918801082658],
      [43.30686261163032, 17.009453048228185],
      [43.3066914978801, 17.009636382376147],
      [43.30652763426101, 17.00972705306889],
      [43.306363045131334, 17.00988647406261],
      [43.306133924723, 17.010170442708862],
      [43.305898277834594, 17.01052814356889],
      [43.30578081658007, 17.010730408952735],
      [43.30571120980615, 17.010850971082643],
      [43.30573368700228, 17.010971533212555],
      [43.30574093770895, 17.011088109817504],
      [43.305736951604416, 17.011112312332415]
    ]
  },

  konzum: {
    category: "shops",
    label: { hr: "Konzum", en: "Konzum", de: "Konzum" },
    points: [
      [43.30764738914805, 17.00801671362797],
      [43.307738999232534, 17.008146817351644],
      [43.3076716624357, 17.008244717982404],
      [43.30753064527891, 17.00844655421433],
      [43.30746379619555, 17.00854512539009],
      [43.30736571821829, 17.00869331744077],
      [43.30732033880212, 17.008750984935606],
      [43.30727203164345, 17.008834803966785],
      [43.307197375050386, 17.008954832820766],
      [43.30706221222644, 17.009160692363412],
      [43.30700024216819, 17.009265969069094],
      [43.30696266973673, 17.009316931037105],
      [43.306861663222044, 17.00944634762285],
      [43.30675626494234, 17.009569058687436],
      [43.30667867997694, 17.0096367844641],
      [43.30653766051436, 17.009715909630337],
      [43.30645324386254, 17.009795034796383],
      [43.3063654113845, 17.009880865485854],
      [43.30627172326708, 17.009996200472578],
      [43.30613607042376, 17.010182613998293],
      [43.30590916841038, 17.01052057233396],
      [43.30576131567543, 17.010769347220307],
      [43.305652011771265, 17.010964477925448],
      [43.30560467921712, 17.01104025033145],
      [43.30559004027538, 17.011041591435983],
      [43.30556808185619, 17.01101812210669],
      [43.305539291916745, 17.011012757688565],
      [43.30552057240018, 17.01100884143734],
      [43.305506681789446, 17.01099166205841],
      [43.30548862399071, 17.0109773459093],
      [43.30544973025217, 17.01093439746197],
      [43.305423338058304, 17.010892403424585],
      [43.30537098858658, 17.010931748710483],
      [43.30531534085073, 17.010957238640007],
      [43.30529105546412, 17.01095985209921]
    ]
  },

  pekara: {
    category: "shops",
    label: { hr: "Pekara Vita", en: "Pekara Vita", de: "Pekara Vita" },
    points: [
      [43.30764738914805, 17.00801671362797],
      [43.30771716173493, 17.00817978032349],
      [43.30760401232757, 17.008337582766583],
      [43.30747965976269, 17.008528485231484],
      [43.30736370917014, 17.008700913264573],
      [43.307308814608696, 17.0087748109906],
      [43.30718446144094, 17.008967252991454],
      [43.30712508551317, 17.009065783295647],
      [43.30702537863959, 17.009224355506756],
      [43.30699064924073, 17.009275160195752],
      [43.30695311905894, 17.009302102074432],
      [43.306867267866394, 17.009183256623313],
      [43.30679072945096, 17.009086839541133],
      [43.30666794860866, 17.00892249569726],
      [43.306534005585505, 17.008772394988963],
      [43.30639607585567, 17.00863544178737],
      [43.30627169964625, 17.00849520170853],
      [43.30617682275026, 17.008387830399393],
      [43.306049256942565, 17.00825854657765],
      [43.30595039325971, 17.0081588446457],
      [43.305910528825954, 17.008122689000047],
      [43.30586906978199, 17.008134740880227],
      [43.3058172459437, 17.008182948407764],
      [43.305793327234205, 17.00822129530467],
      [43.305808475751306, 17.00827607658596],
      [43.30582920529491, 17.008322092862244],
      [43.305829729955796, 17.008334051620277]
    ]
  },

  monaco: {
    category: "menu",
    label: { hr: "Fast Food Monaco", en: "Fast Food Monaco", de: "Fast Food Monaco" },
    points: [
      [43.30764738914805, 17.00801671362797],
      [43.3077031878188, 17.008203176442724],
      [43.30759484688101, 17.00835408401775],
      [43.30752702197195, 17.00845399630037],
      [43.3074265043445, 17.00860621166184],
      [43.30728304686139, 17.00881810617523],
      [43.30716642641167, 17.008994461417334],
      [43.30709518535679, 17.009109796403926],
      [43.306963437982155, 17.009323032021737],
      [43.30689707623285, 17.00940081608317],
      [43.306780455045335, 17.009552360895174],
      [43.30647743408746, 17.009768949273088],
      [43.306353004754456, 17.00989836585782],
      [43.30626956376653, 17.00999626648858],
      [43.30618856246114, 17.01011093092232],
      [43.30606754826325, 17.01029063892676],
      [43.30602411972318, 17.01036305857144],
      [43.30591384036657, 17.010512591720804],
      [43.305716703321636, 17.010849879505646],
      [43.30561325491511, 17.011030258065073],
      [43.305592760395385, 17.01104232800147],
      [43.305564458432656, 17.01101952922444],
      [43.305528349012754, 17.011020199776706],
      [43.30551468598343, 17.011006788731393],
      [43.305496143295855, 17.0109853310589],
      [43.305448810620334, 17.010922299145943],
      [43.305412701128226, 17.01088139546017],
      [43.30526533515513, 17.010696323034885],
      [43.30518384454231, 17.01058836412247],
      [43.30497060212893, 17.010328860402733],
      [43.30478712521928, 17.01008008551485],
      [43.30473100850212, 17.01000833642244],
      [43.30471441746278, 17.009995595929396],
      [43.30469050683928, 17.010040522931188],
      [43.30466659620638, 17.01008477938071],
      [43.30465586081714, 17.010115624784927],
      [43.30464170961929, 17.010140435218748],
      [43.30467635564952, 17.010147140741402],
      [43.304715881378186, 17.010163233995776]
    ]
  },

  busStation: {
    category: "menu",
    label: { hr: "Autobusni kolodvor", en: "Bus Station", de: "Busbahnhof" },
    points: [
      [43.30764738914805, 17.00801671362797],
      [43.30757085335576, 17.00840946588496],
      [43.30716517384593, 17.00899296505598],
      [43.306834004888486, 17.009480568817963],
      [43.30646735144079, 17.009765004346367],
      [43.306117222111, 17.010190645361842],
      [43.30580102284416, 17.010713676105077],
      [43.30560778915351, 17.011014083520028],
      [43.30559607800099, 17.01108382095564],
      [43.30555704080966, 17.011169651645623],
      [43.305484821939636, 17.011140147345944],
      [43.305451640267876, 17.011132100718758],
      [43.305385276870034, 17.011185744899997],
      [43.305252549856995, 17.01129303326248],
      [43.305102255670185, 17.011394957194902],
      [43.30439176908223, 17.012062827244232],
      [43.30395259053411, 17.012435654303857],
      [43.303802293139334, 17.012564400332185],
      [43.303636038290676, 17.01271936351006],
      [43.30357807157958, 17.012743702291584],
      [43.303409002002475, 17.01261758327513],
      [43.30317069351302, 17.0123808336512],
      [43.30298230032397, 17.01214187141665],
      [43.30284704331958, 17.011900696566112],
      [43.302673141014616, 17.012040091204497],
      [43.30255720585811, 17.01217506061082],
      [43.30207736081, 17.0127857418773],
      [43.30166997260903, 17.01327694202353],
      [43.30112893109798, 17.01395621429861],
      [43.30051864337906, 17.01469965236076],
      [43.300238456461486, 17.015035969576147],
      [43.29985521019606, 17.01552053188385],
      [43.29930932164173, 17.01615333927866],
      [43.29890030458573, 17.016622413289273],
      [43.29843009260313, 17.017363638735016],
      [43.29797920098399, 17.01785705149273],
      [43.297963097650374, 17.017870327172577],
      [43.29795987698312, 17.017963256931502],
      [43.29796148731678, 17.01801414703758],
      [43.29788902226081, 17.01822434530181],
      [43.29782621914249, 17.018299574154277],
      [43.29783910183869, 17.018401354366432]
    ]
  },

  center: {
    category: "menu",
    label: { hr: "Centar grada", en: "City Center", de: "Stadtzentrum" },
    points: [
    [43.30764738914805, 17.00801671362797],
    [43.30772336649118, 17.008142243683107],
    [43.307329184903715, 17.00871039020569],
    [43.30692249047092, 17.00926367096925],
    [43.306726320458246, 17.00905557512172],
    [43.30633512572635, 17.00860154782321],
    [43.30595425336514, 17.008160132393783],
    [43.30581314643148, 17.007972530837595],
    [43.30504292808783, 17.007355051419697],
    [43.30470841638175, 17.007058915008933],
    [43.3038496134896, 17.006311944062784],
    [43.30355530184946, 17.006159455907994],
    [43.30340734136104, 17.00669426943639],
    [43.30315001790563, 17.007401460861022],
    [43.302606418534744, 17.008382688977083],
    [43.302191478466, 17.008877722980547],
    [43.30199848211908, 17.009428006314632],
    [43.3016929033214, 17.010292105847174],
    [43.30124579052019, 17.01085564901715],
    [43.30080510777089, 17.011489911322595],
    [43.30017694594446, 17.012567603464753],
    [43.29841231259401, 17.013889752404268],
    [43.29795468134902, 17.01400599963685],
    [43.29767106361189, 17.014062802261613],
    [43.297219195339665, 17.014231889147368],
    [43.29680289669821, 17.014373235211252],
    [43.29653270203733, 17.014520257182777],
    [43.296031943378914, 17.014732920388205],
    [43.29559361358677, 17.014890183935044],
    [43.29551687303054, 17.01500813159613],
    [43.29549476132726, 17.015304787835326],
    [43.29546744685917, 17.015397716295798],
    [43.29535688816676, 17.01546383846618],
    [43.295026511599445, 17.01569794670314],
    [43.29496407802689, 17.016048215494592]
]
  }
};

const TEXT = {
  hr: {
    infoEyebrow: "Dobrodošli",
    infoTitle: "Upute za korištenje",
    infoText: "Uključite lokaciju. Odaberite plažu, trgovinu ili odredište. Kliknite karticu kako biste otvorili kartu i pratite plavu rutu.",
    privacyTitle: "Privatnost",
    privacyText: "Vaša lokacija koristi se samo na vašem uređaju i ne sprema se.",
    start: "Nastavi",
    menuEyebrow: "APARTMENTS FANI",
    menuTitle: "Odaberite odredište",
    beaches: "Plaže",
    shops: "Trgovine",
    center: "Centar grada",
    busStation: "Autobusni kolodvor",
    beachesEyebrow: "Odredišta",
    shopsEyebrow: "Odredišta",
    back: "Natrag",
    return: "Povratak u apartman",
    routeTo: "Ruta do",
    routeBack: "Povratak u apartman",
    follow: "Pratite plavu rutu.",
    offRoute: "Vratite se na označenu rutu.",
    arrived: "Stigli ste na odredište.",
    gpsError: "Dopustite pristup lokaciji kako bi se prikazao vaš položaj."
  },
  en: {
    infoEyebrow: "Welcome",
    infoTitle: "How to use",
    infoText: "Enable location. Choose a beach, shop or destination. Tap a card to open the map and follow the blue route.",
    privacyTitle: "Privacy",
    privacyText: "Your location is used only on your device and is not stored.",
    start: "Continue",
    menuEyebrow: "APARTMENTS FANI",
    menuTitle: "Choose destination",
    beaches: "Beaches",
    shops: "Shops",
    center: "City Center",
    busStation: "Bus Station",
    beachesEyebrow: "Destinations",
    shopsEyebrow: "Destinations",
    back: "Back",
    return: "Return to apartment",
    routeTo: "Route to",
    routeBack: "Return to apartment",
    follow: "Follow the blue route.",
    offRoute: "Return to the marked route.",
    arrived: "You have arrived.",
    gpsError: "Please allow location access so your position can be shown."
  },
  de: {
    infoEyebrow: "Willkommen",
    infoTitle: "Anleitung",
    infoText: "Aktivieren Sie den Standort. Wählen Sie Strand, Geschäft oder Ziel. Tippen Sie auf eine Karte und folgen Sie der blauen Route.",
    privacyTitle: "Datenschutz",
    privacyText: "Ihr Standort wird nur auf Ihrem Gerät verwendet und nicht gespeichert.",
    start: "Weiter",
    menuEyebrow: "APARTMENTS FANI",
    menuTitle: "Ziel wählen",
    beaches: "Strände",
    shops: "Geschäfte",
    center: "Stadtzentrum",
    busStation: "Busbahnhof",
    beachesEyebrow: "Ziele",
    shopsEyebrow: "Ziele",
    back: "Zurück",
    return: "Zurück zum Apartment",
    routeTo: "Route zu",
    routeBack: "Zurück zum Apartment",
    follow: "Folgen Sie der blauen Route.",
    offRoute: "Gehen Sie zurück zur markierten Route.",
    arrived: "Sie haben Ihr Ziel erreicht.",
    gpsError: "Bitte erlauben Sie den Standortzugriff, damit Ihre Position angezeigt wird."
  }
};

let lang = "hr";
let map = null;
let routeLine = null;
let routeShadow = null;
let userMarker = null;
let startMarker = null;
let endMarker = null;
let watchId = null;
let currentRouteKey = null;
let currentRoutePoints = [];
let currentCategory = "menu";
let isReturnMode = false;

document.addEventListener("DOMContentLoaded", () => {
  applyText();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
});

function setLanguage(selectedLang) {
  lang = selectedLang;
  document.documentElement.lang = selectedLang;
  applyText();
  showScreen("infoScreen");
}

function t(key) {
  return TEXT[lang][key];
}

function label(route) {
  return route.label[lang] || route.label.hr;
}

function applyText() {
  document.getElementById("infoEyebrow").textContent = t("infoEyebrow");
  document.getElementById("infoTitle").textContent = t("infoTitle");
  document.getElementById("infoText").textContent = t("infoText");
  document.getElementById("privacyTitle").textContent = t("privacyTitle");
  document.getElementById("privacyText").textContent = t("privacyText");
  document.getElementById("startButton").textContent = t("start");

  document.getElementById("menuEyebrow").textContent = t("menuEyebrow");
  document.getElementById("menuTitle").textContent = t("menuTitle");
  document.getElementById("beachesText").textContent = t("beaches");
  document.getElementById("shopsText").textContent = t("shops");
  document.getElementById("centerText").textContent = t("center");
  document.getElementById("busStationText").textContent = t("busStation");

  document.getElementById("beachesEyebrow").textContent = t("beachesEyebrow");
  document.getElementById("shopsEyebrow").textContent = t("shopsEyebrow");
  document.getElementById("beachesTitle").textContent = t("beaches");
  document.getElementById("shopsTitle").textContent = t("shops");

  document.getElementById("beachesBack").textContent = t("back");
  document.getElementById("shopsBack").textContent = t("back");
  document.getElementById("mapBack").textContent = t("back");
  document.getElementById("returnButton").textContent = t("return");
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function showMenu() {
  stopGps();
  currentCategory = "menu";
  showScreen("menuScreen");
}

function showBeaches() {
  stopGps();
  currentCategory = "beaches";
  showScreen("beachesScreen");
}

function showShops() {
  stopGps();
  currentCategory = "shops";
  showScreen("shopsScreen");
}

function backFromMap() {
  stopGps();

  if (currentCategory === "beaches") {
    showScreen("beachesScreen");
    return;
  }

  if (currentCategory === "shops") {
    showScreen("shopsScreen");
    return;
  }

  showMenu();
}

function startRoute(routeKey) {
  currentRouteKey = routeKey;
  currentCategory = ROUTES[routeKey].category;
  currentRoutePoints = [...ROUTES[routeKey].points];
  isReturnMode = false;

  showScreen("mapScreen");

  setTimeout(() => {
    initMap();
    drawRoute(currentRoutePoints);
    startGps();
  }, 150);
}

function returnToApartment() {
  if (!currentRouteKey) return;

  isReturnMode = !isReturnMode;
  currentRoutePoints = [...currentRoutePoints].reverse();
  drawRoute(currentRoutePoints);
}

function initMap() {
  if (map) {
    map.invalidateSize();
    return;
  }

  map = L.map("map", {
    zoomControl: true
  }).setView(APARTMENT, 16);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);
}

function drawRoute(points) {
  clearRouteVisuals();

  const route = ROUTES[currentRouteKey];

  document.getElementById("routeTitle").textContent = isReturnMode
    ? t("routeBack")
    : `${t("routeTo")} ${label(route)}`;

  setStatus(t("follow"), "success");

  routeShadow = L.polyline(points, {
    color: "#ffffff",
    weight: 13,
    opacity: 0.95,
    lineCap: "round",
    lineJoin: "round"
  }).addTo(map);

  routeLine = L.polyline(points, {
    color: "#2563eb",
    weight: 7,
    opacity: 0.98,
    lineCap: "round",
    lineJoin: "round"
  }).addTo(map);

  startMarker = L.circleMarker(points[0], {
    radius: 8,
    color: "#111827",
    weight: 3,
    fillColor: "#ffffff",
    fillOpacity: 1
  }).addTo(map);

  endMarker = L.circleMarker(points[points.length - 1], {
    radius: 10,
    color: "#ffffff",
    weight: 3,
    fillColor: "#16a34a",
    fillOpacity: 1
  }).addTo(map);

  map.fitBounds(routeLine.getBounds(), {
    paddingTopLeft: [45, 95],
    paddingBottomRight: [45, 145]
  });
}

function startGps() {
  stopGps();

  if (!navigator.geolocation) {
    showGpsError();
    return;
  }

  watchId = navigator.geolocation.watchPosition(
    position => {
      const userPosition = [
        position.coords.latitude,
        position.coords.longitude
      ];

      updateUserMarker(userPosition);
      checkUserDistanceFromRoute(userPosition);
    },
    showGpsError,
    {
      enableHighAccuracy: true,
      timeout: 12000,
      maximumAge: 3000
    }
  );
}

function updateUserMarker(position) {
  if (!userMarker) {
    userMarker = L.circleMarker(position, {
      radius: 10,
      color: "#ffffff",
      weight: 4,
      fillColor: "#2563eb",
      fillOpacity: 1
    }).addTo(map);
  } else {
    userMarker.setLatLng(position);
  }
}

function checkUserDistanceFromRoute(userPosition) {
  const distanceFromRoute = distanceFromPolylineMeters(userPosition, currentRoutePoints);
  const distanceToEnd = haversineMeters(userPosition, currentRoutePoints[currentRoutePoints.length - 1]);

  if (distanceToEnd <= 25) {
    setStatus(t("arrived"), "success");
    return;
  }

  if (distanceFromRoute > 45) {
    setStatus(t("offRoute"), "warning");
  } else {
    setStatus(t("follow"), "success");
  }
}

function showGpsError() {
  setStatus(t("gpsError"), "warning");
}

function setStatus(message, type) {
  const status = document.getElementById("routeStatus");
  status.textContent = message;
  status.className = type === "warning" ? "status-warning" : "status-success";
}

function stopGps() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
}

function clearRouteVisuals() {
  if (routeLine) routeLine.remove();
  if (routeShadow) routeShadow.remove();
  if (startMarker) startMarker.remove();
  if (endMarker) endMarker.remove();

  routeLine = null;
  routeShadow = null;
  startMarker = null;
  endMarker = null;
}

function distanceFromPolylineMeters(point, polyline) {
  let minDistance = Infinity;

  for (let i = 0; i < polyline.length - 1; i++) {
    const distance = distanceToSegmentMeters(point, polyline[i], polyline[i + 1]);
    minDistance = Math.min(minDistance, distance);
  }

  return minDistance;
}

function distanceToSegmentMeters(point, start, end) {
  const p = project(point);
  const a = project(start);
  const b = project(end);

  const dx = b.x - a.x;
  const dy = b.y - a.y;

  if (dx === 0 && dy === 0) {
    return haversineMeters(point, start);
  }

  const tValue = ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy);
  const tClamped = Math.max(0, Math.min(1, tValue));

  const closest = {
    x: a.x + tClamped * dx,
    y: a.y + tClamped * dy
  };

  return Math.sqrt((p.x - closest.x) ** 2 + (p.y - closest.y) ** 2);
}

function project(point) {
  const earthRadius = 6378137;
  const lat = point[0];
  const lng = point[1];

  return {
    x: earthRadius * toRadians(lng),
    y: earthRadius * Math.log(Math.tan(Math.PI / 4 + toRadians(lat) / 2))
  };
}

function haversineMeters(a, b) {
  const radius = 6371000;
  const dLat = toRadians(b[0] - a[0]);
  const dLng = toRadians(b[1] - a[1]);
  const lat1 = toRadians(a[0]);
  const lat2 = toRadians(b[0]);

  const value =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return 2 * radius * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function toRadians(value) {
  return value * Math.PI / 180;
}