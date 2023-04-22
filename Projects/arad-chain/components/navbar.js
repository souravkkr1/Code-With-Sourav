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
            <li><a href="blogs.html">Blogs</a></li>
            <li><a href="about.html">About</a></li>
            <li>
              <a href="contact.html"><button class="green-btn">Contact</button></a>
            </li>
          </ul>
        </div>
      </div>`
}

export default navbar;