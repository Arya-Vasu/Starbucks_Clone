const gulp = require("gulp");
const rename = require("gulp-rename");
const gap = require("gulp-append-prepend");
const fs = require("fs");

gulp.task("compileAssetsFile", function () {
  console.log("Compiling assets file...");

  const assetCollection = JSON.parse(
    fs.readFileSync("./src/assets/SVGassets.json")
  );

  const output = gulp
    .src("./assets.js", { allowEmpty: true })
    .pipe(rename("index.js"));

  const keyCollection = [];

  for (const assetKey in assetCollection) {
    keyCollection.push(assetKey);
    output.pipe(
      gap.appendText(
        `import ${assetKey} from "${__dirname}/src/assets${assetCollection[assetKey]}";`
      )
    );
  }

  output.pipe(gap.appendText(`export {${keyCollection.join(",")}}`));

  return output.pipe(gulp.dest("./src/assets/"));
});

gulp.task("set", gulp.series("compileAssetsFile"));
