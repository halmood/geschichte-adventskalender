// --- TEIL 1: DIE DATEN (Mittelalter - 7. Klasse) ---
const calendarData = [
    {
        day: 1,
        type: "Rätsel",
        title: "Die Ständeordnung",
        text: "Die mittelalterliche Gesellschaft war in drei Stände geteilt. Wie hießen diese?",
        answer: "Klerus, Adel und Bauern",
        explanation: "Der 1. Stand waren die Betenden (Klerus), der 2. Stand die Kämpfenden (Adel) und der 3. Stand die Arbeitenden (Bauern)."
    },
    {
        day: 2,
        type: "Wissen",
        title: "Der Schutz der Burg",
        text: "Wie nennt man den stärksten Turm einer Burg, der als letzte Zuflucht diente?",
        answer: "Der Bergfried",
        explanation: "Der Bergfried war meist der höchste Turm. Er hatte oft keinen Eingang im Erdgeschoss, sondern nur eine Leiter im ersten Stock."
    },
    {
        day: 3,
        type: "Rätsel",
        title: "Ora et labora",
        text: "In den Klöstern lebten Mönche nach der Regel des Heiligen Benedikt. Wie lautet ihr Leitspruch auf Deutsch?",
        answer: "Bete und arbeite",
        explanation: "Das Leben im Kloster bestand aus einem strengen Wechsel zwischen Gottesdienst, Gebet und harter körperlicher Arbeit (Garten, Handwerk, Schreibstube)."
    },
    {
        day: 4,
        type: "Person",
        title: "Der Kaiser",
        text: "Welcher Herrscher wurde im Jahr 800 n. Chr. in Rom zum Kaiser gekrönt?",
        answer: "Karl der Große",
        explanation: "Er gilt als 'Vater Europas' und herrschte über das riesige Frankenreich."
    },
    {
        day: 5,
        type: "Leben",
        title: "Lehnswesen",
        text: "Der König verlieh Land an seine Untertanen im Austausch für Treue und militärische Dienste. Wie nannte man das verliehene Land?",
        answer: "Lehen",
        explanation: "Der Empfänger war der Vasall, der Geber der Lehensherr. Das Lehen konnte Land oder ein Amt sein."
    },
    {
        day: 6,
        type: "Special",
        title: "Nikolaustag",
        text: "Heute ist Nikolaus! Der historische Nikolaus war Bischof in welcher Stadt?",
        answer: "Myra",
        explanation: "Myra liegt in der heutigen Türkei. Er war bekannt für seine Barmherzigkeit und Geschenke an Arme."
    },
    {
        day: 7,
        type: "Rätsel",
        title: "Handwerk",
        text: "Wie nannte man den Zusammenschluss von Handwerkern des gleichen Berufs in einer Stadt?",
        answer: "Zunft",
        explanation: "Zünfte regelten Preise, Qualität und Ausbildung. Wer keiner Zunft angehörte, durfte sein Handwerk in der Stadt oft nicht ausüben."
    },
    {
        day: 8,
        type: "Ereignis",
        title: "Der Schwarze Tod",
        text: "Welche Krankheit entvölkerte zwischen 1347 und 1351 große Teile Europas?",
        answer: "Die Pest",
        explanation: "Man schätzt, dass etwa ein Drittel der europäischen Bevölkerung starb. Übertragen wurde sie durch Rattenflöhe."
    },
    {
        day: 9,
        type: "Ritter",
        title: "Die Ausbildung",
        text: "Bevor man Ritter wurde, musste man ab dem 7. Lebensjahr als ... und ab dem 14. Lebensjahr als ... dienen. Fülle die Lücken.",
        answer: "Page und Knappe",
        explanation: "Erst mit ca. 21 Jahren erfolgte der 'Ritterschlag' (Schwertleite)."
    },
    {
        day: 10,
        type: "Stadt",
        title: "Rechtsregel",
        text: "Vervollständige das Sprichwort: 'Stadtluft macht ...'",
        answer: "... frei!",
        explanation: "Wenn ein Leibeigener (Bauer) in die Stadt floh und dort ein Jahr und einen Tag lebte, ohne gefasst zu werden, war er ein freier Mann."
    },
    {
        day: 11,
        type: "Kultur",
        title: "Literatur",
        text: "Wie hieß der gesungene Liebeslyrik-Vortrag der Ritter an adlige Damen?",
        answer: "Minnesang",
        explanation: "Ein berühmter Minnesänger war Walther von der Vogelweide."
    },
    {
        day: 12,
        type: "Konflikt",
        title: "Die Reise nach Jerusalem",
        text: "Wie nannte man die bewaffneten Pilgerfahrten der Christen zur Rückeroberung des Heiligen Landes?",
        answer: "Kreuzzüge",
        explanation: "Der erste Kreuzzug begann 1096. Ziel war die Eroberung Jerusalems von muslimischen Herrschern."
    },
    {
        day: 13,
        type: "Architektur",
        title: "Baustile",
        text: "Wie heißt der Baustil mit den spitzen Bögen und riesigen Glasfenstern, der auf die Romanik folgte?",
        answer: "Gotik",
        explanation: "Typisch für die Gotik (ca. 1150–1500) sind Spitzbögen, Strebewerke und Fensterrosetten (z.B. Kölner Dom)."
    },
    {
        day: 14,
        type: "Alltag",
        title: "Essen",
        text: "Was war das Hauptnahrungsmittel der einfachen Bauern?",
        answer: "Getreidebrei (Mus)",
        explanation: "Fleisch gab es selten. Kartoffeln kannte man noch nicht – die kamen erst nach der Entdeckung Amerikas!"
    },
    {
        day: 15,
        type: "Wirtschaft",
        title: "Mächtiger Bund",
        text: "Wie hieß der mächtige Handelsbund norddeutscher Städte (z.B. Lübeck, Hamburg)?",
        answer: "Die Hanse",
        explanation: "Die Hanse kontrollierte den Seehandel auf Nord- und Ostsee mit ihren Schiffen, den Koggen."
    },
    {
        day: 16,
        type: "Ritter",
        title: "Kampfspiel",
        text: "Wie hieß die sportliche Veranstaltung, bei der Ritter im Tjost (Lanzenstechen) gegeneinander antraten?",
        answer: "Turnier",
        explanation: "Turniere dienten der Übung für den Krieg und dem Ruhm."
    },
    {
        day: 17,
        type: "Symbolik",
        title: "Erkennungszeichen",
        text: "Da Ritter im Vollhelm nicht zu erkennen waren, brauchten sie bunte Zeichen auf dem Schild. Wie heißt die Lehre davon?",
        answer: "Heraldik (Wappenkunde)",
        explanation: "Farben und Symbole (Löwen, Adler, Lilien) verrieten, zu welcher Familie man gehörte."
    },
    {
        day: 18,
        type: "Recht",
        title: "Gottesurteil",
        text: "Wenn ein Richter nicht entscheiden konnte, musste manchmal Gott entscheiden. Nenne ein Beispiel für eine 'Gottesprobe'.",
        answer: "Wasserprobe oder Feuerprobe",
        explanation: "Bei der Feuerprobe musste man z.B. glühendes Eisen tragen. Verheilte die Wunde gut, galt man als unschuldig."
    },
    {
        day: 19,
        type: "Person",
        title: "Rotbart",
        text: "Welcher Kaiser ertrank auf einem Kreuzzug und schläft der Sage nach im Kyffhäuser-Berg?",
        answer: "Friedrich I. Barbarossa",
        explanation: "'Barbarossa' bedeutet Rotbart. Er war ein Staufer-Kaiser."
    },
    {
        day: 20,
        type: "Wissen",
        title: "Schreibstube",
        text: "Wie nennt man den Raum im Kloster, in dem Mönche Bücher von Hand kopierten?",
        answer: "Skriptorium",
        explanation: "Bücher waren extrem teuer und wertvoll, da die Herstellung (Pergament, Tinte, Blattgold) Monate dauerte."
    },
    {
        day: 21,
        type: "Macht",
        title: "Gang nach Canossa",
        text: "Kaiser Heinrich IV. musste im Büßerhemd vor dem Papst im Schnee knien. Worum stritten sie?",
        answer: "Investiturstreit",
        explanation: "Es ging um die Frage: Wer darf Bischöfe einsetzen (investieren)? Der Kaiser oder der Papst?"
    },
    {
        day: 22,
        type: "Alltag",
        title: "Hygiene",
        text: "Gab es im Mittelalter schon Toiletten in Burgen? Wie hießen sie?",
        answer: "Aborterker",
        explanation: "Das war ein kleiner Vorbau an der Burgmauer mit einem Loch nach unten – direkt in den Burggraben."
    },
    {
        day: 23,
        type: "Person",
        title: "Heldin Frankreichs",
        text: "Welches junge Bauernmädchen führte die französischen Truppen im Hundertjährigen Krieg an?",
        answer: "Jeanne d'Arc (Johanna von Orleans)",
        explanation: "Sie wurde später als Hexe verbrannt und ist heute eine Nationalheldin."
    },
    {
        day: 24,
        type: "Epochenwandel",
        title: "Das Ende",
        text: "Welches Ereignis markiert (neben der Entdeckung Amerikas 1492) das Ende des Mittelalters durch eine Medienrevolution?",
        answer: "Der Buchdruck (Gutenberg)",
        explanation: "Durch bewegliche Lettern konnten Wissen und Nachrichten viel schneller verbreitet werden. Das Mittelalter endete um 1500."
    }
];

