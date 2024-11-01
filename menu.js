class MeuMenu extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
          <!-- Main-menu -->
          <div class="main-menu f-right d-none d-lg-block">
              <nav>                              
                  <ul id="navigation">                                                          
                      <li><a href="index.html">Inicio</a></li>
                      <li><a href="about.html">Olá! Somos a Andrey Casamento</a></li>
                      <li><a href="gallery.html">Portifólio</a></li>
                      <li><a href="booking.html">Contato</a></li>
                      <!-- <li><a href="blog.html">Blog</a>
                          <ul class="submenu">
                              <li><a href="blog.html">Blog</a></li>
                              <li><a href="single-blog.html">Blog Details</a></li>
                              <li><a href="elements.html">Element</a></li>
                          </ul>
                      </li> 
                      <li><a href="contact.html">Contato</a></li>-->
                  </ul>
              </nav>
          </div>
          <!-- Mobile Menu -->
          <div class="col-md-12">
              <div class="mobile_menu d-block d-lg-none"></div>
          </div>
      `;
  }
}

customElements.define('meu-menu', MeuMenu);