import { useState } from "react";

const AplicationState = () => {
    const [user, setUser] = useState()
    const handleUser = (user) =>{
        setUser(user)
    }
    return{
        user, handleUser
    }
}

export default AplicationState;