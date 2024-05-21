---
title: project-hackmd-system-planning
tags: [projects, ' maps']

---

---
tags: projects, maps
---

# project-hackmd-system-planning

have zones for work in progress now

* MDFs this year
* LLUFs this year
* Projects this term
* Labs this term?




### HACKMD BACKUP

* log in to Chrome before running script
* define array of teams
* loop through opening urls for downloading team notes using Chrome via child process
* loop through resulting list of .zip files and unzip to named directories

### HACKMD SCRIPTING WORK



```
#!/bin/sh

mkdir /tmp/some_tmp_dir                         && \
cd /tmp/some_tmp_dir                            && \
curl -sS http://foo.bar/filename.zip > file.zip && \
unzip file.zip                                  && \
rm file.zip
```

so for this hackmd: 

```
#!/bin/bash

curl https://hackmd.io/team/ll-this-week/exportAllNotes > ll-this-week.zip
unzip ll-this-week.zip
rm ll-this-week.zip
```

for right now, let's just get an array of the teams and open each in a logged-in browser

References
* [py tool for hackmd](https://hackmd.io/@ystl/BkqNtYvrP)
* [resource on CRSF tokens](https://portswigger.net/web-security/csrf/tokens)
* [hackmd cli docs](https://hackmd.io/@cli/SyMyfILq8#hackmd-cli-export-NOTEID-OUTPUT)
* [pyhackmd](https://hackmd.io/@ystl/BkqNtYvrP)
* [hackmd-cli on npm](https://www.npmjs.com/package/@hackmd/hackmd-cli)
* [ll-hack-md repo](https://github.com/mkuzmick/ll-hackmd-21-22)
* [hackmd-cli repo](https://github.com/hackmdio/hackmd-cli)
* [hackmd-api repo](https://github.com/hackmdio/api-client)
* [this file in the hackmd-api repo is the key](https://github.com/hackmdio/api-client/blob/master/nodejs/src/index.ts) to writing our script.
* 




* shift to new structure for notes
    * workbook in HackMD
    * MD pasted in
    * workbook cleared and located in Github repo at intervals
* clean up repositories and limit the number we work on in studio@ll
* look into differences between [codimd](https://github.com/hackmdio/codimd) and hackmd.
* [deploying codimd with docker](https://hackmd.io/c/codimd-documentation/%2Fs%2Fcodimd-docker-deployment
* [codimd docs](https://hackmd.io/c/codimd-documentation/%2Fs%2Fcodimd-documentation)