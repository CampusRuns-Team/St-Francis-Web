﻿$(document).ready(function () {

    //console.log("ready!");
    //alert("ready");  


    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function (e) {
        e.preventDefault();
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").click(function (e) {
        e.preventDefault();
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    //$(".submit").click(function () {
       
    //    //var data = new FormData();
    //    //var file = $("#picture")[0].files[0];
    //    //data.append('Surname', $("#surname").val());
    //    //data.append('OtherNames', $("#othname").val());
    //    //data.append('Email', $("#email").val());
    //    //data.append('PhoneNumber', $("#phone").val());
    //    //data.append('Sex', $("#gender").val());
    //    //data.append('BCC', $("#bcc").val());
    //    //data.append('Organisation', $("#org").val());
    //    //data.append('Society', $("#society").val());
    //    //data.append('WorshipCenter', $("#worship").val());
    //    //data.append('MCardNumber', $("#card").val());
    //    //data.append('Suggestion', $("#suggestion").val());
    //    //data.append('ConfirmPassword', $("#cpassword").val());
    //    //data.append('Password', $("#password").val());

    //    //data.append('Address', $("#address").val());
    //    //data.append('DateOfBirth', $("#dob").val());
    //    //data.append('Occupation', $("#occupation").val());
    //    //data.append('State', $("#state").val());
    //    //data.append('NatureOfWork', $("#business").val());
    //    //data.append('MaritalStatus', $("#maritalstatus").val());

    //    //data.append('image', file);



    //    //$.ajax({
    //    //    url: "/accounts/register",
    //    //    type: "POST",
    //    //    data: data,
    //    //    contentType: false,
    //    //    processData: false,
    //    //    success: function (res) {
    //    //        if (res.status) {
    //    //            clearForm();
    //    //            swal('Registration Successful!', res.data, 'success');
    //    //            clearForm();
    //    //            return;
    //    //        }
    //    //        swal('Error', res.data, 'error');
    //    //    },
    //    //    error: function (err) {
    //    //        swal('Error', "Oops! An error occured while processing your request.", 'error');
    //    //    }
    //    //})

    //    return false;

       
    //})

    function clearForm() {
        $("#email").val('');
        $("#phone").val('');
        $("#state").val('');
        $("#surname").val('');
        $("#org").val('');
        $("#suggestion").val('');
        $("#bcc").val('');
        $("#society").val('');
        $("#business").val('');
        $("#worship").val('');
        $("#occupation").val('');
        $("#card").val('');
        $("#maritalstatus").val('');
        $("#othname").val('');
        $("#cpassword").val('');
        $("#password").val('');
        $("#gender").val('');
        $("#dob").val('');
        $("#address").val('');
        $("#picture").val('');

    }

    var registerForm = $("#msform");
    registerForm.validate({
        messages: {
            cpassword: {
                equalTo: "Passwords do not match",
            }


        },

        submitHandler: function (form) {
            form.submit();
        }


    });

});
