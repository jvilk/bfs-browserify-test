# bfs-browserify-test

A simple test that BrowserFS's modules work appropriately with Browserify.

To build `index.js` with only BrowserFS's `fs` module, run:

    grunt browserify:use_fs_only

To build `index.js` with all of BrowserFS's modules (`fs`, `path`, `process`, `Buffer`), run:

    grunt browserify:use_all

## Notes

This repository currently depends on `async` and `pako`, since BrowserFS uses these modules, but does not depend on them
as they are contained within its main bundle.
