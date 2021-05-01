
import { useEffect } from 'react';
import {URL} from './Gets'

export const PatchEdit =async(endpoint,id, field, newAtribute )=>{

            try {
                await fetch(`${URL}/${endpoint}/${id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(`{${field}: ${newAtribute}}`),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                    
                });
                console.log('dentro del patch')
                // window.location.href = `http://localhost:3000/search/${id}`;
            } catch (error) {
                console.log(error);
            }

   
}