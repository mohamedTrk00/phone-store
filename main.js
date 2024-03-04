
$(".phone img").css({
    "height": "300px",
    "width": "auto"
})

$(document).ready(function () {

    var isDarkMode = false

    function toggleDarkMode() {
        $('body').toggleClass('dark-mode')


        isDarkMode = !isDarkMode;
    }
    $('#modeToggle').click(function () {

        toggleDarkMode()

        if (isDarkMode) {
            $(this).text('Light Mode')
        } else {
            $(this).text('Dark Mode')
        }
    })
})


$(document).ready(function () {
    $("#phone1").click(function () {
        $("#phone1").hide(1000, function () {
            alert("you buy xiaomi 14 pro")
        })
    })
    $("#phone2").click(function () {
        $("#phone2").hide(1000, function () {
            alert("you buy Samsung 24 ultra")
        })
    })
    $("#phone3").click(function () {
        $("#phone3").hide(1000, function () {
            alert("you buy Oppo find x7 ultra")
        })
    })
    $("#phone4").click(function () {
        $("#phone4").hide(1000, function () {
            alert("you buy iphone 15 pro max")
        })
    })
    $("#phone5").click(function () {
        $("#phone5").hide(1000, function () {
            alert("you buy honor magic 6 pro")
        })
    })
    $("#phone6").click(function () {
        $("#phone6").hide(1000, function () {
            alert("you buy xiaomi 13 ultra")
        })
    })

})

$(document).ready(function () {
    $('#sendMessage').click(function () {
        var message = $('#message').val()
        if (message.trim() !== '') {
            alert('Message sent: ' + message)
            $('#message').val('')
        } else {
            alert('Please enter a message!')
        }
    })
})

