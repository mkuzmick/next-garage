---
title: microproject-indesign-scripting

---

# microproject-indesign-scripting

## first script

![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F034TS0TZL2/scripted-book-demo_400.gif?pub_secret=f5986ba1c4)

```
var doc = app.documents.item(0);

for (i = 0; i < 100; i++) {
    doc.colors.add({
            colorValue: [i, (100-i), 0, 0],
            name: ("mk-color-" + i)
    });
};

doc.colors.add({
    colorValue: [0, 0, 0, 0],
    name: ("mk-white")
});

for (i = 0; i < 100; i++) {
    var pages = doc.pages.add();
    var textFrame = doc.pages.item(i).textFrames.add({
        geometricBounds: ["1p6", "1p6", "60", "38p3"],
        fillColor: ("mk-color-" + i),
        contents: "color: mk-color-" + i
    });
    var text = textFrame.paragraphs.item(0);
    text.pointSize = 40;
    text.appliedFont = app.fonts.item("Helvetica");
    text.fontStyle = "Bold";
    text.fillColor = "mk-white";
}
```

## links



[link to sdk cep docs](https://github.com/Adobe-CEP/CEP-Resources/blob/master/Documentation/Product%20specific%20Documentation/CEP%20for%20InDesign%20Developers.pdf)

for now [this vs code extension](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug) seems the way to do things.

ultimately everything will move to [UXP](https://developer.adobe.com/photoshop/uxp/guides/).

is [this NPM package a thing?](https://www.npmjs.com/package/adobe-node)

also need to check out [data merge](https://helpx.adobe.com/indesign/using/data-merge.html) because it could be that just writing and airtable script to get a nice csv plus data merge is what you'd want in some cases.

[scripting API docs](https://www.indesignjs.de/extendscriptAPI/indesign-latest/#about.html)
