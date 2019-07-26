$('#home').on('click', function (event){
    event.preventDefault()
        $('html, body').animate({
            scrollTop: 0,
        }, 'fast')
        // alert('about pressed')
})


$('#navabout').on('click', function (event){
    event.preventDefault()
        $('html, body').animate({
            scrollTop: $('section.about-me').offset().top,
        }, 'fast')
        // alert('about pressed')
})

$('#navprojects').on('click', function (event){
    event.preventDefault()
        $('html, body').animate({
            scrollTop: $('section.projects').offset().top,
        }, 'fast')
})

$('#navskills').on('click', function (event){
    event.preventDefault()
        $('html, body').animate({
            scrollTop: $('section.skills').offset().top,
        }, 'fast')
})

$('#navcontact').on('click', function (event){
    event.preventDefault()
        $('html, body').animate({
            scrollTop: $('footer.contact').offset().top,
        }, 'fast')
})