// Navigation Button Elements
const contactBtn = document.getElementById('contactBtn');
const todoBtn = document.getElementById('todoBtn');

// Sections
const contactSection = document.getElementById('contactSection');
const todoSection = document.getElementById('todoSection');

// Show Contact Form
contactBtn.addEventListener('click', () => {
    contactSection.classList.remove('hidden');
    todoSection.classList.add('hidden');
});

// Show To-Do List
todoBtn.addEventListener('click', () => {
    todoSection.classList.remove('hidden');
    contactSection.classList.add('hidden');
});

// Form Validation
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill all fields!';
        formMessage.style.color = 'red';
        return;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = 'Enter a valid email!';
        formMessage.style.color = 'red';
        return;
    }

    formMessage.textContent = 'Form submitted successfully!';
    formMessage.style.color = 'green';
    form.reset();
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// To-Do List
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="this.parentElement.remove()">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
});
