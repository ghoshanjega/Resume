// devops, lxd, cicd, rm, shooter, guftagoo

$(document).ready(function () {


    tippy.setDefaults({
        duration: 0,
        theme: 'honeybee',
        animation: 'shift-away',
        inertian: true,
        interactiveBorder: 20,
        // arrow: true,
        arrowType: 'round',
        delay: 400,
        duration: [100,500],
        animateFill: true

    });

    tippy('#devops', {
        content: document.querySelector('#devopsTemplate'),
    });

    tippy('#lxd', {
        content: document.querySelector('#lxdTemplate'),
    });

    tippy('#cicd', {
        content: document.querySelector('#cicdTemplate'),
    });

    tippy('#rm', {
        content: document.querySelector('#rmTemplate'),
    });

    tippy('#shooter', {
        content: document.querySelector('#shooterTemplate'),
    });

    tippy('#guftagoo', {
        content: document.querySelector('#guftagooTemplate'),
    });

    // tippy('#', {
    //     content: document.querySelector('#Template'),
    // });

    function goguftagoo(){
        window.open("https://guftagoo.netlify.com/discover/",_blank);
    }
});
