
import React from 'react';

import Comments from '../Comments/Comments'

export default function Post() {

    cons tfunctionNow = () => {
        console.log ("group");
    }

    return (

        <>
        <hr />
        <h1>Post that was submitted</h1>
        <hr />
        <label>{functionNow}</label>

        <Comments />
        </>
    );

}