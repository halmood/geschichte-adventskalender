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
