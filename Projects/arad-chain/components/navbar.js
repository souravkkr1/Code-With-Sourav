function navbar() {
  return `
    <div class="navbar">
        <div class="logo">
          <a href="/"><img src="assets/images/header-logo.png" alt=""></a>
        </div>
        <div class="links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="mission.html">Mission</a></li>
            <li><a href="registration.html">Registration</a></li>
            <li><a href="blogs.html">News/Blogs</a></li>
            <li><a href="about.html">About</a></li>
            <a href="contact.html"><button class="green-btn">Contact</button></a>
          </ul>
        </div>
        <i 
            onClick="{openFunc()}"
            id="ham-icon"
            class="fa-solid fa-bars" style="color: #000000;"></i>
      </div>

      <!-- Ham menu -->
      <div class="ham-menu">
        <ul>
          <li onClick="{closeFunc()}">X</li>
          <li><a href="#">Home</a></li>
          <li><a href="misison.html">Mission</a></li>
          <li><a href="registration.html">Regisration</a></li>
          <li><a href="blogs.html">News/Blogs</a></li>
          <li><a href="about.html">About</a></li>
          <li>
              <a href="contact.html"><button class="white-btn">Contact</button></a>
          </li>
        </ul>
      </div>
      `
}

export default navbar;


