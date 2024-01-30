let i = 0;
let txt = 'Find the job that shine your life...';
let speed = 80;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Call the function after the page loads
window.onload = function() {
    typeWriter();
};