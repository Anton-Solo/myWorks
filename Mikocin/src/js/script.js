//Валидация формы

$(document).ready(function() {
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
    
            },
            messages: {
                name: "Введите ваше имя",
                phone: "Введите ваш номер телефона"
              }
        });
    };
    
    validateForms('#m-form');

    $('input[name=phone]').mask("+7 (999) 999-9999");
});