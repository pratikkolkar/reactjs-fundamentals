# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# [React Router](https://reactrouter.com/)

Installing react router
```
npm install react-router-dom
```

React router provides elements: <br> `<Link>`: It is used inplace of `<a>` tag because when use `<a>` tag the entire page refreshes and this doesnt align with react fundamentals. <br>`<NavLink>`: It is a special kind of `<Link>` that knows whether or not it is "active","pending" or "transitioning". It is useful when building navigation menu, such as breadcrumbs etc.

## <RouterProvider>
All data router objects are passed to this component to render your app and enable the rest of the data APIs.

