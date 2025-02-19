"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "1.875rem", // gutter width - 30px
        mobileFirst: false,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "128px",
            maxWidth: "1110px"
        },
        breakPoints: {
            xs: {
                width: "320px" // 320px
            },
            sm: {
                width: "576px" // 576px
            },
            md: {
                width: "768px" // 768px
            },
            lg: {
                width: "1366px",
                fields: "30px"
            },
        }
    });
    cb();
});
