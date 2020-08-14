export default function dateFormater(dateObj){
    let formated = dateObj.slice(0,19).split("T");
    let dateRaw = formated[0].split('-');
    let time = formated[1]
    let [year, month, day ] = dateRaw;
    month = parseInt(month)
    console.log("this is the month",month)

    if(month === 1){
        month = "January"
    }
    else if(month === 2){
        month = "February"
    }
    else if(month === 3){
        month = "March"
    }
    else if(month === 4){
        month = "April"
    }
    else if(month === 5){
        month = "May"
    }
    else if(month === 6){
        month = "June"
    }
    else if(month === 7){
        month = "July"
    }
    else if(month === 8){
        month = "August"
    }
    else if(month === 9){
        month = "September"
    }
    else if(month === 10){
        month = "October"
    }
    else if(month === 11){
        month = "November"
    }
    else{
        month = "December"
    }

    return `${day} ${month}, ${year}  ${time}`
}
