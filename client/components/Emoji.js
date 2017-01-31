var React = require('react')
var render = require('react-dom').render
// var EmojiPicker = require('emoji-picker')
// var emojiMap = require('react-emoji-picker/lib/emojiMap')


function EmojiPicker({state, dispatch}) {
  return (
    <p ref="emoji">
        <label htmlFor="emoji">Emoji</label>
        <input name="emoji" id="emoji" value={this.state.emoji} autoComplete="off"
          type={this.state.showEmojiPicker ? "search" : "text"}
          onChange={this.updateState} onKeyDown={this.grabKeyPress}/>
        {this.emojiPicker()}
      </p>
  )
}

emojiPicker: function() {
  if(this.state.showEmojiPicker) {
    return (
      <EmojiPicker
        style={emojiPickerStyles} onSelect={this.setEmoji}
        query={this.state.emoji}
      />
    )
  }
},

 module.exports = EmojiPicker
