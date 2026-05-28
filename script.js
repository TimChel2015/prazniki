```js
// ЗАМЕНИ СТАРУЮ ФУНКЦИЮ НА ЭТУ
function updateYearsLabel(yearsValue) {
  if (!dom.yearsLabel) {
    return;
  }

  const langSet = getLangSet();

  if (currentLang === "ru") {

    const lastDigit = yearsValue % 10;
    const lastTwoDigits = yearsValue % 100;

    if (
      lastDigit === 1 &&
      lastTwoDigits !== 11
    ) {

      dom.yearsLabel.textContent =
        langSet.yearsOne;

    } else if (
      lastDigit >= 2 &&
      lastDigit <= 4 &&
      !(lastTwoDigits >= 12 &&
        lastTwoDigits <= 14)
    ) {

      dom.yearsLabel.textContent =
        langSet.yearsFew;

    } else {

      dom.yearsLabel.textContent =
        langSet.yearsMany;
    }

    return;
  }

  dom.yearsLabel.textContent =
    yearsValue === 1
      ? langSet.yearsOne
      : langSet.yearsMany;
}



// ЗАМЕНИ СТАРУЮ ФУНКЦИЮ НА ЭТУ
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

  // ИСПРАВЛЕНИЕ:
  // 12 месяцев = 1 год
  const years = Math.floor(months / 12);

  months %= 12;

  let remainingMs =
    toDate.getTime() - temp.getTime();

  const dayMs =
    24 * 60 * 60 * 1000;

  const hourMs =
    60 * 60 * 1000;

  const minuteMs =
    60 * 1000;

  const secondMs =
    1000;

  const totalDaysAfterMonths =
    Math.floor(remainingMs / dayMs);

  remainingMs -=
    totalDaysAfterMonths * dayMs;

  let weeks =
    Math.floor(totalDaysAfterMonths / 7);

  let days =
    totalDaysAfterMonths % 7;

  // ИСПРАВЛЕНИЕ:
  // если осталось 6 дней —
  // округляем до недели
  if (days >= 6) {

    weeks += 1;

    days = 0;
  }

  const hours =
    Math.floor(remainingMs / hourMs);

  remainingMs -=
    hours * hourMs;

  const minutes =
    Math.floor(remainingMs / minuteMs);

  remainingMs -=
    minutes * minuteMs;

  const seconds =
    Math.floor(remainingMs / secondMs);

  return {
    years,
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds
  };
}
```
