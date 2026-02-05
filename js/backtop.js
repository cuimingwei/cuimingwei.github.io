window.addEventListener('scroll', () => {
    const t = document.getElementById('backtop');t &&
    (t.style.display = window.scrollY > 300 ?
    'block' : 'none')});
    document.getElementById('backtop')?.addEventListener('click', () => {
 window.scrollTo({top: 0,behavior: 'smooth'})});