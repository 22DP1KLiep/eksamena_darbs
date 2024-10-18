// Get the modals
var modal1 = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the buttons that open the modals
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> elements that close the modals
var span1 = document.getElementById("myModal").getElementsByClassName("close")[0];
var span2 = document.getElementById("myModal2").getElementsByClassName("close")[0];
var span3 = document.getElementById("myModal3").getElementsByClassName("close")[0];

// When the user clicks the buttons, open the modals
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modals
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// HAMBURGER
// Selecting the hamburger icon and the navigation menu
// Select the hamburger icon and the navigation menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});


function loadNavbar() {
  const navbarHTML = `
  <link rel="stylesheet" href="style.css"> <!-- Link to the external CSS file -->

  <header>
  <nav>
    
    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul>
      <li><a href="#">Home</a>
        <!-- <ul class="dropdown">
          <li><a href="#">Dogpūls</a></li>
          <li><a href="#">Skubijs Dū</a></li>
          <li><a href="#">Misters Pībodijs</a></li>
        </ul> -->
      </li>
      <li><a href="#">About</a>
        <ul class="dropdown">
          <li><a href="AboutDogs.html">Par suņiem</a></li>
          <li><a href="AboutUs.html">Par mums</a></li>
          <li><a href="AboutWeb.html">Par šo mājaslapu</a></li>
        </ul>
      </li>
      <li><a href="#">Contact</a>
        <!-- <ul class="dropdown">
          <li><a href="#">Menedžrs</a></li>
          <li><a href="#">Boss</a></li>
          <li><a href="#">Lietvedis</a></li>
        </ul> -->
      </li>

      
    </ul>
   
    <div class="dark-mode-switch">
      <input type="checkbox" id="dark-mode-toggle" />
      <label class="slider round" for="dark-mode-toggle"></label>
    </div>
    
  </nav>
</header>
  `;
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

// Call the function to load the navbar
loadNavbar();








