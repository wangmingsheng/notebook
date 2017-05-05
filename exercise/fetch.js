
//post 请求
let content = {some: 'content'};
// The actual fetch request
fetch('some-url', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
})


fetch('some-url')
    .then(handleResponse)
    .then(data => console.log(data))
    .then(error => console.log(error))

function handleResponse (response) {
    let contentType = response.headers.get('content-type')
    if (contentType.includes('application/json')) {
        return handleJSONResponse(response)
    } else if (contentType.includes('text/html')) {
        return handleTextResponse(response)
    } else {
        // Other response types as necessary. I haven't found a need for them yet though.
        throw new Error(`Sorry, content-type ${contentType} not supported`)
    }
}

function handleJSONResponse (response) {
    return response.json()
        .then(json => {
            if (response.ok) {
                return json
            } else {
                return Promise.reject(Object.assign({}, json, {
                    status: response.status
                    statusText: response.statusText
                }))
            }
        })
}
function handleTextResponse (response) {
    return response.text()
        .then(text => {
            if (response.ok) {
                return json
            } else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText,
                    err: text
                })
            }
        })
}