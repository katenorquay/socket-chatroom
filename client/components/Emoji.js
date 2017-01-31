var React = require('react')
var render = require('react-dom').render
var EmojiPicker = require('emojione-picker');

function Emoji({state, dispatch}) {

  var emojiClass = state.showEmojiPicker === true ? 'hide' : 'hide'

  return (
      <EmojiPicker className={emojiClass} onChange={function(data){
        console.log("Emoji chosen", data)
      }} />
  )
}


 module.exports = EmojiPicker
