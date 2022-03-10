function countdown() {
  const now = new Date();
  const eventDate = new Date(2022, 08, 19);

  const currentTime = now.getTime();
  const eventTime = eventDate.getTime();

  const remainingTime = eventTime - currentTime;

  if (remainingTime <= 0) {
    document.querySelector(".timer").style.display = "none";
    document.querySelector(".heading").style.display = "none";
    document.querySelector(".birthday_text").style.display = "block";
    return;
  }

  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  h  %= 24;
  m  %= 60;
  s  %= 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.querySelector(".day").textContent = d;
  document.querySelector(".hour").textContent = h;
  document.querySelector(".minute").textContent = m;
  document.querySelector(".second").textContent = s;

  setTimeout(countdown, 1000);
}

countdown();
