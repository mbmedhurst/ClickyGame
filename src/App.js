import React, { Component } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import ImgBtn from './components/ImgButton'
import shuffle from 'shuffle-array'

class App extends Component {
  state = {
    imgArr: [
      'https://assets.fnlondon.com/2016/10/IMG013025_full4x3.jpg?width=620&height=465',
      'https://www.readersdigest.ca/wp-content/uploads/sites/14/2017/06/american-landmarks-statue-of-liberty.jpg',
      'https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d3832343638393835',
      'https://media.cntraveler.com/photos/5539216cab60aad20f3f3aaa/4:3/w_480,c_limit/eiffel-tower-paris-secret-apartment.jpg',
      'https://assets.classicfm.com/2012/42/brandenburg-gate-1350560062-view-0.jpg',
      'https://img.etimg.com/thumb/msid-67205335,width-643,imgsize-796545,resizemode-4/big-ben.jpg',
      'https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/02/Sydney-Opera-House_Side-angle-1200x856.jpg',
      'https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/462971_Viator_Thinkstock_169771.jpg',
      'https://imgc.artprintimages.com/img/print/duomo-and-leaning-tower-pisa-italy_u-l-pdkpqx0.jpg?h=550&w=550&background=fbfbfb',
      'https://afar-production.imgix.net/uploads/images/post_images/images/HYF1MFuVcs/original_7c04101b7056eaf1ff178aa8389a4b26.jpg?1459742764?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954',
      'https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d383432303438393437',
      'https://news.berkeley.edu/wp-content/uploads/2019/04/DSC00733_Notre_Dame_Paris_from_east-e1556555780620.jpg',
    ],
    guesses: [],
    score: 0,
    topScore: 0,
    goodGuess: true
  }

  // function to shuffle the images
  // this is working!
  handleShuffle = _ => {
    let imgArr = this.state.imgArr
    shuffle(imgArr)
    this.setState({ imgArr })
  }

  // function to determine if click is a match or not
  // the push to the guessed array is working
  // the function to check if there is a match is not working
  handleClickImage = (img) => {
    let guesses = this.state.guesses
    this.handleEvaluateMatch(img)
    guesses.push(img)
    this.setState({ ...img })
    console.log(guesses)
    this.handleShuffle()
  }

  // function to evaluate whether the image has already been clicked
  handleEvaluateMatch = (img) => {
    let guesses = this.state.guesses
    for (var i = 0; i < guesses.length; i++) {
      if (img !== guesses[i]) {
        console.log('You guessed correctly!')
      } else {
        console.log('You guessed incorrectly!')
      }
    }
  }



  // clicked image id is pushed to an arry of clicked images
  // every time an image is clicked, we loop through the array to see if there is a match
  // if there IS NOT a match:
  // -- this.setState({ score: this.state.score + 1 })
  // -- this.setState({ topScore: this.state.topScore + 1 })
  // -- you guessed displays 'correctly'
  // -- images shuffle
  // if there IS a match:
  // -- score goes back to 0
  // -- top score is passed to an array which always displays the highest score
  // -- you guessed displays 'incorrectly'
  // -- imgArr is emptied
  // -- shuffle(imgArr)


  // function to manage score and top score  


  render() {


    return (
      <>
        <TopNav
          score={this.state.score}
          topScore={this.state.topScore}
          goodGuess={this.state.goodGuess}
        />

        <ImgBtn
          imgArr={this.state.imgArr}
          handleClickImage={this.handleClickImage}
          handleEvaluateMatch={this.handleEvaluateMatch}
          handleShuffle={this.handleShuffle}
        />

      </>
    )
  }
}

export default App