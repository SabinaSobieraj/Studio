$('form').submit(function(e){

    var fieldName = $('#name');
    var fieldEmail = $('#email');
    var fieldContent = $('#content');
    var error = '';

    function isEmpty(elem) {
      return elem.val() === '';
    }

    if (isEmpty(fieldName)) {
      $('.field-error-name').css('display', 'block');
      error += 'Required';
    } else {
      $('.field-error-name').css('display', 'none');
    }

    if (isEmpty(fieldEmail)) {
      $('.field-error-email').css('display', 'block');
      error += 'Required';
    } else {
      $('.field-error-email').css('display', 'none');
    }

    if (isEmpty(fieldContent)) {
      $('.field-error-content').css('display', 'block');
      error += 'Required';
    } else {
      $('.field-error-content').css('display', 'none');
    }

    if (error != '') {
        return false;
    } else {
       return true;
    }

  });