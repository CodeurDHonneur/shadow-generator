# Projet : Shadow Generator

## Objectif
Créer une application web interactive en **React** qui permet à l'utilisateur de :
- Ajouter plusieurs ombres à un élément.
- Personnaliser chaque ombre (offset, blur, spread, couleur, etc.).
- Visualiser l'effet en direct.
- Copier le code CSS généré.

---

## Fonctionnalités principales

### 1. Ajout et gestion des ombres
- Bouton **"Add a shadow"** pour créer une nouvelle configuration.
- Liste des ombres actuelles, cliquables pour modification.

### 2. Personnalisation des ombres
- Pour chaque ombre : 
  - Offset X/Y
  - Rayon de flou (blur)
  - Étendue (spread)
  - Couleur
  - Opacité

### 3. Prévisualisation en temps réel
- Un composant `BoxPanel` affiche une boîte avec les ombres cumulées.

### 4. Génération de code CSS
- Bouton **"Get the code"** pour copier le code `box-shadow` complet.

---

## Stack technique
- **React** (composants fonctionnels avec Hooks)
- **CSS ou TailwindCSS** pour le style
- **State management** avec `useState` ou `useReducer` pour gérer les ombres
- **Clipboard API** pour copier le code CSS

---

## Listes des composants : 

- layout : 
  - header
  - main
- features :
  - ShadowConfig
  - ShadowView

## CSS
- couleurs bg et survol : #f2f4f5
- #f9fbfa