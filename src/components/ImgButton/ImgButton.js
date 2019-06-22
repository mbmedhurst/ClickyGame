import React, { Component } from 'react'
import './ImgButton.css'
import Button from '@material-ui/core/button'

const ImgBtn = ({img}) => {

    return (
        img.map(img => {
            // the suffle happens on page refresh, not onClick
            return <Button className='imageBtn' style={{ height: '225px', width: '300px', marginTop: '20px' }} onClick={() => console.log(img)}>
                <img className='image' style={{ maxWidth: '100%', maxHeight: '100%' }} src={img} alt='landmark'></img>
            </Button>
        })
    )
}

export default ImgBtn
