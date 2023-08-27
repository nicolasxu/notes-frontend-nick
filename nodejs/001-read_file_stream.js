var fs = require('fs'),
    readline = require('readline');

function find (json) {
  const jobId = json["job_id"]
  const output = []
  let lineCounter = 0

  var rd = readline.createInterface({
    input: fs.createReadStream('./log.txt'),
    output: process.stdout,
    console: false
  });


  rd.on('line', function(line) {
    lineCounter++

    const searchRes = searchLine(line, jobId)
    if (searchRes !== -1) {
      output.push(`line: ${lineCounter}: ` + line)

    }

  });

  rd.on('close', function() {
    console.log('all done!');
    console.log('output:\n ', JSON.stringify(output, 0, 2) )
  });

}
/**
 *
 * @param {string} line - one line of log file
 * @param {string} target - search target
 * @returns -1 if no target found, else this line
 */
function searchLine (line, target, ) {
  const targetIndex = line.indexOf(target)
  if (targetIndex> -1) {
    // const isJob = testIsJob(line)
    const beforeTargetStr = line.substring(targetIndex - 10, targetIndex)
    if (beforeTargetStr && beforeTargetStr.toLowerCase().indexOf('job')> -1) {
      return line
    }
  }
  return -1
}

const input = {
  "job_id" : "12345678"
}


find(input)