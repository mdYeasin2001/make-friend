import React from 'react';

const Add = (props) => {
    const add = props.add;
    // console.log(add);
    const total = add.reduce((sum, user) => sum + user.salary ,0)
    return (
        <div>
            <h3>Your Friends: {add.length}</h3>
            <p>Total Annual Salary: {total}</p>
        </div>
    );
};

export default Add;