// // import scss from 'rollup-plugin-scss';      // handles '.css' and '.scss'
// import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
// import vue from 'rollup-plugin-vue2'; // Handle .vue SFC files
// import replace from '@rollup/plugin-replace';
// import alias from '@rollup/plugin-alias';
// import buble from '@rollup/plugin-buble';
// import nodeResolve from "@rollup/plugin-node-resolve"; // Transpile/polyfill with reasonable browser support
// export default [
//     // ESM build to be used with webpack/rollup.
//     {
//         input: 'src/components/index.js',
//         output: {
//             format: 'esm',
//             file: 'dist/crud.esm.js',
//             globals: {
//                 vue: 'Vue'
//             },
//         },
//         plugins: [
//             vue()
//         ],
//         external: [
//             'vue'
//         ],
//     },
//     // Browser build.
//     {
//         input: 'src/components/wrapper.js',
//         output: {
//             format: 'iife',
//             file: 'dist/crud.js',
//             globals: {
//                 vue: 'Vue'
//             },
//         },
//         plugins: [
//             replace({
//                 preventAssignment: true,
//                 'process.env.NODE_ENV': JSON.stringify('production')
//             }),
//             alias({
//                 entries: {
//                     'vue': 'vue/dist/vue.runtime.esm.js'
//                 }
//             }),
//             vue(),
//             buble(),
//             nodeResolve({ browser: true, jsnext: true, main: true }),
//             commonjs(),
//         ],
//         external: [
//             'vue'
//         ],
//     },

//     // input: 'src/components/index.js', // Path relative to package.json
//     // output: {
//     //     name: 'crud-sdk',
//     //     file: './dist/crud.js',
//     //     format: 'umd',
//     //     sourcemap: false,
//     //     exports: 'named',
//     //     globals: {
//     //         vue: 'vue'
//     //     },
//     //     // plugins: [
//     //     //     vue()
//     //     // ]
//     // },
//     // external: [
//     //   'vue'
//     // ],
//     // plugins: [
//     //     // commonjs(),
//     //     scss(),
//     //     vue({
//     //         css: true, // Dynamically inject css as a <style> tag
//     //         compileTemplate: true, // Explicitly convert template to render function
//     //     }),
//     //     buble(), // Transpile to ES5
//     // ],
// ];
