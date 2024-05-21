---
title: essentialsLab = codeLab
tags: [essentialsLab, ' jk']

---

---
tags: essentialsLab, jk
---

# essentialsLab = codeLab

## to do asynchronously before the end of the graphicsLab weeks:
**Read**: [about airtable scripting](https://support.airtable.com/hc/en-us/articles/360043041074-Scripting-app-overview)
**Watch**: tbd
**Make**: a web-viewable gallery of your best work this term using airtable, the scripting block, and markdown




## during section:

We will spend about 30 minutes together talking about web-based galleries, sourcing some inspiration, and getting introduced to the task at hand for our codeLab module.

1. log in to airtable with the studio account.


# DATABASING TO LEARN

It's often said (by writing instructors at least) that students aren't just "learning to write" in their College composition courses, they're also "writing to learn." The basic idea is that in crafting sentences and paragraphs, arguments and interpretive analyses, students are wrestling with the ideas of the course, and shaping them into complex, synthetic schemas. You can memorize a bunch of front:back flashcard relations (state:capital, word:definition, english-word:french-word, theory:one-sentence-summary, etc.), but **knowing** in the most important sense is something bigger than this. The ability to understand how all of these facts fit into a system, say, or the ability to critique a particular scholar's interpretation of this system--these are abilities that students develop and display in their academic writing.

Across the wide array of tools and media you'll encounter this year in the LL, we'll invite you to ask yourself how students might not simply "learn to X," but also "X to learn." That is to say, when we deliver a podcasting workshop, for sure we want them to learn to make a podcast; but we also want them to be set up to learn **through** podcasting . . . to be "podcasting to learn" and "3D modeling to learn" and "filmmaking to learn" and "performing to learn" and "drawing to learn" and so on.

And it's with all this in view that we HOPE you'll encounter today's Airtable tutorial not merely as a dull technical demo, but as an occasion to think with us a bit about how students might "database to learn."

## DATABASE BASICS

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/programming-foundations-databases-2/relational-databases-2?claim=AQGZ2AijYG_lqAAAAXpdvxsstD0diT0Yl0etmoIGrv-s4YSqcZ1AJfzP7GIzHidf0zzGoCoxSono6_J20A3dglJoXIrulzils1sFo1daYMjXAV84qTb5Rpzhq3iqYzCyW8oTubnkKEOCCVgYfJn90_1d0b7YZRJ1DiB2UwJOA5syRaYWVyhMQYWkd6IIb66-q9GWg1M9-zY7Wn1aYLN-SAzTQqDqAoEyP1hJihq2ohh6fBXohUEznBJjd5yjTzeNg3HrMJYAfEDmAkl6tb_FQ2I4qCyBShXLIpLKsuCauxzqzTg_aNF9bC-eJ2iB5mtHpORoqGwSXLEUVKv6elXsjg3OT4xGJKsnLL2Ua4DUavRHY-kncuuTw7rDI1Awn7KukWt6DwRiVwZ4Ace1kIt-ehYS9n4uB3yRk4CBIM8V6bt1b1i-ShKqeK7za47g4ZEtHuP9bKM4J6qEfsjTiMdR3i8Ff8GMb0O6PDENsln5dpKEYgZKMJVEnUW2Pa7kov-W-LAxYSOFLNLDcPy4oA43Ki3Oq2Su5T2So5i5v29D6GUNrVZNB-B16biPW2vTDs6y3Q72V1wWZ1NhII8sGH63pwicBlOWdWAQWsWyA0drnYzy4Ma654nDwC6f4tKmIQm8_yKPhAnS7K4ymrVlBH8Agt1CVs_qVYHpMoc5rqDUswkDU2UweXsUf-cdmSrJ17q7Bbmn9mUbx7T-0KU4rZZg9DJOukZ_ZUgqOR680poiC_W0GdgI" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p><strong><a href="https://www.linkedin.com/learning/programming-foundations-databases-2/relational-databases-2?trk=embed_lil">Relational databases</a></strong> from <strong><a href="https://www.linkedin.com/learning/programming-foundations-databases-2?trk=embed_lil">Programming Foundations: Databases</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/scott-simpson?trk=embed_lil">Scott Simpson</a></strong></p>

* [Awesome LinkedIn Learning course](https://www.linkedin.com/learning/programming-foundations-databases-2/why-use-a-database?u=2194065) if you like learning from videos.
* [Wikipedia article on Database Normalization](https://en.wikipedia.org/wiki/Database_normalization) with links to all the different NFs
* [Sample Learning Lab Project Base](https://airtable.com/tbl3iPjQjaWGtiSrE/viwCDDsfINDS67x7w?blocks=hide) from MusicLab, along with the [web-based timeline](https://musiclab.learninglab.xyz/at/songtimeline) that renders it visible.





### SUMMARY OF THE FIRST 3 NFs

The move to create relations is connected to the need to "normalize" your database. Normalization makes your data more consistent; it makes it easier to update; and, crucially, it makes it tougher to accidentally mess up your data.

* to satisfy **1NF**, each table cell should contain a single value, and each record needs to be unique
* to satisfy **2NF**, you need to make sure that there are no values in your record that depend on only a **part** of what's termed the "[candidate key](https://en.wikipedia.org/wiki/Candidate_key)."  An easier way to think of this is to say that values shouldn't be dependent on other values (rather than being properties of the objects that you are defining in the table). If you have a list of students enrolled in a class that includes the students' ID numbers, their names and their email addresses, you'll find that the students' names and emails depend on their ID numbers, so the table doesn't satisfy 2NF. You'll need to create a **separate** table of students that associates the student IDs with each student's relevant data. Then you'll **link** the two tables together by referencing the students by ID in your classlist table.
* to satisfy **3NF** there should be no values in your table that depend on something OTHER than the record. For instance, if your imagined classlist included a field containing the phone number for the main offices of the students' residence halls, this would in some sense depend on the student, but it **really** depends on something else: the residence hall where the student lives. So we need a separate table of residence halls, including their main office's phone numbers. Then we would link to this table in the "Students" table.


<div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/programming-foundations-databases-2/second-normal-form?claim=AQHSy9TOHG54zAAAAXpd3DrqDTpIVLPzSIr-UCa4X-_44J2H54ydBzGQR25SiUnD94Hi6_HFkUEUJ6k9p-iYIQt0LUC910IF3IJX2nBHgVOf0JI7NbFH9DF3rCLWi02oX6VLAS1JEYe0MDrOG-f0x1BGGJMko3IE_RcUdNPbMFMasl84NmfdcEuLarmVCKU3elJcUH8CRtRooZT3lmX5g-QcrBPYDgvT6LYlbYCCoI3DOCqF1ZGk3yyty-sMEFQ8-0S0VFEoHSVdnQ1L-n_yk0ePRLClOzMItjGxPzm26QfVutcD7x1PaWd5yrimi5mXBtwW7RCxDWiiFcDyTr0iGaZi8i7uI0VFc90a7FPOCOS_6HwsWWWKtbyTB8XKJl8Ny9_Zv5IsMdpQidNca7M8MHiPdtmWMxI4xL5Ana4XH98nTIaPNE8bk2dEZP0IFYg5TDiHsRRXxmj-EGunVM5QiRdCfQZ5K9W_iWp_TMrGZB7mIbmxDTtxzn3wl9i9siZItgHQTQakbA6t8qmXFgLMRL40h-p9CsWIxO92qtfQAU5q39Ha5KGsnbachNis91IhfT7g0ChVRGO31Qa_b3wMA4z3gYNIK5z3mqw4ws6CGTrGY9Xwzi4cqCOQ_JYDD-lIV5gS6f3dg5u8CmtiEwMt8Xx6PpgBk8JZGJiMZtdCHX9U4F8bnXj273NAuWYwC0mPuHgXYAtxh1MADC3yFu4f-QEOQQ73Cr69te6lnk-GBkKsdhhj" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p><strong><a href="https://www.linkedin.com/learning/programming-foundations-databases-2/second-normal-form?trk=embed_lil">Second normal form</a></strong> from <strong><a href="https://www.linkedin.com/learning/programming-foundations-databases-2?trk=embed_lil">Programming Foundations: Databases</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/scott-simpson?trk=embed_lil">Scott Simpson</a></strong></p>




