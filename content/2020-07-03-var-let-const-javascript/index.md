---
title: "Var, Let et Const en Javascript ES6"
path: blog/Var-Let-et-Const-en-Javascript-ES6
tags: [javascript]
cover: ./var-let-const.jpeg
date: 2020-07-03
excerpt: Parlons un peu de "const, let and var" en javascript.
---

## Const

En 2015, la mise en œuvre d' ECMASCRIPT 2015 (ES6), voir l'arrivée du «const».   
Cette déclaration permet de créer une constante nommée, elle sera accessible uniquement en lecture.   
Elle ne peut être ni modifiée ni déclarée à nouveau.

```javascript
// Première déclaration
const myNumber = 10;

/**
 * Si vous essayez de déclarer une nouvelle variable avec le même nom que notre const : 
 * avec let, var ou une nouvelle const
*/
let myNumber = 20; // Uncaught SyntaxError: Identifier 'myNumber' has been declared
var myNumber = 30; // Uncaught SyntaxError: Identifier 'myNumber' has been declared
const myNumber = 40; // Uncaught SyntaxError: Identifier 'myNumber' has been declared

// Si vous essayez de changer la valeur de const déjà déclaré
myNumber = 50; // Uncaught TypeError: Assignment to constant variable

console.log(myNumber) // 10

```

Lorsque vous déclarez une «const», elle peut être globale ou locale. Néanmoins, la portée est limitée à son bloc.

```javascript
const myGlobalNumber = 10;

function localTest() {
    const myLocalNumber = 20;
    console.log(myLocalNumber);
};

localTest();
/**
 * Valeur attendue 20. myLocalNumber est à l'intérieur de la fonction localTest : 
 * elle est donc local
*/

console.log(myNumber)
/**
 * Valeur attendue 10. myGlobalNumber est global, 
 * et il n'y a pas de conflit avec myLocalNumber qui se trouve à l'intérieur de notre fonction
 */ 


```
Alors pourquoi utiliser «const»? Fondamentalement, car comme il ne peut pas être réaffecté, vous avez moins de scénarios d'erreurs qui peuvent apparaître dans votre code. Par exemple, si vous ne voulez pas qu'une valeur spécifique et importante soit réaffectée ou modifiée, mais n'oubliez jamais: **elle est limitée à son bloc!**

## Let et Var

En tant que «const», «let» est apparu avec ECMASCRIPT2015 (ES6).
Il permet de déclarer une variable dont la portée est celle du bloc courant.
"Var", d'autre part, vous permet de définir une variable globale ou locale, mais sans limites de bloc dans une fonction.

```javascript
// Avec let
let myNumber = 10;

function localTest(){
    let myNumber = 20;
    if(true){
        let myNumber = 30; // On redéclare myNumber
        console.log(myNumber) // 30
    }
    console.log(myNumber) // 20
};

console.log(myNumber) // 10

// Avec var
var myNumber = 10;

function localTest(){
    var myNumber = 20;
    if(true){
        var myNumber = 30; // C'est la même variable
        console.log(myNumber) // 30
    }
    console.log(myNumber) // 30
};

console.log(myNumber) // 10

```

Lequel utiliser? "Laissez" la lisibilité s'améliorer au sein d'une fonction, mais le choix final est le vôtre, les avis divergent sur ce sujet. C'est à vous de choisir ce qui vous convient le mieux en fonction de la situation.

## Propriétés de l'objet global window

Au niveau le plus élevé (la portée globale), let et const créent une variable globale tandis que var ajoute une propriété à l'objet global.

```javascript
// Avec var
var x = 'global';

console.log(this.x) // "global"
console.log(x) // "global

// Avec let
let y = 'global2';

console.log(this.y) // undefined
console.log(y) // "global2"

// Avec const
const z = 'global3';

console.log(this.z) // undefined
console.log(z) // "global3"

```

Et si vous le déclarez dans une fonction.

```javascript
// Avec var
function localTest() {
    if(true) {
        var myNumber = 10;
    }
};

localTest();
console.log(myNumber) // Uncaught ReferenceError: myNumber is not defined
console.log(this.myNumber) // Undefined

// Avec let
function localTest() {
    if(true) {
        let myNumber = 10;
    }
};

localTest();
console.log(myNumber) // Uncaught ReferenceError: myNumber is not defined
console.log(this.myNumber) // Undefined

// Avec const
function localTest() {
    if(true) {
        const myNumber = 10;
    }
};

localTest();
console.log(myNumber) // Uncaught ReferenceError: myNumber is not defined
console.log(this.myNumber) // Undefined

// Sans déclaration
function localTest() {
    if(true) {
        myNumber = 10;
    }
};

localTest();
console.log(myNumber) // 10
console.log(this.myNumber) // 10

```

Il y a juste une différence quand vous êtes avec le mode "use strict".

**Il est recommandé de toujours déclarer des variables, que ce soit dans une fonction ou dans la portée globale. Avec le mode strict, introduit avec ECMAScript 5, lève une exception lorsqu'une variable n'est pas déclarée.**

```javascript

"use strict"
// Sans déclaration
function localTest() {
    if(true) {
        myNumber = 10;
    }
};

localTest();
console.log(myNumber) // Uncaught ReferenceError: myNumber is not defined
console.log(this.myNumber) // Uncaught ReferenceError: myNumber is not defined

```

### Conclusion

La portée d'une variable est très importante en javascript, tout comme la propriété de l'objet global (window). Bien sûr, cela fait partie des principes fondamentaux.

Pour progresser dans cette langue, vous devrez maîtriser tous les aspects, dont trois déclarations.

Vous ne pouvez rester avec le "var" que si vous êtes un débutant, l'utilisation de "const" et "let" n'est pas obligatoire pour commencer, mais plus tard, cela peut vous aider à construire vos futures applications.

Si vous voulez en savoir d'avantage, vous pouvez consulter la documentation de mozilla:   
[Mdn let](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let)  
[Mdn const](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const)  
[Mdn var](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/var)  