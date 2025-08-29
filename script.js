// sample student data

const students = [

  { roll: 1, name: "Aarav", marks: 85 },

  { roll: 2, name: "Ananya", marks: 92 },

  { roll: 3, name: "Kabir", marks: 74 },

  { roll: 4, name: "Zara", marks: 88 }

];

// get table body

const tbody = document.querySelector("#studentTable tbody");

// add rows dynamically

students.forEach(student => {

  const row = document.createElement("tr");

  row.innerHTML = `

    <td>${student.roll}</td>

    <td>${student.name}</td>

    <td>${student.marks}</td>

  `;

  tbody.appendChild(row);

});