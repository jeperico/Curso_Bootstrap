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

    setTimeout(function() {

        $('#data-area').parallax({imageSrc: './assets/images/cidadeparallax.png'})
        $('#apply-area').parallax({imageSrc: './assets/images/pattern.png'})

    }, 250);


});