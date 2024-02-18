# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Dependencies:
redux-toolkit
```
npm install @reduxjs/toolkit //core redux library
npm install react-redux // react interface to redux
```


# Steps for configuring redux
1. Configure Store
2. Create Slice
3. Define reducers
    Reducers are function which contains two aurguments `state` and `action`
4. Link reducer with store