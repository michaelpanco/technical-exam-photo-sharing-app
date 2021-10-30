import albums_container from "./html/albums.html";
import album_gallery_container from "./html/album-gallery.html";
import image_data_getter from './ImageDataGetter'
import { reset_images } from './ImageGridViewRenderer'

export function albums(album) {

   var page_start = 9

    if(album == null){
        document.getElementById("main-app-view").innerHTML = albums_container

    }else{

        // This will reset all the save images during API call
        reset_images();

        document.getElementById("main-app-view").innerHTML = album_gallery_container
        
        switch (album) {

            case 'nature':
                image_data_getter(album, page_start)
                document.getElementById("album-category").innerHTML = "Nature"
                break;

            case 'architecture':
                image_data_getter(album, page_start)
                document.getElementById("album-category").innerHTML = "Architecture"
                break;

            case 'fashion':
                image_data_getter(album, page_start)
                document.getElementById("album-category").innerHTML = "Fashion"
                break;

            default:
                document.getElementById("main-app-view").innerHTML += "Album not found"
                break;
        }
        
        var preloader_image = document.getElementById("preloader");
        var no_more_data = document.getElementById("nomoredata");

        window.onscroll = function(ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                if((preloader_image.style.display == "" || preloader_image.style.display == "none") && no_more_data.style.display == "none"){
                   
                        page_start = page_start + 9
                        image_data_getter(album, page_start)
                    
                }
            }
        };




    }


    

}