/*var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

const menu = document.querySelector('.menu-body')
const menuBtn = document.querySelector('.menu-icon')

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', function(e) {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
}*/

document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('.menu-body');
  const menuBtn = document.querySelector('.menu-icon');
  const body = document.body;

  if (menu && menuBtn) {
      menuBtn.addEventListener('click', function() {
          menu.classList.toggle('active'); // Toggle menu visibility
          menuBtn.classList.toggle('active'); // Toggle menu icon state
          body.classList.toggle('lock'); // Toggle body scrolling
      });
  }
});


