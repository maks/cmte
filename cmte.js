var CodeMirror = require('code-mirror');

var docList = {};
var currentDocName;

// Modes
require('code-mirror/mode/clike');
require('code-mirror/mode/css');
require('code-mirror/mode/diff');
require('code-mirror/mode/htmlmixed');
require('code-mirror/mode/javascript');
require('code-mirror/mode/lua');
require('code-mirror/mode/markdown');
require('code-mirror/mode/shell');


// Addons
require('code-mirror/addon/edit/matchbrackets');
require('code-mirror/addon/comment/comment');
require('code-mirror/addon/comment/continuecomment');
require('code-mirror/addon/display/fullscreen');
require('code-mirror/addon/hint/show-hint');
require('code-mirror/addon/hint/anyword-hint');
require('code-mirror/addon/hint/css-hint');
require('code-mirror/addon/hint/html-hint');
require('code-mirror/addon/hint/javascript-hint');
require('code-mirror/addon/selection/active-line');
require('code-mirror/addon/lint/lint');
require('code-mirror/addon/merge.js');

var myTextArea = document.getElementById("code");

var config = {
  theme: require('code-mirror/theme/monokai'),
  autofocus: true,
  indentUnit: 4,
  lineNumbers: true,
  matchBrackets: true,
  commentBlankLines: true,
  continueComments: true,
  mode: "text/javascript",
  styleActiveLine: true,
  extraKeys: {"Ctrl-/": "toggleComment"}
};


var CM = CodeMirror.fromTextArea(myTextArea, config);

// eg. cmte.loadDoc("test.js", "function foo() {}", "text/javascript")
function load(name, text, mode, reload) {
  var nuDoc = docList[name];
  if (reload || !docList[name]) {
    nuDoc = CodeMirror.Doc(text, mode);
    docList[name] =  nuDoc;
  }
  var currentDocName = name;
  var oldDoc = CM.swapDoc(nuDoc);
  $("#docTitle").html(currentDocName + " - cmte");
}

exports.loadDoc = load;
exports.CM = CM;
exports.CodeMirror = CodeMirror;