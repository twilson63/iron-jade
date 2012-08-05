# iron-jade 

A flatiron jade web app template

This project is a web application template for flat-iron and jade.  It uses the jade.plugin, which creates a simple api to render jade views:

``` js
app.render(this.res, 'index', { title: 'Hello World' });
```

## Technologies
This is a template that can be used to create nodejs applications using 

* Node v0.6.17
* Express v3.0.0rc2
* Jade v0.26.0

## Requirements

* [NodeJs](http://nodejs.org)
* [Flatiron](http://flatironjs.org)
* [Jade](http://jade-lang.com/)

These will install with npm, just do 

```
npm install
```

In your project directory.

---

## Install, Build, Run, Test, and Watch

```
## Install nodejs and npm

git clone http://github.com/twilson63/iron-jade.git [project-name]
cd [project-name]
npm install
```

## Run

```
node server.js
```

### Setup to deploy to nodejitsu

``` sh
npm install jitsu -g
jitsu deploy
```

## Thanks to

* [Nodejitsu](https://flatironjs.org) for creating Flatiron
* [TJ Holowaychuk](https://github.com/visionmedia) for creating Jade

## About

iron-jade is a template or boiler-plate to get started writing 
flatiron web applications using jade view engine.  It comes ready to go with base setup for an Flatiron Web App.  Create your
jade views in the views folder and put your public assets in the public
folder.  Enjoy your iron-jade...


## License

See LICENSE

## Contribute

pull requests are welcome
