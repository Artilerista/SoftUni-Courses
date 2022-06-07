function attachGradientEvents() {
    let mosuseOver = document.getElementById('gradient');
    mosuseOver.addEventListener('mousemove', mouseOn);
    let result = document.getElementById('result');
    mosuseOver.addEventListener('mouseout', mouseOut);
    function mouseOn (event) {
        
        result.textContent = Math.floor(event.offsetX / event.target.clientWidth * 100) + '%';
    }
    function mouseOut () {
        result.textContent = '';
    }
}