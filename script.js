(() => {
  "use strict";

  const FACTS_BY_LANG = {
    ru: [
      "У осьминога три сердца.",
      "Самая высокая гора в Солнечной системе — Олимп на Марсе.",
      "Пчелы сообщают направление к цветам с помощью танца.",
      "У человека около 600 мышц.",
      "Бананы слегка радиоактивны из-за содержания калия.",
      "В Антарктиде есть водопад красного цвета.",
      "Сатурн мог бы плавать в очень большой ванне из-за низкой плотности.",
      "Первый компьютерный баг был настоящей бабочкой в реле.",
      "Кожа акулы на ощупь похожа на наждачную бумагу.",
      "Гепард разгоняется до 100 км/ч примерно за 3 секунды."
    ],
    en: [
      "An octopus has three hearts.",
      "The tallest mountain in the Solar System is Olympus Mons on Mars.",
      "Bees can communicate flower directions through dance.",
      "The human body has about 600 muscles.",
      "Bananas are slightly radioactive because of potassium.",
      "There is a red waterfall in Antarctica.",
      "Saturn could float in a giant bathtub due to its low density.",
      "The first computer bug was an actual moth in a relay.",
      "A shark's skin feels like sandpaper.",
      "A cheetah can reach 100 km/h in about 3 seconds."
    ],
    uk: [
      "Восьминіг має три серця.",
      "Найвища гора в Сонячній системі — Олімп на Марсі.",
      "Бджоли передають напрямок до квітів за допомогою танцю.",
      "У тілі людини приблизно 600 м'язів.",
      "Банани трохи радіоактивні через вміст калію.",
      "В Антарктиді є червоний водоспад.",
      "Сатурн міг би плавати у дуже великій ванні через низьку щільність.",
      "Перший комп'ютерний баг був справжнім метеликом у реле.",
      "Шкіра акули на дотик схожа на наждачний папір.",
      "Гепард розганяється до 100 км/год приблизно за 3 секунди."
    ],
    de: [
      "Ein Oktopus hat drei Herzen.",
      "Der hochste Berg im Sonnensystem ist der Olympus Mons auf dem Mars.",
      "Bienen zeigen den Weg zu Blumen mit einem Tanz.",
      "Der menschliche Korper hat etwa 600 Muskeln.",
      "Bananen sind wegen Kalium leicht radioaktiv.",
      "In der Antarktis gibt es einen roten Wasserfall.",
      "Saturn konnte wegen seiner geringen Dichte in einer riesigen Wanne schwimmen.",
      "Der erste Computer-Bug war eine echte Motte im Relais.",
      "Die Haut eines Hais fuhlt sich wie Schleifpapier an.",
      "Ein Gepard erreicht 100 km/h in etwa 3 Sekunden."
    ],
    fr: [
      "Une pieuvre a trois coeurs.",
      "La plus haute montagne du Systeme solaire est Olympus Mons sur Mars.",
      "Les abeilles indiquent la direction des fleurs en dansant.",
      "Le corps humain possede environ 600 muscles.",
      "Les bananes sont legerement radioactives a cause du potassium.",
      "Il existe une cascade rouge en Antarctique.",
      "Saturne pourrait flotter dans une immense baignoire grace a sa faible densite.",
      "Le premier bug informatique etait un vrai papillon dans un relais.",
      "La peau d'un requin ressemble a du papier de verre.",
      "Un guepard atteint 100 km/h en environ 3 secondes."
    ],
    es: [
      "Un pulpo tiene tres corazones.",
      "La montana mas alta del Sistema Solar es el Monte Olimpo en Marte.",
      "Las abejas indican la direccion de las flores con un baile.",
      "El cuerpo humano tiene alrededor de 600 musculos.",
      "Los platanos son ligeramente radiactivos por el potasio.",
      "En la Antartida hay una cascada roja.",
      "Saturno podria flotar en una banera gigante por su baja densidad.",
      "El primer bug informatico fue una polilla real en un rele.",
      "La piel del tiburon se siente como papel de lija.",
      "Un guepardo alcanza 100 km/h en unos 3 segundos."
    ],
    it: [
      "Un polpo ha tre cuori.",
      "La montagna piu alta del Sistema Solare e l'Olympus Mons su Marte.",
      "Le api indicano la direzione dei fiori con una danza.",
      "Il corpo umano ha circa 600 muscoli.",
      "Le banane sono leggermente radioattive a causa del potassio.",
      "In Antartide esiste una cascata rossa.",
      "Saturno potrebbe galleggiare in una vasca gigantesca per la sua bassa densita.",
      "Il primo bug informatico fu una vera falena in un rele.",
      "La pelle di uno squalo sembra carta vetrata.",
      "Un ghepardo raggiunge 100 km/h in circa 3 secondi."
    ],
    pt: [
      "Um polvo tem tres coracoes.",
      "A montanha mais alta do Sistema Solar e o Olimpo em Marte.",
      "As abelhas mostram a direcao das flores por meio de uma danca.",
      "O corpo humano tem cerca de 600 musculos.",
      "Bananas sao levemente radioativas por causa do potassio.",
      "Existe uma cachoeira vermelha na Antartida.",
      "Saturno poderia flutuar em uma banheira gigante por sua baixa densidade.",
      "O primeiro bug de computador foi uma mariposa real em um rele.",
      "A pele de um tubarao parece lixa.",
      "Um guepardo chega a 100 km/h em cerca de 3 segundos."
    ],
    pl: [
      "Osmiornica ma trzy serca.",
      "Najwyzsza gora w Ukladzie Slonecznym to Olympus Mons na Marsie.",
      "Pszczoly wskazuja kierunek do kwiatow tancem.",
      "Cialo czlowieka ma okolo 600 miesni.",
      "Banany sa lekko radioaktywne przez potas.",
      "Na Antarktydzie istnieje czerwony wodospad.",
      "Saturn moglby unosic sie w ogromnej wannie ze wzgledu na mala gestosc.",
      "Pierwszy komputerowy bug byl prawdziwa cma w przekazniku.",
      "Skora rekina przypomina papier scierny.",
      "Gepard osiagnie 100 km/h w okolo 3 sekundy."
    ],
    tr: [
      "Bir ahtapotta uc kalp vardir.",
      "Gunes Sistemi'ndeki en yuksek dag Mars'taki Olympus Mons'tur.",
      "Arilar ciceklerin yonunu dans ederek anlatir.",
      "Insan vucudunda yaklasik 600 kas vardir.",
      "Muzlar potasyum nedeniyle hafif radyoaktiftir.",
      "Antarktika'da kirmizi bir selale vardir.",
      "Satur n dusuk yogunlugu nedeniyle dev bir kuvette yuzebilirdi.",
      "Ilk bilgisayar bug'i bir roledeki gercek bir guveydi.",
      "Kopekbaligi derisi zimpara kagidina benzer.",
      "Bir citalar yaklasik 3 saniyede 100 km/s hiza ulasabilir."
    ],
    ar: [
      "للاخطبوط ثلاثة قلوب.",
      "اعلى جبل في النظام الشمسي هو اوليمبوس مونس على المريخ.",
      "النحل يحدد اتجاه الزهور عن طريق الرقص.",
      "يحتوي جسم الانسان على نحو 600 عضلة.",
      "الموز مشع بشكل طفيف بسبب البوتاسيوم.",
      "يوجد شلال احمر في القارة القطبية الجنوبية.",
      "يمكن لزحل ان يطفو في حوض ضخم بسبب انخفاض كثافته.",
      "اول خطا حاسوبي كان فراشة حقيقية داخل مرحل.",
      "جلد القرش يشبه ورق الصنفرة.",
      "يمكن للفهد الوصول الى 100 كم/س خلال نحو 3 ثوان."
    ],
    he: [
      "לתמנון יש שלושה לבבות.",
      "ההר הגבוה ביותר במערכת השמש הוא אולימפוס מונס במאדים.",
      "דבורים מעבירות כיוון לפרחים באמצעות ריקוד.",
      "בגוף האדם יש בערך 600 שרירים.",
      "בננות מעט רדיואקטיביות בגלל אשלגן.",
      "באנטארקטיקה יש מפל אדום.",
      "שבתאי יכול לצוף באמבט ענק בגלל צפיפות נמוכה.",
      "באג המחשב הראשון היה עש אמיתי בתוך ממסר.",
      "עור של כריש מרגיש כמו נייר שיוף.",
      "ברדלס מגיע ל-100 קמ\"ש בערך תוך 3 שניות."
    ],
    zh: [
      "章鱼有三颗心脏。",
      "太阳系最高的山是火星上的奥林帕斯山。",
      "蜜蜂会用舞蹈告诉同伴花朵方向。",
      "人体大约有600块肌肉。",
      "香蕉因含钾而具有轻微放射性。",
      "南极有一处红色瀑布。",
      "土星密度较低，理论上可以漂浮在巨型浴缸里。",
      "第一个计算机bug是一只真实飞蛾卡在继电器中。",
      "鲨鱼皮摸起来像砂纸。",
      "猎豹大约3秒可加速到每小时100公里。"
    ],
    ja: [
      "タコには心臓が3つあります。",
      "太陽系で最も高い山は火星のオリンポス山です。",
      "ミツバチはダンスで花の方向を伝えます。",
      "人間の体には約600の筋肉があります。",
      "バナナはカリウムのためわずかに放射性があります。",
      "南極には赤い滝があります。",
      "土星は密度が低いため巨大な浴槽なら浮かぶ可能性があります。",
      "最初のコンピュータバグはリレーに入った本物のガでした。",
      "サメの皮膚は紙やすりのような触り心地です。",
      "チーターは約3秒で時速100kmに達します。"
    ],
    ko: [
      "문어는 심장이 3개입니다.",
      "태양계에서 가장 높은 산은 화성의 올림푸스 산입니다.",
      "벌은 춤으로 꽃의 방향을 전달합니다.",
      "인체에는 약 600개의 근육이 있습니다.",
      "바나나는 칼륨 때문에 약한 방사선을 냅니다.",
      "남극에는 붉은 폭포가 있습니다.",
      "토성은 밀도가 낮아 거대한 욕조에서 뜰 수 있습니다.",
      "첫 컴퓨터 버그는 릴레이에 들어간 실제 나방이었습니다.",
      "상어 피부는 사포처럼 거칠게 느껴집니다.",
      "치타는 약 3초 만에 시속 100km에 도달합니다."
    ]
  };

  const STORAGE_KEY = "importantEventTimerData";
  const FACT_STORAGE_KEY = "factOfTheDay";
  const LANG_STORAGE_KEY = "importantEventTimerLang";
  const NOTIFY_MODE_KEY = "importantEventTimerNotifyMode";
  const DEFAULT_LANG = "en";
  const DEFAULT_NOTIFY_MODE = "sound_notification";
  const RTL_LANGS = new Set(["ar", "he"]);
  const SUPPORTED_LANGS = [
    "ru",
    "en",
    "uk",
    "de",
    "fr",
    "es",
    "it",
    "pt",
    "pl",
    "tr",
    "ar",
    "he",
    "zh",
    "ja",
    "ko"
  ];

  const I18N = {
    ru: {
      title: "Таймер до важного события",
      subtitle: "Выберите событие и узнайте, сколько осталось времени.",
      languageLabel: "Язык",
      controlsTitle: "Выбор события",
      eventNameLabel: "Название события",
      eventNamePlaceholder: "Например: Моя олимпиада",
      eventDateLabel: "Дата события",
      eventTimeLabel: "Время события",
      notifyModeLabel: "Уведомление при завершении",
      notifyModeSound: "Сообщение + звук",
      notifyModeSoundOnly: "Только звук",
      notifyModeOnly: "Только сообщение",
      notifyModeOff: "Без сообщения и звука",
      submitButton: "Запустить таймер",
      eventTitleLabel: "Событие:",
      eventDateTextLabel: "Дата:",
      factTitle: "Факт дня",
      factLoading: "Загружаем интересный факт...",
      statusFinished: "Событие уже наступило!",
      statusEmpty: "Введите событие и дату, чтобы запустить таймер.",
      confirmNewEvent: "Вы уверены, что хотите выбрать новое событие?",
      notifyTitle: "Таймер завершен",
      notifyBody: 'Событие "{event}" уже наступило!',
      yearsOne: "Год",
      yearsFew: "Года",
      yearsMany: "Лет",
      monthsLabel: "Месяцев",
      weeksLabel: "Недель",
      daysLabel: "Дней",
      hoursLabel: "Часов",
      minutesLabel: "Минут",
      secondsLabel: "Секунд"
    },
    en: {
      title: "Important Event Countdown",
      subtitle: "Pick an event and see how much time is left.",
      languageLabel: "Language",
      controlsTitle: "Event Selection",
      eventNameLabel: "Event Name",
      eventNamePlaceholder: "For example: My Olympiad",
      eventDateLabel: "Event Date",
      eventTimeLabel: "Event Time",
      notifyModeLabel: "Notification on finish",
      notifyModeSound: "Message + sound",
      notifyModeSoundOnly: "Sound only",
      notifyModeOnly: "Message only",
      notifyModeOff: "No message and sound",
      submitButton: "Start Countdown",
      eventTitleLabel: "Event:",
      eventDateTextLabel: "Date:",
      factTitle: "Fact of the Day",
      factLoading: "Loading an interesting fact...",
      statusFinished: "The event has already happened!",
      statusEmpty: "Enter an event and date to start the timer.",
      confirmNewEvent: "Are you sure you want to choose a new event?",
      notifyTitle: "Timer Finished",
      notifyBody: 'The event "{event}" has already happened!',
      yearsOne: "Year",
      yearsFew: "Years",
      yearsMany: "Years",
      monthsLabel: "Months",
      weeksLabel: "Weeks",
      daysLabel: "Days",
      hoursLabel: "Hours",
      minutesLabel: "Minutes",
      secondsLabel: "Seconds"
    },
    uk: {
      title: "Таймер до важливої події",
      subtitle: "Оберіть подію та дізнайтесь, скільки часу залишилось.",
      languageLabel: "Мова",
      controlsTitle: "Вибір події",
      eventNameLabel: "Назва події",
      eventNamePlaceholder: "Наприклад: Моя олімпіада",
      eventDateLabel: "Дата події",
      eventTimeLabel: "Час події",
      notifyModeLabel: "Сповіщення після завершення",
      notifyModeSound: "Повідомлення + звук",
      notifyModeSoundOnly: "Лише звук",
      notifyModeOnly: "Лише повідомлення",
      notifyModeOff: "Без повідомлення і звуку",
      submitButton: "Запустити таймер",
      eventTitleLabel: "Подія:",
      eventDateTextLabel: "Дата:",
      factTitle: "Факт дня",
      factLoading: "Завантажуємо цікавий факт...",
      statusFinished: "Подія вже настала!",
      statusEmpty: "Введіть подію та дату, щоб запустити таймер.",
      confirmNewEvent: "Ви впевнені, що хочете вибрати нову подію?",
      notifyTitle: "Таймер завершено",
      notifyBody: 'Подія "{event}" вже настала!',
      yearsOne: "Рік",
      yearsFew: "Роки",
      yearsMany: "Років",
      monthsLabel: "Місяців",
      weeksLabel: "Тижнів",
      daysLabel: "Днів",
      hoursLabel: "Годин",
      minutesLabel: "Хвилин",
      secondsLabel: "Секунд"
    },
    de: {
      title: "Countdown bis zum wichtigen Ereignis",
      subtitle: "Wahle ein Ereignis und sieh, wie viel Zeit ubrig ist.",
      languageLabel: "Sprache",
      controlsTitle: "Ereigniswahl",
      eventNameLabel: "Ereignisname",
      eventNamePlaceholder: "Zum Beispiel: Meine Olympiade",
      eventDateLabel: "Ereignisdatum",
      eventTimeLabel: "Ereigniszeit",
      notifyModeLabel: "Benachrichtigung beim Ende",
      notifyModeSound: "Nachricht + Ton",
      notifyModeSoundOnly: "Nur Ton",
      notifyModeOnly: "Nur Nachricht",
      notifyModeOff: "Keine Nachricht und kein Ton",
      submitButton: "Timer starten",
      eventTitleLabel: "Ereignis:",
      eventDateTextLabel: "Datum:",
      factTitle: "Fakt des Tages",
      factLoading: "Interessanter Fakt wird geladen...",
      statusFinished: "Das Ereignis ist bereits eingetreten!",
      statusEmpty: "Gib ein Ereignis und ein Datum ein, um den Timer zu starten.",
      confirmNewEvent: "Mochtest du wirklich ein neues Ereignis auswahlen?",
      notifyTitle: "Timer beendet",
      notifyBody: 'Das Ereignis "{event}" ist bereits eingetreten!',
      yearsOne: "Jahr",
      yearsFew: "Jahre",
      yearsMany: "Jahre",
      monthsLabel: "Monate",
      weeksLabel: "Wochen",
      daysLabel: "Tage",
      hoursLabel: "Stunden",
      minutesLabel: "Minuten",
      secondsLabel: "Sekunden"
    },
    fr: {
      title: "Minuteur jusqu'a un evenement important",
      subtitle: "Choisissez un evenement et voyez le temps restant.",
      languageLabel: "Langue",
      controlsTitle: "Choix de l'evenement",
      eventNameLabel: "Nom de l'evenement",
      eventNamePlaceholder: "Par exemple: Mon olympiade",
      eventDateLabel: "Date de l'evenement",
      eventTimeLabel: "Heure de l'evenement",
      notifyModeLabel: "Notification a la fin",
      notifyModeSound: "Message + son",
      notifyModeSoundOnly: "Son uniquement",
      notifyModeOnly: "Message uniquement",
      notifyModeOff: "Sans message ni son",
      submitButton: "Demarrer le minuteur",
      eventTitleLabel: "Evenement :",
      eventDateTextLabel: "Date :",
      factTitle: "Fait du jour",
      factLoading: "Chargement d'un fait interessant...",
      statusFinished: "L'evenement est deja arrive !",
      statusEmpty: "Entrez un evenement et une date pour lancer le minuteur.",
      confirmNewEvent: "Voulez-vous vraiment choisir un nouvel evenement ?",
      notifyTitle: "Minuteur termine",
      notifyBody: 'L\'evenement "{event}" est deja arrive !',
      yearsOne: "An",
      yearsFew: "Ans",
      yearsMany: "Ans",
      monthsLabel: "Mois",
      weeksLabel: "Semaines",
      daysLabel: "Jours",
      hoursLabel: "Heures",
      minutesLabel: "Minutes",
      secondsLabel: "Secondes"
    },
    es: {
      title: "Temporizador para un evento importante",
      subtitle: "Elige un evento y mira cuanto tiempo queda.",
      languageLabel: "Idioma",
      controlsTitle: "Seleccion de evento",
      eventNameLabel: "Nombre del evento",
      eventNamePlaceholder: "Por ejemplo: Mi olimpiada",
      eventDateLabel: "Fecha del evento",
      eventTimeLabel: "Hora del evento",
      notifyModeLabel: "Notificacion al finalizar",
      notifyModeSound: "Mensaje + sonido",
      notifyModeSoundOnly: "Solo sonido",
      notifyModeOnly: "Solo mensaje",
      notifyModeOff: "Sin mensaje ni sonido",
      submitButton: "Iniciar temporizador",
      eventTitleLabel: "Evento:",
      eventDateTextLabel: "Fecha:",
      factTitle: "Dato del dia",
      factLoading: "Cargando un dato interesante...",
      statusFinished: "El evento ya ha ocurrido.",
      statusEmpty: "Introduce un evento y una fecha para iniciar el temporizador.",
      confirmNewEvent: "Estas seguro de que deseas elegir un nuevo evento?",
      notifyTitle: "Temporizador finalizado",
      notifyBody: 'El evento "{event}" ya ha ocurrido.',
      yearsOne: "Ano",
      yearsFew: "Anos",
      yearsMany: "Anos",
      monthsLabel: "Meses",
      weeksLabel: "Semanas",
      daysLabel: "Dias",
      hoursLabel: "Horas",
      minutesLabel: "Minutos",
      secondsLabel: "Segundos"
    },
    it: {
      title: "Timer per un evento importante",
      subtitle: "Scegli un evento e scopri quanto tempo resta.",
      languageLabel: "Lingua",
      controlsTitle: "Scelta evento",
      eventNameLabel: "Nome evento",
      eventNamePlaceholder: "Per esempio: La mia olimpiade",
      eventDateLabel: "Data evento",
      eventTimeLabel: "Ora evento",
      notifyModeLabel: "Notifica al termine",
      notifyModeSound: "Messaggio + suono",
      notifyModeSoundOnly: "Solo suono",
      notifyModeOnly: "Solo messaggio",
      notifyModeOff: "Nessun messaggio e nessun suono",
      submitButton: "Avvia timer",
      eventTitleLabel: "Evento:",
      eventDateTextLabel: "Data:",
      factTitle: "Fatto del giorno",
      factLoading: "Caricamento fatto interessante...",
      statusFinished: "L'evento e gia arrivato!",
      statusEmpty: "Inserisci evento e data per avviare il timer.",
      confirmNewEvent: "Vuoi davvero scegliere un nuovo evento?",
      notifyTitle: "Timer terminato",
      notifyBody: 'L\'evento "{event}" e gia arrivato!',
      yearsOne: "Anno",
      yearsFew: "Anni",
      yearsMany: "Anni",
      monthsLabel: "Mesi",
      weeksLabel: "Settimane",
      daysLabel: "Giorni",
      hoursLabel: "Ore",
      minutesLabel: "Minuti",
      secondsLabel: "Secondi"
    },
    pt: {
      title: "Temporizador para evento importante",
      subtitle: "Escolha um evento e veja quanto tempo falta.",
      languageLabel: "Idioma",
      controlsTitle: "Escolha do evento",
      eventNameLabel: "Nome do evento",
      eventNamePlaceholder: "Por exemplo: Minha olimpiada",
      eventDateLabel: "Data do evento",
      eventTimeLabel: "Hora do evento",
      notifyModeLabel: "Notificacao ao terminar",
      notifyModeSound: "Mensagem + som",
      notifyModeSoundOnly: "Som apenas",
      notifyModeOnly: "Apenas mensagem",
      notifyModeOff: "Sem mensagem e sem som",
      submitButton: "Iniciar temporizador",
      eventTitleLabel: "Evento:",
      eventDateTextLabel: "Data:",
      factTitle: "Fato do dia",
      factLoading: "Carregando fato interessante...",
      statusFinished: "O evento ja aconteceu!",
      statusEmpty: "Digite evento e data para iniciar o temporizador.",
      confirmNewEvent: "Tem certeza de que deseja escolher um novo evento?",
      notifyTitle: "Temporizador finalizado",
      notifyBody: 'O evento "{event}" ja aconteceu!',
      yearsOne: "Ano",
      yearsFew: "Anos",
      yearsMany: "Anos",
      monthsLabel: "Meses",
      weeksLabel: "Semanas",
      daysLabel: "Dias",
      hoursLabel: "Horas",
      minutesLabel: "Minutos",
      secondsLabel: "Segundos"
    },
    pl: {
      title: "Licznik do waznego wydarzenia",
      subtitle: "Wybierz wydarzenie i zobacz, ile czasu zostalo.",
      languageLabel: "Jezyk",
      controlsTitle: "Wybor wydarzenia",
      eventNameLabel: "Nazwa wydarzenia",
      eventNamePlaceholder: "Na przyklad: Moja olimpiada",
      eventDateLabel: "Data wydarzenia",
      eventTimeLabel: "Godzina wydarzenia",
      notifyModeLabel: "Powiadomienie po zakonczeniu",
      notifyModeSound: "Wiadomosc + dzwiek",
      notifyModeSoundOnly: "Tylko dzwiek",
      notifyModeOnly: "Tylko wiadomosc",
      notifyModeOff: "Bez wiadomosci i dzwieku",
      submitButton: "Uruchom licznik",
      eventTitleLabel: "Wydarzenie:",
      eventDateTextLabel: "Data:",
      factTitle: "Fakt dnia",
      factLoading: "Ladowanie ciekawego faktu...",
      statusFinished: "Wydarzenie juz nastapilo!",
      statusEmpty: "Wpisz wydarzenie i date, aby uruchomic licznik.",
      confirmNewEvent: "Czy na pewno chcesz wybrac nowe wydarzenie?",
      notifyTitle: "Licznik zakonczony",
      notifyBody: 'Wydarzenie "{event}" juz nastapilo!',
      yearsOne: "Rok",
      yearsFew: "Lata",
      yearsMany: "Lat",
      monthsLabel: "Miesiecy",
      weeksLabel: "Tygodni",
      daysLabel: "Dni",
      hoursLabel: "Godzin",
      minutesLabel: "Minut",
      secondsLabel: "Sekund"
    },
    tr: {
      title: "Onemli etkinlik geri sayimi",
      subtitle: "Bir etkinlik secin ve kalan sureyi gorun.",
      languageLabel: "Dil",
      controlsTitle: "Etkinlik secimi",
      eventNameLabel: "Etkinlik adi",
      eventNamePlaceholder: "Ornegin: Olimpiyatim",
      eventDateLabel: "Etkinlik tarihi",
      eventTimeLabel: "Etkinlik saati",
      notifyModeLabel: "Bitince bildirim",
      notifyModeSound: "Mesaj + ses",
      notifyModeSoundOnly: "Sadece ses",
      notifyModeOnly: "Sadece mesaj",
      notifyModeOff: "Mesaj ve ses yok",
      submitButton: "Sayaci baslat",
      eventTitleLabel: "Etkinlik:",
      eventDateTextLabel: "Tarih:",
      factTitle: "Gunluk bilgi",
      factLoading: "Ilginc bilgi yukleniyor...",
      statusFinished: "Etkinlik zaten gerceklesti!",
      statusEmpty: "Sayaci baslatmak icin etkinlik ve tarih girin.",
      confirmNewEvent: "Yeni bir etkinlik secmek istediginize emin misiniz?",
      notifyTitle: "Sayac bitti",
      notifyBody: '"{event}" etkinligi zaten gerceklesti!',
      yearsOne: "Yil",
      yearsFew: "Yil",
      yearsMany: "Yil",
      monthsLabel: "Ay",
      weeksLabel: "Hafta",
      daysLabel: "Gun",
      hoursLabel: "Saat",
      minutesLabel: "Dakika",
      secondsLabel: "Saniye"
    },
    ar: {
      title: "العد التنازلي لحدث مهم",
      subtitle: "اختر حدثا واعرف الوقت المتبقي.",
      languageLabel: "اللغة",
      controlsTitle: "اختيار الحدث",
      eventNameLabel: "اسم الحدث",
      eventNamePlaceholder: "مثال: اولمبيادي",
      eventDateLabel: "تاريخ الحدث",
      eventTimeLabel: "وقت الحدث",
      notifyModeLabel: "التنبيه عند الانتهاء",
      notifyModeSound: "رسالة + صوت",
      notifyModeSoundOnly: "صوت فقط",
      notifyModeOnly: "رسالة فقط",
      notifyModeOff: "بدون رسالة وبدون صوت",
      submitButton: "ابدأ العداد",
      eventTitleLabel: "الحدث:",
      eventDateTextLabel: "التاريخ:",
      factTitle: "معلومة اليوم",
      factLoading: "جار تحميل معلومة مفيدة...",
      statusFinished: "لقد حدثت المناسبة بالفعل!",
      statusEmpty: "ادخل الحدث والتاريخ لبدء العداد.",
      confirmNewEvent: "هل انت متأكد من اختيار حدث جديد؟",
      notifyTitle: "انتهى العداد",
      notifyBody: 'الحدث "{event}" قد حدث بالفعل!',
      yearsOne: "سنة",
      yearsFew: "سنوات",
      yearsMany: "سنة",
      monthsLabel: "اشهر",
      weeksLabel: "اسابيع",
      daysLabel: "ايام",
      hoursLabel: "ساعات",
      minutesLabel: "دقائق",
      secondsLabel: "ثوان"
    },
    he: {
      title: "טיימר לאירוע חשוב",
      subtitle: "בחרו אירוע וראו כמה זמן נשאר.",
      languageLabel: "שפה",
      controlsTitle: "בחירת אירוע",
      eventNameLabel: "שם האירוע",
      eventNamePlaceholder: "לדוגמה: האולימפיאדה שלי",
      eventDateLabel: "תאריך האירוע",
      eventTimeLabel: "שעת האירוע",
      notifyModeLabel: "התראה בסיום",
      notifyModeSound: "הודעה + צליל",
      notifyModeSoundOnly: "צליל בלבד",
      notifyModeOnly: "הודעה בלבד",
      notifyModeOff: "ללא הודעה וללא צליל",
      submitButton: "הפעל טיימר",
      eventTitleLabel: "אירוע:",
      eventDateTextLabel: "תאריך:",
      factTitle: "עובדה יומית",
      factLoading: "טוען עובדה מעניינת...",
      statusFinished: "האירוע כבר הגיע!",
      statusEmpty: "הכניסו אירוע ותאריך כדי להפעיל את הטיימר.",
      confirmNewEvent: "בטוחים שרוצים לבחור אירוע חדש?",
      notifyTitle: "הטיימר הסתיים",
      notifyBody: 'האירוע "{event}" כבר הגיע!',
      yearsOne: "שנה",
      yearsFew: "שנים",
      yearsMany: "שנים",
      monthsLabel: "חודשים",
      weeksLabel: "שבועות",
      daysLabel: "ימים",
      hoursLabel: "שעות",
      minutesLabel: "דקות",
      secondsLabel: "שניות"
    },
    zh: {
      title: "重要事件倒计时",
      subtitle: "选择一个事件并查看剩余时间。",
      languageLabel: "语言",
      controlsTitle: "事件选择",
      eventNameLabel: "事件名称",
      eventNamePlaceholder: "例如：我的奥林匹克",
      eventDateLabel: "事件日期",
      eventTimeLabel: "事件时间",
      notifyModeLabel: "结束时通知",
      notifyModeSound: "消息 + 声音",
      notifyModeSoundOnly: "仅声音",
      notifyModeOnly: "仅消息",
      notifyModeOff: "无消息和声音",
      submitButton: "开始倒计时",
      eventTitleLabel: "事件：",
      eventDateTextLabel: "日期：",
      factTitle: "每日知识",
      factLoading: "正在加载有趣知识...",
      statusFinished: "事件已经到来！",
      statusEmpty: "请输入事件和日期以启动计时器。",
      confirmNewEvent: "确定要选择新的事件吗？",
      notifyTitle: "计时结束",
      notifyBody: '事件“{event}”已经到来！',
      yearsOne: "年",
      yearsFew: "年",
      yearsMany: "年",
      monthsLabel: "月",
      weeksLabel: "周",
      daysLabel: "天",
      hoursLabel: "时",
      minutesLabel: "分",
      secondsLabel: "秒"
    },
    ja: {
      title: "大切なイベントまでのタイマー",
      subtitle: "イベントを選んで残り時間を確認しましょう。",
      languageLabel: "言語",
      controlsTitle: "イベント選択",
      eventNameLabel: "イベント名",
      eventNamePlaceholder: "例：私のオリンピック",
      eventDateLabel: "イベント日付",
      eventTimeLabel: "イベント時刻",
      notifyModeLabel: "終了時の通知",
      notifyModeSound: "メッセージ + 音",
      notifyModeSoundOnly: "音のみ",
      notifyModeOnly: "メッセージのみ",
      notifyModeOff: "メッセージと音なし",
      submitButton: "タイマー開始",
      eventTitleLabel: "イベント：",
      eventDateTextLabel: "日付：",
      factTitle: "今日の豆知識",
      factLoading: "豆知識を読み込み中...",
      statusFinished: "イベントはすでに到来しました！",
      statusEmpty: "タイマーを開始するにはイベント名と日付を入力してください。",
      confirmNewEvent: "新しいイベントを選択しますか？",
      notifyTitle: "タイマー終了",
      notifyBody: 'イベント「{event}」はすでに到来しました！',
      yearsOne: "年",
      yearsFew: "年",
      yearsMany: "年",
      monthsLabel: "か月",
      weeksLabel: "週",
      daysLabel: "日",
      hoursLabel: "時間",
      minutesLabel: "分",
      secondsLabel: "秒"
    },
    ko: {
      title: "중요한 이벤트까지 타이머",
      subtitle: "이벤트를 선택하고 남은 시간을 확인하세요.",
      languageLabel: "언어",
      controlsTitle: "이벤트 선택",
      eventNameLabel: "이벤트 이름",
      eventNamePlaceholder: "예: 나의 올림피아드",
      eventDateLabel: "이벤트 날짜",
      eventTimeLabel: "이벤트 시간",
      notifyModeLabel: "종료 시 알림",
      notifyModeSound: "메시지 + 소리",
      notifyModeSoundOnly: "소리만",
      notifyModeOnly: "메시지만",
      notifyModeOff: "메시지와 소리 없음",
      submitButton: "타이머 시작",
      eventTitleLabel: "이벤트:",
      eventDateTextLabel: "날짜:",
      factTitle: "오늘의 사실",
      factLoading: "흥미로운 사실을 불러오는 중...",
      statusFinished: "이벤트가 이미 도착했습니다!",
      statusEmpty: "타이머를 시작하려면 이벤트와 날짜를 입력하세요.",
      confirmNewEvent: "새 이벤트를 선택하시겠습니까?",
      notifyTitle: "타이머 종료",
      notifyBody: '이벤트 "{event}"가 이미 도착했습니다!',
      yearsOne: "년",
      yearsFew: "년",
      yearsMany: "년",
      monthsLabel: "개월",
      weeksLabel: "주",
      daysLabel: "일",
      hoursLabel: "시간",
      minutesLabel: "분",
      secondsLabel: "초"
    }
  };

  const dom = {
    form: document.getElementById("event-form"),
    languageSelect: document.getElementById("language-select"),
    notifyModeSelect: document.getElementById("notify-mode"),
    nameInput: document.getElementById("event-name"),
    dateInput: document.getElementById("event-date"),
    timeInput: document.getElementById("event-time"),
    eventTitle: document.getElementById("event-title"),
    eventDateText: document.getElementById("event-date-text"),
    statusMessage: document.getElementById("status-message"),
    factDay: document.getElementById("fact-day"),
    languageLabel: document.getElementById("language-label"),
    heroTitle: document.querySelector(".hero h1"),
    heroSubtitle: document.getElementById("hero-subtitle"),
    controlsTitle: document.getElementById("controls-title"),
    eventNameLabel: document.getElementById("event-name-label"),
    eventDateLabel: document.getElementById("event-date-label"),
    eventTimeLabel: document.getElementById("event-time-label"),
    notifyModeLabel: document.getElementById("notify-mode-label"),
    submitButton: document.getElementById("submit-button"),
    eventTitleLabel: document.getElementById("event-title-label"),
    eventDateTextLabel: document.getElementById("event-date-text-label"),
    factTitle: document.getElementById("fact-title"),
    yearsLabel: document.getElementById("years-label"),
    monthsLabel: document.getElementById("months-label"),
    weeksLabel: document.getElementById("weeks-label"),
    daysLabel: document.getElementById("days-label"),
    hoursLabel: document.getElementById("hours-label"),
    minutesLabel: document.getElementById("minutes-label"),
    secondsLabel: document.getElementById("seconds-label"),
    parts: {
      years: document.getElementById("years"),
      months: document.getElementById("months"),
      weeks: document.getElementById("weeks"),
      days: document.getElementById("days"),
      hours: document.getElementById("hours"),
      minutes: document.getElementById("minutes"),
      seconds: document.getElementById("seconds")
    }
  };

  let timerId = null;
  let currentEvent = null;
  let hasSentFinishNotification = false;
  let currentLang = DEFAULT_LANG;
  let notifyMode = DEFAULT_NOTIFY_MODE;

  init();

  function init() {
    loadLanguage();
    loadNotifyMode();
    applyLanguage(currentLang);
    bindEvents();
    renderFactOfDay();
    loadFromStorage();
  }

  function bindEvents() {
    dom.form.addEventListener("submit", onFormSubmit);
    dom.languageSelect.addEventListener("change", onLanguageChange);
    dom.notifyModeSelect.addEventListener("change", onNotifyModeChange);
  }

  function onNotifyModeChange() {
    notifyMode = getSupportedNotifyMode(dom.notifyModeSelect.value);
    localStorage.setItem(NOTIFY_MODE_KEY, notifyMode);
  }

  function onLanguageChange() {
    const selected = getSupportedLanguage(dom.languageSelect.value);
    currentLang = selected;
    localStorage.setItem(LANG_STORAGE_KEY, selected);
    applyLanguage(selected);
    renderFactOfDay();

    if (currentEvent) {
      renderEventSummary(currentEvent);
    }
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const title = dom.nameInput.value.trim();
    const dateRaw = dom.dateInput.value;
    const timeRaw = dom.timeInput.value || "00:00";
    if (!title || !dateRaw) {
      return;
    }

    const chosenDate = new Date(`${dateRaw}T${timeRaw}:00`);
    if (Number.isNaN(chosenDate.getTime())) {
      return;
    }

    // Подтверждение при смене уже выбранного события.
    if (
      currentEvent &&
      (
        currentEvent.title !== title ||
        toDateInputValue(currentEvent.date) !== dateRaw ||
        toTimeInputValue(currentEvent.date) !== timeRaw
      )
    ) {
      const accepted = window.confirm(t("confirmNewEvent"));
      if (!accepted) {
        return;
      }
    }

    currentEvent = { title, date: chosenDate };
    hasSentFinishNotification = false;
    saveToStorage(currentEvent);
    renderEventSummary(currentEvent);
    startOrRefreshTimer();
  }

  function startOrRefreshTimer() {
    if (timerId) {
      clearInterval(timerId);
    }

    updateCountdown();
    timerId = setInterval(updateCountdown, 1000);
  }

  function updateCountdown() {
    if (!currentEvent) {
      return;
    }

    const now = new Date();
    const target = currentEvent.date;

    if (target.getTime() <= now.getTime()) {
      setPartsToZero();
      dom.statusMessage.textContent = t("statusFinished");
      notifyEventReached();
      return;
    }

    dom.statusMessage.textContent = "";

    const diff = getDetailedTimeDiff(now, target);
    dom.parts.years.textContent = String(diff.years);
    updateYearsLabel(diff.years);
    dom.parts.months.textContent = String(diff.months);
    dom.parts.weeks.textContent = String(diff.weeks);
    dom.parts.days.textContent = String(diff.days);
    dom.parts.hours.textContent = padNumber(diff.hours);
    dom.parts.minutes.textContent = padNumber(diff.minutes);
    dom.parts.seconds.textContent = padNumber(diff.seconds);
  }

  // Вычисление разницы: годы, месяцы, недели, дни, часы, минуты, секунды.
  function getDetailedTimeDiff(fromDate, toDate) {
    let temp = new Date(fromDate.getTime());
    let months = 0;

    while (true) {
      const next = new Date(temp.getTime());
      next.setMonth(next.getMonth() + 1);
      if (next <= toDate) {
        months += 1;
        temp = next;
      } else {
        break;
      }
    }

    // Если месяцев набралось больше 11, переносим их в годы.
    const years = Math.floor(months / 12);
    months %= 12;

    let remainingMs = toDate.getTime() - temp.getTime();
    const dayMs = 24 * 60 * 60 * 1000;
    const hourMs = 60 * 60 * 1000;
    const minuteMs = 60 * 1000;
    const secondMs = 1000;

    const totalDaysAfterMonths = Math.floor(remainingMs / dayMs);
    remainingMs -= totalDaysAfterMonths * dayMs;
    let weeks = Math.floor(totalDaysAfterMonths / 7);
    let days = totalDaysAfterMonths % 7;

    // По запросу: если дней осталось 6 или больше, округляем в сторону +1 недели.
    if (days >= 6) {
      weeks += 1;
      days = 0;
    }

    const hours = Math.floor(remainingMs / hourMs);
    remainingMs -= hours * hourMs;

    const minutes = Math.floor(remainingMs / minuteMs);
    remainingMs -= minutes * minuteMs;

    const seconds = Math.floor(remainingMs / secondMs);

    return { years, months, weeks, days, hours, minutes, seconds };
  }

  function setPartsToZero() {
    dom.parts.years.textContent = "0";
    updateYearsLabel(0);
    dom.parts.months.textContent = "0";
    dom.parts.weeks.textContent = "0";
    dom.parts.days.textContent = "0";
    dom.parts.hours.textContent = "00";
    dom.parts.minutes.textContent = "00";
    dom.parts.seconds.textContent = "00";
  }

  function renderEventSummary(eventData) {
    dom.eventTitle.textContent = eventData.title;
    dom.eventDateText.textContent = formatLocalizedDate(eventData.date);
  }

  function saveToStorage(eventData) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        title: eventData.title,
        date: toDateInputValue(eventData.date),
        time: toTimeInputValue(eventData.date)
      })
    );
  }

  function loadFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setEmptyState();
        return;
      }

      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed.title !== "string" || typeof parsed.date !== "string") {
        setEmptyState();
        return;
      }

      const restoredTime = typeof parsed.time === "string" ? parsed.time : "00:00";
      const restoredDate = new Date(`${parsed.date}T${restoredTime}:00`);
      if (Number.isNaN(restoredDate.getTime())) {
        setEmptyState();
        return;
      }

      currentEvent = { title: parsed.title, date: restoredDate };
      hasSentFinishNotification = false;
      dom.nameInput.value = parsed.title;
      dom.dateInput.value = parsed.date;
      dom.timeInput.value = restoredTime;
      renderEventSummary(currentEvent);
      startOrRefreshTimer();
    } catch (error) {
      setEmptyState();
    }
  }

  function setEmptyState() {
    currentEvent = null;
    hasSentFinishNotification = false;
    dom.eventTitle.textContent = "-";
    dom.eventDateText.textContent = "-";
    dom.statusMessage.textContent = t("statusEmpty");
    setPartsToZero();
  }

  function toDateInputValue(dateValue) {
    const year = dateValue.getFullYear();
    const month = String(dateValue.getMonth() + 1).padStart(2, "0");
    const day = String(dateValue.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function toTimeInputValue(dateValue) {
    const hours = String(dateValue.getHours()).padStart(2, "0");
    const minutes = String(dateValue.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function formatLocalizedDate(dateValue) {
    return new Intl.DateTimeFormat(getDateLocale(currentLang), {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(dateValue);
  }

  function padNumber(value) {
    return String(value).padStart(2, "0");
  }

  function updateYearsLabel(yearsValue) {
    if (!dom.yearsLabel) {
      return;
    }
    const langSet = getLangSet();
    if (currentLang === "ru") {
      if (yearsValue === 1) {
        dom.yearsLabel.textContent = langSet.yearsOne;
        return;
      }
      dom.yearsLabel.textContent = (yearsValue >= 0 && yearsValue <= 4) || yearsValue > 20 ? langSet.yearsFew : langSet.yearsMany;
      return;
    }
    dom.yearsLabel.textContent = yearsValue === 1 ? langSet.yearsOne : langSet.yearsMany;
  }

  function notifyEventReached() {
    if (hasSentFinishNotification || !currentEvent) {
      return;
    }

    hasSentFinishNotification = true;
    const mode = getSupportedNotifyMode(notifyMode);

    if (mode === "no_notification") {
      return;
    }

    if (mode === "sound_only") {
      playFinishSound();
      return;
    }

    // Отправляем уведомление только если браузер поддерживает и есть разрешение.
    if (!("Notification" in window)) {
      if (mode === "sound_notification") {
        playFinishSound();
      }
      return;
    }

    if (Notification.permission === "granted") {
      new Notification(t("notifyTitle"), {
        body: t("notifyBody").replace("{event}", currentEvent.title)
      });
      if (mode === "sound_notification") {
        playFinishSound();
      }
      return;
    }

    if (Notification.permission === "default") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted" && currentEvent) {
          new Notification(t("notifyTitle"), {
            body: t("notifyBody").replace("{event}", currentEvent.title)
          });
          if (mode === "sound_notification") {
            playFinishSound();
          }
        }
      });
    }
  }

  function playFinishSound() {
    if (!("AudioContext" in window || "webkitAudioContext" in window)) {
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new Ctx();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = 880;
    gainNode.gain.value = 0.12;

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.3);
  }

  function loadLanguage() {
    const storedLang = localStorage.getItem(LANG_STORAGE_KEY);
    currentLang = getSupportedLanguage(storedLang);
  }

  function loadNotifyMode() {
    const storedMode = localStorage.getItem(NOTIFY_MODE_KEY);
    notifyMode = getSupportedNotifyMode(storedMode);
    dom.notifyModeSelect.value = notifyMode;
  }

  function applyLanguage(lang) {
    const langSet = I18N[lang] || I18N[DEFAULT_LANG];
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.has(lang) ? "rtl" : "ltr";
    dom.languageSelect.value = lang;

    dom.languageLabel.textContent = langSet.languageLabel;
    dom.heroTitle.textContent = langSet.title;
    dom.heroSubtitle.textContent = langSet.subtitle;
    dom.controlsTitle.textContent = langSet.controlsTitle;
    dom.eventNameLabel.textContent = langSet.eventNameLabel;
    dom.nameInput.placeholder = langSet.eventNamePlaceholder;
    dom.eventDateLabel.textContent = langSet.eventDateLabel;
    dom.eventTimeLabel.textContent = langSet.eventTimeLabel || "Event Time";
    dom.notifyModeLabel.textContent = langSet.notifyModeLabel || "Notification on finish";
    updateNotifyModeOptionsText(langSet);
    dom.submitButton.textContent = langSet.submitButton;
    dom.eventTitleLabel.textContent = langSet.eventTitleLabel;
    dom.eventDateTextLabel.textContent = langSet.eventDateTextLabel;
    dom.factTitle.textContent = langSet.factTitle;

    dom.monthsLabel.textContent = langSet.monthsLabel;
    dom.weeksLabel.textContent = langSet.weeksLabel;
    dom.daysLabel.textContent = langSet.daysLabel;
    dom.hoursLabel.textContent = langSet.hoursLabel;
    dom.minutesLabel.textContent = langSet.minutesLabel;
    dom.secondsLabel.textContent = langSet.secondsLabel;

    if (!currentEvent) {
      dom.statusMessage.textContent = langSet.statusEmpty;
    } else if (dom.statusMessage.textContent.trim().length > 0) {
      dom.statusMessage.textContent = langSet.statusFinished;
    }
    if (dom.factDay.textContent.includes("Загружаем")) {
      dom.factDay.textContent = langSet.factLoading;
    }
    updateYearsLabel(Number(dom.parts.years.textContent) || 0);
  }

  function getSupportedLanguage(lang) {
    return SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  }

  function getSupportedNotifyMode(mode) {
    const modes = ["sound_notification", "sound_only", "notification_only", "no_notification"];
    return modes.includes(mode) ? mode : DEFAULT_NOTIFY_MODE;
  }

  function getLangSet() {
    return I18N[currentLang] || I18N[DEFAULT_LANG];
  }

  function t(key) {
    return getLangSet()[key] || I18N[DEFAULT_LANG][key] || "";
  }

  function getDateLocale(lang) {
    const locales = {
      ru: "ru-RU",
      en: "en-US",
      uk: "uk-UA",
      de: "de-DE",
      fr: "fr-FR",
      es: "es-ES",
      it: "it-IT",
      pt: "pt-PT",
      pl: "pl-PL",
      tr: "tr-TR",
      ar: "ar",
      he: "he-IL",
      zh: "zh-CN",
      ja: "ja-JP",
      ko: "ko-KR"
    };
    return locales[lang] || "ru-RU";
  }

  function updateNotifyModeOptionsText(langSet) {
    const options = dom.notifyModeSelect.options;
    for (let i = 0; i < options.length; i += 1) {
      const option = options[i];
      if (option.value === "sound_notification") {
        option.textContent = langSet.notifyModeSound || "Message + sound";
      } else if (option.value === "sound_only") {
        option.textContent = langSet.notifyModeSoundOnly || "Sound only";
      } else if (option.value === "notification_only") {
        option.textContent = langSet.notifyModeOnly || "Message only";
      } else if (option.value === "no_notification") {
        option.textContent = langSet.notifyModeOff || "No message and sound";
      }
    }
  }

  function renderFactOfDay() {
    const todayKey = getTodayKey();
    const storedRaw = localStorage.getItem(FACT_STORAGE_KEY);

    if (storedRaw) {
      try {
        const stored = JSON.parse(storedRaw);
        if (
          stored &&
          stored.dateKey === todayKey &&
          stored.lang === currentLang &&
          typeof stored.fact === "string"
        ) {
          dom.factDay.textContent = stored.fact;
          return;
        }
      } catch (error) {
        // Падать не нужно: просто выбираем новый факт.
      }
    }

    const randomFact = pickDailyFact(todayKey);
    dom.factDay.textContent = randomFact;
    localStorage.setItem(
      FACT_STORAGE_KEY,
      JSON.stringify({
        dateKey: todayKey,
        lang: currentLang,
        fact: randomFact
      })
    );
  }

  function pickDailyFact(todayKey) {
    // Детерминированный выбор по дате, чтобы факт не менялся при перезагрузке в течение дня.
    const facts = FACTS_BY_LANG[currentLang] || FACTS_BY_LANG[DEFAULT_LANG];
    const numeric = Number(todayKey.replace(/-/g, ""));
    const index = numeric % facts.length;
    return facts[index];
  }

  function getTodayKey() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
})();
