document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const viewBtn = document.getElementById('viewSignupsBtn');

  let signups = JSON.parse(localStorage.getItem('clubSignups')) || [];

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!confirm('Are you sure you want to submit?')) return;

    const internExtern = document.getElementById('intern').checked ? 'Intern' : 'Extern';

    const newSignup = {
      studentID: document.getElementById('studentID').value.trim(),
      fullName: document.getElementById('fullName').value.trim(),
      birthday: document.getElementById('birthday').value,
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      gradeLevel: document.getElementById('gradeLevel').value,
      club: document.getElementById('club').value,
      internExtern: internExtern,
      reason: document.getElementById('reason').value.trim()
    };

    signups.push(newSignup);
    localStorage.setItem('clubSignups', JSON.stringify(signups));

    alert('Signup saved successfully!');
    form.reset();
  });

  viewBtn.addEventListener('click', () => {
    window.location.href = 'viewSignUps.html';
  });
});
