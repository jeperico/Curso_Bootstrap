$(document).ready(function(){

    const containerA = document.querySelector("#circleA");
    const containerB = document.querySelector("#circleB");
    const containerC = document.querySelector("#circleC");
    const containerD = document.querySelector("#circleD");

    const circleA = new ProgressBar.Circle(containerA, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#64DAF9' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value)

        }
    });

    const circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#64DAF9' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254);

            circle.setText(value)
        }
    });

    const circleC = new ProgressBar.Circle(containerC, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA' },
        to: { color: '#64DAF9' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value)
        }
    });

    const circleD = new ProgressBar.Circle(containerD, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA' },
        to: { color: '#64DAF9' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5243);

            circle.setText(value)
        }
    });

    //Loader

    let dataAreaOffset = $('#data-area').offset();
    let stop = true;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 700) && stop == true){

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = false;

        }
    });

    //Parallax

    setTimeout(function() {

        $('#data-area').parallax({imageSrc: './assets/images/cidadeparallax.png'})
        $('#apply-area').parallax({imageSrc: './assets/images/pattern.png'})

    }, 250);

    //Filtro do Portifolio

    /*$('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        function eachBoxes(type, boxes){
            if(type === 'all'){
                $(boxes).fadeIn();
            } else {
                $(boxes).each(function() {
                    if(!$(this).hasClass(type)){
                        $(this).fadeOut('slow');
                    } else {
                        $(this).fadeIn();
                    }
                });
            }
        }

        switch (type) {
            case 'seo-btn':
                eachBoxes('seo', boxes)
            break;
            case 'dsg-btn':
                eachBoxes('dsg', boxes)
            break;
            case 'dev-btn':
                eachBoxes('dev', boxes)
            break;
            case 'all-btn':
                eachBoxes('all', boxes)
            break;
        }
    });*/

    // Fazendo um filtro sozinho

    let btnAll = document.getElementsByClassName("filter-btn")[0];
    let btnDev = document.getElementsByClassName("filter-btn")[1];
    let btnDsg = document.getElementsByClassName("filter-btn")[2];
    let btnSeo = document.getElementsByClassName("filter-btn")[3];
    btnAll.addEventListener('click', function(){
        alert("a")
    })
    btnDev.addEventListener('click', function(){
        alert("a")
    })
    btnDsg.addEventListener('click', function(){
        alert("a")
    })
    btnSeo.addEventListener('click', function(){
        alert("a")
    }) 

    function filter(){
        
    }

});