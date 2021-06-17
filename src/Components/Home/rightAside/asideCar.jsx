import React from 'react'



export default function  AsideCard (props) {
        if(props.img){
        return(
            <div className='card my-4 shadow-sm post'>
                <img className="card-img-top" src={props.img} alt=""  />
                <div className='card-body p-4'>
                    {props.children}
                </div>
            </div>
        )
        }
        return(
            <div className='card my-4 shadow-sm post'>
                <div className='card-body'>
                    {props.children}
                </div>
            </div>
        )

}


