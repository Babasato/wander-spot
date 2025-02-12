/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

jQuery(document).ready(function ($) {
  "use strict";

  var top_header = $(".parallax-content");
  top_header.css({ "background-position": "center center" }); // better use CSS

  $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({
      "background-position": "center calc(50% + " + st * 0.5 + "px)",
    });
  });

  $("body").scrollspy({
    target: ".fixed-side-navbar",
    offset: 200,
  });

  // smoothscroll on sidenav click

  $(".tabgroup > div").hide();
  $(".tabgroup > div:first-of-type").show();
  $(".tabs a").click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
      others = $this.closest("li").siblings().children("a"),
      target = $this.attr("href");
    others.removeClass("active");
    $this.addClass("active");
    $(tabgroup).children("div").hide();
    $(target).show();
  });

  var owl = $("#owl-testimonials");

  owl.owlCarousel({
    pagination: true,
    paginationNumbers: false,
    autoPlay: 6000, //Set AutoPlay to 3 seconds
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select elements with error handling
  const dropdownToggle = document.querySelector(".nav-item.dropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (!dropdownToggle || !dropdownMenu) {
    console.error("Dropdown elements not found");
    return;
  }

  // Set initial state
  dropdownMenu.style.display = "none";
  let timeoutId = null;

  // Helper function to handle display
  const showDropdown = () => {
    clearTimeout(timeoutId);
    dropdownMenu.style.display = "block";
    dropdownMenu.setAttribute("aria-expanded", "true");
  };

  const hideDropdown = () => {
    dropdownMenu.style.display = "none";
    dropdownMenu.setAttribute("aria-expanded", "false");
  };

  // Event listeners
  dropdownToggle.addEventListener("mouseenter", showDropdown);
  
  dropdownToggle.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(() => {
      if (!dropdownMenu.matches(":hover")) {
        hideDropdown();
      }
    }, 200);
  });

  dropdownMenu.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
  });

  dropdownMenu.addEventListener("mouseleave", hideDropdown);

  // Add keyboard accessibility
  dropdownToggle.addEventListener("keydown", function(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      dropdownMenu.style.display === "none" ? showDropdown() : hideDropdown();
    }
  });

  // Add proper ARIA attributes
  dropdownToggle.setAttribute("role", "button");
  dropdownToggle.setAttribute("aria-haspopup", "true");
  dropdownMenu.setAttribute("aria-expanded", "false");
});
