var React = require('react')
var render = require('react-dom').render
var Emoji = require('emojione-picker');

function EmojiPicker({state, dispatch}) {
  return (
    <Emoji onClick={function(data){
      console.log("Emoji chosen", data);
    }} />
  )
}


 module.exports = EmojiPicker
