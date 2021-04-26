import React, {useRef, useState, useEffect} from 'react';

export const useFetch = (url)=>{

    //useRef
    const isMounted = useRef(true);
    const [state, setstate] = useState({data: null, loading: true, error: null});

    //efect para el ref
    useEffect(()=>{

        return ()=>{
            //isMounted pasa a falso cuando el componente se desmonta
            isMounted.current = false;
        }

    }, [])

    useEffect(async()=>{
        setstate({data: null, loading: true, error: null})
        fetch(url)
        .then(data => data.json())
        .then(data => {
        

            if(isMounted.current){
                setstate({
                    data,
                    loading: false
                })  
            }else{
                console.log('setState no se llamo');
            }
        })


    },[url])

    return state;
}