import { albums } from './components/album'
import Grapnel from 'grapnel'

var router = new Grapnel.default();

router.get('albums', function(request){
    albums();
});

router.get('albums/:album', function(request){
    albums(request.params.album);
});

router.navigate('albums')