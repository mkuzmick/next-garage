---
title: intro to codeLab
tags: [codeLab]

---

---
tags: codeLab
---

# intro to codeLab

## 1. clone a github repo

to clone a repo, we'll need to all make github accounts!

[sign up here](https://github.com/)

### cloning the repo
Find **august-test** (https://github.com/cdauria/august-test.git) and click that repo's title.

Click on the "Code" button on the repository's main page.

Copy the URL of the repository from the dropdown. (You should also see "Clone repo" at the top of this small dropdown menu.)

Open a terminal (command prompt on Windows, terminal on macOS and Linux) on your computer.

Navigate to the directory where you want to clone the repository using the cd command. For example:

```
cd Development
```

Use the git clone command followed by the copied URL to clone the repository. here's the URL for the repo we will be working with: https://github.com/cdauria/august-test.git

```
git clone https://github.com/username/repository-name.git
```

Install the dependencies by typing into terminal:
```
npm install 
```

Launch your app

```
npm run dev
```


type into terminal to launch VS code:

```
code .
```

## 2. simplify page.tsx
1. Let's simplify Page.tsx dramatically. Delete all of the code in there and replace it with:

```
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Y/N's app</h1>
    </div>
  )
}

```

1. Inside `<title>` tags you can put the title of your site/page, this will show up in the browser tab (among other places) as the title of your page
2. Put a simple title for your project between the `<h1>` tags
3. Ultimately, when we build other pages, we'll put links to them in the footer so it's easy for us to find them.


## 3. JavaScript basics - variables 

In that same page.tsx files, let's try adding in some variables. **Variables are just a name of a storage location that we assign value to so we can refer to it in our code**. Let's define a variable for your name using the following code in page.tsx:

```
var myName = "Y/N"
```
The variable in this case is **a string** or a collection of alphabets, words or other characters

Once you've defined your name as a variable, you can refer to it by referencing it in return with **curly brackets**:

```
export default function Home() {
  return (
    <div>
      <h1>{myName}'s app</h1>
    </div>
  )
}
```
## 4. JavaScript basics - objects

Arrays are a type of object, or a collection of data (variables) and methods (functions). If we have data we want to store with more levels to it than a simple list arrays can store, we can define an object to store different levels of information within the same const and index into it. Let's try defining the example object below:

```
const myPopStar = {
  name: "Taylor",
  age: 33,
  albums: [
    {
      title: "1989",
      released: 2014
    },
    {
      title: "Red",
      released: 2012
    }
  ]
}

```
We define levels of information with curly brackets and indents. In this case, name, age and album are on the first "level" and properties of those albums are on the second "level"

We can then index into this object to return just one of these entries by using brackets and dot notation. In the example below, just the title "1989" is returned:

```
export default function Home() {
  return (
    <div>
      <h1>{myPopStar.albums[0].title}</h1>
    </div>
  )
}
```

## 5. Play around with the quiz-1 page.js file

**note**: for this part of the exercise to work, you'll need access to xtine's ```.env.local``` file. Send her a Slack message to get this or scroll up through the mdf-23-24 channel. (as a rule: you want to keep things like API keys and Airtable personal access tokens private!!!)

In the src/components folder, go into the Card.module.css file. Here, you can make a ton of css changes to get a sense of what it's like to make these choices!

Try out:
* changing colors of the cards
* changing the borders


You can use chatGPT for CSS styling. Copy and paste the code from Card.module.css into chat GPT and ask it for a specific color, font, etc. and see what that looks like in your app.


## glossary

### Curly Braces {}
Curly braces {} are used to define blocks of code, encapsulating a sequence of statements into a single unit. They are essential for various control structures, such as loops, conditional statements, and function definitions.

For example, to define a function named greet that displays a greeting message:

```
function greet(name) {
    console.log("Hello, " + name + "!");
}
```
### Square Brackets []
Square brackets [] are integral to working with arrays, which are ordered collections of values. They are used to both create arrays and access elements within them.

For instance, to define an array of colors and access its first element:
```
var colors = ["red", "green", "blue"];
console.log(colors[0]); // Outputs "red"
```

### Parentheses ()
Parentheses () serve several purposes in JavaScript, including function calls, grouping expressions, and controlling the order of operations.

To call a function with arguments:
```
function add(a, b) {
    return a + b;
}
var result = add(5, 3);
```

To group expressions and control the order of operations:
```
var total = (2 + 3) * 4; // Parentheses control multiplication order
```
### parent component
A parent component is a higher-level component that contains and manages one or more child components. It provides data, state, and behavior that the child components can use. The parent component wraps around its children and is responsible for passing down any necessary props (properties) or data to them.
### child component
A child component is a lower-level component that is nested within a parent component. It receives data from its parent component through props and can render UI elements, respond to user interactions, and perform other tasks independently or based on the data received from its parent.

## links
* [terminal + setting up coding environment](https://hackmd.io/tDt-lhlZSninMyKj8S3xUA)
* [intro to git](https://www.linkedin.com/learning/git-essential-training-19417064/what-you-should-know?autoSkip=true&resume=false&u=2194065)
* [markdown syntax basics](https://hackmd.io/im0mHRWDRWakfC5JS84e_w?both)
* [javascript basics](https://hackmd.io/qz_n8IV4QAepX2Sha2bZew)
* [connecting your next.js app to airtable](https://hackmd.io/AhBpXa0TRneC0H_6QizCeA)
* [cloning a github repo](https://hackmd.io/KuxRCUEjTGuwZHMoWV7BJw)
* [adding dynamic routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)

