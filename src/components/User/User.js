import React from 'react';

function User({ user }) {
    return (
        <div>
            <p>Witaj, {user.name}</p>
            <p>Twój e-mail: {user.email}</p>
        </div>
    )
}

export default User;