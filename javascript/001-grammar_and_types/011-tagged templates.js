
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types
const print = (segments, ...args) => {
 // For any well-formed template literal, there will always be N args and
  // (N+1) string segments.
	console.log('segments', segments)
	console.log('args', args)
}


const todos = [
  "Learn JavaScript",
  "Learn Web APIs",
  "Set up my website",
  "Profit!",
];
const progress = { javascript: 20, html: 50, css: 10 };

print`I need to do:
${todos}
My current progress is: ${progress}
`;

//segments ['I need to do:\n', '\nMy current progress is: ', '\n',]
// args [['Learn JavaScript', 'Learn Web APIs', 'Set up my website', 'Profit!'], {javascript: 20, html: 50, css: 10}]