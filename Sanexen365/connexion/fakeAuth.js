function logIn( user, password, userLoggedIn ){
    const authUser = user;
    const authPassword = password;
    userLoggedIn(true);
    console.log(userLoggedIn + authUser + authPassword);
    
    return(userLoggedIn && authUser && authPassword);
}

function logOut( user, password, userLoggedIn ){
    userLoggedIn(false);
    user = null;
    password = null;

    return(userLoggedIn && user && password);
}

export {logIn, logOut}