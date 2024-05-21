---
title: creating a first component and

---

# Linking to airtable in Next.js

## creating a first component and second page

Let's now create our first react component.

In the `/src/components` folder, create a new file called `my-first-component`.

## creating the `src` folder

Next up, let's create a folder for our code. This can get complicated, and it's probably worthwhile to read [a longer post on this](https://giancarlobuomprisco.com/next/a-scalable-nextjs-project-structure). 

While we put all of our pages and API routes in `/pages`, we'll be writing other code too: sometimes components that will go in our pages, sometimes utilities that will help us get data from external APIs, generate pages dynamically, etc. etc.

So in the root of the project, let's create a folder called `/src` and then, within that folder, one called `components` and at least one other another called `lib`. We'll put all of our react components in `components` and we'll put a lot of our other logic in `lib`. We could add a folder called `utils` for really little bits of code we might want to use across this app (and potentially even other apps) that are less connected to the logic of THIS app.

### styles

Right now there are two style sheets having effects on our main page. The `/styles/globals.css` is imported in our `_app.js` file. There's not much here, but let's get rid of the dark-mode handler. Delete the following:

```
@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
}
```

The other sheet is `/styles/Home.module.css`, which gets imported in the `index.js` file. Let's get rid of the dark-mode handler there too (you don't absolutely have to do this, but as we're learning we'll want to know how and why background colors are changing, and while it's a cool user experience to make things dark for dark-mode-preferring users, it will be too confusing to manage this while we're learning). So in `Home.module.css` delete this part:

```
@media (prefers-color-scheme: dark) {
  .card,
  .footer {
    border-color: #222;
  }
  .code {
    background: #111;
  }
  .logo img {
    filter: invert(1);
  }
}

```