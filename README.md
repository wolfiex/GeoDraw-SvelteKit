# GeoDraw Demo


## Quickstart
To run locally type - 
`npm run dev` or `make`


## Demo execution:
https://stately-salamander-b9768e.netlify.app/

### Clean Drawing Slate 
https://stately-salamander-b9768e.netlify.app/draw



## Installing Node using Conda 
```bash
conda install -c conda-forge nodejs
npm cache clear --force
sudo npm install -g n
sudo n stable
```



### Set up packages 
1. Remove the node modules folder `rm -rf node_moduules`
2. Clean cache: `npm cache clear --force`
3. Install: `npm i`



 
## using the makefile
 - install: `make install`
 - documentation: `make docs`
 - run in dev: `make`
 - check installed packages: `make check`
 - push to git (with no commit message): `make git`


 ## Documentation 
 The programmers documentation can be found under `build/docs`


 To set up we need to isntall jsdoc globally with `npm i -g jsdoc`
