


const fakeName = (id) =>{
    let fake;
    (id === 1 )? fake = "Francisco Santos" : 
    (id === 2 )? fake= "Pedro Sola" :
    (id === 3 )? fake= "Laura Maria" : 
    (id === 4 )? fake= "Jose Pepe" :
    (id === 5 )? fake= "Sonora Dinamita" :
    (id === 6 )? fake = "Alfredo Gutierrez" : 
    (id === 7 )? fake= "Jose Davida" :
    (id === 8 )? fake= "Diana cruz" : 
    (id === 9 )? fake= "Ashley Nicole" :
    (id === 10 )? fake= "Donal trump" : fake= " Usuario desconocido";
    return fake;
}



//Reset de la fecha
const resetDate = (date)=>{
    date[1] = Number(date[1])
    let resetMonth;
    (date[1] === 1 )?  resetMonth ="De Enero" : 
    (date[1] === 2 )? resetMonth ="De Febrero" :
    (date[1] === 3 )? resetMonth ="De Marzo": 
    (date[1] === 4 )? resetMonth ="De Abril" :
    (date[1] === 5 )? resetMonth ="De Mayo" :
    (date[1] === 6 )?  resetMonth ="De Junio" : 
    (date[1] === 7 )? resetMonth ="De Julio" :
    (date[1] === 8 )? resetMonth ="De Agosto" : 
    (date[1] === 9 )? resetMonth ="De Septiembre" :
    (date[1] === 10 )? resetMonth ="De Octubre": 
    (date[1] === 11 )? resetMonth ="De Noviembre":
    (date[1] === 12 )? resetMonth ="De Diciembre": resetMonth='Uknown';

    return resetMonth;
}



export {
    fakeName,
    resetDate
}