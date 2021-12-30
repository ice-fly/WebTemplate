document.body.appendChild(document.createElement('particles'));
function pop(e) {
    let amount = 24;
    for (let i = 0; i < amount; i++) {
        createParticle(e.clientX, e.clientY);
    }
}
function createParticle(x, y) {
    const particle = document.createElement('particle');
    document.getElementsByTagName('particles')[0].appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 400;
    let destinationY = (Math.random() - 0.5) * 500;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 800;
    particle.style.backgroundImage = 'url(img/Diamond.png)';
    particle.style.zIndex = 200;

    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    const animation = particle.animate([
        {
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
            opacity: 1
        },
        {
            transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY+200}px) rotate(${rotation}deg)`,
            opacity: 0
        },
        {
            transform: `translate(-50%, -50%) translate(${x + destinationX + destinationX}px, ${y + destinationY + destinationY + 500}px) rotate(${rotation}deg)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: 'cubic-bezier(0, .4, .7, 1)',
        delay: delay
    });
    animation.onfinish = removeParticle;
}
function removeParticle(e) {
    e.srcElement.effect.target.remove();
}
//Written by Alexander L. 2021
//Refrenced https://codepen.io/Mamboleoo/pen/JjdXPgR