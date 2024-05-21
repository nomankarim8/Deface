
    $(document).ready(function(){
        $('#smsForm').submit(function(e){
            e.preventDefault(); // Prevent default form submission / WHOMI
            
            var phoneNumber = $('#number').val();
            if (!isValidPhoneNumber(phoneNumber)) {
                $('#responseMsg').html('<p class="message error">𝙸𝚗𝚟𝚊𝚕𝚒𝚍 𝚙𝚑𝚘𝚗𝚎 𝚗𝚞𝚖𝚋𝚎𝚛 𝚏𝚘𝚛𝚖𝚊𝚝</p>');
                return;
            }

            $.ajax({
                type: 'POST',
                url: 'api.php',
                data: $(this).serialize(),
                success: function(response){
                    if (response !== '' && response.indexOf('"status":"SUCCESS') !== -1) {
                        $('#responseMsg').html('<p class="message success">𝙎𝙈𝙎 𝙎𝙀𝙉𝙏 𝘽𝙔 @WHOMI</p>');
                    } else {
                        $('#responseMsg').html('<p class="message error">Something Wrong</p>');
                    }
                },
                error: function(){
                    $('#responseMsg').html('<p class="message error">Something went wrong with the request</p>');
                }
            });
        });
    });

    function isValidPhoneNumber(phoneNumber) {
        return /^\d{11}$/.test(phoneNumber);
    }
