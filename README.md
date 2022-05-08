# legendary-pancake

Générateur de prophétie en wasm

TODO : url a fournir vers le io

## Dev Mode

Si vous voulez participer au dévelopement de `legendary-pancake`, voici quelques petites précisions :

* Pour le style, c'est du `Sass`
* Pour la partie génération des prophéties, c'est du `wasm` écrit en `rust`
* Entre le `html` et le `wasm` se trouve une partie en `CoffeeScript`
* Pour la compilation ce projet utilise un `Cakefile`, c'est comme du `Gulp` mais en `CoffeeScript`

`legendary-pancake` nécessite l'installation de `rust` avec en plus la `target` `wasm32-unknown-unknown`. Pas besoin d'installer `wasm-bidngen`.

De plus, il est nécessaire d'avoir `node` et `npm`, version 16 minimale pour `node`.

Avant toute compilation, un `npm i` est un minimum. Seront installé :

* `Sass`
* `CoffeeScript`
* `Rollup`
* `rimraf`
* Un plugin `wasm` pour `Rollup`
* `livereload` (pas le script par contre, nécessite l'extension)
* `connect`avec `serveStatic`

Pour compiler l'intégralité du projet dans le dossier `dist`, la commande est `cake build`.

Il est possible de démarer le projet en mode serveur local avec la commande `cake serve`.
