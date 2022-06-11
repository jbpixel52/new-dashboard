import { prominent } from 'color.js'

// prominent('js-logo.jpg', { amount: 1 }).then(color => {
//   console.log(color) // [241, 221, 63]
// })

export default  function ProminentColor(image_path : string){
    const color =  prominent(image_path, { amount: 1, format:'hex'});
    console.log('${color} ='+ color);
    return color.toString();
}