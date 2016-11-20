# Buddytrain 🚇

## Install 🔧
```
npm install
```
then
```
npm install -g webpack
```

### Install the Linter 🙈
```
export PKG=eslint-config-airbnb;
npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
```
If you are on Atom : `apm install linter-eslint`
On Sublime, install this package : `SublimeLinter-contrib-eslint`

### For the SCSS Linter (Only Atom) 🙉
`apm install linter-sass-lint`

## Run 🚀
```
webpack
```

## Run with dev-server 👷
```
npm install -g webpack-dev-server
```
then
```
webpack-dev-server
```

## Watch 👀
```
webpack --watch
```

## Run prod 🔥
```
webpack -p
```
