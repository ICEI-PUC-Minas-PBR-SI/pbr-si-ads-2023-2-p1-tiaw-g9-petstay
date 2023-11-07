$(document).ready(function() {
    $('input[name="renderOption"]').change(function() {
      $('.conditional-content').hide();
      var selectedOption = $('input[name="renderOption"]:checked').val();
      if (selectedOption === 'cuidador') {
        $('#tipoAnimal').show();
      } else if (selectedOption === 'donoDoPet') {
        $('#animaisAceitos').show();
      }
    });
  });
  