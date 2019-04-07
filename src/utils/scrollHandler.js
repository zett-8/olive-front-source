export default func => {
  const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight
  const { body } = document
  const html = document.documentElement
  const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
  const windowBottom = windowHeight + window.pageYOffset

  if (windowBottom === docHeight) func()
}