// --- TEIL 2: DIE LOGIK ---
const grid = document.getElementById('calendar-grid');
const modal = document.getElementById('riddle-modal');
const closeBtn = document.querySelector('.close-btn');
const revealBtn = document.getElementById('reveal-btn');
const modalResult = document.getElementById('modal-result');

const now = new Date();
const currentDay = now.getDate();
const currentMonth = now.getMonth() + 1; 

// Test-Modus: Setze auf true, um alle Türchen sofort zu öffnen
const testMode = false; 

calendarData.forEach(item => {
    const door = document.createElement('div');
    door.classList.add('advent-door');
    door.textContent = item.day;
    
    let isLocked = true;
    if (currentMonth === 12 && item.day <= currentDay) isLocked = false;
    if (testMode) isLocked = false;

    if (isLocked) {
        door.classList.add('locked');
        door.onclick = () => {
            door.style.transform = "translateX(5px)";
            setTimeout(() => door.style.transform = "translateX(0)", 100);
            setTimeout(() => door.style.transform = "translateX(-5px)", 200);
            setTimeout(() => door.style.transform = "translateX(0)", 300);
        };
    } else {
        door.classList.add('active');
        door.onclick = () => openDoor(item);
    }
    grid.appendChild(door);
});

function openDoor(data) {
    document.getElementById('modal-title').innerText = `Tag ${data.day}: ${data.title}`;
    document.getElementById('modal-text').innerHTML = data.text;
    document.getElementById('modal-answer').innerText = data.answer;
    document.getElementById('modal-explanation').innerHTML = data.explanation;
    
    // --- BILD LOGIK: Aktiv, da User "Ja" gewählt hat ---
    const imgEl = document.getElementById('modal-img');
    if(imgEl) {
        // Pfadannahme: images/tag1.png, images/tag2.png ...
        imgEl.src = `images/tag${data.day}.png`;
        imgEl.style.display = 'block';
    }
    // ------------------------------------------------------------------

    modalResult.style.display = 'none';
    revealBtn.style.display = 'inline-block';
    modal.style.display = 'flex';
}

revealBtn.onclick = () => {
    modalResult.style.display = 'block';
    revealBtn.style.display = 'none';
};
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; };
