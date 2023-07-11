const gulp = require('gulp'); // importação simples
const sass = require('gulp-sass')(require('sass')); // importação composta
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify'); // compressor js
const obfuscate = require('gulp-obfuscate'); // 
const imagemin = require('gulp-imagemin'); // compressor de imagens

function comprimeImagens() {
    return gulp.src('./source/images/*') // localiza a pasta
    .pipe(imagemin()) // comprime imagens
    .pipe(gulp.dest('./build/images')); //salva
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify()) // comprime o JavaSript
        .pipe(obfuscate()) // adiciona caracteres especiais ao código para segurança
        .pipe(gulp.dest('./build/scripts')) // salva
}

function compilaSass() {
    return gulp.src("./source/styles/main.scss") // pega os arquivos fonte
        .pipe(sourcemaps.init()) // para localizar regras no arquivo .scss
        .pipe(sass({ // compilação do sass
            outputStyle: 'compressed' // tipo de compressão
        }))
        .pipe(sourcemaps.write('./maps')) // pasta onde estarão os arquivos de mapeamento
        .pipe(gulp.dest('./build/styles')) // pasta de destino
}

//Exportação das tarefas
exports.default = function() { // função que da updates automáticos a cada mudança no scss
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}
