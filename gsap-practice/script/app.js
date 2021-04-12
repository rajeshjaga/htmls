const menu = document.querySelector('.link');
const header = document.querySelector('header');
const cover = document.querySelector('.bc');

const tl = new TimelineLite({ paused: true, reversed: true });

tl.to('.bc', 1, { width: '60%', ease: Power2.easeOut })
  .to('.date', 0.5, { left: '50%', ease: Power2.easeOut }, '-=0.5')
  .to('header', 1, { height: '100vh', ease: Power2.easeOut }, '-=0.500')
  .fromTo(
    '.nav-opened',
    0.5,
    { opacity: 0, x: '50', ease: Power2.easeOut },
    { opacity: 1, x: 0 }
  );
menu.addEventListener('click', (e) => {
  if (tl.isActive()) {
    e.stopPropagation();
    e.defaultPrevented();
    return false;
  }

  toggleTween(tl);
});
cover.addEventListener('click', (e) => {
  tl.reverse();
});
function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
