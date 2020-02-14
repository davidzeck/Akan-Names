
function passGender(gender){
     var birth = document.getElementById("date").value;
    var day = new Date(birth).getDay();
    

    if(gender == "M"){
        namesofakan =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var y = namesofakan[day];
    document.getElementById("akan").value=y;
    }else{
    namesofakan =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var y = namesofakan[day];
document.getElementById("akan").value=y;
}
}
