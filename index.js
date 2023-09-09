function updateDateTime() {
  const dayOfTheWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const getCurrentTIme = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  const currentDate = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

  const currentTime = new Date().toUTCString().split(" ")[4] + " UTC";

  getCurrentTIme.textContent = currentTime;
  dayOfTheWeek.textContent = currentDayOfWeek;
}
updateDateTime();

setInterval(updateDateTime, 1000);
