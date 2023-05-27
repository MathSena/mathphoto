window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.add.toggle('window-scrolled', window.scrollY > 0)
})
