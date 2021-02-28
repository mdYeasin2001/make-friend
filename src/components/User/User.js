import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const {name, img, email, phone, job, salary, country} = props.usersData
    return (
        <div className="user">
            <div className="user-img">
                <img src={img} alt="profile"/>
            </div>
            <div className="user-info">
                <h2>{name}</h2>
                <p>E-mail: {email}</p>
                <p>Phone-Number: {phone}</p>
                <p>Job: {job}</p>
                <p>Annual Salary: {salary}</p>
                <p>From: {country}</p>
                <button onClick={() => props.handleAdd(props.usersData)}><FontAwesomeIcon icon={faPlus} className="plus-icon" />add to friend</button>
            </div>
        </div>
    );
};

export default User;