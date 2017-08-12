var shirt = document.getElementById('shirt-section');
var shirtColors = document.getElementById('shirt-colors');
var pants = document.getElementById('pants-section');
var pantsColors = document.getElementById('pants-colors');
var belt = document.getElementById('belt-section');
var beltColors = document.getElementById('belt-colors');
shirtColors.addEventListener('click', (e) => {
    shirt.style.backgroundColor = e.target.id;
});

pantsColors.addEventListener('click', (e) => {
    pants.style.backgroundColor = e.target.id;
});

beltColors.addEventListener('click', (e) => {
    belt.style.backgroundColor = e.target.id;
});

