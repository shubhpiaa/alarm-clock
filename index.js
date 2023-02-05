const timeInput = document.getElementById("timeInput");
const setAlarmButton = document.getElementById("setAlarm");
const alarmMessage = document.getElementById("alarmMessage");

setAlarmButton.addEventListener("click", function() {
  const alarmTime = timeInput.value;
  const now = new Date();
  const alarmTimeInMs = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    alarmTime.split(":")[0],
    alarmTime.split(":")[1]
  ).getTime();
  const timeToAlarm = alarmTimeInMs - now.getTime();
  if (timeToAlarm <= 0) {
    alarmMessage.innerText = "Alarm time must be in the future";
    return;
  }
  setTimeout(function() {
    alert("Time to wake up!");
  }, timeToAlarm);
  alarmMessage.innerText = "Alarm set for " + alarmTime;
});
