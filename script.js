const canvas = document.getElementById('solar-system');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const sun = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 50,
    color: '#FFD700'
};


/**
 * This is the solar system webpage just made to describe the skills
 * I was just bored with back-end coding for a long time hence
 * I decided to make some amazing small project with HTML CSS and JS and
 * this is what i got in my mind and I did not thought it this nice but 
 * eventually i ended up with this design
 * 
 *              -KUSH PATEL
 */



const planets = [
    { name: 'Mercury', details:'Closest', distance: 100, radius: 10, color: '#8C7853', speed: 0.02, angle: 0 },
    { name: 'Venus', distance: 150, radius: 15, color: '#F4A460', speed: 0.015, angle: 0 },
    { name: 'Earth', distance: 200, radius: 20, color: '#1E90FF', speed: 0.01, angle: 0 },
    { name: 'Mars', distance: 250, radius: 18, color: '#CD5C5C', speed: 0.008, angle: 0 },
    { name: 'Jupiter', distance: 300, radius: 30, color: '#DEB887', speed: 0.005, angle: 0 },
    { name: 'Saturn', distance: 350, radius: 25, color: '#FFD700', speed: 0.003, angle: 0 },
    { name: 'Uranus', distance: 400, radius: 22, color: '#00FFFF', speed: 0.002, angle: 0 },
    { name: 'Neptune', distance: 450, radius: 21, color: '#4169E1', speed: 0.0015, angle: 0 }
];
function drawSun() {
    const gradient = ctx.createRadialGradient(sun.x, sun.y, 0, sun.x, sun.y, sun.radius + 50);
    gradient.addColorStop(0, 'rgba(255, 215, 0, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
    // Draw glowing effect for the sun
    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(sun.x, sun.y, sun.radius + 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    // Draw sun
    ctx.beginPath();
    ctx.fillStyle = 'gold';
    ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}
function drawPlanet(planet) {
    const x = sun.x + planet.distance * Math.cos(planet.angle);
    const y = sun.y + planet.distance * Math.sin(planet.angle);

    // Draw circular path
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.arc(sun.x, sun.y, planet.distance, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();

    // Draw planet
    ctx.beginPath();
    ctx.fillStyle = planet.color;
    ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // Draw light effect
    ctx.beginPath();
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, planet.radius + 20);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.arc(x, y, planet.radius + 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // Draw planet name
    ctx.font = '12px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(planet.name, x, y + planet.radius + 15);
    planet.angle += planet.speed;
}
function drawTitle() {
    ctx.font = '32px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('Solar System', canvas.width / 2, 50);
}
function drawStars() {
    for (let i = 0; i < 200; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars(); 
    drawSun();
    planets.forEach(planet => drawPlanet(planet));
    drawTitle();
    requestAnimationFrame(draw);
}

draw();
