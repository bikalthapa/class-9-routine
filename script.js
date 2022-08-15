    // invisible function
    function invisible(){
      let routine = document.getElementById("testroutine");
      let btn = document.getElementById("hidbtn");
      let dailyroutine = document.getElementById("dailyroutine");
      let dbtn = document.getElementById("dailybtn");
      if(routine.classList == ""){
          // this code will run if test routine is not displayed
      routine.classList.add("invisible");
      dailyroutine.classList.remove("invisible");
      btn.innerHTML = "View Test Routine";
      }else{
          // this code will run if daily routine is not displayed
          routine.classList.remove("invisible");
          dailyroutine.classList.add("invisible");
          btn.innerHTML = "View Daily Routine";
      };
  };
  // Declaring Variables
  let subjectarea = document.getElementById("subject");
  let remainingtime = document.getElementById("remaint");
  let upcommingsubject = document.getElementById("upcome");


  function times(){
      // Declaring Variables //
      var date = new Date();
      var second = date.getSeconds();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var day = date.getDay();
      var timearea = document.getElementById("timearea");
      var datearea = document.getElementById("datearea");
      timearea.innerHTML = hour + " : " + minute + " : "+second;

      if(day==0){
          sunmon();
          datearea.innerHTML = "Sunday";
      } else if(day==1){
          sunmon();
          datearea.innerHTML = "Monday";
      } else if(day==2){
          tuewed();
          datearea.innerHTML = "Tuesday";
      } else if(day==3){
          tuewed();
          datearea.innerHTML = "Wednesday";
      } else if(day==4){
          thufri();
          datearea.innerHTML = "Thursday";
      } else if(day==5){
          thufri();
          datearea.innerHTML = "Friday";
      } else if(day==6){
          saturday();
      } else{
          datearea.innerHTML = "Your day function is not Working properly";
      };
  };


  // Starting Day function from Sunday to Friday //
  function sunmon(){ 
      // Declaring periods for sunday
      var date = new Date();
      var second = date.getSeconds();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var sfirst = "Cumpolsory Maths";
      var ssecond = "Web Page";
      var sthird = "Electro System";
      var sfourth = "Nepali";
      var sfifth = "English";
      var ssix = "FCA";
      var sbreak = "Break";
      var sseven = "Social";
      var seight = "Optional Maths";
      var snine = "C Programming";
      var sten = "Science";

      if(hour<10){
          subjectarea.innerHTML = "Break";
          upcommingsubject.innerHTML = sfirst;
      }else if(hour==10 && minute>=15 && minute<=55){
          // First Period //
          subjectarea.innerHTML = sfirst;
          upcommingsubject.innerHTML = ssecond;
          remainingtime.innerHTML = 55 - minute;
      }else if(hour==10 && minute>=56 || hour==11 && minute<=30){
          // Second Period
          subjectarea.innerHTML = ssecond;
          upcommingsubject.innerHTML = sthird;
          if(minute>=55 && minute<=60){
              remainingtime.innerHTML = 90 - minute;
          }else if(minute>=0 && minute<=30){
              remainingtime.innerHTML = 30 - minute;
          };
      }else if(hour==11 && minute>=30 || hour==12 && minute<=5){
          // Third Period
          subjectarea.innerHTML = sthird;
          upcommingsubject.innerHTML = sfourth;
          if(minute>=30 && minute<=60){
              remainingtime.innerHTML = 65 - minute;
          }else if(minute>=0 && minute<=5){
              remainingtime.innerHTML = 5 - minute;
          }
      }else if(hour==12 && minute>=5 && minute<=40){
          // Fourth Period
          subjectarea.innerHTML = sfourth;
          upcommingsubject.innerHTML = sfifth;
          remainingtime.innerHTML = 40 - minute;
      }else if(hour==12 && minute>=40 || hour==13 && minute<=15){
          // Fifth Period
          subjectarea.innerHTML = sfifth;
          upcommingsubject.innerHTML = ssix;
          if(minute>=40 && minute<=60){
              remainingtime.innerHTML = 75 - minute;
          }else if (minute>=0 && minute<=15){
              remainingtime.innerHTML = 15 - minute;
          };
      }else if(hour==13 && minute<=55 && minute>=15){
          // Sixth period
          subjectarea.innerHTML = ssix;
          upcommingsubject.innerHTML = sbreak;
          remainingtime.innerHTML = 55 - minute;
      }else if(hour==13 && minute>=55 || hour==14 && minute<=15){
          // Break Time
          subjectarea.innerHTML = sbreak;
          upcommingsubject.innerHTML = sseven;
          if(minute>=55 && minute<=60){
              remainingtime.innerHTML = 75 - minute;
          }else if(minute>=0 && minute<=15){
              remainingtime.innerHTML = 15 - minute;
          };
      }else if(hour==14 && minute<=50 && minute>=15){
          // Seventh period
          subjectarea.innerHTML = sseven;
          upcommingsubject.innerHTML = seight;
          remainingtime.innerHTML = 50 - minute;
      }else if(hour==14 && minute>=50 || hour==15 && minute<=25){
          // Eighth period
          subjectarea.innerHTML = seight;
          upcommingsubject.innerHTML = snine;
          if(minute>=50 && minute<=60){
              remainingtime.innerHTML = 85 - minute;
          }else if(minute>=0 && minute<=25){
              remainingtime.innerHTML = 25 - minute;
          };
      }else if(hour==15 && minute>=25 || hour==16 && minute==0){
          //Nineth period
          subjectarea.innerHTML = snine;
          upcommingsubject.innerHTML = sten;
          if(minute>=25 && minute<=60){
              remainingtime.innerHTML = 60 - minute;
          };
      }else if(hour==16 && minute>=0 && minute<=35){
          // Tenth Period
          subjectarea.innerHTML = sten;
          upcommingsubject.innerHTML = sbreak;
          remainingtime.innerHTML = 35 - minute;
      }else{
          subjectarea.innerHTML = "No";
          upcommingsubject.innerHTML = "No";
      };
   };

  function tuewed(){ 
      // Declaring periods for Tuesday
      var date = new Date();
      var second = date.getSeconds();
      var hour = date.getHours();
      var tuinute =  date.getMinutes();
      var tufirst = "Cumpolsory Maths";
      var tusecond = "FCA + WEB";
      var tuthird = "FCA + WEB";
      var tufourth = "Nepali";
      var tufifth = "English";
      var tusix = "WEB";
      var tubreak = "Break";
      var tuseven = "Social";
      var tueight = "Optional Maths";
      var tunine = "C programming";
      var tuten = "Science";

      if(hour<10){
          subjectarea.innerHTML = "Break";
          upcommingsubject.innerHTML = tufirst;
      }else if(hour==10 && minute>=15 && minute<=55){
          // First Period //
          subjectarea.innerHTML = tufirst;
          upcommingsubject.innerHTML = tusecond;
          remainingtime.innerHTML = 55 - minute;
      }else if(hour==10 && minute>=56 || hour==11 && minute<=30){
          // Second Period
          subjectarea.innerHTML = tusecond;
          upcommingsubject.innerHTML = tuthird;
      }else if(hour==11 && minute>=30 || hour==12 && minute<=5){
          // Third Period
          subjectarea.innerHTML = tuthird;
          upcommingsubject.innerHTML = tufourth;
      }else if(hour==12 && minute>=5 && minute<=40){
          // Fourth Period
          subjectarea.innerHTML = tufourth;
          upcommingsubject.innerHTML = tufifth;
      }else if(hour==12 && minute>=40 || hour==13 && minute<=15){
          // Fifth Period
          subjectarea.innerHTML = tufifth;
          upcommingsubject.innerHTML = tusix;
      }else if(hour==13 && minute<=55 && minute>=15){
          // Sixth period
          subjectarea.innerHTML = tusix;
          upcommingsubject.innerHTML = tubreak;
      }else if(hour==13 && minute>=55 || hour==14 && minute<=15){
          // Break Time
          subjectarea.innerHTML = tubreak;
          upcommingsubject.innerHTML = tuseven;
      }else if(hour==14 && minute<=50 && minute>=15){
          // Seventh period
          subjectarea.innerHTML = tuseven;
          upcommingsubject.innerHTML = tueight;
      }else if(hour==14 && minute>=50 || hour==15 && minute<=25){
          // Eighth period
          subjectarea.innerHTML = tueight;
          upcommingsubject.innerHTML = tunine;
      }else if(hour==15 && minute>=25 || hour==16 && minute==0){
          //Nineth period
          subjectarea.innerHTML = tunine;
          upcommingsubject.innerHTML = tuten;
      }else if(hour==16 && minute>=0 && minute<=35){
          // Tenth Period
          subjectarea.innerHTML = tuten;
          upcommingsubject.innerHTML = tubreak;
      }else{
          subjectarea.innerHTML = "No";
          upcommingsubject.innerHTML = "No";
      };
  };

  function thufri(){
      datearea.innerHTML = "Thursday";
      // Declaring periods for Thursday
      var date = new Date();
      var second = date.getSeconds();
      var hour = date.getHours();
      var thuinute = date.getMinutes();
      var thufirst = "Cumpolsory Maths";
      var thusecond = "ELE + C";
      var thuthird = "ELE + C";
      var thufourth = "Nepali";
      var thufifth = "English";
      var thusix = "ELE";
      var thubreak = "Break";
      var thuseven = "Social";
      var thueight = "Optional Maths";
      var thunine = "FCA";
      var thuten = "Science";

      if(hour<10){
          subjectarea.innerHTML = "Break";
          upcommingsubject.innerHTML = thufirst;
      }else if(hour==10 && minute>=15 && minute<=55){
          // First Period //
          subjectarea.innerHTML = thufirst;
          upcommingsubject.innerHTML = thusecond;
      }else if(hour==10 && minute>=56 || hour==11 && minute<=30){
          // Second Period
          subjectarea.innerHTML = thusecond;
          upcommingsubject.innerHTML = thuthird;
      }else if(hour==11 && minute>=30 || hour==12 && minute<=5){
          // Third Period
          subjectarea.innerHTML = thuthird;
          upcommingsubject.innerHTML = thufourth;
      }else if(hour==12 && minute>=5 && minute<=40){
          // Fourth Period
          subjectarea.innerHTML = thufourth;
          upcommingsubject.innerHTML = thufifth;
      }else if(hour==12 && minute>=40 || hour==13 && minute<=15){
          // Fifth Period
          subjectarea.innerHTML = thufifth;
          upcommingsubject.innerHTML = thusix;
      }else if(hour==13 && minute<=55 && minute>=15){
          // Sixth period
          subjectarea.innerHTML = thusix;
          upcommingsubject.innerHTML = thubreak;
      }else if(hour==13 && minute>=55 || hour==14 && minute<=15){
          // Break Time
          subjectarea.innerHTML = thubreak;
          upcommingsubject.innerHTML = thuseven;
      }else if(hour==14 && minute<=50 && minute>=15){
          // Seventh period
          subjectarea.innerHTML = thuseven;
          upcommingsubject.innerHTML = thueight;
      }else if(hour==14 && minute>=50 || hour==15 && minute<=25){
          // Eighth period
          subjectarea.innerHTML = thueight;
          upcommingsubject.innerHTML = thunine;
      }else if(hour==15 && minute>=25 || hour==16 && minute==0){
          //Nineth period
          subjectarea.innerHTML = thunine;
          upcommingsubject.innerHTML = thuten;
      }else if(hour==16 && minute>=0 && minute<=35){
          // Tenth Period
          subjectarea.innerHTML = thuten;
          upcommingsubject.innerHTML = thubreak;
      }else{
          subjectarea.innerHTML = "No";
          upcommingsubject.innerHTML = "No";
      };
  };


  function saturday(){
      datearea.innerHTML = "Saturday";
      subjectarea.innerHTML = "No";
      upcommingsubject.innerHTML = "No";
  };


  function repet(){
      setInterval(times),1000;
  };