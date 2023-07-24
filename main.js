window.addEventListener('scroll', () => {
  const navElement = document.querySelector('nav')
  const isScrolled = window.scrollY > 0
  navElement.classList.toggle('window-scrolled', isScrolled)
})
