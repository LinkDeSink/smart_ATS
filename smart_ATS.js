const score = 85; // ATS score
const circle = document.querySelector('circle');

const radius = 70;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference}`;
circle.style.strokeDashoffset = circumference - (score / 100) * circumference;
