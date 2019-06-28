export const attatchSubmenuTrigger = (triggerElement) => {
  const {parentElement} = triggerElement;
  const {body} = document;
  const bgElement = document.createElement('div')
  const openFunction = (e) => {
    e.preventDefault();
    parentElement.classList.add('open')
    body.classList.add('submenu-open')
    triggerElement.removeEventListener('click', openFunction)
    triggerElement.addEventListener('click', closeFunction)
  };
  const closeFunction = (e) => {
    e.preventDefault();
    parentElement.classList.remove('open')
    body.classList.remove('submenu-open')
    triggerElement.removeEventListener('click', closeFunction)
    triggerElement.addEventListener('click', openFunction)
  }
  bgElement.classList.add('submenu-background-cover')
  body.appendChild(bgElement)
  bgElement.addEventListener('click', closeFunction)
  triggerElement.addEventListener('click', openFunction)
}
