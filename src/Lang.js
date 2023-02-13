import React from 'react';
function List(props)
{
    return(
   
    <h1>This is {props.name} language</h1>
    
 );
}
function Lang()
{
    const lang=[{id:1,name:'Hindi'},{id:2,name:'English'},{id:3,name:'Korean'}];
    return(
        <>
        <h1>Languages</h1>
        <ul>
            {lang.map((data)=><List key ={data.id} name={data.name}/>)}
        </ul>
        </>

    );
}

export default Lang;