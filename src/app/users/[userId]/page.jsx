import React from 'react';

const UsersDetailsPage = async({params}) => {
    const {userId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return (
        <div>
            <p className="">{res.email}</p>
            <p className="">{res.phone}</p>
        </div>
    );
};

export default UsersDetailsPage;