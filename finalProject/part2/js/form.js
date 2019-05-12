$(function() {
  const email = $('#email')
  const name = $('#name')

  function validate(field) {
    if (field.val().length === 0) {
      field.removeClass().addClass('error')
      field
        .next()
        .removeClass()
        .addClass('fas fa-exclamation-triangle')
    } else {
      field.removeClass().addClass('success')
      field
        .next()
        .removeClass()
        .addClass('icon-ok')
    }
    return field
  }

  $('input').blur(function() {
    validate($(this))
  })

  $('button').on('click', function() {
    validate(email)
    validate(name)
    if ($(email).val().length === 0 || $(name).val().length === 0)
      $(this)
        .removeClass()
        .addClass('submit-error')
    else {
      $(this)
        .removeClass()
        .addClass('submit-success')
      sendEmail()
    }
    window.setTimeout(function() {
      $('button').removeClass()
    }, 3000)
    return false
  })

  function sendEmail() {
    $myform = $('#form')
    $myform.prop('action', 'mailto:lancegundersen@umuc.edu')
    $myform.submit()
  }
})
