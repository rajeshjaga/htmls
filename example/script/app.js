const pages = document.querySelectorAll('section');
const bub = document.querySelector('.buble');
const gradient = [
  'linear-gradient(to right, #ffa751, #ffe259)',
  ' linear-gradient( to bottom,    #a5fecb,    #20bdff )',
  ' linear-gradient(to bottom, #ffe000, #799f0c, #00416a)',
];
const option = {
  threshold: 0.8,
};
let on = new IntersectionObserver(navcheck, option);

function navcheck(entries) {
  entries.forEach((entry) => {
    const clasname = entry.target.className;
    const actAnchor = document.querySelector(`[data-page=${clasname}]`);
    const grindex = entry.target.getAttribute('data-index');
    const cords = actAnchor.getBoundingClientRect();
    const direction = {
      height: cords.height,
      width: cords.width,
      top: cords.top,
      left: cords.left,
    };
    if (entry.isIntersecting) {
      bub.style.setProperty('left', `${direction.left}px`);
      bub.style.setProperty('top', `${direction.top}px`);
      bub.style.setProperty('height', `${direction.height}px`);
      bub.style.setProperty('width', `${direction.width}px`);
      bub.style.background = gradient[grindex];
    }
  });
}
pages.forEach((section) => {
  on.observe(section);
});
