
export const registerUser = (dataName, dataEmail, dataPassword) => {
    const data = {
        "username": dataName,
        "email": dataEmail,
        "password": dataPassword
    }
     return async () => {
         let response = await fetch(`https://project-drugsintel-back.herokuapp.com/accounting/registration`, {
             method: 'POST',
             headers: {
                 'Content-Type': "application/json"
             },
             body: JSON.stringify(data)
         })
             return response.status;
     }
}


export const loginUser = (login, password) => {

    let data_input = {
        "username": login,
        "password": password
    }
    return async () => {
        console.log("login 1: " + login + password);
        let response = await fetch(`https://project-drugsintel-back.herokuapp.com/accounting/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Basic ${btoa(login + ':' + password)}`
                },
                body: JSON.stringify(data_input)
            })
            if(response.status === 200){
                let data = response.json();
                console.log(data);
                return data;
            }else{
                return response.status;
            }
    }
}
//409 -conflict: user with this name just exist