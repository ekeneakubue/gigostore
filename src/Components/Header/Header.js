import React from 'react'
import './Header.css'

export default function Header(){
    return(
        <div className='container-fluid navb'>
            <div className='col'><img src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg' className='amalogo'/></div>
            <div className='col-8'>
                <div class="input-group ">
                    <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>
                    <div className="input-group-append btn btn-warning">Search</div>
                </div>
            </div>
            <div className='col'>
                <div className='col'><a href='https://www.linkedin.com/in/ekene-akubue-58046b77/' targer='_blank'>Linkedin</a></div>
            </div>
        </div>
    )
}