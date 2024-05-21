---
title: Linking your Next.js app to Airtable
tags: [emmy, code-lab]

---

# Linking your Next.js app to Airtable

## Set up

1. Create a Next.js app and open it in VS Code
2. Simplify Page.tsx (or whichever page you want to work in within your app). Here is some starter code for your page:

```
export default function Page (){
    return ()
    <div>
        <h1> instert some text here </h1>
    </div>
    )
}
```
3. Lets download a Node package manager to connect to airtable (do this in terminal!)
```
npm i airtable
```
* [airtable node package documentaion](https://www.npmjs.com/package/airtable)

## Linking to Airtable for a server-side app

4. Navigate to the airtable API site and select a base you want to work with (need to be logged in)
    * [airtable api](https://airtable.com/developers/web/api/introduction)
    * on the lefthand sidebar, select Authentication and copy the example code for what you would like your app to do (ex. retrieving data)

5. Get an API key and Base ID from airtable for the base you would like to link. Think of these like a license you're giving your app to access your data (so you probably don't want to share these broadly!)
    * [create Airtable access keys](https://airtable.com/create/tokens)

6. paste these two values into ```.env.local```

```

AIRTABLE_API_KEY = insert key here
BASE_ID = insert base ID here

```

7. Create a new .js file in utilities, lets call it getAirtableData.js. **note**: you ONLY use a utility to call Airtable if you are making a server-side app! if you're going to have client-side components (i.e., where a user would interact with something on your site), you'll want to make **an api route**.


Here we are going to make a function to get data from our Airtable base.


Back in page.tsx, import the function you defined to get data from your utilities folder by running:

```
import getAirtableData from "../../utilities/getAirtableData"

```

or, if you didn't make changes to the import alias, you can go with:


```
import getAirtableData from '@/utilities/getAirtableData'
```

8. Next, we'll define a constant for the base you are accessing using the key and base id with the code below. We'll refer to this base in our function to retrieve data we'll write next. 

```
import Image from 'next/image'
import Airtable from "airtable"

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

```

9. Now that we've made a variable to reference our base let's make an asynchronous function to retrieve our data. Asynchronous functions allow your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result. In this case, we want our app to constantly retrieve and report data while other functions run. 

In page.tsx, define the function ```getData``` to retrieve all records from your selected base. Replace "inster-name-of-table" with the name of the Table you would like to pull records from.


```
async function getData() {
    try {
      const records = await base('instert-name-of-table').select().all();
      console.log(JSON.stringify(records, null, 4))
      return records;
    } catch (error) {
      throw new Error('Failed to retrieve data from Airtable');
    }
  }
 
export default async function Home() {
  const theDataImWaitingFor = await getData()
  return (
    <div>
      <pre>{JSON.stringify(theDataImWaitingFor, null, 4)}</pre>
    </div>
  )
}
```

### Next Steps

We can also add styling to this data using CSS tailwinds. Below is some example code to make a Card component for each record and style it (from ChatGPT): 

```
export default function LearningProjectCard(props) {
    const tags = props.record.fields.AllTags
    return (
        <div className="rounded-lg shadow-md p-4 bg-white">
            <h1 className="text-xl font-black mb-2">{props.record.fields.Name}</h1>
            <h1 className="text-m mb-2">{props.record.fields.Status}</h1>
            <p className="text-m mb-2">{props.record.fields.Description}</p>
            <p>tags: {props.record.fields.AllTags}</p>
            <div className="mt-4">
                {tags && tags.map((tag, index) => (
                    <span
                        key={index}
                        className="rounded-full py-1 px-3 text-white bg-blue-500 border border-blue-900 text-sm mr-2"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
```

## making an api route for client-side components!

caroline add here :) 
