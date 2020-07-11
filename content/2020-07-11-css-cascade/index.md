---
title: CSS Cascade
tags: [ html, css]
date: 2020-07-11
path: blog/css-cascade
cover: ./css-cascade.jpeg
excerpt: Comment les navigateurs résolvent les styles CSS concurrents.  
---

Nous stylisons nos sites Web à l'aide de CSS **(Cascading Style Sheets)**.  
Quel est donc cette fameuse **Cascade** ?

On c'est déjà tous posé cette question : **"Pourquoi cette propriété CSS ne fonctionne t'elle pas ?!"**.  
Avec bien sur la tentation de mettre `!important`.  
Il faut savoir une chose importante, la cascade est l'une des parties les plus puissantes de CSS, elle peut donc  
devenir très vite frustrante si on ne la comprend pas bien.  

> 
> La cascade CSS est la façon dont nos navigateurs résolvent les déclarations CSS concurrentes.  

Quand nous écrivons une déclaration CSS, elle sera automatiquement intégrée à la cascade, qui déterminera si elle finira comme style final.  
Regardons les différents niveaux de la cascade.

## Les niveaux en cascade CSS
### Les types

Tout d'abord, le premier niveau est le **type** de règle :

1. **transition**   
    Les règles de *transition* revêtent de la plus haute importance.
2. **!important**  
    Lorqu'on ajoute *!important* à la fin de notre déclaration, il saute à ce niveau de la cascade.
3. **animation**  
    Règles qui s'appliquent à une *animation active* montent d'un niveau dans la cascade.
4. **normal**  
    Ce niveau est l'endroit où vivent la plupart es règles.

### Les origines

Le deuxième niveau examine où la régle a été définie.

Il en existe trois :

1. **site web**    
    C'est le seul niveau sur lequel vous avez le contrôle en tant que développeur  
2. **utilisateur**  
3. **navigateur**  
    Chaque navigateur a son propre ensemble de styles, c'est pourquoi des éléments comme `<button>` sont des styles par défaut.


### Les spécificités 

C'est le troisième niveau, il va examiner la *spécificité* d'une règle.

Il en existe quatre :

1. **inline**
    Styles déclarés dans une propriété HTML `style`, elles sont les plus spécifiques.   
2. **id**
    Nous pouvons cibler des éléments en fonction de leur `id`, en utilisant la syntaxe `#id`.  
3. **class | attribute | pseudo-class**
    Nous pouvons ciblés des éléments en fonction de leur `class`, en utilisant la syntaxe `.class`.    
    Ce niveau comprend également des **sélecteurs d'attributs** qui ciblent des attributs HTML comme `[checked]` et `[href="https://lemonde.fr"]`.  
    Il comprend également des **pseudo-sélecteurs**, comme `:hover` et `:first-of-type`.  
4. **type | pseudo-element** 
    Nous pouvons cibler des éléments en fonction de leur **type de balise**, en utilisant la syntaxe `type`.  
    Ce niveau comprend également **des pseudo-éléments**, comme `:before` et `:selection`.  
 
### Position

Nous descendons au quatrième et dernier niveau de la cascade, qui examine l'ordre dans lequel les règles ont été définies.  

Les règles définies ultérieurment dans les feuilles de style ou les `<style>` balises liées gagneront, étant donné que tout le reste dans la cascade est le même.  


## Fin de la descente !

Bon j'espère que cela vous aidera un peu, et évitera certaines confusions quand à la propriété des styles CSS.  

Je réaliserai un article plus ample afin de parler plus en profondeur de la cascade CSS, avec plusieurs exemples et comparaisons.  

En attendant vous pouvez toujours consulter [cette documentation](https://developer.mozilla.org/fr/docs/Apprendre/CSS/Building_blocks/Cascade_et_heritage) afin d'en apprendre d'avantage.