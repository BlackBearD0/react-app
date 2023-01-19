import React from 'react';

const authContext = React.createContext({ isLoggedIn: false, setIsLoggedIn: () => { }, usertype: 'client', setUserType: () => { } });

export default authContext;
