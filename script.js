function getDetailedTimeDiff(fromDate, toDate) {
  let temp = new Date(fromDate.getTime());

  let years = 0;
  while (true) {
    const next = new Date(
      temp.getFullYear() + 1,
      temp.getMonth(),
      temp.getDate()
    );

    if (next <= toDate) {
      years++;
      temp = next;
    } else {
      break;
    }
  }

  let months = 0;
  while (true) {
    const next = new Date(
      temp.getFullYear(),
      temp.getMonth() + 1,
      temp.getDate()
    );

    if (next <= toDate) {
      months++;
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

  const totalDays = Math.floor(remainingMs / dayMs);
  remainingMs -= totalDays * dayMs;

  let weeks = Math.floor(totalDays / 7);
  let days = totalDays % 7;

  if (days >= 6) {
    weeks++;
    days = 0;
  }

  const hours = Math.floor(remainingMs / hourMs);
  remainingMs -= hours * hourMs;

  const minutes = Math.floor(remainingMs / minuteMs);
  remainingMs -= minutes * minuteMs;

  const seconds = Math.floor(remainingMs / secondMs);

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
