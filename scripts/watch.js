const chokidar = require('chokidar');
var running = false;
const watcher = chokidar.watch('src/**/*.re', { recursive: true })

watcher.on('all', function() {
  if (!running) {
    running = true;
    var spawn = require('child_process').spawn;
    var build = spawn('./scripts/rebel.sh', {
      stdio: ['inherit', 'inherit', 'inherit']
    });
    build.on('close', function() {
      console.log("\n---------DONE---------\n");
      running = false;
    })
    build.on('error', function (error) {
      console.log(error)
    })
  }
});
