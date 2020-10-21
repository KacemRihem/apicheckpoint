import React, {useState, useEffect} from "react";
import axios from 'axios';

function UserList() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users" ).then((res)=>
            {setData(res.data);
        console.log(res.data);
        });
    })

    return(
        <div>
        {
            data && <div>
            {data.map(el => 
            <li key={el.id}>{el.name}</li> 
            )}
            </div>
        }
        </div>
    );

}

export default UserList;

