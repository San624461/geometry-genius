function calculateTriangleArea() {
    //   get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);



    // get triangle height value 
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;
    console.log(area)


    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}


function calculateRectangleArea(){
    // get reatangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width)

    // get rectangle length

    const lengthField = document.getElementById('rectangle-length')
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length)

    // calculate area 
    const area = width * length;
    //  show rectangle area

    const recSpan = document.getElementById('Rectangle-area')
    recSpan.innerText = area;
}