// myscript is the main script running in the site. created by yhattav@gmail.com. 


// CREATING THE VARIABLES THAT WILL LATER BE CALLED FROM THE DB, MEANWHILE ARE STATIC
 //   var name = 'Yonatan' ;
 //   var date = 95;
 //   var updated = 66;
 //   var latest = 66;
 //   var deathtime = 90;
 //   var perc = 0.55;


// CALCULATING THE PROGRESS
    function calcProgress(timeSince,aDeathTime) {
        
        var a = timeSince/aDeathTime;
        if ( a>1 ) { 
            return(1);
            }
            else return(a);
    }
    
    function calcDaysPast(first){
        var firstDate = Date.parse(first);
        var secondDate = Date.today();
        var dayz = ((secondDate - firstDate)/3600/24/1000);
        return(dayz);
        
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
      bar.setText(Math.round(bar.value() * 100));
  }
    });

    bar.animate(percent);
 //   var stringname = '<div class="big">' + name + '</div>';
 //   $(itemz).after(stringname);
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
    
    $(".external").hide();
    
    $.ajax({
            url:"/friends",
            type: 'GET',
            dataType: 'json',
            success:function(data) {
                for (var f = data.length - 1; f >= 0; f--) {
                    if (data[f].typeFriend == 1) {
                    //console.log("working on number: " + f);
                    var pastDays = calcDaysPast(data[f].latest);
                   var groupish = 0; 
                        for  (var a = data.length - 1; a >= 0; a--) {
                            if (data[a].id == data[f].group) {
                                //console.log("f=" + f);
                                //console.log("a=" + a);
                                //console.log("the id of a is :" + data[a].id);
                                //console.log("the group of f is: " + data[f].group);
                                //console.log(data[a].id == data[f].group);
                                groupish = a;
                            }
                       }
                    //console.log(groupish);
                    //console.log("past days for:"+ f + " are: " + pastDays + " group is: " + groupish);
                    
                    //console.log(data[groupish].deathTime);
                    var prog = calcProgress(pastDays,data[groupish].deathTime)
                    //console.log("progress for:"+ f + " is: " + prog);
                    makeProgressLine('progress' + f,prog);
                    
            }
                }
                
    }
    });


    $(".checkDelete").click(function() {
 //       toggle($(this).text('Delete????'));
  //  }, function() {
        $(this).html($(this).text() == 'Delete' ? 'Are you sure?  Click again to cancel' : 'Delete').toggleClass("btn-danger").toggleClass("btn-success");
    });
    //makeProgressCircle('container',perc);
  //  for (i=1;i<6;i++) {
   // makeProgressLine('progress' + i,i*0.2); 
   // }
   var trialvar = $('input[name=group]:checked', '#friendCreationForm').val();
   
   $('.groupSelect').click(function(){
    $(this).toggleClass("btn-success").toggleClass("btn-info");
    var a = $(this).val();
    var classa = '.group' + a;
    $(classa).toggle("slow");
    $(classa).prev("br").toggle();

    });
    $('#showAllGroups').click(function(){
        
    if ( $(this).val() == 1) {
        $(this).removeClass("btn-success").addClass("btn-info");
        $(".groupSelect").addClass("btn-info").removeClass("btn-success");
        $('.oneFriendLine').hide("slow");
        $('.oneFriendLine').siblings("br").hide();
        $(this).val("0");
    } 
    else
    {
        $(this).removeClass("btn-info").addClass("btn-success");
        $(".groupSelect").addClass("btn-success").removeClass("btn-info");
        $('.oneFriendLine').show("slow");
        $('.oneFriendLine').siblings("br").show();
        $(this).val("1");  
    }
    
        
    });
    var $divs = $("li.oneFriendLine");

    $('#alphBnt').on('click', function () {
        var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
            console.log(a + ",  " + b);
            return $(b).find(".progressbar-text").text() - $(a).find(".progressbar-text").text();
        });
        $(".friendList").html(alphabeticallyOrderedDivs);
        $(".oneFriendLine").after("</br>");
        $(".oneFriendLine").find(".btnToggle").click(function(){
        
       $(this).siblings(".external").toggle("slow");
       $(this).children(".toggler").toggleClass("fa-arrow-down").toggleClass("fa-arrow-up");
       
    });

    });
    $(".btnToggle").click(function(){
       $(this).siblings(".external").toggle("slow");
       $(this).children(".toggler").toggleClass("fa-arrow-down").toggleClass("fa-arrow-up");
       
    });
});




//window.onload = function shagadelic() {