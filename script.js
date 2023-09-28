$(document).ready(function () {
  // Function to toggle the mobile menu
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
  });

  // Track whether it's a small screen and if sub-menus are visible
  let isSmallScreen = $(window).innerWidth() <= 1149;
  let subMenusVisible = false;
  let activeSubMenu = null; // Track the active sub-menu

  // Select the sub-menus and menu links
  const subMenus = $(".sub-menu");
  const menuLinks = $(".menu-link");

  // Function to toggle menu behavior based on screen size
  function toggleMenuState(isSmallScreen) {
    if (isSmallScreen) {
      // For smaller screens, set up click event to toggle sub-menu
      menuLinks.each(function () {
        $(this).click(function () {
          $(this).next().slideToggle();
        });
      });

      // For smaller screens, remove hover effect
      menuLinks.off("mouseenter mouseleave");

      // Hide sub-menus when switching to small screen
      subMenus.css("display", "none");
      subMenusVisible = false;
    } else {
      // For larger screens, remove click events and show sub-menus on hover
      menuLinks.each(function () {
        $(this).off("click");
      });

      // Show sub-menus on hover
      menuLinks.hover(function () {
        // Close the previously opened sub-menu
        if (activeSubMenu !== null && activeSubMenu !== $(this).next()) {
          activeSubMenu.css("display", "none");
        }
        $(this).next().css("display", "flex");
        subMenusVisible = true; // Set subMenusVisible to true when hovering
        activeSubMenu = $(this).next(); // Set the active sub-menu
      });

      // Hide sub-menus when mouse leaves the navigation area
      $(".navbar").mouseleave(function () {
        if (subMenusVisible) {
          subMenus.css("display", "none");
          subMenusVisible = false;
          activeSubMenu = null; // Reset the active sub-menu
        }
      });
    }
  }

  menuLinks.toggleClass("cursor-pointer", !isSmallScreen);

  // Initialize menu state based on screen size
  toggleMenuState(isSmallScreen);

  // Listen for window resize and adjust menu behavior
  $(window).resize(function () {
    const newIsSmallScreen = $(window).innerWidth() <= 1149;
    if (isSmallScreen !== newIsSmallScreen) {
      toggleMenuState(newIsSmallScreen);
      isSmallScreen = newIsSmallScreen;

      // Reset sub-menus when resizing
      subMenus.css("display", "none");
      subMenusVisible = false;
      activeSubMenu = null;
    }
  });
  // Button click events
  // Link “See Pricing”, “Request a demo” or “Book a demo”
  $(".linkToExplorer").click(function () {
    window.location.href = "https://trendspek.com/explore-trendspek";
  });
  // Link Security and Compliance section button to:
  $(".linkToDataInfo").click(function () {
    window.location.href =
      "https://trendspek.com/information-and-data-security-policy";
  });
});
