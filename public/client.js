// client-side js

document.addEventListener('DOMContentLoaded', () => {
  var input = document.querySelector('#input')
  var submit = document.querySelector('#submit')
  var hostname = window.location.hostname
  var protocol = window.location.protocol
  var port = window.location.port ? `:${window.location.port}`: ''
  
  submit.addEventListener('click', event => {
    event.preventDefault()
    var value = String(input.value).replace('/', '-')
    // Set the browser location, using the encoded input value as the
    // first URL parameter.
    window.location.href = encodeURI(`${protocol}//${hostname}${port}/${value}`);
  })
})

