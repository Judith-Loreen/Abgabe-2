// Funktion, um das aktuelle Datum in folgendem Format zu formatieren: Wochentag, Monat Tag, Jahr
function currentDay() {
  // Array mit Wochentagen und Monaten
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // Aktuelles Datum
  const now = new Date();
  // Wochentag, Tag und Monat aus aktuellem Datum extrahieren
  const dayOfWeek = daysOfWeek[now.getDay()];
  const dayOfMonth = now.getDate();
  const monthOfYear = monthsOfYear[now.getMonth()];
  const year = now.getFullYear();
  // Datum im gewünschten Format zusammenstellen
  const formattedDate = `${dayOfWeek}, ${monthOfYear} ${addLeadingZero(dayOfMonth)}, ${year}`;
  document.getElementById("current-day").innerText = formattedDate;
}
// Funktion, um die aktuelle Uhrzeit im Format hh:mm:ss anzuzeigen
function currentTime() {
  // Aktuelle Uhrzeit
  const now = new Date();
  // Stunde, Minute und Sekunde aus aktueller Uhrzeit extrahieren
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  // Uhrzeit im gewünschten Format zusammenstellen
  const formattedTime = `${addLeadingZero(hour)}:${addLeadingZero(minute)}:${addLeadingZero(second)}`;
  // Datum im HTML-Dokument einfügen
  document.getElementById("current-time").innerText = formattedTime;
}

// Funktion, um einer Zahl eine führende Null hinzuzufügen
function addLeadingZero(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value.toString();
  }
}
// Startzeitpunkt der Anzeige auf der Webseite
let startTime = new Date();

// Aktuelles Datum und Uhrzeit beim Laden der Seite anzeigen
currentDay();
currentTime();

// Funktion, um die auf der Seite verbrachte Zeit anzuzeigen
function timeOnPage() {
  // Vergangene Zeit seit Startzeitpunkt in Millisekunden
  const timeElapsed = new Date() - startTime;
  // Vergangene Stunden, Minuten und Sekunden aus vergangener Zeit extrahieren
  const secondsElapsed = Math.floor(timeElapsed / 1000) % 60;
  const minutesElapsed = Math.floor(timeElapsed / 1000 / 60) % 60;
  const hoursElapsed = Math.floor(timeElapsed / 1000 / 60 / 60);
  // Vergangene Zeit im gewünschten Format zusammenstellen
  const formattedTime = `${addLeadingZero(hoursElapsed)}:${addLeadingZero(minutesElapsed)}:${addLeadingZero(secondsElapsed)}`;
  // Zeit auf der Seite in einem Alert-Fenster anzeigen
  alert(`Time on page: ${formattedTime}`);
}
// Funktion zum Aktualisieren der Seite
function refresh() {
  location.reload();
}
// Button hinzufügen, um die auf der Seite verbrachte Zeit anzuzeigen und die Seite zu aktualisieren
const timeOnPageButton = document.createElement("button");
timeOnPageButton.onclick = timeOnPage;
timeOnPageButton.textContent = "Your Time on This Page Refresh";
document.body.appendChild(timeOnPageButton);
  