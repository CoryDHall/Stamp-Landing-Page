!(async ()=>{
  const {attatchSubmenuTrigger} = await import('./submenu.js');
  document.querySelectorAll('.nav-menu-trigger').forEach(attatchSubmenuTrigger)

  const {smartInput, neuterForm} = await import('./forms.js');
  document.querySelectorAll('.input').forEach(smartInput)
  document.querySelectorAll('form').forEach(neuterForm)
})()
