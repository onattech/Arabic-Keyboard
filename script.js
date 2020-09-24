function handleChange() {
  window.scrollTo(0, document.body.scrollHeight)
}

function add(c) {
  console.log(document.getElementById('text').textContent)
  document.getElementById('text').value += c
}

function backspace() {
  var textbox = document.getElementById('text');

  var ss = textbox.selectionStart;
  var se = textbox.selectionEnd;
  var ln  = textbox.value.length;
  
  var textbefore = textbox.value.substring( 0, ss );    //text in front of selected text
  var textselected = textbox.value.substring( ss, se ); //selected text
  var textafter = textbox.value.substring( se, ln );    //text following selected text
  
  if(ss==se) // if no text is selected
  {
  textbox.value = textbox.value.substring(0, ss-1 ) + textbox.value.substring(se, ln );
  textbox.focus();
  textbox.selectionStart = ss-1;
  textbox.selectionEnd = ss-1;
  }
  else // if some text is selected
  {
  textbox.value = textbefore + textafter ;
  textbox.focus();
  textbox.selectionStart = ss;
  textbox.selectionEnd = ss;
  }
}

// function getCaretCharacterOffsetWithin(element) {
//   var caretOffset = 0
//   var doc = element.ownerDocument || element.document
//   var win = doc.defaultView || doc.parentWindow
//   var sel
//   if (typeof win.getSelection != 'undefined') {
//     sel = win.getSelection()
//     if (sel.rangeCount > 0) {
//       var range = win.getSelection().getRangeAt(0)
//       var preCaretRange = range.cloneRange()
//       preCaretRange.selectNodeContents(element)
//       preCaretRange.setEnd(range.endContainer, range.endOffset)
//       caretOffset = preCaretRange.toString().length
//     }
//   } else if ((sel = doc.selection) && sel.type != 'Control') {
//     var textRange = sel.createRange()
//     var preCaretTextRange = doc.body.createTextRange()
//     preCaretTextRange.moveToElementText(element)
//     preCaretTextRange.setEndPoint('EndToEnd', textRange)
//     caretOffset = preCaretTextRange.text.length
//   }
//   return caretOffset
// }
