import $ from 'jquery';
import Enums from './enums';

class DataAccess {
    get(options){
        return new Promise((resolve, reject) => {
            let url = this._getApiUrl(options.api);

            $.ajax({
                type: 'GET',
                url: url.replace('$PARAMS$', options.params),
                success: data => resolve(data),
                error: error => reject(error),
            });
        });
    }

    _getApiUrl(apiEnum){
        switch(apiEnum){
            case Enums.api.omdb.value:
                return `http://www.omdbapi.com/?apikey=${Enums.api.omdb.apiKey}&$PARAMS$`;
            case Enums.api.tvMaze.value:
                return 'http://api.tvmaze.com$PARAMS$';
            case Enums.api.tmdb.value:
                return `https://api.themoviedb.org$PARAMS$?api_key=${Enums.api.tmdb.apiKey}`;
            default:
                throw Error('No such api');
        }
    }
}

export default DataAccess;