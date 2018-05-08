.PHONY: test babel stop-babel-watch test-with-watch

packages = $(shell ls -d ./packages/*)
BABEL = ./node_modules/.bin/babel

test:
	yarn run jest

test-with-watch:
	# --bail abort test on first fail
	yarn run jest --watch --bail --notify --watchman

babel_pid_file = .babel-pid
babel-watch: stop-babel-watch
	$(BABEL) --watch --out-dir ./lib --ignore '**/*.test.*' ./src & \
	echo $$! >> $(babel_pid_file); \

stop-babel-watch:
	[ -f $(babel_pid_file) ] && kill -- `cat $(babel_pid_file)` || true
	rm -f $(babel_pid_file)
