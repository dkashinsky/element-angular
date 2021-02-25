const gulp = require('gulp')
const path = require('path')
const fs = require('fs').promises

const assets = [
  {
    src: './node_modules/element-ui/lib/theme-chalk/fonts/element-icons.ttf',
    dest: './dist/element-angular/theme/fonts/element-icons.ttf'
  },
  {
    src: './node_modules/element-ui/lib/theme-chalk/fonts/element-icons.woff',
    dest: './dist/element-angular/theme/fonts/element-icons.woff'
  },
  {
    src: './node_modules/element-ui/lib/theme-chalk/index.css',
    dest: './dist/element-angular/theme/index.css'
  },
  {
    src: './README.md',
    dest: './dist/element-angular/README.md'
  },
  {
    src: './LICENSE',
    dest: './dist/element-angular/LICENSE'
  }
];

const copyAsset = async ({ src, dest }) => {
  const source = path.join(__dirname, src);
  const target = path.join(__dirname, dest);

  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.copyFile(source, target);
};

gulp.task('copy-assets', async () => {
  await Promise.all(assets.map(copyAsset));
});
