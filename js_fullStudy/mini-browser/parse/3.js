let response =  `
<html>
<head></head>
<body>
  <div></div>
</body>
</html>
`
// 解析成 DOM 树
// 分词（词法分析）(FSM) ->  语法分析(LL, LR)  ->  AST 
// 我 今天 很高兴 （分词）
// {person: '我', time: '今天', mood: '很高兴'}
// var
// 拿出所有的标签名，区分开始和结束标签（分词）
let currentToken = null;
let stack = [
  {type: 'document', children: []}
]
function emitToken(token) {
  token = {
    ...token,
    children: [],
    nodeType: 'element'
  }
  let top = stack[stack.length - 1];
  if (token.type === 'startTag') {
    stack.push(token);
    top.children.push(token);
  } else {
    if (top.tagName === token.tagName) {
      stack.pop();
    }
  }
}
function data(c) {
  if (c === '<') {
    return tagOpen
  }
  return data;
}
function tagOpen(c) {
  if (c === '/') {
    currentToken = {
      type: 'endTag',
      tagName: ''
    }
    return tagName;
  } else {
    currentToken = {
      type: 'startTag',
      tagName: c
    }
    return tagName;
  }
}
// <  tagOpen tagName >
function tagName(c) {
  if (c.match(/[a-z]/)) {
    currentToken.tagName += c;
    return tagName;  
  } else if (c === '>') {
    // console.log(currentToken);
    emitToken(currentToken);
    return data;
  }
  // else if (c === '/') 
}
function parseDom(html) {
  let state = data;
  for (let c of html) {
    state = state(c);
  }
}
parseDom(response);

console.log(JSON.stringify(stack, null, 2));