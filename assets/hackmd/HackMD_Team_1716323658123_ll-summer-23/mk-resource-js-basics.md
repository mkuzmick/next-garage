---
title: mk-resource-js-basics

---

# mk-resource-js-basics


#### INSERT LINK - Video tutorial - simplifying the Next.Js app


## JavaScript basics - variables 

Now that we're set up, let's try adding in some variables. Variables are just a name of a storage location that we assign value to so we can refer to it in our code. Let's define a variable for your name using the following code in page.tsx:

```
var myName = "Y/N"
```
The variable in this case is a string or a collection of alphabets, words or other characters

Once you've defined your name as a variable, you can refer to it by referencing it in return with curly brackets:

```
export default function Home() {
  return (
    <div>
      <h1>{myName}'s app</h1>
    </div>
  )
}
```

INSERT LINK - Js Basics variables
timestamp

## JavaScript basics - integers and floats

We can also store numeric values, such as integers and floating point numbers, in a storage unit type called "const" or constant. Lets define and integer and decimal number of your choice as "myInt" and "myFloat" and have our app perform a simple math operation involving the two values, such as dividing myInt and MyFloat:

```
import Image from 'next/image'

var myName = "Marlon"
const myInt = 7
const myFloat = 13425.13462

export default function Home() {
  return (
    <div>
      <h1>{myName}'s app</h1>
      <p>this is a number: {myInt/myFloat}</p>
      <p>is this a number? {myInt + myName}</p>
    </div>
  )
}
```

 If we try an operation between a string variable and a constant ({myInt+myName} in the example above), the output will be a string (7Marlon in the example).

INSERT LINK - Js Basics integers and floats
timestamp 

## JavaScript basics - arrays

These variables and constants can store singular items, but if want to store a list of items, possible of different data types, in a single variable, we can use arrays. You can even define an array within an array, but there are other ways to organize data on multiple levels we will get to next. Let's start by defining an array:

```
import Image from 'next/image'

var myName = "Marlon"
const myInt = 7
const myFloat = 13425.13462
const myArray =["cat", ["dog", "food"], 43, 56.01, "purple"]

```
We can then index into the array to get, say just "dog" by putting the number of that element . Elements in arrays are zero-indexed, meaning the first item is 0, the second is 1 and so forth. Adding the line below referencing myArray[4] will return just the 4th element from our array, in this case "purple".

```
export default function Home() {
  return (
    <div>
      <h1>{myName}'s app</h1>
      <p>this is a number: {myInt/myFloat}</p>
      <p>is this a number? {myInt + myName}</p>
      <p>this is an element in my array: {myArray[4]}</p>
    </div>
  )
}
```

Video Tutorial Js Basics - arrays
(timestamp:)

## JavaScript basics - objects

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

Video Tutorial Js Basics - objects
(timestamp:)



