
export const fetchTheme = () => {
  const theme = localStorage.theme
  if (theme) {
    document.body.classList.add(theme)
  }
}


export const toggleTheme = () => {
    
  const body = document.querySelector('body')
  if (body) {
    body.classList.toggle('dark')
    localStorage.theme = body.classList.contains('dark') ? 'dark' : 'light'
    return body.classList.contains('dark') ? 'dark' : 'light'
  
  }
  return 'light'
}