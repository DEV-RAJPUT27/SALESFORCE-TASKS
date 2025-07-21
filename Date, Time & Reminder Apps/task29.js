const scheduleBox = document.getElementById("schedule-box");

const timeSlots = [
  "6 - 7 AM", "7 - 8 AM", "8 - 9 AM", "9 - 10 AM", "10 - 11 AM",
  "11 - 12 PM", "12 - 1 PM", "1 - 2 PM", "2 - 3 PM", "3 - 4 PM",
  "4 - 5 PM", "5 - 6 PM", "6 - 7 PM", "7 - 8 PM", "8 - 9 PM"
];

timeSlots.forEach(slot => {
  const slotDiv = document.createElement("div");
  slotDiv.className = "time-slot";

  const label = document.createElement("div");
  label.className = "time-label";
  label.textContent = slot;

  const input = document.createElement("input");
  input.className = "time-input";
  input.type = "text";
  input.placeholder = "Your task...";

  slotDiv.appendChild(label);
  slotDiv.appendChild(input);

  scheduleBox.appendChild(slotDiv);
});
