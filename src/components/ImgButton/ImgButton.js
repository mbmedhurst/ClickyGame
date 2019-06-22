import React from 'react'
import './ImgButton.css'
import Button from '@material-ui/core/button'

const ImgBtn = ({ imgArr }) => {

    return (
        <div id='container' style={{margin: '50px 200px'}}> {
            imgArr.map(img => {
                return <Button className='imgBtn' style={{ height: '150px', width: '200px', marginTop: '20px' }} onClick={() => console.log(img)}>
                    <img className='image' style={{ maxWidth: '100%', maxHeight: '100%' }} src={img} alt='landmark'></img>
                </Button>
            })
        }
        </div>
    )
}

export default ImgBtn
