document.addEventListener('DOMContentLoaded', function () {

    // get window height
    var windowHeight = window.innerHeight;

    // set height of scenarios
    var scenarios = Array.prototype.slice.call(document.querySelectorAll('.scenario'), 0);

    scenarios.forEach(function (scn) {
        scn.style.height = windowHeight + 'px';
    });




    // ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    ////////////
    // scene1 //
    ////////////
    // the element to be animated
    var scenario1 = document.getElementById('scenario-1');
    var target1   = document.getElementById('target-1');

    // RotateZ scene
    var scene1 = new ScrollMagic.Scene({
        offset: 0,
        // triggerElement: scenario1,
        duration: 100,   // 100 pxs duration
    })
    .setPin(target1);

    scene1.on('progress', function (event) {

        console.log('scene1 progress: ' + event.progress);
        var angle = event.progress * 45;

        target1.style.transform = 'rotateZ(' + angle + 'deg)';
    }).addTo(controller);





















    //////////////////
    // square scene //
    var squareScenario = document.getElementById('square-scenario');
    var squareWrapper  = document.getElementById('square-wrapper');
    var squareLeft     = document.getElementById('square-left');
    var squareTop      = document.getElementById('square-top');
    var squareRight    = document.getElementById('square-right');
    var squareBottom   = document.getElementById('square-bottom');

    var squareInitial = {
        rotateZ: 0,
        translateX: 0,
        translateY: 0,
        left: {
            rotateZ: 0,
            translateX: 0,
            translateY: 0
        },
        top: {
            rotateZ: 90,
            translateX: 0,
            translateY: 0
        },
        right: {
            rotateZ: 0,
            translateX: 0,
            translateY: 0
        },
        bottom: {
            rotateZ: 90,
            translateX: 0,
            translateY: 0
        }
    };

    var squareFinal = {
        rotateZ: 30,
        translateX: 150,
        translateY: -150,
        left: {
            rotateZ: 50,
            translateX: -100,
            translateY: -100
        },
        top: {
            rotateZ: 50,
            translateX: -50,
            translateY: -100
        },
        right: {
            rotateZ: -50,
            translateX: 200,
            translateY: 200
        },
        bottom: {
            rotateZ: 50,
            translateX: 50,
            translateY: 600
        }
    };

    // Scene that only rotates the square as a whole
    var squareWrapperScene = new ScrollMagic.Scene({
        // triggerElement: squareScenario,
        offset: squareScenario.offsetTop - 100,
        duration: 100
    })
    .setPin(squareWrapper)
    .addTo(controller);

    squareWrapperScene.on('progress', function (event) {
        var progress = event.progress;
        console.log('squareWrapperScene progress: ' + progress);

        // rotate square
        var squareRotateZ = progress * squareFinal.rotateZ;
        var squareTranslateX = progress * squareFinal.translateX;
        var squareTranslateY = progress * squareFinal.translateY;

        squareWrapper.style.transform = [
            'rotateZ(' + squareRotateZ + 'deg)',
            'translateX(' + squareTranslateX + 'px)',
            'translateY(' + squareTranslateY + 'px)',
        ].join(' ');
    });

    // Scene that rotates the square borders
    var squareBorderScene = new ScrollMagic.Scene({
        triggerElement: squareWrapper,
        duration: 300
    })
    .addTo(controller);

    squareBorderScene.on('progress', function (event) {
        var progress = event.progress;
        console.log('squareBorderScene progress: ' + progress);

        // ROTATIONS
        var leftRotateZ   = progress * squareFinal.left.rotateZ;
        var topRotateZ    = squareInitial.top.rotateZ + progress * squareFinal.top.rotateZ;
        var rightRotateZ  = progress * squareFinal.right.rotateZ;
        var bottomRotateZ = squareInitial.bottom.rotateZ + progress * squareFinal.bottom.rotateZ;

        // TRANSLATIONS
        var leftTranslateX   = progress * squareFinal.left.translateX;
        var leftTranslateY   = progress * squareFinal.left.translateY;
        var topTranslateX    = progress * squareFinal.top.translateX;
        var topTranslateY    = progress * squareFinal.top.translateY;
        var rightTranslateX  = progress * squareFinal.right.translateX;
        var rightTranslateY  = progress * squareFinal.right.translateY;
        var bottomTranslateX = progress * squareFinal.bottom.translateX;
        var bottomTranslateY = progress * squareFinal.bottom.translateY;


        squareLeft.style.transform   = [
            'rotateZ(' + leftRotateZ + 'deg)',
            'translateX(' + leftTranslateX + 'px)',
            'translateY(' + leftTranslateY + 'px)',
        ].join(' ');
        squareTop.style.transform    = [
            'rotateZ(' + topRotateZ + 'deg)',
            'translateX(' + topTranslateX + 'px)',
            'translateY(' + topTranslateY + 'px)',
        ].join(' ');
        squareRight.style.transform  = [
            'rotateZ(' + rightRotateZ + 'deg)',
            'translateX(' + rightTranslateX + 'px)',
            'translateY(' + rightTranslateY + 'px)',
        ].join(' ');
        squareBottom.style.transform = [
            'rotateZ(' + bottomRotateZ + 'deg)',
            'translateX(' + bottomTranslateX + 'px)',
            'translateY(' + bottomTranslateY + 'px)',
        ].join(' ');
    });

    // square scene //
    //////////////////






















    ////////////
    // scene3 //
    var scenario3 = document.getElementById('scenario-3');
    var target3   = document.getElementById('target-3');

    var scene3 = new ScrollMagic.Scene({
        triggerElement: target3,
        duration: 200
    })
    .setPin(target3)
    .addTo(controller);

    var finalScale = 1;
    scene3.on('progress', function(event) {
        console.log('scene3 progress: ' + event.progress);

        var currentScale = event.progress * finalScale;

        target3.style.transform='scale(' + currentScale + ')';
    })
    .addTo(controller);
});
