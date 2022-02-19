export function getSiteRoot(){
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + getUrl.pathname.split('/')[0] + "/";

    return baseUrl;
}

export function map(set){
    return set.map
}