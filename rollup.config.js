let globals = {}, externals = [
  "chalk"
];

for(let i in externals){
  globals[externals[i]] = externals[i];
}

export default {
  entry: 'src/index.js',
  dest: 'dist/sagasphere_logger.js',
  format: 'umd',
  moduleName: 'sagasphere_logger',
  external: externals,
  globals: globals
};