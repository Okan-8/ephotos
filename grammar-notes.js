const GRAMMAR_NOTES = [
    {
        title: "Kennen Fiili (To Know Someone/Place)",
        content: "Almancada bir kişiyi tanımamak veya bir yeri bilmemek/tanımamak için <strong>kennen</strong> fiili kullanılır."
    },
    {
        title: "Halb (Half Past)",
        content: `Almancada <strong>"halb"</strong> derken daima bir sonraki saati söyleriz. Türkçede <strong>"Saat on buçuk"</strong> (10'u yarım geçiyor) deriz. Almancada <strong>"Es ist halb elf"</strong> (11'e yarım var) denir.<br><br>
        Televizyonda, radyoda veya resmi bir toplantıda saati söylerken önce saati, sonra <strong>"Uhr"</strong> kelimesini, en son dakikayı söyleriz. Bu yöntemde <strong>"halb"</strong> veya <strong>"nach"</strong> gibi kelimeler kullanılmaz:<br><br>
        <strong>23:12</strong> - Es ist dreiundzwanzig Uhr zwölf.<br>
        <strong>11:30</strong> - Es ist elf Uhr dreißig.`
    },
    {
        title: "V2 Kuralı (Verb in Position 2)",
        content: `Almancanın en temel ve en katı kuralı: <strong>"V2 Kuralı"</strong>. Almancada fiil (çekimlenmiş olan), düz cümlelerde her zaman ikinci sırada olmak zorundadır. Birinci sıraya neyi koyarsan koy, fiilin yeri değişmez.`
    },
    {
        title: "Ayrılabilir Fiiller (Trennbare Verben)",
        content: `Almancada <strong>aufstehen</strong> gibi fiiller <strong>"ayrılabilir fiiller"</strong> olarak adlandırılır. Cümle kurarken fiilin başındaki ek (burada <strong>auf</strong>) cümlenin en sonuna gider. Bu yüzden <strong>auf</strong> tek başına bir anlam ifade etmekten ziyade, fiili tamamlayan ve cümlenin sonuna yerleşen bir parçadır.<br><br>
        <strong>Aufwachen</strong> (Wake up): Tıpkı aufstehen gibi bu da ayrılabilir bir fiildir. "Uyanmak" anlamına gelir.<br>
        <em>Ich wache um 06:00 auf.</em> (Saat 6'da uyanıyorum.)`
    },
    {
        title: "Harf Telaffuzları",
        content: `<strong>W w:</strong> Almancada "V" sesiyle okunur (Örn: Wagen → vaagın)<br><br>
        <strong>V v:</strong> Almancada kelime başındaki "V" harfi her zaman "F" sesiyle okunur (Örn: Vater → faatır)<br><br>
        <strong>J j:</strong> Kelimelerde "Y" sesiyle okunur (Örn: Ja → ya)<br><br>
        <strong>Z z:</strong> Sert bir "Ts" sesiyle okunur (Örn: Zebra → tse-bra)<br><br>
        <strong>S ve P Yan Yana:</strong> Almancada bir kelime "sp" veya "st" ile başlıyorsa, o "s" harfi "ş" olarak okunur.<br><br>
        <strong>ß (Eszett) Harfi:</strong> İki tane "s" demektir ve sert bir "s" sesi verir. Önündeki "a" harfini biraz uzatmanı sağlar.`
    },
    {
        title: "Yıl Söyleme",
        content: `<strong>2000 Yılından Öncesi (Yüzlük Gruplar Halinde):</strong><br>
        İngilizcedeki gibi yıl ikiye bölünür ama "yüz" ifadesi araya eklenir.<br>
        <strong>1989:</strong> neunzehnhundertneunundachtzig (19-yüz-9-ve-80)<br>
        Telaffuz: noyn-tseyn-hun-dert-noyn-unt-aht-tsih<br><br>
        <strong>2000 Yılı ve Sonrası (Normal Sayı Gibi):</strong><br>
        2000'den itibaren yıllar normal bir sayıymış gibi binlik olarak okunur.<br>
        <strong>2004:</strong> zweitausendvier (2-bin-4)<br>
        <strong>2015:</strong> zweitausendfünfzehn (2-bin-15)`
    },
    {
        title: "Düzenli Fiil Kuralı",
        content: `Almancada düzenli fiillerin köküne (örn: komm-) şu ekler gelir: <strong>-e, -st, -t, -en, -t, -en</strong>. Bunu <strong>"ESTEN-TEN"</strong> şeklinde kodlayabilirsin.<br><br>
        <strong>Sein Fiili:</strong> Bu fiil "asi" bir fiildir, kural tanımaz. Bu yüzden ezberlenmesi gerekir.<br><br>
        <strong>Büyük "Sie":</strong> Eğer birine resmi olarak (siz diye) hitap ediyorsan "Sie" her zaman büyük yazılır ve çekimi "onlar" (sie) ile aynıdır.`
    },
    {
        title: "İyelik Zamirleri",
        content: `Almancada iyelik zamirleri, kendisinden sonra gelen ismin artikeline göre ek alabilir. Eğer kelime "dişi" (die) veya "çoğul" ise sonuna bir <strong>"-e"</strong> eklenir.<br><br>
        Resmi olan <strong>"Ihr"</strong> (Sizin) kelimesi her zaman büyük harfle başlar.<br><br>
        <strong>Örnek:</strong><br>
        Mein Name (Erkek ismi - der Name) → mayn naa-me<br>
        Meine Mutter (Annem - die Mutter) → may-ne mut-ter<br><br>
        "Name" kelimesinin artikeli "der Name" (eril) olduğu için her zaman "Mein Name" denir. İyelik zamirinin sonuna gelen "-e" eki, konuşan kişinin kadın olmasına değil, ait olan nesnenin (burada "isim") die artikeline sahip olmasına bağlıdır.`
    },
    {
        title: "Zum/Zur (To the)",
        content: `<strong>"Zum/Zur"</strong>, Almancada kısaltmalardır. <strong>"Zu"</strong> (edat) ve <strong>"dem"</strong> (artikelin bir hali) kelimelerinin birleşimidir. İngilizcedeki <strong>"to the"</strong> ifadesine karşılık gelir.<br><br>
        <strong>Kural:</strong><br>
        zu + der/das artikelli bir isim = <strong>zum</strong><br>
        zu + die artikelli bir isim = <strong>zur</strong><br><br>
        Havalimanı "der Flughafen" olduğu için, yönelme durumunda zu dem birleşerek <strong>"zum Flughafen"</strong> olur.`
    },
    {
        title: "Geçmiş Zaman (Perfekt)",
        content: `Almancada fiillerin geçmiş halini yaparken çoğu fiilin başına <strong>"ge-"</strong> ön eki getirilir:<br><br>
        Düzenli fiillerin sonuna genellikle <strong>"-t"</strong> gelir (Örn: machen → gemacht)<br>
        Düzensiz fiillerin sonuna genellikle <strong>"-en"</strong> gelir (Örn: fahren → gefahren)`
    },
    {
        title: "Dativ Hali (Dem, Der, Im)",
        content: `<strong>Dem</strong>, "das" veya "der" artikellerinin Dativ (-e/-de hali) halindeki değişmiş formudur. Yani bir kelime değil, artikelin bir çekimidir.<br><br>
        <strong>Mit das Auto</strong> yanlıştır.<br>
        <strong>Mit dem Auto</strong> doğrudur.<br><br>
        Çünkü Almancada <strong>"mit"</strong> (ile) kelimesinden sonra gelen her isim "Dativ" formatına girmek zorundadır. Bu kural gereği:<br><br>
        der → dem<br>
        das → dem<br>
        die → der<br>
        in + dem (in the) → <strong>im</strong>`
    }
];

