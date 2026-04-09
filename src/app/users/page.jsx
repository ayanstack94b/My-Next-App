import Link from 'next/link';
import React from 'react';

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();

    return (
        <div>
            <h2 className="">Users are coming here</h2>
           <div className="grid grid-cols-3 gap-5">
                {
                    users.map((user, i) => <div key={i} className="card card-border bg-blue-600 text-white ">
                        <div className="card-body">
                            <h2 className="card-title">Name: {user.name}</h2>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/users/${user.id}`}><button className="btn btn-primary">Contact</button></Link>
                            </div>
                        </div>
                    </div>)
                }
           </div>
        </div>
    );
};

export default UsersPage;