// ********Code By CapeTownKimmy******** //

const openModalButtons = document.querySelectorAll('[data-modal-target');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const errorMessage = document.getElementById('errorMessage');
const validRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let userName
let userEmail
let userMessage



//-------OPEN POP UP - BY CLICKING SUBMIT BUTTON-------//
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        getUserName();
    })
})

//-------CLOSE POP UP - CLICKING ON THE X BUTTON-------//
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(model => {
        closeModal(modal)
    });
})

//-------CLOSE POP UP - CLICKING ON OVERLAY-------//
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
            closeModal(modal)
        });
    })


//--**-----FUNCTION - OPEN POP UP-----**--//
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
} 

//--**-----FUNCTION - CLOSE POP UP-----**--//
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.getElementById('nameInput').value = ''; // Reset form on closing pop up//
    document.getElementById('emailInput').value = ''; // Reset form on closing pop up//
    document.getElementById('messageInput').value = ''; // Reset form on closing pop up//
} 

//--**-----FUNCTION - GET USERNAME-----**--//
function getUserName(input) {
    userName = document.getElementById('nameInput').value;
    if (userName == '' || userName == null) {
        errorMessage.innerHTML = 'Please enter your name';
    } else {
        getUserEmail();
    }
}

//--**-----FUNCTION - GET USER-EMAIL-----**--//
function getUserEmail(input) {
    userEmail = document.getElementById('emailInput').value;
    validateEmail();
}

//--**-----FUNCTION - VALIDATE USER-EMAIL-----**--//
function validateEmail() {
    if (!userEmail.match(validRegEx)) {
        errorMessage.innerHTML = 'Please enter a valid email'
    } else if (userEmail == '' || userEmail == null) {
        errorMessage.innerHTML = 'Please enter a valid email'
    } else {
        errorMessage.innerHTML = '';
        openModal(modal);
    }
}
