const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

menuToggle?.addEventListener('click', () => {
  navigation.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!menuToggle || !navigation) return;
  const target = event.target;
  if (navigation.classList.contains('active') && target !== menuToggle && !navigation.contains(target)) {
    navigation.classList.remove('active');
  }
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.textContent = 'Thanks! Your message has been received. I will reply soon.';
  contactForm.reset();
});
