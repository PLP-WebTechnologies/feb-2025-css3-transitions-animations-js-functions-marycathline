const toggleBtn = document.getElementById('toggleBtn');
const saveBtn = document.getElementById('saveBtn');
const usernameInput = document.getElementById('username');
const greeting = document.getElementById('greeting');

// Load theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme);

// Load username
const savedName = localStorage.getItem('username');
if (savedName) {
  greeting.textContent = `Welcome back, ${savedName}!`;
  usernameInput.value = savedName;
}

// Save name and animate greeting
saveBtn.addEventListener('click', () => {
  const name = usernameInput.value.trim();
  if (name) {
    localStorage.setItem('username', name);
    greeting.textContent = `Nice to meet you, ${name}!`;

    greeting.animate([
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(1.2)', opacity: 0.7 },
      { transform: 'scale(1)', opacity: 1 }
    ], {
      duration: 500,
      easing: 'ease-in-out'
    });
  }
});

// Toggle theme and save preference
toggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.classList.replace(currentTheme, newTheme);
  localStorage.setItem('theme', newTheme);
});
