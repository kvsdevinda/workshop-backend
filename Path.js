// Importing the path module
const path = require("path");

// Getting the directory name of the current module (path of this file)
console.log('Directory name of current file:', path.dirname(__filename));

// Getting the base name (filename) from a file path
const filePath = '/Users/student/Documents/project/index.js';
console.log('Base name (filename) of the file:', path.basename(filePath));

// Joining multiple path segments
const joinedPath = path.join('/Users/student', 'Documents', 'project', 'index.js');
console.log('Joined path:', joinedPath);

// Resolving an absolute path from relative path
const resolvedPath = path.resolve('index.js');
console.log('Resolved absolute path:', resolvedPath);

// Normalizing a path (handling redundant slashes and '..' etc.)
const normalizedPath = path.normalize('/Users/student//Documents/project/../index.js');
console.log('Normalized path:', normalizedPath);

// Checking if a path is absolute
console.log('Is the path absolute?', path.isAbsolute(filePath));

// Getting the file extension of a file
console.log('File extension:', path.extname(filePath));

// Parsing a file path into an object
const parsedPath = path.parse(filePath);
console.log('Parsed path:', parsedPath);

// Formatting a path object back into a string
const formattedPath = path.format(parsedPath);
console.log('Formatted path from parsed object:', formattedPath);

// Getting the relative path between two paths
const relativePath = path.relative('/Users/student/Documents', '/Users/student/Documents/project/index.js');
console.log('Relative path from Documents to project:', relativePath);

// Getting the root of the file system (on UNIX-like systems it's '/')
console.log('Root path:', path.root);
