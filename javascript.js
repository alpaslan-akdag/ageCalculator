function ageCalculator(day, month, year){
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    

    if(currentMonth > month || (currentMonth === month && currentDay>=day)){
        return currentYear - year ;
    }
    else {
        return currentYear-year -1;
    }
}

console.log(ageCalculator(27,12,1980));