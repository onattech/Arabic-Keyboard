let ctrl = false
let shift = false
    
  document.addEventListener('keydown', (event) => {
  // alert(event.code)

  if (event.code == 'Backspace'){
    event.preventDefault()
    backspace()
  }
  if ((event.code === 'ShiftLeft') || (event.code ==='ShiftRight')){
    event.preventDefault()
    shift = true
  }  
  if ((event.code === 'ControlLeft') || (event.code ==='ControlRight')){
    event.preventDefault()
    ctrl = true
  }
  if (dict[event.code]){
    if (ctrl && event.code === 'KeyA'){
      event.preventDefault()
      document.getElementById('text').setSelectionRange(0,
        document.getElementById('text').value.length)
      ctrl = false
    } else {
      event.preventDefault()
      add(event.code)
    }
  } 
}
)

document.addEventListener('keyup', (event) => {
  if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')){
    shift = false
  }
  if ((event.code === 'ControlLeft') || (event.code === 'ControlRight')){
    ctrl = false
  }
}
)

function handleChange() {
  window.scrollTo(0, document.body.scrollHeight)
}

function add(c) {
  console.log(c);
  new Audio(`./Audio/${dict[c][2]}.mp3`).play()
  shift ? (c = dict[c][1]) : (c = dict[c][0])

  let textbox = document.getElementById('text')
  let n = textbox.selectionStart
  let updatedValue = textbox.value.slice(0,n) + c +  textbox.value.slice(n ) 
  document.getElementById('text').value = updatedValue
  textbox.focus();
  textbox.selectionStart = n + 1;
  textbox.selectionEnd = n + 1;
}

function enter () {
  // alert(document.getElementById('text').selectionStart)
  // alert(shift)
  document.getElementById('first').innerHTML = `Shift is ${shift}`
}

function erase() {
  document.getElementById('text').value = ''
}

function copy() {
  // document.getElementById('text').setSelectionRange(0,document.getElementById('text').value.length)
  document.getElementById('text').setSelectionRange(0,5)
  document.getElementById('text').select()
}

function backspace() {
  var textbox = document.getElementById('text');

  var ss = textbox.selectionStart;
  var se = textbox.selectionEnd;
  var ln  = textbox.value.length;
  document.getElementById('first').innerHTML  = `Selection Start  ${ss}`
  document.getElementById('second').innerHTML = `Selection End    ${se}`
  document.getElementById('third').innerHTML  = `Selection Length ${ln}`
  
  var textbefore = textbox.value.substring( 0, ss );    //text in front of selected text
  var textselected = textbox.value.substring( ss, se ); //selected text
  var textafter = textbox.value.substring( se, ln );    //text following selected text
  
  
  if(ss==se) // if no text is selected
  {
    // alert('no text')
    document.getElementById('sixth').innerHTML  = `1 ${textbox.value.substring(0, ss-1 )}`
    textbox.value = textbox.value.substring(0, ss-1 ) + textbox.value.substring(se, ln );
    textbox.focus();
    textbox.selectionStart = ss-1;
    textbox.selectionEnd = ss-1;
  }
  else // if some text is selected
  {
    // alert('text')
    textbox.value = textbefore + textafter ;
    textbox.focus();
    textbox.selectionStart = ss;
    textbox.selectionEnd = ss;
  }
  document.getElementById('fourth').innerHTML  = `textbefore  ${textbefore}`
  document.getElementById('fifth').innerHTML  = `textafter  ${textafter}`
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


let dict = { 
  'Backquote':     ['ذ', 'ّ'],
  'Digit1':        ['١', '1'],
  'Digit2':        ['٢', '2'],
  'Digit3':        ['٣', '3'],
  'Digit4':        ['٤', '4'],
  'Digit5':        ['٥', '5'],
  'Digit6':        ['٦', '6'],
  'Digit7':        ['٧', '7'],
  'Digit8':        ['٨', '8'],
  'Digit9':        ['٩', '9'],
  'Digit0':        ['٠', '0'],
  'Minus':         ['-', '_'],
  'Equal':         ['=', '+'],
  'KeyQ':          ['ض', 'َ', 'Q'],
  'KeyW':          ['ص', 'ً' , 'W' ],
  'KeyE':          ['ث', 'ُ' , 'E' ],
  'KeyR':          ['ق', 'ٌ' , 'R' ],
  'KeyT':          ['ف' ,'ﻹ', 'T' ],
  'KeyY':          ['غ', 'إ', 'Y' ],
  'KeyU':          ['ع', '`', 'U' ],
  'KeyI':          ['ه', '÷', 'I' ],
  'KeyO':          ['خ', '×', 'O' ],
  'KeyP':          ['ح', '؛', 'P' ],
  'BracketLeft':   ['ج', '<', '[' ],
  'BracketRight':  ['د', '>', ']' ],
  'Backslash':     ['\\','|'],
  'KeyA':          ['ش', 'ِ' , 'A'],
  'KeyS':          ['س', 'ٍ' , 'S'],
  'KeyD':          ['ي', ']', 'D'],
  'KeyF':          ['ب', '[', 'F'],
  'KeyG':          ['ل', 'ﻷ', 'G'],
  'KeyH':          ['ا', 'أ', 'H'],
  'KeyJ':          ['ت', 'ـ', 'J'],
  'KeyK':          ['ن', '،', 'K'],
  'KeyL':          ['م', '/', 'L'],
  'Semicolon':     ['ك', ':', 'Kaf'],
  'Quote':         ['ط', '"', '\''],
  'KeyZ':          ['ئ', '~' , 'Z'],
  'KeyX':          ['ء', 'ْ'  , 'X'],
  'KeyC':          ['ؤ', '{' , 'C'],
  'KeyV':          ['ر', '}' , 'V'],
  'KeyB':          ['ﻻ', 'ﻵ' , 'B'],
  'KeyN':          ['ى', 'آ' , 'N'],
  'KeyM':          ['ة', '\'', 'M'],
  'Comma':         ['و', ',' , ','],
  'Period':        ['ز', '.' , 'Za'],
  'Slash':         ['ظ', '؟' , 'Dha'],
  'Space':         [' ', ' '],
  'Numpad0':       ['0', '0'],
  'Numpad1':       ['1', '1'],
  'Numpad2':       ['2', '2'],
  'Numpad3':       ['3', '3'],
  'Numpad4':       ['4', '4'],
  'Numpad5':       ['5', '5'],
  'Numpad6':       ['6', '6'],
  'Numpad7':       ['7', '7'],
  'Numpad8':       ['8', '8'],
  'Numpad9':       ['9', '9'],
  'NumpadDivide':  ['/', '/'],
  'NumpadMultiply':['*', '*'],
  'NumpadSubtract':['-', '-'],
  'NumpadAdd':     ['+', '+'],
  'NumpadDecimal': ['.', '.'],
}

