

all:
	@echo 'Welcome to the Makefile'
	npm run dev 

install:
	npm i 



doc:
	jsdoc -c ./jsdoc.conf.json -t ./node_modules/ink-docstrap/template -R README.md -r .

check:
	yarn check --verify-tree

git:
	git add -A
	git commit -m "auto-update"
	git push