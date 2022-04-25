const menu_btn = document.getElementById('menu-btn');
const mobile_menu = document.getElementById('menu');
const features = document.getElementById('mobile-features');
const features_drop = document.getElementById('features-dropdown');
const company = document.getElementById('mobile-company');
const company_drop = document.getElementById('company-dropdown');
const arrow_down = document.getElementsByClassName('icon-arrow-down');
const arrow_up = document.getElementsByClassName('icon-arrow-up');

function menuToggle() {
  menu_btn.classList.toggle('open');
  mobile_menu.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

function featuresToggle() {
  features_drop.classList.toggle('hidden');
  arrow_down[2].classList.toggle('hidden');
  arrow_up[2].classList.toggle('hidden');
}

function companyToggle() {
  company_drop.classList.toggle('hidden');
  arrow_down[3].classList.toggle('hidden');
  arrow_up[3].classList.toggle('hidden');
}

menu_btn.addEventListener('click', menuToggle);
features.addEventListener('click', featuresToggle);
company.addEventListener('click', companyToggle);
