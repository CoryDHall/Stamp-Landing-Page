export const smartInput = (el) => {
  const input = el.querySelector('input');
  function setClasses(isFocused = false) {
    if (input.value) el.classList.add('has-text')
    else el.classList.remove('has-text')

    if (isFocused) el.classList.add('is-focused')
    else el.classList.remove('is-focused')
  }
  input.addEventListener('focus', () => {
    setClasses(true)
  })
  input.addEventListener('blur', () => {
    setClasses(false)
  })
  setClasses();
}

export const neuterForm = el => {
  el.addEventListener('submit', e => {
    e.preventDefault();
  })
}
