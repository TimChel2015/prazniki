(() => {
  "use strict";

  // Готовые события с фиксированными датами (день/месяц), год выбирается автоматически.
  const PRESET_EVENTS = {
    "birthday-1": { title: "День рождения тимура", day: 25, month: 9 },
    vacation: { title: "Летние каникулы", day: 30, month: 6 },
    "new-year": { title: "Новый год", day: 30, month: 12 },
    "birthday-2": { title: "День рождения даши", day: 20, month: 6 },
    "birthday-3": { title: "День рождения рама", day: 25, month: 12 },
    "birthday-4": { title: "День рождения артура и илюши", day: 3, month: 2 }
  };

  const FACTS = [
    "У осьминога три сердца.",
    "Самая высокая гора в Солнечной системе — Олимп на Марсе.",
    "Пчёлы умеют сообщать направление к цветам с помощью танца.",
    "У человека около 600 мышц.",
    "Бананы слегка радиоактивны из-за содержания калия.",
    "В Антарктиде есть водопад красного цвета.",
    "Сатурн мог бы плавать в очень большой ванне, потому что его плотность меньше плотности воды.",
    "Первый компьютерный «баг» был настоящей бабочкой в реле компьютера.",
    "У акул кожа похожа на наждачную бумагу.",
    "Гепард может разгоняться до 100 км/ч примерно за 3 секунды."
  ];

  const STORAGE_KEY = "importantEventTimerData";
  const FACT_STORAGE_KEY = "factOfTheDay";

  const dom = {
    form: document.getElementById("event-form"),
    preset: document.getElementById("preset-event"),
    nameInput: document.getElementById("event-name"),
    dateInput: document.getElementById("event-date"),
    eventTitle: document.getElementById("event-title"),
    eventDateText: document.getElementById("event-date-text"),
    statusMessage: document.getElementById("status-message"),
    factDay: document.getElementById("fact-day"),
    parts: {
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

  init();

  function init() {
    bindEvents();
    renderFactOfDay();
    loadFromStorage();
  }

  function bindEvents() {
    dom.preset.addEventListener("change", onPresetChange);
    dom.form.addEventListener("submit", onFormSubmit);
  }

  function onPresetChange() {
    const preset = PRESET_EVENTS[dom.preset.value];
    if (!preset) {
      return;
    }

    const nearestDate = getNearestDateFromDayMonth(preset.day, preset.month);
    dom.nameInput.value = preset.title;
    dom.dateInput.value = toDateInputValue(nearestDate);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const title = dom.nameInput.value.trim();
    const dateRaw = dom.dateInput.value;
    if (!title || !dateRaw) {
      return;
    }

    const chosenDate = new Date(`${dateRaw}T00:00:00`);
    if (Number.isNaN(chosenDate.getTime())) {
      return;
    }

    // Подтверждение при смене уже выбранного события.
    if (
      currentEvent &&
      (currentEvent.title !== title || toDateInputValue(currentEvent.date) !== dateRaw)
    ) {
      const accepted = window.confirm("Вы уверены, что хотите выбрать новое событие?");
      if (!accepted) {
        return;
      }
    }

    currentEvent = { title, date: chosenDate };
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
      dom.statusMessage.textContent = "Событие уже наступило!";
      return;
    }

    dom.statusMessage.textContent = "";

    const diff = getDetailedTimeDiff(now, target);
    dom.parts.months.textContent = String(diff.months);
    dom.parts.weeks.textContent = String(diff.weeks);
    dom.parts.days.textContent = String(diff.days);
    dom.parts.hours.textContent = padNumber(diff.hours);
    dom.parts.minutes.textContent = padNumber(diff.minutes);
    dom.parts.seconds.textContent = padNumber(diff.seconds);
  }

  // Вычисление разницы: месяцы, недели, дни, часы, минуты, секунды.
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

    return { months, weeks, days, hours, minutes, seconds };
  }

  function setPartsToZero() {
    dom.parts.months.textContent = "0";
    dom.parts.weeks.textContent = "0";
    dom.parts.days.textContent = "0";
    dom.parts.hours.textContent = "00";
    dom.parts.minutes.textContent = "00";
    dom.parts.seconds.textContent = "00";
  }

  function renderEventSummary(eventData) {
    dom.eventTitle.textContent = eventData.title;
    dom.eventDateText.textContent = formatRuDate(eventData.date);
  }

  function saveToStorage(eventData) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        title: eventData.title,
        date: toDateInputValue(eventData.date)
      })
    );
  }

  function loadFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setDefaultEvent();
        return;
      }

      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed.title !== "string" || typeof parsed.date !== "string") {
        setDefaultEvent();
        return;
      }

      const restoredDate = new Date(`${parsed.date}T00:00:00`);
      if (Number.isNaN(restoredDate.getTime())) {
        setDefaultEvent();
        return;
      }

      currentEvent = { title: parsed.title, date: restoredDate };
      dom.nameInput.value = parsed.title;
      dom.dateInput.value = parsed.date;
      renderEventSummary(currentEvent);
      startOrRefreshTimer();
    } catch (error) {
      setDefaultEvent();
    }
  }

  function setDefaultEvent() {
    const preset = PRESET_EVENTS["new-year"];
    const date = getNearestDateFromDayMonth(preset.day, preset.month);
    currentEvent = { title: preset.title, date };
    dom.nameInput.value = preset.title;
    dom.dateInput.value = toDateInputValue(date);
    dom.preset.value = "new-year";
    renderEventSummary(currentEvent);
    saveToStorage(currentEvent);
    startOrRefreshTimer();
  }

  function getNearestDateFromDayMonth(day, month) {
    const now = new Date();
    const year = now.getFullYear();
    const candidate = new Date(year, month - 1, day, 0, 0, 0, 0);

    if (candidate.getTime() <= now.getTime()) {
      return new Date(year + 1, month - 1, day, 0, 0, 0, 0);
    }
    return candidate;
  }

  function toDateInputValue(dateValue) {
    const year = dateValue.getFullYear();
    const month = String(dateValue.getMonth() + 1).padStart(2, "0");
    const day = String(dateValue.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function formatRuDate(dateValue) {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(dateValue);
  }

  function padNumber(value) {
    return String(value).padStart(2, "0");
  }

  function renderFactOfDay() {
    const todayKey = getTodayKey();
    const storedRaw = localStorage.getItem(FACT_STORAGE_KEY);

    if (storedRaw) {
      try {
        const stored = JSON.parse(storedRaw);
        if (stored && stored.dateKey === todayKey && typeof stored.fact === "string") {
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
        fact: randomFact
      })
    );
  }

  function pickDailyFact(todayKey) {
    // Детерминированный выбор по дате, чтобы факт не менялся при перезагрузке в течение дня.
    const numeric = Number(todayKey.replace(/-/g, ""));
    const index = numeric % FACTS.length;
    return FACTS[index];
  }

  function getTodayKey() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
})();
