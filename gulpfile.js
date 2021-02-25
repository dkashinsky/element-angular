const gulp = require('gulp')
const path = require('path')
const fs = require('fs').promises

gulp.task('assets', async () => {
  const source = path.join(__dirname, './node_modules/element-ui/lib/theme-chalk/index.css')
  const target = path.join(__dirname, './dist/element-angular/theme/index.css')

  await fs.mkdir(path.dirname(target));
  await fs.copyFile(source, target);
})
