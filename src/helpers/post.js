import {URL} from './Gets';
import Swal from 'sweetalert2';
export const addNewPlace = async(place) =>{
    
    try {
        await fetch(`${URL}/places`,{
            method:"POST",
            body: JSON.stringify(place),
            headers: {'Content-Type': 'application/json'}
        })
        console.log('subido');
        Swal.fire("Excelente", place.place, 'success')
    } catch (error) {
        console.log(error);
    }
    console.log(place);
}