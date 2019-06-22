import React, {Component} from 'react'
import './App.css'
import TopNav from './components/TopNav'
import ImgBtn from './components/ImgButton'

const App = props => {
  // state = {
  //   score: 0,
  //   topScore: 0,
  //   guesses: [],
  //   goodGuess: true
  // }

  const imgArr = [
    'https://assets.fnlondon.com/2016/10/IMG013025_full4x3.jpg?width=620&height=465',
    'https://www.readersdigest.ca/wp-content/uploads/sites/14/2017/06/american-landmarks-statue-of-liberty.jpg',
    'https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d3832343638393835',
    'https://i1.wp.com/frenchmoments.eu/wp-content/uploads/2013/10/Paris-%C2%A9-French-Moments-Tour-Eiffel-Structure-01.jpg?fit=2048%2C1536&ssl=1',
    'https://assets.classicfm.com/2012/42/brandenburg-gate-1350560062-view-0.jpg',
    'https://img.etimg.com/thumb/msid-67205335,width-643,imgsize-796545,resizemode-4/big-ben.jpg',
    'https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/02/Sydney-Opera-House_Side-angle-1200x856.jpg',
    'https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/462971_Viator_Thinkstock_169771.jpg',
    'https://imgc.artprintimages.com/img/print/duomo-and-leaning-tower-pisa-italy_u-l-pdkpqx0.jpg?h=550&w=550&background=fbfbfb',
    'https://afar-production.imgix.net/uploads/images/post_images/images/HYF1MFuVcs/original_7c04101b7056eaf1ff178aa8389a4b26.jpg?1459742764?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954',
    'https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d383432303438393437',
    'https://news.berkeley.edu/wp-content/uploads/2019/04/DSC00733_Notre_Dame_Paris_from_east-e1556555780620.jpg',
  ]
  
  // function to determine if click is a match or not
  // handleClickImage = (img) => {
  //   guesses.push(img)
  //   console.log(guesses)
  //   for (k = 0; k < guesses.length; k++) {
  //     if(img === k) {
  //       console.log('You guessed incorrectly!')
  //     } else {
  //       console.log('You guessed correctly!')
  //     }
  //   }
  // }

  // clicked image id is pushed to an arry of clicked images
  // every time an image is clicked, we loop through the array to see if there is a match
  // if there IS NOT a match:
  // -- score is increased by one
  // -- top score is increased by one
  // -- you guessed displays 'correctly'
  // -- images shuffle
  // if there IS a match:
  // -- score goes back to 0
  // -- top score is passed to an array which always displays the highest score
  // -- you guessed displays 'incorrectly'
  // -- imgArr is emptied
  // -- images shuffle
  
  
  // function to manage score and top score
  
  
  // function to shuffle images
  // this is too random - it repeats the same image more than once and leaves others out
  // I want each image to show one time but suffle positions
    // const shuffle = (imgArr) => {
    //     for (let i = imgArr.length - 1; i > 0; i--) {
    //       let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    //       [imgArr[i], imgArr[j]] = [imgArr[j], imgArr[i]]; // swap elements
    //     }
    //   }
  

  return (
      <>
      <TopNav />
      <ImgBtn img={imgArr} />

      </>
    )
  }

export default App