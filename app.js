/* ============================================================
   Smart Library System — app.js
   Handles: log table rendering, role switching, nav active state
   ============================================================ */

/* ---------- 1. Sample access-log data ----------
   Replace this array with your backend/API response.
   Format: [ full name, role, time-in, time-out ]
   An empty time-out means the person is still inside. */
const logs = [
  ["Leonardo Sayas Jr.",    "Student (BSIT)", "10:42 AM", ""],
  ["Sandara Panis",         "Student (BSIT)", "10:42 AM", ""],
  ["Heart Janelle Seranno", "Student (BSIT)", "10:42 AM", "May 19, 2026 at 01:53 PM"],
  ["Prof. Alicia Santos",   "Faculty",        "10:42 AM", ""],
  ["Juffer Alabado",        "Student (BSIT)", "10:42 AM", ""],
  ["Stefanny Tapia",        "Student (BSIT)", "10:42 AM", ""],
  ["Angelika Quevedo",      "Student (BSIT)", "10:42 AM", ""],
  ["Archie Talidong",       "Student (BSIT)", "10:42 AM", ""],
  ["Kathleen Mangui",       "Student (BSIT)", "10:42 AM", ""],
  ["Jeimhar Tagongtong",    "Student (BSOA)", "10:42 AM", ""],
  ["Sara Mae Guinto",       "Student (COA)",  "10:42 AM", "May 19, 2026 at 01:53 PM"],
  ["John Vincent Villaos",  "Student (BSIT)", "10:42 AM", ""],
  ["Kent Danielle Palinar", "Student (BSOA)", "10:42 AM", ""],
  ["Philip Agolo",          "Student (BSIT)", "10:42 AM", "May 19, 2026 at 01:53 PM"],
  ["Hani Grace Saulong",    "Student (BSIT)", "10:42 AM", "May 19, 2026 at 01:53 PM"]
];

/* ---------- 2. Render the table ---------- */

// "Prof. Alicia Santos" -> "AS"  |  "Philip Agolo" -> "PA"
function initials(name){
  const words = name.replace(/^Prof\.\s*/, "").split(/\s+/);
  return ((words[0] || "")[0] + (words[1] || "")[0]).toUpperCase();
}

function renderLogs(rows){
  document.getElementById("log-rows").innerHTML = rows.map(function(entry){
    const name = entry[0], role = entry[1], timeIn = entry[2], timeOut = entry[3];
    const outCell = timeOut
      ? '<span class="pill out">' + timeOut + '</span>'
      : '<span class="inside">Still inside</span>';

    return '<tr>' +
      '<td><span class="user"><span class="initials">' + initials(name) + '</span>' + name + '</span></td>' +
      '<td class="role">' + role + '</td>' +
      '<td><span class="pill in">' + timeIn + '</span></td>' +
      '<td>' + outCell + '</td>' +
    '</tr>';
  }).join("");
}

renderLogs(logs);

/* ---------- 3. Active nav highlight ---------- */
document.getElementById("nav").addEventListener("click", function(e){
  const link = e.target.closest("a");
  if (!link) return;
  document.querySelectorAll("#nav a").forEach(function(a){ a.classList.remove("active"); });
  link.classList.add("active");
});
