import React from "react";

export default function List({title, attribute}){
    return(
        <li><a href={attribute}>{title}</a></li>
    )
}