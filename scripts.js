
$(function() {
    console.log( "ready!" );
 $(".idoWrapper").removeClass("hide");
 $(".idoWrapper").addClass("bcgSlideDown");
                 $('#fullpage').fullpage({
                sectionsColor: ['#ADE6D8', '#ADE6D8', '#ADD8E6'],
                anchors:['homePage',
                         'portfolioPage',
                         'aboutPage',
                         'contactPage',
                        ],

            });

   $(".imgWrapper").addClass("SlideIn");

   $('.menuBtn').click(function(){
    $(this).toggleClass('open');
  });

setTimeout(enlarge, 1000);

});




function enlarge() {
    $('#infoBCG').addClass('enlarging');
  };


$(".idoWrapper").hover(
  function () {
     $("#idoArm").removeClass("AnimateOut");
     $("#idoBrow").removeClass("AnimateOut");
     $("#idoArm").addClass("Animate");
     $("#idoBrow").addClass("Animate");
     $(".steam-container").css("visibility", "hidden");
  },
  function () {
    $("#idoArm").addClass("AnimateOut");     
    $("#idoBrow").addClass("AnimateOut");
    $("#idoArm").removeClass("Animate");
    $("#idoBrow").removeClass("Animate");
    $(".steam-container").css("visibility", "visible");
  });


