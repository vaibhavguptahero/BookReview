// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import 'bootstrap'
import "@hotwired/turbo-rails"
import "controllers"
import 'bootstrap/dist/css/bootstrap.min.css'
// import Rails from 'rails-ujs'

// Rails.start()




import $ from 'jquery';
global.$ = global.jQuery = $;

import popper from 'popper.js';
global.Popper = Popper;

document.addEventListener('DOMContentLoaded', () => {
    $('.dropdown-toggle').dropdown();
});