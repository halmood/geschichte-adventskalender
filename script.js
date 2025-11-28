// --- TEIL 1: DIE DATEN (Mittelalter - Spoiler-frei & Spannend) ---
const calendarData = [
    {
        day: 1,
        type: "Rätsel",
        title: "Eine feste Ordnung",
        text: "Die Menschen im Mittelalter waren in drei große Gruppen unterteilt. Man wurde in sie hineingeboren und blieb meist sein Leben lang dort. Wie hießen diese drei Stände?",
        answer: "Klerus, Adel und Bauern",
        explanation: "Man nannte sie auch: Die Betenden (Klerus), die Kämpfenden (Adel) und die Arbeitenden (Bauern)."
    },
    {
        day: 2,
        type: "Wissen",
        title: "Die letzte Zuflucht",
        text: "Wenn Feinde in die Burg eindrangen, zogen sich die Bewohner in den stärksten und höchsten Turm zurück. Sein Eingang lag oft meterhoch über dem Boden. Wie heißt dieser Turm?",
        answer: "Der Bergfried",
        explanation: "Da der Eingang so hoch lag, konnte man die Leiter einfach hochziehen. Der Turm war fast uneinnehmbar."
    },
    {
        day: 3,
        type: "Rätsel",
        title: "Eine strenge Regel",
        text: "Mönche lebten nach einem strengen Zeitplan. Ihr lateinisches Motto bestand aus nur zwei Tätigkeiten. Was mussten sie den ganzen Tag tun?",
        answer: "Bete und arbeite (Ora et labora)",
        explanation: "Müßiggang galt als Sünde. Neben dem Gebet mussten Mönche im Garten, in der Küche oder in der Schreibstube hart arbeiten."
    },
    {
        day: 4,
        type: "Person",
        title: "Der Vater Europas?",
        text: "Er war ein riesiger Mann für seine Zeit und herrschte über ein gigantisches Reich. Weihnachten im Jahr 800 wurde er in Rom zum Kaiser gekrönt. Wer war er?",
        answer: "Karl der Große",
        explanation: "Er reiste ständig umher (Reisekönigtum), um sein riesiges Frankenreich zu kontrollieren. Er hatte keine feste Hauptstadt."
    },
    {
        day: 5,
        type: "Leben",
        title: "Ein Tauschgeschäft",
        text: "Der König hatte kein Geld, um seine Ritter zu bezahlen. Stattdessen verlieh er ihnen etwas anderes im Austausch für ihre Treue. Wie nannte man das Verliehene?",
        answer: "Ein Lehen (Land oder Amt)",
        explanation: "Das 'Lehnswesen' war der Kern der Herrschaft. Das Land gehörte dem König, der Vasall durfte es nur nutzen."
    },
    {
        day: 6,
        type: "Special",
        title: "Ein bekannter Bischof",
        text: "Heute stellen wir Stiefel raus. Aber weißt du, in welcher heutigen Region der echte Heilige Nikolaus damals wirkte?",
        answer: "In der heutigen Türkei (Myra)",
        explanation: "Er war Bischof von Myra. Die Geschichten über seine Wohltätigkeit machten ihn weltberühmt."
    },
    {
        day: 7,
        type: "Rätsel",
        title: "Strenge Kollegen",
        text: "Wer in der Stadt als Bäcker oder Schmied arbeiten wollte, musste diesem Zwangs-Verband beitreten. Sie kontrollierten Preise und Qualität. Wie hieß dieser Verband?",
        answer: "Die Zunft",
        explanation: "Zünfte waren sehr mächtig. Sie bestimmten sogar, wie viele Gesellen ein Meister haben durfte und wie das Brot zu schmecken hatte."
    },
    {
        day: 8,
        type: "Ereignis",
        title: "Eine dunkle Bedrohung",
        text: "Mitte des 14. Jahrhunderts starben Millionen Menschen in Europa an einer mysteriösen Krankheit. Man nannte sie den 'Schwarzen Tod'. Welches Tier war Schuld an der Übertragung?",
        answer: "Der Rattenfloh",
        explanation: "Die Flöhe lebten auf Ratten. Als die Ratten starben, sprangen die Flöhe auf die Menschen über und übertrugen das Bakterium (Yersinia pestis)."
    },
    {
        day: 9,
        type: "Ritter",
        title: "Der lange Weg",
        text: "Man wurde nicht als Ritter geboren. Die Ausbildung begann schon mit 7 Jahren. Welche zwei Stufen musste man durchlaufen, bevor man den Ritterschlag erhielt?",
        answer: "Page und Knappe",
        explanation: "Als Page diente man den Damen und lernte Manieren. Als Knappe pflegte man Waffen und Pferde und zog mit in den Kampf."
    },
    {
        day: 10,
        type: "Stadt",
        title: "Ein berühmtes Sprichwort",
        text: "Bauern waren oft unfrei. Wenn sie aber in die Stadt flohen und dort lange genug unentdeckt blieben, waren sie frei. Wie lautet der bekannte Spruch dazu?",
        answer: "Stadtluft macht frei",
        explanation: "Die Frist betrug 'ein Jahr und einen Tag'. Danach konnte der alte Herr den Bauern nicht mehr zurückfordern."
    },
    {
        day: 11,
        type: "Kultur",
        title: "Ein Gesangswettstreit",
        text: "Ritter konnten nicht nur kämpfen. Manche verfassten Gedichte und Lieder, um adlige Damen zu verehren (oft unerreichbare Damen). Wie nannte man diese Kunst?",
        answer: "Minnesang",
        explanation: "'Minne' ist das alte Wort für Liebe. Es ging dabei aber mehr um feste Regeln der Verehrung als um echte Gefühle."
    },
    {
        day: 12,
        type: "Konflikt",
        title: "Bewaffnete Pilger",
        text: "Der Papst rief dazu auf, das 'Heilige Land' und Jerusalem zu erobern. Tausende Ritter machten sich auf den Weg. Wie nennt man diese Kriege?",
        answer: "Kreuzzüge",
        explanation: "Man nähte sich ein Kreuz auf die Kleidung. Es gab insgesamt sieben große Kreuzzüge, die viel Leid verursachten."
    },
    {
        day: 13,
        type: "Architektur",
        title: "Hoch hinaus",
        text: "Kirchen wurden plötzlich riesig, hell und bekamen spitze Bögen und bunte Glasfenster. Wie nennt man diesen Baustil, der nach der Romanik kam?",
        answer: "Gotik",
        explanation: "Die Baumeister wollten so viel Licht wie möglich in die Kirche lassen, weil Licht als Symbol für Gott galt."
    },
    {
        day: 14,
        type: "Alltag",
        title: "Was kam auf den Tisch?",
        text: "Stell dir vor, du bist ein Bauer im Mittelalter. Was isst du fast jeden Tag? (Vorsicht Falle: Es sind KEINE Kartoffeln!)",
        answer: "Getreidebrei / Mus",
        explanation: "Kartoffeln kommen aus Amerika und waren noch unbekannt. Fleisch war für Bauern viel zu teuer. Es gab fast immer Brei aus Hafer oder Gerste."
    },
    {
        day: 15,
        type: "Wirtschaft",
        title: "Mächtige Kaufleute",
        text: "Städte wie Hamburg oder Lübeck schlossen sich zu einem riesigen Handelsnetzwerk zusammen, um Piraten zu bekämpfen und reich zu werden. Wie hieß dieser Bund?",
        answer: "Die Hanse",
        explanation: "Die Hanse war so mächtig, dass sie sogar Kriege gegen Könige führen konnte. Ihre Schiffe nannte man Koggen."
    },
    {
        day: 16,
        type: "Ritter",
        title: "Training für den Ernstfall",
        text: "In Friedenszeiten langweilten sich die Ritter. Sie trafen sich zu großen Festen, um im Lanzenstechen gegeneinander anzutreten. Wie hieß das Event?",
        answer: "Das Turnier",
        explanation: "Der Gewinner bekam oft die Rüstung und das Pferd des Verlierers – oder viel Geld. Es war wie der Profisport heute."
    },
    {
        day: 17,
        type: "Symbolik",
        title: "Wer ist wer?",
        text: "In einer Blechdose (Rüstung) sieht jeder gleich aus. Damit man im Kampf Freund und Feind unterscheidet, malte man bunte Bilder auf die Schilde. Wie heißt die Lehre davon?",
        answer: "Heraldik (Wappenkunde)",
        explanation: "Farben und Symbole (Löwen, Adler, Lilien) verrieten, zu welcher Familie man gehörte."
    },
    {
        day: 18,
        type: "Recht",
        title: "Ein grausames Urteil",
        text: "Manchmal wussten Richter nicht weiter. Dann ließen sie den Angeklagten z.B. ein glühendes Eisen tragen. Wie nannte man diese Art der Wahrheitsfindung?",
        answer: "Gottesurteil (Ordal)",
        explanation: "Man glaubte fest daran, dass Gott dem Unschuldigen helfen würde, die Wunde schnell zu heilen. Wer sich verbrannte, war schuldig."
    },
    {
        day: 19,
        type: "Person",
        title: "Der Schläfer im Berg",
        text: "Dieser Kaiser mit dem roten Bart ertrank auf einem Kreuzzug. Die Sage erzählt aber, er schlafe nur in einem Berg und komme irgendwann wieder. Wer ist gemeint?",
        answer: "Friedrich I. Barbarossa",
        explanation: "Er war einer der berühmtesten Herrscher der Staufer-Dynastie."
    },
    {
        day: 20,
        type: "Wissen",
        title: "Bücher schreiben",
        text: "Drucker gab es noch nicht. Jedes Buch musste in monatelanger Handarbeit abgeschrieben werden. Wie hieß der Schreibsaal im Kloster?",
        answer: "Skriptorium",
        explanation: "Ein einziges Buch konnte so viel wert sein wie ein ganzer Bauernhof. Die Mönche arbeiteten oft im Stehen bei schlechtem Licht."
    },
    {
        day: 21,
        type: "Macht",
        title: "Streit der Giganten",
        text: "Der Papst und der Kaiser stritten sich heftig darum, wer die Bischöfe bestimmen darf. Der Kaiser musste sogar im Büßerhemd im Schnee knien. Wie heißt dieser Streit?",
        answer: "Investiturstreit",
        explanation: "Es ging um die Frage: Wer ist mächtiger? Der Papst (Kirche) oder der Kaiser (Staat)? Das Knien in Canossa war ein cleverer Schachzug des Kaisers."
    },
    {
        day: 22,
        type: "Alltag",
        title: "Das stille Örtchen?",
        text: "Gab es auf einer Burg Toiletten mit Wasserspülung? Nein! Aber es gab kleine Erker an der Burgmauer mit einem Loch. Wohin fiel... naja, 'alles'?",
        answer: "In den Burggraben (Aborterker)",
        explanation: "Das stank im Sommer gewaltig! Manchmal kletterten Feinde sogar durch den Schacht des Plumpsklos in die Burg (kein Witz!)."
    },
    {
        day: 23,
        type: "Person",
        title: "Ein junges Mädchen",
        text: "Sie war kein Ritter, sondern ein einfaches Bauernmädchen. Trotzdem führte sie die französische Armee zum Sieg. Später wurde sie verbrannt. Wer war sie?",
        answer: "Jeanne d'Arc (Johanna von Orleans)",
        explanation: "Sie sagte, sie höre Stimmen von Heiligen, die ihr den Auftrag gaben. Heute ist sie die Nationalheilige Frankreichs."
    },
    {
        day: 24,
        type: "Epochenwandel",
        title: "Eine Revolution",
        text: "Um 1450 erfand Johannes Gutenberg etwas, das die Welt für immer veränderte. Plötzlich konnte Wissen rasend schnell verbreitet werden. Was war es?",
        answer: "Der Buchdruck mit beweglichen Lettern",
        explanation: "Das war das 'Internet des Mittelalters'. Flugblätter und Bücher wurden billig. Das finstere Mittelalter ging damit zu Ende."
    }
];

// --- TEIL 2: DIE LOGIK ---
// ACHTUNG: Das hier unten ist der Teil, der bei dir gefehlt hat!
const grid = document.getElementById('calendar-grid');
const modal = document.getElementById('riddle-modal');
const closeBtn = document.querySelector('.close-btn');
const revealBtn = document.getElementById('reveal-btn');
const modalResult = document.getElementById('modal-result');

const now = new Date();
const currentDay = now.getDate();
const currentMonth = now.getMonth() + 1; 

// Test-Modus: true = Alle Türchen offen (zum Testen)
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
    
    // --- BILD LOGIK ---
    const imgEl = document.getElementById('modal-img');
    if(imgEl) {
        imgEl.src = `images/tag${data.day}.png`;
        imgEl.style.display = 'block';
    }
    // -----------------

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
