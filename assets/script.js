function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  // se tiver light mode, adicionar a imagem light, senão manter a normal
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Imagem de João Damiani sorrindo em frente a cidade de Amalfi - Itália"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Imagem de João Damiani sério de camisa preta em Paris sentado abaixo da Torre Eiffel"
    )
  }
}
