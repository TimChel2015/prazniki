<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Таймер до важного события</title>
    <link rel="stylesheet" href="./styles.css" />
    
    <style>
      .theme-switch {
        position: fixed;
        top: 20px;
        right: 25px;
        z-index: 9999;
      }

      #themeToggle {
        width: 52px;
        height: 52px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 22px;
        background: linear-gradient(135deg, #52d3aa, #7aa7ff);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease;
      }

      #themeToggle:active {
        transform: scale(0.95);
      }

      body.light-theme {
        background: #f5f5f5;
        color: #000;
      }

      body.light-theme .card {
        background: #ffffff;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      }

      body.light-theme input,
      body.light-theme select {
        background: #fff;
        color: #000;
        border: 1px solid #ccc;
      }
    </style>
  </head>
  <body>
    <div class="theme-switch">
      <button id="themeToggle" type="button" aria-label="Переключить тему оформления">🌙</button>
    </div>

    <div class="bg-blur bg-blur--one"></div>
    <div class="bg-blur bg-blur--two"></div>

    <main class="container">
      <header class="hero">
        <div class="lang-switcher">
          <label for="language-select" id="language-label">Язык</label>
          <select id="language-select" name="language-select" aria-label="Выбор языка">
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uk">Українська</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
            <option value="it">Italiano</option>
            <option value="pt">Português</option>
            <option value="pl">Polski</option>
            <option value="tr">Türkçe</option>
            <option value="ar">العربية</option>
            <option value="he">עברית</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
          </select>
        </div>
        <h1>Таймер до важного события</h1>
        <p class="hero-subtitle" id="hero-subtitle">Выберите событие и узнайте, сколько осталось времени.</p>
      </header>

      <section class="card controls-card">
        <h2 id="controls-title">Выбор события</h2>
        <form id="event-form" class="event-form">
          <div class="field">
            <label for="event-name" id="event-name-label">Название события</label>
            <input
              id="event-name"
              name="event-name"
              type="text"
              placeholder="Например: Моя олимпиада"
              required
              maxlength="70"
            />
          </div>

          <div class="field">
            <label for="event-date" id="event-date-label">Дата события</label>
            <input id="event-date" name="event-date" type="date" required />
          </div>

          <div class="field">
            <label for="event-time" id="event-time-label">Время события</label>
            <input id="event-time" name="event-time" type="time" required value="00:00" />
          </div>

          <div class="field">
            <label for="notify-mode" id="notify-mode-label">Уведомление при завершении</label>
            <select id="notify-mode" name="notify-mode">
              <option value="sound_notification"></option>
              <option value="sound_only"></option>
              <option value="notification_only"></option>
              <option value="no_notification"></option>
            </select>
          </div>

          <button type="submit" class="btn-primary" id="submit-button">Запустить таймер</button>
        </form>
      </section>

      <section class="card countdown-card">
        <div class="event-summary">
          <p><span id="event-title-label">Событие:</span> <strong id="event-title">-</strong></p>
          <p><span id="event-date-text-label">Дата:</span> <strong id="event-date-text">-</strong></p>
        </div>

        <p id="status-message" class="status-message" aria-live="polite"></p>

        <div class="timer-grid" aria-live="polite">
          <div class="time-box">
            <span id="years">0</span>
            <small id="years-label">Года</small>
          </div>
          <div class="time-box">
            <span id="months">0</span>
            <small id="months-label">Месяцев</small>
          </div>
          <div class="time-box">
            <span id="weeks">0</span>
            <small id="weeks-label">Недель</small>
          </div>
          <div class="time-box">
            <span id="days">0</span>
            <small id="days-label">Дней</small>
          </div>
          <div class="time-box">
            <span id="hours">0</span>
            <small id="hours-label">Часов</small>
          </div>
          <div class="time-box">
            <span id="minutes">0</span>
            <small id="minutes-label">Минут</small>
          </div>
          <div class="time-box">
            <span id="seconds">0</span>
            <small id="seconds-label">Секунд</small>
          </div>
        </div>
      </section>

      <section class="card fact-card">
        <h2 id="fact-title">Факт дня</h2>
        <p id="fact-day">Загружаем интересный факт...</p>
      </section>
    </main>

    <script src="./script.js"></script>

    <script>
      (function() {
        const themeButton = document.getElementById("themeToggle");

        if (localStorage.getItem("theme") === "light") {
          document.body.classList.add("light-theme");
          themeButton.innerHTML = "☀️";
        }

        themeButton.addEventListener("click", () => {
          document.body.classList.toggle("light-theme");
          const isLight = document.body.classList.contains("light-theme");
          themeButton.innerHTML = isLight ? "☀️" : "🌙";
          localStorage.setItem("theme", isLight ? "light" : "dark");
        });
      })();
    </script>
  </body>
</html>
