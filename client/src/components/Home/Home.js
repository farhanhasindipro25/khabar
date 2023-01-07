import React, { useState } from 'react';
import MenuPage from '../MenuPage/MenuPage';
import Login from '../UserRegistration/Login/Login';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <h2>Home</h2>
            {isLoggedIn ? <MenuPage></MenuPage> : <Login></Login>}
        </div>
    );
};

export default Home;