import { Input, AutoComplete } from 'antd';
//import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { fetchConToken } from '../../../helpers/fetch';

const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: 'right',
      }}
      
      rel="noopener noreferrer"
    >
      hola
    </a>
  </span>
);

const renderItem = (title, count, id) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
      <img className="searchScreen_user-photo" src={count} alt={id} data-id={id} loading="lazy" />
      </span>
    </div>
  ),
});


export const Complete = ({history}) => {
    
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setusuario] = useState("")
    
    
    useEffect(() => {
        async function getUsers (){
          const {users} = await (await fetchConToken("/users")).json();
          setUsuarios(users)
          
        }
        getUsers()
    }, []);
    
    const handleChange = (e) =>{
            console.log(e);
            const [user]= usuarios.filter(user => user.userName.includes(e) )
            if(user){
                setusuario(user)
            }

        } 
        
        const options =  usuario ?
          [
          {
            label: renderTitle('Usuarios'),
            options: [renderItem(usuario.userName, usuario.profilePhoto, usuario.uid)],
          }
        ] : [
            {
                label: renderTitle('Busca un usuario'),
                
              } 
        ];

        const handleClick = (e) => {
          console.log('click', e.target.parentElement.localName == 'div' );
          if( e.target.parentElement.localName == 'div'){
            history.push(`/user/${e.target.children[0].children[0].dataset.id}`);
          }
        }
        
    return (
    

    <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={300}
        onChange = {handleChange}
        onClick={handleClick}
        
        style={{
        width: 250,
        }}
        options={options}
    >
        <Input.Search size="large" placeholder="Usuarios" />
    </AutoComplete>
        ) 
}
