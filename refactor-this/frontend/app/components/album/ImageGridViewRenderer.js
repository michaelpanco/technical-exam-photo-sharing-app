import {isEven} from './../../utils/math'
// store all rendered images in the array to avoid duplicate
export let images_shown = []

export function reset_images() {
    images_shown = []
}

export default function ImageDataGridViewRenderer(images){
    console.log(images)
    images.map(function(image_item, index){

        let is_even = isEven(index)
        
        if(!images_shown.includes(image_item.name)){

            let addon_class = is_even ? 'cEven' : 'cOdd'

            document.getElementById("images-container").innerHTML +=
            '<div id="image-items" class="col '+ addon_class +'" style="height: 400px; padding: 10px;">'
            +'  <img class="image" src="' + image_item.url + '" alt="' + image_item.name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
            +'  <div class="middle">'
            +'    <a class="btn btn-dark" href="' + image_item.url + '" download="' + image_item.name + '">DOWNLOAD</a>'
            +'  </div>'
            +'</div>'
            // prevent image to re-render, save to array for later check
            images_shown.push(image_item.name);
        }
    })

}