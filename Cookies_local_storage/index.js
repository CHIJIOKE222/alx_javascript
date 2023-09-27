function setCookies() {
    const firstName = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    // Set cookies for first name and email with expiration date (10 days)
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);
    const options = { expires: expirationDate };
    document.cookie = `firstname=${firstName}; expires=${options.expires.toUTCString()}`;
    document.cookie = `email=${email}; expires=${options.expires.toUTCString()}`;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return '';
}

function showCookies() {
    const email = getCookie('email');
    const firstname = getCookie('firstname');

    const cookiesElement = document.createElement('p');
    cookiesElement.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
    
    document.body.appendChild(cookiesElement);
}

function showForm() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.style.display = 'block';
    }
}

function hideForm() {
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.style.display = 'none';
    }
}

function deleteCookiesAndShowForm() {
    document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    showForm();
}

function showWelcomeMessageOrForm() {
    const firstname = getCookie('firstname');
    if (firstname) {
        const welcomeMessage = document.getElementById('welcomeMessage');
        if (welcomeMessage) {
            welcomeMessage.textContent = `Welcome ${firstname} (logout)`;
            welcomeMessage.style.fontWeight = 'normal';
            welcomeMessage.style.fontStyle = 'italic';
            welcomeMessage.style.position = 'relative';
            welcomeMessage.style.left = '10px';
            welcomeMessage.style.cursor = 'pointer';
            welcomeMessage.onclick = deleteCookiesAndShowForm;
        }
    } else {
        showForm();
    }
}