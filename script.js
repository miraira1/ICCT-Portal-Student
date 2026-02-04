function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user !== "" && pass !== "") {
    localStorage.setItem("student", user);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Please fill in all fields!";
  }
}

function logout() {
  localStorage.removeItem("student");
  window.location.href = "index.html";
}

if (window.location.pathname.includes("dashboard.html")) {
  const student = localStorage.getItem("student");
  if (!student) {
    window.location.href = "index.html";
  } else {
    document.getElementById("welcome").innerText = "Welcome, " + student + "!";
  }
}
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const main = document.querySelector('.main');
  
  
  sidebar.classList.toggle('hidden');
  
 
  if (main) {
    main.classList.toggle('expanded');
  }
}

