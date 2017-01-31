var React = require('react')
var render = require('react-dom').render
var EmojiPicker = require('emojione-picker');

function Emoji({state}) {
  var emojiClass = state.showEmojiPicker === false ? '' : 'hide'
    return (
      <EmojiPicker className='hide' onChange={console.log('hello in picker')}/>
    )
}


 module.exports = Emoji
