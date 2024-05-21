---
title: project-simple-airtable-script

---

# project-simple-airtable-script

let's do it as an npm package though.

## start the project and hook up the command

```
mkdir simple-airtable
cd simple-airtable
npm init
```
then go ahead and hit return a bunch of times (we can edit all of these values later). Then open in your code editor, for instance:

```
code .
```
there will be one single file in your project, `package.json`. We're going to add some code that 
1. determines the name of our command, i.e. the word we'll type in terminal to fire it, like `do-the-thing`, say
2. determines the file that will be run when someone types this command
```
"bin": {
    "do-the-thing": "cli.js"
},
```
you can put this anywhere, but make sure that it doesn't interrupt one of the other root elements in the object, and make sure that it's followed by a comma. You'll end up with a full `package.json` that looks something like this:

```
{
  "name": "simple-airtable",
  "version": "1.0.0",
  "description": "",
  "bin": {
    "do-the-thing": "cli.js"
  },
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```
Now we need to create that "cli.js" file. We'll do this in the root folder for our project, so the full path will be something like `~/Development/simple-airtable/cli.js`.

We need to start the `cli.js` file with the node "shebang," which announces that we'll be using node.js to interpret the file. Type `#!/usr/bin/env node` at the top of the file and then log a simple message with `console.log("your message")`. The full script will look something like this:
```
#!/usr/bin/env node

console.log(`it's working!`)
```
Now if you still have your terminal open, and if you're still in the root folder of the project, you should be able to type `node cli.js` and see the desired result. It's working!

You *could* just stop there and always find your way to this file's folder and run the script that way. But if you type `npm link` into your terminal and hit `return`, you'll hook your command up to this script, and you'll be able to type that command in from ANYWHERE in your terminal. This is great, because it means you won't always need to remember the full path to your script to run it--you'll just need to remember the command. Also, if you ever publish this package to [npm](https://www.npmjs.com/) then others will be able to run your script with this command too.

So, again, type in `npm link` and then you *should* be able to just type `do-the-thing` (or whatever you called your command).

That's it for this part.

## getting data in and out of airtable


