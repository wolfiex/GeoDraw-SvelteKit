

all:
	@echo 'Welcome to the Makefile'
	npm run dev 

install:
	npm i 



doc:
	touch build/docs/test
	rm -r build/docs/*
	jsdoc -c ./jsdoc.conf.json -t ./node_modules/ink-docstrap/template -R README.md -r src/ -d build/docs && open build/docs

check:
	yarn check --verify-tree

git:
	git add -A
	git commit -m "auto-update"
	git push