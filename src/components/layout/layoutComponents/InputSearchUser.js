import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { PlaceContext } from '../../../context/PlaceContext';
import { fetchConToken } from '../../../helpers/fetch';
const InputSearchUser = ({history}) => {

        const [usuarios, setUsuarios] = useState([]);
        

        useEffect(async() => {
            
        const {users} = await (await fetchConToken("/users")).json();
        setUsuarios(users)
        }, []);

        const handleChange = (e) =>{
            
            console.log(e.target.innerText);
            const [user] = usuarios.filter(user => user.userName == e.target.innerText)
            if(user){

              history.push(`/user/${user.uid}`)
            }
        }




        

    return (
        <div className="w-50">
              <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={usuarios.map((option) => option.userName)}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Usuarios"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
        </div>
    )
}

InputSearchUser.propTypes = {

}

export default InputSearchUser
