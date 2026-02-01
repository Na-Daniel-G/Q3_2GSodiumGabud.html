document.addEventListener('DOMContentLoaded', () => {
  const signups = JSON.parse(localStorage.getItem('clubSignups')) || [];
  const clubFilter = document.getElementById('clubFilter');
  const tableContainer = document.getElementById('tableContainer');
  const totalCount = document.getElementById('totalCount');

  // Populate dropdown with unique clubs
  function loadClubs() {
    // Clear existing options except first
    clubFilter.innerHTML = `<option value="ALL">-- select an option --</option>`;
    
    const clubs = [...new Set(signups.map(s => s.club))];
    clubs.forEach(club => {
      const option = document.createElement('option');
      option.value = club;
      option.textContent = club;
      clubFilter.appendChild(option);
    });
  }

  // Render table
  function renderTable(data) {
    tableContainer.innerHTML = '';
    totalCount.textContent = `Total Signup : ${data.length}`;

    if (data.length === 0) {
      tableContainer.innerHTML = `<div class="no-data">No Sign Ups for the club</div>`;
      return;
    }

    let table = `<table>
      <thead>
        <tr>
          <th>Club</th>
          <th>ID</th>
          <th>Fullname</th>
          <th>Grade</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Intern|Extern</th>
        </tr>
      </thead>
      <tbody>
    `;

    data.forEach(s => {
      table += `<tr>
        <td>${s.club}</td>
        <td>${s.studentID}</td>
        <td>${s.fullName}</td>
        <td>${s.gradeLevel}</td>
        <td>${s.email}</td>
        <td>${s.phone}</td>
        <td>${s.internExtern}</td>
      </tr>`;
    });

    table += `</tbody></table>`;
    tableContainer.innerHTML = table;
  }

  loadClubs();
  renderTable(signups);

  clubFilter.addEventListener('change', () => {
    if (clubFilter.value === 'ALL') {
      renderTable(signups);
    } else {
      const filtered = signups.filter(s => s.club === clubFilter.value);
      renderTable(filtered);
    }
  });
});
