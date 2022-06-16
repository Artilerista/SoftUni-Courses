function requestValidator(obj) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /^[\w.]+$/;
    let mesageRegex = /^[^<>\\&\'\"]+$/;
    if (!(obj.method && methods.includes(obj.method))) {
        throw Error('Invalid request header: Invalid Method');
    }
    if (!(obj.uri && (uriRegex.test(obj.uri) || obj.uri === '*'))) {
        throw Error('Invalid request header: Invalid URI');
    }
    if (!(obj.version && versions.includes(obj.version))) {
        throw Error('Invalid request header: Invalid Version');
    }
    if (!(obj.hasOwnProperty('message') && (obj.message == '' || mesageRegex.test(obj.message)))) {
        throw Error('Invalid request header: Invalid Message');
    }
    return obj;
}
requestValidator({
    method: 'GET',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: ''
}

)