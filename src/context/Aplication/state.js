import { useEffect, useState } from "react";
import { useFetchOneUserAplication } from "../../sdk/Login/request";
import { GetIdUser } from "../../services/localstorage";

const AplicationState = () => {
    const [user, setUser] = useState({})

    const handleUser = (user) => {
        setUser(user)
    }

    const year = [
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026,
        2027,
        2028,
        2029,
        2030
    ]


    const { data: userRequest } = useFetchOneUserAplication(GetIdUser())


    useEffect(() => {
        if (userRequest) {
            setUser(userRequest)
        }
    }, [userRequest])


    return {
        user, handleUser, year
    }
}

export default AplicationState;