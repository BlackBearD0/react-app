import React from 'react';

// Creating the context object and passing the default values.
const authContext = React.createContext({ isLoggedIn: false, setIsLoggedIn: () => { }, usertype: 'client', setUserType: () => { } });

export default authContext;
