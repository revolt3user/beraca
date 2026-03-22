import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from "./styles-home.css?raw";
@customElement('page-home')
export class PageHome extends LitElement {
  @property()
  name?: string = 'page-home';

  render(): TemplateResult {
    return html`
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,600;1,400;1,600&family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
  <div class="body">
    <!-- Skip link accesibilidad -->
    <a class="skip-link" href="#main">Saltar al contenido</a>

    <!-- ── TOP APP BAR ── -->
    <header class="top-app-bar">
      <div class="top-app-bar__inner">

        <!-- Marca -->
        <div class="top-app-bar__brand-row">
          <h1 class="brand-name">The Modern Atelier</h1>
        </div>

        <!-- Búsqueda + Login -->
        <div class="top-app-bar__controls-row">
          <div class="search-group">
            <span class="material-symbols-outlined search-icon">search</span>
            <input class="search-input" type="text" placeholder="Buscar..." />
          </div>
          <div>
            <a class="login-link" href="#">Iniciar Sesión</a>
          </div>
        </div>

      </div>
    </header>

    <!-- ── MAIN ── -->
    <main id="main">

      <!-- Hero Campaign -->
      <section class="hero">
        <div class="hero__frame">
          <img class="hero__img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwx-AtIpdaemmdcU6GikPB5VRAk4stzLloB4cUwMZUdYX5ZNFaH7uj00qULvrsksM6aLLAEid6HChfVeDbg7PabWhK_dp3Alxn4Q_Kz0EVqRX9VmuOjKknjNDNpEJq-JR-Vvo2348EGOMt0AEzsRtSG5d8mijCMhpCDrA-KGkAkeFrQrLZ2AhN0cF2K7s4bKSWBDCIW6e4a-eZR0YprjRg8dL_7c16X-2i4wFf5AQlm7PGqcShs-_wliJwg0rJGZbFoD_8g39tjfU"
            alt="Luxurious tan leather handbag in a minimalist architectural setting" />
          <div class="hero__overlay">
            <span class="hero__edition">Edition No. 04</span>
            <h2 class="hero__title">La Colección Atemporal</h2>
            <button class="hero__cta">Explorar Serie</button>
          </div>
        </div>
      </section>

      <!-- Category Nav & Filters -->
      <section class="category-nav">
        <div class="category-nav__inner">
          <div class="category-nav__tabs no-scrollbar">
            <button class="category-tab category-tab--active">Todos</button>
            <button class="category-tab category-tab--inactive">Totes</button>
            <button class="category-tab category-tab--inactive">Bolsos</button>
            <button class="category-tab category-tab--inactive">Accesorios</button>
          </div>
          <button class="filters-btn">
            <span class="material-symbols-outlined">tune</span>
            Filtros
          </button>
        </div>
      </section>

      <!-- Product Grid -->
      <section class="product-grid">
        <div class="product-grid__layout">

          <!-- Card 1 -->
          <article class="product-card">
            <div class="product-card__image-wrap">
              <img class="product-card__img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMV9eAi0NQQklu4HlE_G926NVAWBKEHwBVb94oUw8Ix8aop-v2a6_JDMTWy-N61cValPUHTYFTLKoUsC1tGtMYhc4VBn34I2fT7H6pL81KhWJvsxJ9i3Teh3y1xWch7fBHqjBylu_Z9qQq--ujXpjnH6BgZlynwndO6hjENvNtxPShRhoBPxJTFDYmDQ57GBM1U-Bb9umCm9yiWLvUNxL_OSOTHC0lW8SwB0BU9jBZaybl46fEMCdvJpAtSS7I1ct3FDjYgpWeZs0"
                alt="Minimalist brown leather tote bag against light wall" />
              <span class="product-card__badge">Nuevo</span>
            </div>
            <div class="product-card__info">
              <h3 class="product-card__name">Artisan Tote</h3>
              <p class="product-card__material">Piel de becerro</p>
              <p class="product-card__price">€890</p>
            </div>
          </article>

          <!-- Card 2 -->
          <article class="product-card">
            <div class="product-card__image-wrap">
              <img class="product-card__img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk8bc5ox3Fpw4_9DixE4lsE5g6YBZnN6T91vVaY6FBovcu8iqf6KDoD6u_R2LpDYYpP59eTYCmIcwz7UEolhBFjtZxnyiCLfFLgynFrH8XIu_-8oLMIQ-w9OXUccdvQxW8J0H2GyhoLgpojqPF8B_FNqrVq1DG5c-2uIqGgrldaYtfFjRXAfZxEPMa6OpYJgKm5dQLWbyFaIFBmeE0GqC_3BBquMOuYoifmN1WSDAI5AEciJ2SrLXDCQVPY0gqFYDw1TJZn7FLMGM"
                alt="Elegant small leather crossbody bag in terracotta color" />
            </div>
            <div class="product-card__info">
              <h3 class="product-card__name">Leather Mini</h3>
              <p class="product-card__material">Terracota Saffiano</p>
              <p class="product-card__price">€450</p>
            </div>
          </article>

          <!-- Card 3 -->
          <article class="product-card">
            <div class="product-card__image-wrap">
              <img class="product-card__img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN19cECNNp4PzhagnCAtVyHYj1RGgjbKtOM2vfxOEyiRk0O3xhKTuQdQuS9qytHRLDWau6ZNFhy0aUorWsm3Homif1xgyFjeD0SiDcDYiE5VZH18WI0nrUgMg24szMPZJ4U6V7COFmtKF-hFbA-tKLERwyzADzxaKFQUs5gQJZfuesn81V77ln249suVYEitOD6dWn1xc6uWMy7jSRx8IdibC9K8Ol3BKcWXCdd6a_DPoGbi4IIemkxV5nyj7LaiZxIBiTXhANtwI"
                alt="Sleek black designer handbag with gold details" />
            </div>
            <div class="product-card__info">
              <h3 class="product-card__name">Midnight Clasp</h3>
              <p class="product-card__material">Edición Limitada</p>
              <p class="product-card__price">€1.200</p>
            </div>
          </article>

          <!-- Card 4 -->
          <article class="product-card">
            <div class="product-card__image-wrap">
              <img class="product-card__img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKy_BXwM1CGE9AAJ7mOEwC0zT8nVEcOHn5cNQ3KY5GlESoomSg4wBddchbmiZEExW-M1dSXnAzBQUmsewE5KqTOZZP9KVx44jJdzZK7VdAs4drcxWW1cpmhD95sI6q_DgSzKuCT6bvKMI31d-2B7uni7GS1O3j1QQsnUCM9RHFW3Qt804Uit2AnI1xjPxTAtgVb2qF3Po0beIzKKrYR-OrksM9hMRoxbD-X37UtZr-FTP4CiONSyfGu1Fr8kzAyn8Vxe4FSxtifvI"
                alt="Handcrafted leather wallet and accessories set" />
            </div>
            <div class="product-card__info">
              <h3 class="product-card__name">Document Case</h3>
              <p class="product-card__material">Cuero Vachetta</p>
              <p class="product-card__price">€320</p>
            </div>
          </article>

        </div>
      </section>

      <!-- Campaign Block -->
      <section class="campaign-block">
        <div class="campaign-block__card">
          <div class="campaign-block__content">
            <span class="campaign-block__eyebrow">Curaduría</span>
            <h2 class="campaign-block__title">Esenciales de Día</h2>
            <p class="campaign-block__body">Funcionalidad y artesanía para el ritmo urbano.</p>
            <button class="campaign-block__cta">Descubrir</button>
          </div>
          <img class="campaign-block__img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLSsSX2iSWSlwNQkHUi8gOASwFUUPKFMlen5mHn2ayrfplfZqsI0klSZUtUCJC9LlViTiDT2QZ5wzVnOFRKPjtXFiLVzI5DIGBXTke__PuGwi4yruKicM7wLax5C9lrk6F9XxG7zmmtw-AaHiHVEzIQlrRE66Dzyv0bt-yTzHjOyACgRRrkIA61gaz_MswDdLJIo39Ks3LkfE4IaWJstVMkExsV_F7xcrcs2K3r-qRQaDWU4W_TBvBJLD0hUgxq5bR89QFErOBPFs"
            alt="Detailed close up of leather stitching on a luxury bag" />
        </div>
      </section>

      <!-- Secondary Campaign -->
      <section class="secondary-campaign">
        <div class="secondary-campaign__grid">

          <div class="gift-card">
            <img class="gift-card__img"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzBXeSewA0ghbCzENrO-DhyRQXPpjp0y-Jch-MimGDak3F3SX2FZQbowIjbMIBsHRJY2oz4ANVqyus648WMqNSB4Ko-e3IzNOE6mAr18bOIIO_zB-1lJ9kxXnJ3B-eupuHvw09stPc_5_PUGgRZhRF1vkjeOFEY61dDxCsCOFEYVLclSRK6LmxyNeRpsR7auExDhc4irgRVRnUUeNoI85Qh-LTMu5RLUKuQUubKZ33w0Z-IMB0qd-XRXxE1aLiyaFmhf1gTQnU90I"
              alt="A beautifully wrapped luxury gift box with ribbon" />
            <div class="gift-card__overlay">
              <h3 class="gift-card__title">Regalos Exclusivos</h3>
              <p class="gift-card__subtitle">Servicio de Personalización</p>
            </div>
          </div>

          <div class="philosophy-card">
            <h3 class="philosophy-card__title">Nuestra Filosofía</h3>
            <p class="philosophy-card__body">Piezas eternas creadas manualmente en nuestro atelier, alejadas de las
              temporadas.</p>
            <a class="philosophy-card__link" href="#">Nuestra historia</a>
          </div>

        </div>
      </section>

      <!-- Load More -->
      <div class="load-more-wrap">
        <button class="load-more-btn">
          Cargar más
          <span class="material-symbols-outlined">expand_more</span>
        </button>
      </div>

    </main>

    <!-- ── BOTTOM NAV ── -->
    <nav class="bottom-nav">
      <a class="bottom-nav__item bottom-nav__item--active" href="#">
        <span class="material-symbols-outlined bottom-nav__icon">temp_preferences_custom</span>
        <span class="bottom-nav__label">Atelier</span>
      </a>
      <a class="bottom-nav__item bottom-nav__item--inactive" href="#">
        <span class="material-symbols-outlined bottom-nav__icon">auto_awesome_motion</span>
        <span class="bottom-nav__label">Colección</span>
      </a>
      <a class="bottom-nav__item bottom-nav__item--inactive" href="#">
        <span class="material-symbols-outlined bottom-nav__icon">search</span>
        <span class="bottom-nav__label">Buscar</span>
      </a>
      <a class="bottom-nav__item bottom-nav__item--inactive" href="#">
        <span class="material-symbols-outlined bottom-nav__icon">inventory_2</span>
        <span class="bottom-nav__label">Archivo</span>
      </a>
    </nav>

  </div>
    `;
  }

  static styles = unsafeCSS(styles);
}

declare global {
  interface HTMLElementTagNameMap {
    'page-home': PageHome;
  }
}