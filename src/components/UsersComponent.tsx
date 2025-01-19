import {useEffect, useState} from "react";
import {getUsers} from "../services/general.api.services.ts";
import {IBaceResponseModel} from "../models/IBaceResponseModel.ts";
import {IUser} from "../models/IUser.ts";


const UsersComponent = () => {
    const [users,setUsers]=useState<IUser[]>([])
    useEffect(()=>{getUsers<IBaceResponseModel & {users:IUser[]}>().then(({users} )=> setUsers(users))},[])
    return (
        <div>
            {
                users.map((user:IUser)=><div key={user.id}>{user.username}</div>)
            }
        </div>
    );
};

export default UsersComponent;