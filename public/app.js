console.log('HELLO!')

var source = $("#snakes-template").html()
var template = Handlebars.compile(source)

document.addEventListener('DOMContentLoaded', e => {
  console.log('DOM loaded!')
  $.get('api/v1/resources')
    .done(response => {
      $('.container').append(template(response))
      console.log(template(response))
    })
})
