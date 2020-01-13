function removeUrlAnchor(url) {
    let indexOfAnchor = url.indexOf('#');

    if(indexOfAnchor != -1) {
        url = url.substring(0, indexOfAnchor);
    }

    return url;
}