// CREATING THE VARIABLES THAT WILL LATER BE CALLED FROM THE DB, MEANWHILE ARE STATIC
    var name = 'Yonatan' ;
    var date = 95;
    var updated = 66;
    var latest = 66;
    var deathtime = 90;
   // var perc = 0.55;


// CALCULATING THE PROGRESS
    function calcProgress(aDate,aLatest,aDeathtime) {
        var timesince = aDate-aLatest;
        var a = timesince/aDeathtime;
        if ( a>1 ) { 
            return(1);
            }
            else return(a);
    }







//PROGRESS BAR CREATION FUNCTIONS (line and circle)

function makeProgressLine(id,percent) {     
 itemz = document.getElementById(id);
 var bar = new ProgressBar.Line(itemz, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#00ff00'},
  to: {color: '#ED6A5A'},
  step: function (state, bar) {
      bar.path.setAttribute('stroke', state.color);
      bar.setText(Math.round(bar.value() * 100) + ' %' );
  }
    });

    bar.animate(percent);
    var stringname = '<div class="big">' + name + '</div>';
    $(itemz).after(stringname);
}   

function makeProgressCircle(id,percent) {     
    itemz = document.getElementById(id);
    var day = new ProgressBar.Circle(itemz, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#f0f', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        console.log(value);
        }

    }
    });
    //day.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    //day.text.style.fontSize = '2rem';
    day.animate(percent);  // Number from 0.0 to 1.0
}



//DOCUMENT READY - Calling the functions
$(document).ready(function () { 
    var perc = calcProgress(date,latest,deathtime);

    makeProgressCircle('container',perc);
    for (i=1;i<6;i++) {
    makeProgressLine('progress' + i,i*0.2); 
    }


});

//window.onload = function shagadelic() {