const REFERENCE_TABLES = [
    {
        title: "Alphabet (der Buchstabe)",
        subtitle: "the letter (alphabet) - der buuh-şta-be",
        data: [
            ["A a", "A a", "aa"],
            ["B b", "B b", "be"],
            ["C c", "C c", "tse"],
            ["D d", "D d", "de"],
            ["E e", "E e", "ee"],
            ["F f", "F f", "ef"],
            ["G g", "G g", "ge"],
            ["H h", "H h", "ha"],
            ["I i", "I i", "ii"],
            ["J j", "J j", "yot"],
            ["K k", "K k", "ka"],
            ["L l", "L l", "el"],
            ["M m", "M m", "em"],
            ["N n", "N n", "en"],
            ["O o", "O o", "oo"],
            ["P p", "P p", "pe"],
            ["Q q", "Q q", "ku"],
            ["R r", "R r", "er"],
            ["S s", "S s", "es"],
            ["T t", "T t", "te"],
            ["U u", "U u", "uu"],
            ["V v", "V v", "fau"],
            ["W w", "W w", "ve"],
            ["X x", "X x", "iks"],
            ["Y y", "Y y", "üpsilon"],
            ["Z z", "Z z", "tset"],
            ["Ä ä", "A-Umlaut", "e"],
            ["Ö ö", "O-Umlaut", "ö"],
            ["Ü ü", "U-Umlaut", "ü"],
            ["ß", "Eszett", "es-tset"]
        ]
    },
    {
        title: "Numbers (Die Zahl)",
        subtitle: "The number - dii tsaal",
        data: [
            ["null", "zero", "nul"],
            ["eins", "one", "aynts"],
            ["zwei", "two", "tsvay"],
            ["drei", "three", "dray"],
            ["vier", "four", "fiir"],
            ["fünf", "five", "fünf"],
            ["sechs", "six", "zeks"],
            ["sieben", "seven", "ziibın"],
            ["acht", "eight", "aht"],
            ["neun", "nine", "noyn"],
            ["zehn", "ten", "tseyn"],
            ["elf", "eleven", "elf"],
            ["zwölf", "twelve", "tsvölf"],
            ["dreizehn", "thirteen", "dray-tseyn"],
            ["vierzehn", "fourteen", "fiir-tseyn"],
            ["fünfzehn", "fifteen", "fünf-tseyn"],
            ["sechzehn", "sixteen", "zeh-tseyn"],
            ["siebzehn", "seventeen", "ziib-tseyn"],
            ["achtzehn", "eighteen", "aht-tseyn"],
            ["neunzehn", "nineteen", "noyn-tseyn"],
            ["zwanzig", "twenty", "tsvan-tsih"],
            ["einundzwanzig", "twenty-one", "ayn-und-tsvantsig"],
            ["zweiundzwanzig", "twenty-two", "tsvay-und-tsvantsig"],
            ["dreiundzwanzig", "twenty-three", "dray-und-tsvantsig"],
            ["vierundzwanzig", "twenty-four", "fiir-und-tsvantsig"],
            ["fünfundzwanzig", "twenty-five", "fünf-und-tsvantsig"],
            ["sechsundzwanzig", "twenty-six", "zeks-und-tsvantsig"],
            ["siebenundzwanzig", "twenty-seven", "ziibın-und-tsvantsig"],
            ["achtundzwanzig", "twenty-eight", "aht-und-tsvantsig"],
            ["neunundzwanzig", "twenty-nine", "noyn-und-tsvantsig"],
            ["dreißig", "thirty", "dray-sih"],
            ["vierzig", "forty", "fiir-tsih"],
            ["fünfzig", "fifty", "fünf-tsih"],
            ["sechzig", "sixty", "zeh-tsih"],
            ["siebzig", "seventy", "ziib-tsih"],
            ["achtzig", "eighty", "aht-tsih"],
            ["neunzig", "ninety", "noyn-tsih"],
            ["hundert", "hundred", "hun-dert"],
            ["zweihundert", "two hundred", "tsvay-hun-dert"],
            ["dreihundert", "three hundred", "dray-hun-dert"],
            ["fünfhundert", "five hundred", "fünf-hun-dert"],
            ["einhunderttausend", "one hundred thousand", "ayn-hun-dert-tau-zınt"],
            ["eine Million", "one million", "ay-ne mil-yoon"],
            ["neunzehnhundertneunundachtzig", "nineteen eighty-nine", "noyn-tseyn-hun-dert-noyn-unt-aht-tsih"],
            ["zweitausendvier", "two thousand and four", "tsvay-tau-zınt-fiir"],
            ["zweitausendfünfzehn", "two thousand and fifteen", "tsvay-tau-zınt-fünf-tseyn"],
            ["zweitausendsechsundzwanzig", "two thousand and twenty-six", "tsvay-tau-zınt-zeks-unt-tsvantsig"]
        ]
    },
    {
        title: "Verb 'Sein' (To be)",
        subtitle: "Zein",
        data: [
            ["Ich bin", "I am", "ih bin"],
            ["Du bist", "You are", "du bist"],
            ["Er/Sie/Es ist", "He/She/It is", "er/zii/es ist"],
            ["Wir sind", "We are", "viir zint"],
            ["Ihr seid", "You (all) are", "iir zayt"],
            ["Sie/sie sind", "You (form.) / They are", "zii zint"]
        ]
    },
    {
        title: "Verb 'Kommen' (Come)",
        subtitle: "komın",
        data: [
            ["Ich komme", "I come", "ih kom-me"],
            ["Du kommst", "You come", "du komst"],
            ["Er/Sie/Es kommt", "He/She/It comes", "er/zii/es komt"],
            ["Wir kommen", "We come", "viir kom-mın"],
            ["Ihr kommt", "You (all) come", "iir komt"],
            ["Sie/sie kommen", "You (form.)/They come", "zii kom-mın"]
        ]
    },
    {
        title: "Verb 'Arbeiten' (To work)",
        subtitle: "",
        data: [
            ["Ich arbeite", "I work", "ih ar-bay-te"],
            ["Du arbeitest", "You work (informal)", "du ar-bay-test"],
            ["Er/Sie/Es arbeitet", "He/She/It works", "er/zii/es ar-bay-tet"],
            ["Wir arbeiten", "We work", "viir ar-bay-tın"],
            ["Ihr arbeitet", "You (all) work", "iir ar-bay-tet"],
            ["Sie/sie arbeiten", "You (form.)/They work", "zii ar-bay-tın"]
        ]
    },
    {
        title: "Possessive Pronouns (Possessivpronomen)",
        subtitle: "possesivpronomın",
        data: [
            ["mein", "my", "mayn"],
            ["dein", "your", "dayn"],
            ["sein", "his", "zayn"],
            ["ihr", "her", "iir"],
            ["sein", "its", "zayn"],
            ["unser", "our", "un-zer"],
            ["euer / eure*", "your (You all)", "oy-er / oy-re"],
            ["ihr", "their", "iir"],
            ["Ihr", "your (formal)", "iir"]
        ]
    },
    {
        title: "W-Questions (W-Fragen)",
        subtitle: "Vi fragın",
        data: [
            ["Wer?", "Who?", "ver"],
            ["Was?", "What?", "vas"],
            ["Wo?", "Where?", "vo"],
            ["Wohin?", "Where to?", "vo-hin"],
            ["Woher?", "Where from?", "vo-her"],
            ["Wann?", "When?", "van"],
            ["Warum?", "Why?", "va-rum"],
            ["Wie?", "How?", "vii"],
            ["Welche?", "Which?", "vel-he"],
            ["Wie viel?", "How much?", "vii fiil"],
            ["Wie viele?", "How many?", "vii fii-le"]
        ]
    }
];
