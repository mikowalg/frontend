// Plik: main.js

// funkcje pomocnicze do zapisu i odczytu z localStorage
function saveToStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
	const data = localStorage.getItem(key);
	return data ? JSON.parse(data) : null;
}

// Przykładowe funkcje do obsługi formularzy
document.addEventListener("DOMContentLoaded", function () {
	// Obsługa formularza logowania
	const loginForm = document.getElementById("login-form");
	if (loginForm) {
		loginForm.addEventListener("submit", function (e) {
			e.preventDefault();
			const username = document.getElementById("username").value;
			const password = document.getElementById("password").value;
			// tutaj logowanie - na razie tylko sprawdzamy dane
			const user = getFromStorage("user");
			if (user && user.username === username && user.password === password) {
				alert("Zalogowano!");
			} else {
				alert("Błędne dane logowania!");
			}
		});
	}

	// Obsługa formularza rejestracji
	const registerForm = document.getElementById("register-form");
	if (registerForm) {
		registerForm.addEventListener("submit", function (e) {
			e.preventDefault();
			const username = document.getElementById("username").value;
			const password = document.getElementById("password").value;
			// tutaj rejestracja - na razie zapisujemy dane do localStorage
			saveToStorage("user", { username, password });
			alert("Zarejestrowano!");
		});
	}

	// Obsługa formularza dodawania klienta
	const addClientForm = document.getElementById("add-client-form");
	if (addClientForm) {
		addClientForm.addEventListener("submit", function (e) {
			e.preventDefault();
			const name = document.getElementById("name").value;
			const surname = document.getElementById("surname").value;
			// tutaj dodajemy klienta - na razie zapisujemy dane do localStorage
			let clients = getFromStorage("clients") || [];
			clients.push({ name, surname });
			saveToStorage("clients", clients);
			alert("Dodano klienta!");
		});
	}
});
