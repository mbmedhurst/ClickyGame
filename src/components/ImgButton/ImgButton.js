import React, {Component} from 'react'
import './ImgButton.css'
import Button from '@material-ui/core/button'


class ImgBtn extends Component {
    render() {
    const { imgArr, handleClickImage } = this.props

    return (
        <div id='container' style={{margin: '50px 250px'}}> {
            imgArr.map(img => {
                return <Button className='imgBtn' style={{ height: '120px', width: '160px', marginBottom: '20px' }} onClick={() => handleClickImage(img)}>
                    <img className='image' style={{ maxWidth: '100%', maxHeight: '100%' }} src={img} alt='landmark'></img>
                </Button>
            })
        }
        </div>
    )
    }
}

export default ImgBtn
