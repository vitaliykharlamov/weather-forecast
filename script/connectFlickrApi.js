export function connectFlickrApi(tags) {
    const flickrApiKey = '01a334ea1aad6d2f6f24c5870a31d211';

    return fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&tags=${tags}&extras=url_h&format=json&nojsoncallback=1`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            return data;
        });
}