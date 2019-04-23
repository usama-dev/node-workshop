# NPM (Node Package Manager)
NPM is the standard package manager of NodeJS. It comes with the NodeJS installer and lets you install the 3rd party packages with the command line tool and maintain them in the **package.json** file.

#### Sample package.json file:
```
{
  "name": "package-name",
  "version": "1.0.0",
  "description": "Description of the project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "author name",
  "license": "ISC",
  "dependencies": {
    "lodash": "^4.17.11"
  }
}
```
## npm commands:

### Creating package.json
` npm init `

### Installing Packages
#### Locally
``` 
npm install {package-name} 
OR 
npm i {package-name}
```

#### Globally
```
npm install --global {package-name} 
OR 
npm i -g {package-name}
```

#### As Dev Dependency
``` 
npm install --save-dev {package-name} 
OR
npm i -D {package-name}
``` 

### Uninstalling Packages
#### Locally
` npm uninstall {package-name} `

#### Globally
` npm uninstall {package-name} -g `

### Project Related
#### Search packages
` npm search {package-name} `
#### Update package
` npm update {package-name} `

#### Check outdated packages
` npm outdated `

#### List installed packages
``` 
npm list 
OR 
npm ls
``` 

#### List only parent packages
` npm ls --depth=0 `


## NPM Semantic Versioning
The convention used for the versioning of the packages.

All packages have 3 digits in version **Major.Minor.Patch** e.g *2.4.7*

**First Digit:** It is the major version and is not backward compatible.

**Second Digit:** It is the minor version with all the new new features without breaking existing features.

**Third Digit:** Is is the patch version used for bug fixes.

### Use in package.json file
The package.json file will have **~** or **^** before versions. This will affect when you update packages.

`~ (tilde):` If you update packages with the ~ symbol it will only update the **patch** version. For instance 2.4.7 will be updated to 2.4.8 (if available).

`^ (caret):` If you update packages with the ^ symbol it will update all the **patch** and **minor** versions. For instance 2.4.7 will be updated to 2.7.9 (if available).


[More info](https://docs.npmjs.com/about-semantic-versioning)