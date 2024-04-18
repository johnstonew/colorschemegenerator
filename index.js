const seedColorBox = document.getElementById('color-selector')
const button = document.getElementById('submit')
const baseString = 'https://www.thecolorapi.com/scheme?hex='
let scheme = ''
let seedColor = '';
let urlString = '';
let colors = []

button.addEventListener('click', function(e){
    e.preventDefault()
    seedColor = seedColorBox.value.slice(1,7);
    scheme = document.getElementById('color-type').value.toLowerCase()
    urlString = `${baseString}${seedColor}&format=json&mode=${scheme}&count=5`;
    // console.log(urlString)
    fetchColors(urlString)
})

function fetchColors(urlString) {
    fetch(urlString)
    .then(res => res.json())
    .then(data => {
        colors = data.colors.map(function(color){
            // returns colors hex value
            return color.hex.value
        })
        
        // update colors
        for(let i = 0; i<5; i++){
            document.getElementById(`color-${i+1}`).style.backgroundColor = colors[i];
            document.getElementById(`colorhex-${i+1}`).innerHTML = colors[i];           
        }  
        
        }) // end of then method
}