document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section')
  const globalMenuItems = document.querySelectorAll('.global-menu a')
  const navigationMenuItems = document.querySelectorAll('.navigation-menu a')
  let currentIndex = 0

  // Function to show the current section with fade effect
  function showSection(index) {
    sections.forEach((section, i) => {
      if (i === index) {
        section.classList.add('active')
      } else {
        section.classList.remove('active')
      }
    })

    // Highlight active global menu item
    globalMenuItems.forEach((menuItem, i) => {
      if (i === index) {
        menuItem.classList.add('active-link')
      } else {
        menuItem.classList.remove('active-link')
      }
    })

    // Highlight active navigation menu item
    navigationMenuItems.forEach((menuItem, i) => {
      if (i === index) {
        menuItem.classList.add('active-link')
      } else {
        menuItem.classList.remove('active-link')
      }
    })
  }

  // Function to handle menu item clicks
  function handleMenuItemClick(event, index) {
    event.preventDefault()
    currentIndex = index
    if (window.innerWidth <= 740) {
      scrollToSection(index)
    } else {
      showSection(index)
    }
  }

  // Add click event listeners to global menu items
  globalMenuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', (event) => {
      handleMenuItemClick(event, index)
    })
  })

  // Add click event listeners to navigation menu items
  navigationMenuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', (event) => {
      handleMenuItemClick(event, index)
    })
  })

  // Previous button functionality
  document.querySelectorAll('.prev-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex--
        showSection(currentIndex)
      }
    })
  })

  // Next button functionality
  document.querySelectorAll('.next-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
      if (currentIndex < sections.length - 1) {
        currentIndex++
        showSection(currentIndex)
      }
    })
  })

  // Function to set active link color
  function setActiveLinkColor() {
    globalMenuItems.forEach((menuItem, index) => {
      if (index === currentIndex) {
        menuItem.classList.add('active-link')
      } else {
        menuItem.classList.remove('active-link')
      }
    })

    navigationMenuItems.forEach((menuItem, index) => {
      if (index === currentIndex) {
        menuItem.classList.add('active-link')
      } else {
        menuItem.classList.remove('active-link')
      }
    })
  }

  // active link color initially
  window.addEventListener('resize', function () {
    setActiveLinkColor()
  })

  // Set active link color initially
  setActiveLinkColor()
})
