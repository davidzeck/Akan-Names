
function submt(){
    //Get the variables from the form 
    var gender = document.getElementById("gender").checked;
     var date = document.getElementById("date").value;
     var akan = document.getElementById("akan")

     //get day of week using JS object
     var dt = new Date(date);
     var selectedDay = dt.getDay();
     
     if(gender == true){
         //male
         var maleName=["Kwasi" , "Kwadwo" , "Kwabena" ,"Kwaku" , "Yaw" , "Kofi" , "Kwame"];
         akan.value = maleName[selectedDay];
     }else{
         //female
         var femaleName=["Akosua" , "Adwoa" , "Abenaa" , "Akua" , "Yaa" , " Afua" , "Ama" ];
         akan.value = femaleName[selectedDay];
     }

}
