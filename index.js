window.onload= function(){
var startButton=$(".btn-success");
console.log($("h1").html());
var stopButton=$(".btn-danger");
var resetButton=$(".btn-primary");
var minutes=$(".minutes");
var seconds=$(".seconds");
var subseconds=$(".subseconds");
 var tensset= 00;
 var secondsset=00;
 var minutesset=00;
 let Interval;

startButton.click(function(){
    clearInterval(Interval);
  Interval= setInterval(startTimer,10);
  $(".timer").toggleClass("diming-effect");

});
stopButton.click(function(){
  clearInterval(Interval);
  var lap=$(".lap-container");
  const li= document.createElement("li");
  li.innerHTML="Lap: "+ minutes.html()+":"+seconds.html()+","+subseconds.html();
  lap.append(li);
    $(".timer").toggleClass("diming-effect");

})
resetButton.click(function(){
  clearInterval(Interval);
  tensset= 00;
  secondsset=00;
  minutesset=00;
  subseconds.html("00");
  seconds.html("00");
  minutes.html("00");
  var lap=$(".lap-container");
  lap.html("");


})

function startTimer(){
  tensset++;
  if(tensset<10){
    subseconds.html("0"+tensset);
      }
      if(tensset>=10){
        subseconds.html(tensset);
        }
        if(tensset>99){
          secondsset++;
          tensset=0;
          }
          if(secondsset<10){
            seconds.html("0"+secondsset);
          }
          if(secondsset>=10){
            seconds.html(secondsset);
          }
      if(secondsset>59){
        minutesset++;
        secondsset=0;
      }

      if(minutesset<10){
        minutes.html("0"+minutesset);
      }
      if(minutes>=10){
        minutes.html(minutesset);
      }

}
};
