---
title: terminal + setting up your coding environment
tags: [codeLab]

---

---
tags: codeLab
---

# terminal + setting up your coding environment

## terminal

We are going to need to get familiar with the Terminal, which you can find in your Applications => Utilities folder (or with spotlight by hitting command+space and then typing in the first few letters of the app's name).

Try to get the hang of finding your way around the folder structure of your machine:

* type in `ls` and hit return. You'll see a list of all of all the files in your home directory
* now get to the Desktop by entering `cd Desktop` and then try `ls again`
* to get back to the home directory you can type `cd ..` and it will take you "up" one level in your tree. 
* try navigating around a little to get the hang of this. If you ever get "lost," you can use `cd ~` to get back to your home directory from wherever you are (and you can use `cd ~/Desktop` to get to your Desktop from wherever you are, `cd ~/Downloads` to get to your Downloads, etc)
* in the LL, we are typically going to store our code in a `Developer` or `Development` folder. If you don't have your own, you can create it by navigating to your home folder (`cd ~`) and then entering `mkdir Development`
* go ahead and `cd Development` to get into that folder and you're done

## set up your development environment

Following these steps will set up your mac for coding. If you've been following the steps above (learning terminal), open a new terminal window (command + n or just close terminal and open it again) and then start working your way through these steps.

FYI these take awhile to install!

1. install [homebrew](https://brew.sh/) 
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
**note**: it will prompt you to enter a password. This password is the one that you use to control the settings on your comptuer. When you type it in, it will look like you are not typing anything in! which is confusing! but just type your password and press enter.
2. install node (`brew install node`)
3. install visual studio code (`brew install visual-studio-code`)
4. install git (`brew install git`)
5. make a `~/Development` folder to put your code in
6. create a Github account (optional: needed if you want to use Github to store and share your code and to collaborate with others)
7. (for people making nextjs apps) create a Vercel account (optional: needed if you want the simplest way to put a Next app on the web)

All of this takes a little while to do, so it definitely helps if you go ahead and do this part on your own (preferably when doing something else like watching Netflix, because you'll be spending some time waiting for some of these installs to complete).

## glossary
* visual studio code (vs code)
    * Visual Studio Code (VS Code) is a code editor. It provides a user-friendly interface, intelligent code completion, debugging capabilities, and support for a wide range of programming languages. It makes coding easier by suggesting how your code should look and helping you find mistakes.
* node
    * Node.js is an open-source, server-side JavaScript runtime environment. It allows developers to build scalable and high-performance network applications using JavaScript, which was traditionally associated with browser-based scripting. Node.js enables the execution of JavaScript code outside of web browsers, making it a popular choice for building server applications, APIs, real-time applications, and command-line tools.
* github
    * GitHub is a widely used platform for hosting and collaborating on coding projects. It provides version control using Git, allowing developers to track changes, manage codebase versions, and collaborate with teammates. GitHub offers features like issue tracking, pull requests, and project management tools, making it a central hub for developers to collaborate, contribute, and manage codebases effectively.