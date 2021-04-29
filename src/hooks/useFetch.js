import React, {useRef, useState, useEffect} from 'react';

export const useFetch = (url)=>{

    //useRef
    const isMounted = useRef(true);
    const [state, setstate] = useState([]);

    //efect para el ref
    useEffect(()=>{

        return ()=>{
            //isMounted pasa a falso cuando el componente se desmonta
            isMounted.current = false;
        }

    }, [])

    useEffect(async()=>{
       
        fetch(url)
        .then(data => data.json())
        .then(data => {
            if(isMounted.current){
                setstate(data)  
            }else{
                console.log('setState no se llamo');
            }
        })


    },[url])

    return state;
}