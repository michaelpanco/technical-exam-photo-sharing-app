import image_data_renderer from './ImageGridViewRenderer'
import { API_URL } from '../../config'

/*
* @param category = the category of the album
* @param num = the next page that needs to load
*/

export var scrollable = false

export function setScrollable(val) {
    scrollable = val;
}

export default function ImageDataGetter(category, num){

    const limit = (num / 3)
    const starting_page = limit - 2

    var images = []

    var preloader_image = document.getElementById("preloader");
    preloader_image.style.display = "block";

    for (let index = starting_page; index <= limit; index++) {
 
        fetch(API_URL + '/images?category='+ category + '&page=' + index)
            .then(function (response) {
                return response.json()
            })
            .then(function (result) {

                images = result
         
                if(images.length > 0){

                    image_data_renderer(images)

                }else{
                    // Show no more data label
                    var preloader_image = document.getElementById("nomoredata");
                    preloader_image.style.display = "block";
                }

                // hide the preloader
                var preloader_image = document.getElementById("preloader");
                preloader_image.style.display = "none";


            })
            .catch(function (error){

                console.log(error)
                
        })
        
    }

}