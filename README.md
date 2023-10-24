# Live link
https://cibo-store.web.app

# Project Title

A assignment concerning Food and Bevarage.
## Table of Contents

- Description
- Technologies Used
- Installation
- Usage
- Feature

## Description
A Food and Bevarage assignment making using React , firebase, MongoDB . Through this, you can easily informed about our best services, best vanue,planned organize decoration, best food service, you can know the details of the different wedding management sector , you can also see our previous work and our outstanding expert,  and efficiently with significantly less code than I would with vanilla JavaScript. Moreover  it's easy to work with it.

## Technologies Used

**HTML**

**Tailwind CSS** 

**Javascript** 

**React** 

**DaisyUI**

**Firebase**

**MongoDB**

**Material Tailwind**

**React Flowbite**

**SweetAler2**

**Marquee**


## Installation

- Install my-project with npm

```bash
npm create vite@latest my-project -- --template react

cd my-project
npm install
npm run dev
```
    
- Install tailwind css 

```bash
npm install -D tailwindcss
npx tailwindcss init
```
- Install DaisyUI 

```bash
npm i -D daisyui@latest
```
- Install SweetAlet

```bash
npm install sweetalert --save
```
- Install ReChart

```bash
npm install recharts
```
- Install React Router

```bash
npm install react-router-dom localforage match-sorter sort-by
```


- React Marquee

```bash
npm install react-fast-marquee --save
```
- React Flowbite

```bash
npm install -D tailwindcss postcss 
npx tailwindcss init -p
```
- Material Tailwind

```bash
npm i @material-tailwind/react
```
- React AOS

```bash
npm install --save aos@next
```


    

## Usage
Create needed all pages what I want to work better and add all page to main.jsx . Create header section from Header. Add to Tailwind CSS className to decorate as needed. DaisyUI for framework of CSS. Sweetalert for different type of alert adding. Marquee for slider, Firebase for authentication. MongoDB for database .

## Feature
- This will help to know about our food;s brand .
- In addition we can all details about our inspiration.
- We can see our foo brand and all food's brand's food's detail.
- we can add product as we need , can update, see detail  of each product  and also can delete.
- We can add product to cart . In cart section we can delete .
- Also we can log in  and sign in here .
- best authentication system.

## Discussion of manage the state in my assignment project.

### Local Component State (useState):
- For managing simple and component-specific state, you can use the useState hook provided by React.
- This hook allows you to declare and update state variables within a functional component.

### hook provided by React (ussEffect):
useEffect is a crucial hook in React that allows you to perform side effects in your functional components. It's commonly used for tasks like data fetching, DOM manipulation, and subscribing to external data sources. 


### Firebase Authentication:
```bash
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
```
### Private route
```bash
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

```
```bash

```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
