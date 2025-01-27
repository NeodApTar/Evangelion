/* Scroll monitoring */
window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px` /* Interpolating a variable for scrolling, we get a scroll by Y */
});