"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/**/*.html",
                "./src/views/pages/*.html"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.html",
                "./src/views/**/*.html"
            ]
        },
        styles: {
            src: "./src/styles/main.{scss,sass}",
            dist: "./dist/styles/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        "bx-styles": {
            src: "./src/blocks/modules/**/*.scss",
            dist: "./dist/bx-styles/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        "scripts": {
            src: "./src/js/index.js",
            dist: "./dist/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        "bx-scripts": {
            src: "./src/blocks/modules/**/*.js",
            dist: "./dist/js-bx/",
            watch: [
                "./src/blocks/modules/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg,mp4,ogv,webm,ogm,ogv}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff,mp4,ogv,webm,ogm,ogv}"
        },
        webp: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/",
            watch: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ]
        },
        sprites: {
            src: "./src/img/svg/*.svg",
            dist: "./dist/img/sprites/",
            watch: "./src/img/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2}"
        },
        libs: {
            src: "./src/libs/**/*.*",
            dist: "./dist/libs/",
            watch: "./src/libs/**/*.*"
        },
        favicons: {
            src: "./src/img/favicon/*.{jpg,jpeg,png,gif}",
            dist: "./dist/img/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./dist/"
        },
       
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean", "smart-grid",
    gulp.parallel(["views", "styles", "scripts", "bx-scripts", "images", "webp", "sprites", "fonts", "libs", "favicons"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.series(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "libs", "favicons", "gzip"]));

export default development;
