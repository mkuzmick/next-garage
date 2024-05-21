---
title: 'LL Basics: Datasets'
tags: [resources]

---

---
tags: resources
---
# LL Basics: Datasets
**[Link to Repo](https://github.com/learninglab-dev/ll-basics-datasets)**

### Overview
These are example datasets that are open source, cleaned, and free to use for whatever project you would like to use them for. 


# LL Basics: Datasets

### Overview
These are example datasets that are open source, cleaned, and free to use for whatever project you would like to use them for. 


## Names in Lyrics

This dataset analyzes songs from the US Billboard Hot 100 from 1958-2017, identifying names from their lyrics. A more complete description of how the data was collected, as well as the visual essay, can be found in the source link. This dataset can be a good entry into dealing with text data, before diving into some larger datasets (like the Harry Potter text below.)



- Source: [Names in Pop Songs, Data World](https://data.world/the-pudding/names-in-pop-songs)
- Gitfile: [names_in_lyrics.csv](https://github.com/learninglab-dev/ll-basics-datasets/blob/main/names_in_lyrics.csv)
- Cleaning: None


Number of Entries: 20,626

| Column Name | Data Type | Description | Example | 
| ----------- | --------- | ----------- | ------- |
|artist | categorical| the name of the artist or band who sang the song | Ed Sheeran | 
| name | categorical | the name that was included the lyric | Kaleigh |
| song | categorical| the song title | Galway Girl |
| person | boolean | whether the name likely refers to a person (as opposed to a drug, band, etc) | true |
| sentence | categorical| an example of the lyrics in the song that include the name | After dancing to Kaleigh, singing to trad tunes |
| year | categorical| the earliest year that the song appeared on Billboard Hot 100 | 2017 | 
| highestrank | numerical, ordinal | the highest rank that the song reached on the Billboard Hot 100 | 53

Example Questions: 
- Which is the most referenced name ever?
- Which song includes the most different names? 
- Do different names trend in different years? 



## Academy Award Winners

Attention has been brough to the fact that most academy award winners are, in fact, caucasian. And mostly male. Here is a dataset of academy award winners and nominees since the inception of the Oscars, 1927 through 2020. 

- Source: [Kaggle](https://www.kaggle.com/dharmikdonga/academy-awards-dataset-oscars)
- Git file: [Link](https://github.com/learninglab-dev/ll-basics-datasets/blob/main/oscars.xlsx)
- Cleaning: None

Number of entries: 10,397

| Column Name | Data Type | Description | Example | 
| ----------- | --------- | ----------- | ------- |
| year_film | categorical | the year in which the film was released | 1999 |
| year_ceremony | categorical | oscar ceremony year | 2000 | 
| ceremony | categorical, ordinal | oscar ceremony number | 72 |
| category | categorical | the oscar award category | Costume Design |
| gender | categorical | gender of the nominee | Female |
| name | categorical | name of the nominee | Jenny Beaven |
| race | categorical | race of the nominee | White |
| film | categorical | name of the movie | Anna and the King |
| winner | binary | false (nomination), true (winner) | false | 

Example Questions: 
- What is the ratio of female nominees and winners to male nominees and winners? 
- Which category is the most diverse?
- Have the oscars become more diversified over time? Along which axes? 


## Natural Disasters

The file contains natural disaster data (excluding technological and complex disasters) from 2000 - 2020 (date of download: 09/6/2021) for Asia, Africa, Europe, Americas, and Oceania. Only events where there were more than 10 deaths, 100+ people affected, and/or the government declared a state of emergency are recorded in this database.

- Source: [EM-DAT Public](https://public.emdat.be/data)
- Git File: [Link](https://github.com/learninglab-dev/ll-basics-datasets/blob/main/natural_disaster_data.xlsx)
- Cleaning: 
    - Removed 'Reconstruction Costs' column due to extreme missingness of information (there was none). 
    - The GLIDE (GLobal IDEntifer) column was removed because it is useful when cross-identifying events among other databases. 
    - The 'Disaster Group' column was removed since we only included Natural disasters of the three available (technological, complex, natural).
    - Removed 'CPI' column because I could not find any information about what it was or meant. 

Number of entries: 239155


| Column Name | Data Type | Description | Example |
| ----------- | --------- | ----------- | ------- |
| Dis No  | categorical |  Unique Identifier comprising of the year, four unique digits, and the country code, | 2000-0706-PHL|
| Year |categorical, ordinal| The year of the event  | 2000|
| Seq | categorical| the sequence identifier | 0706|
| Disaster Subgroupd | categorical| Bioligcal/Geophysical/Climatological/Hydrological/Meteorlogical/Extraterrestrial | Meteorlogical|
| Disaster Type | categorical| main disaster type | Storm|
| Disaster Subtype | categorical| subdivision of disaster type | Tropical cyclone|
| Event Name | nominal| any specific name the event was referred by | Xangsane (Reming0|
| Country | categorical| the country affected/impacted. (If more than one country was affected, then each country will have its own entry) | Philippines (the)|
| ISO | categorical | International Organization for Standardization country code| PHL|
|Region | categorical | geographical region | South-Eastern Asia|
|Continent| categorical |continent to which the country belongs| Asia|
|Location|categorical | as specific a location(s) as possible (e.g. city, village, province, state, etc)| Cavite district (Region IV-A (Calabarzon) province), Sorsogon, Catanduanes, Albay districts (Region V (Bicol region) province), Metropolitan Manila district (National Capital region (NCR) province), Samar districts (Region VIII (Eastern Visayas) province)|
| Origin| categorical | triggering origin of the disaster | (e.g. for a flood, maybe Heavy Rain)
|Associated Dis| categorical | secondary or associated effects | (e.g. fires after an earthquake )
|Associated Dis2| categorical | more after effects||
|OFDA Response | binary (yes/null) | whether or not OFDA responded | null | 
|Appeal | binary | was there a request for internationl assistance? | blank
| Declaration | categorical | was a state of emergency declared? | blank |
| Aid Contribution | quantitative | total amount given ('000 US$) in immediate relief | blank |
|Dis Mag Value | quantitative | the intensity of the specifc disaster | 140 |
| Dis Mag Scale | categorical | the unit of the intensity | Kph |
| Latitutde | quantitative | North-South coordinates (used for earthquakes, floods, and volcanoes) | blank |
|Longitude | quantitative | East-West coordinate ("") | blank |
| Local Time | quantitative | local time when occurred, for sudden disasters | blank | 
|River Basin | categorical | name of river basins affected | blank |
| Start Year/Month/Day (Separate columns) | categorical, ordinal | date the disaster occurred (if sudden; if slow, then no day given) | 2000, 10, 28 | 
| End Year/Month/Day (Separate columns) | categorical, ordinal | "" finished | 2000, 10, 31 | 
|Total Deaths|quantitative | number of people who died or are missing because of the event| 154|
| No Injured | quantitative | Number of people requiring medical assistantce | 314| 
| No Affected | quantitative | number of people requiring assistance (includes No. Injured)| 2435942| 
| No Homeless | quantitative | number of people whose house was damaged or destoryed (included in No. Affected)| blank | 
| Total Affected | quantitative | Number of injured, affected, or homeless |2435942|
| Insured Damages ('000 US$)| quantitative | economic damages that were covered by insurance| 1500 | 
| Total Damanges ('000 US$) | quantitative | value of damanges and loses| 1700 | 
| Adm Level | categorical, ordinal | degree of specificity about geocoding (0 = country, 1 = state, 2 = county)| 2| 
| Admin1 Code | categorical, ordinal | geocodes for state level | blank|
| Admin2 Code| categorical, ordinal | geocodes for county level | 24210;24228;24240;24243;24245;24261 | 
| Geo Locations | categorical | names corresponding to geocodes| Albay, Catanduanes, Cavite, Metropolitan Manila, Samar, Sorsogon (Adm2). | 



More information about the data can be found [here](https://public.emdat.be/about)

Example questions: 
- which region(s) of the world experience the most natural disasters in general? 
- based on region and time of year, which type of natural disaster is most likely? 
- which countries seem to have the best response to natural disasters (low numbers of total affected and damage costs compared to other countries experiencing similar numbers and severity of natural disasters)? 

## COVID-19

Global COVID data for February 2020 through downloaded data (9/7/2021). This dataset focuses more on big-picture numbers across countries than on a country and their specific demographic breakdown of cases. 

- Source: [Our World in Data](https://github.com/owid/covid-19-data/tree/master/public/data)
- Git file: [Link](https://github.com/learninglab-dev/ll-basics-datasets/blob/main/owid-covid-data_cleaned.csv)
- Cleaning: Removed some columns in order to simplify the data (e.g. most "[variable]_smoothed" columns since that data can be duplicated if desired). 

| Column Name | Data Type | Description | Example |
| ----------- | --------- | ----------- | ------- |
| iso_code | categorical | three-letter country code | BWA|
| continent | categorical | geographical location | Africa |
| location |categorical | name of country | Botswana| 
| date | categorical, ordinal | date of information | 07/19/2021
| total_cases | quantitative | total confirmed cases of covid_19 | 91902 |
| new_cases | quantitative | new cases reported | 5769 | 
| total_cases_per_million | quantitative | total cases per million | 38336.587| | 
| new_cases_per_million | quantitative | new cases per million | 2406.517|
| total_deaths| quantitative | number of total deaths in the country | 1328 |
| new_deaths | quantitative | new deaths | 54
| total_deaths_per_million | quantitative | total deaths per million | 553.97 |
| new_death_per_million | quantitative | new cases per million |  22.526 |
| icu_patients | quantitative | number of patients in ICU on a given day | blank | 
| icu_patients_per_million| quantitative | no. patients in ICU per million | blank | 
| hosp_patients | quantitative | no. patients hospitalized on a given day | blank | 
| hosp_patients_per_million | no. patients hospitalized per million | blank |
| stringency_index | categorical, ordinal | how strict of a response the government had (0-100)| 59.26 | 
| total_tests | quantitative | total tests given | blank | 
| new_tests| quantitative | total tests given that day | blank| 
| total_tests_per_thousand | total tests per thousand | blank | 
| new_tests_per_thousand | new tests per thousand | blank | 
| total_vaccinations | quantitative | total vaccination doses given | 318107 |
| people_vaccinated | quantitative | total people who have received at least one shot | 200054 | 
| people_fully_vaccinated | quantitative | total people who are fully vaccinated | 118053 | 
| total_boosters | quantitative | number of booster doses given | 
| new_vaccinations_smoothed | quantitative | new doses given (7 day rolling average) | 3531 |
| population | quantitative | population in 2020 | 2397240 | 
| population_density| quantitative | number of people divided by land area (km^2) |4.044 | 
| median_age | quantitative | media age of population | 25.8 | 
| aged_65_older | quantitative | percentage of population 65 & older | 3.941 | 
| aged_70_older| quantitative | percentage of population 70 & older | 2.242 | 
|gdp_per_capita | quantitative | GDP from most recent year available | 15807.374 | 
| extreme_poverty| quantitative | percentage of population living in extreme proverty | blank | 
| cardiovasc_death_rate | quantitative | death rate from cardiovascular disease in 2017, per 100,000 | 237.372 | 
| diabetes_prevalence | quantitative | percentage of population aged 20-79 with diabeted  in 2017 | 4.81 | 
| female_smokers | quantitative | percentage of women who smoke | 5.7 | 
| male_smokers | quantitative | percentage of men who smoke | 34.4|
| handwashing_facilities | quantitative | share of population with basic handwashing facilities | blank | 
| hospital_beds_per_thousand | quantitative | hospital beds per 1000 people | 1.8 | 
| life_expectancy | quantitative | life expectancy at birth in 2019 |  69.59 | 
| human_development_index | quantitative | composite value representing a long, healthy life, knowledge, and decent standard of living |  0.735 | 
| excess_mortality | quantitative | excess mortality p-scores for all ages | blank | 

Example questions:  
- Does population density seem to play a role in number of cases/vaccination rates? 
- Are there regional differences in how countries have handled the pandemic? 
- Is there a correlation between the general health of the population and number of total cases/deaths? 






## Global Historical Emissions 

This dataset contains information about human-caused greenhouse gas (GHG) emissions from 1990 to 2018. More than 100 countries are included. Because of the way the data is formatted, it also provides an opportunity to practice reformatting the data into [tidy data](https://towardsdatascience.com/whats-tidy-data-how-to-organize-messy-datasets-in-python-with-melt-and-pivotable-functions-5d52daa996c9).  (Or you can find a tidy version of the data [here](https://github.com/learninglab-dev/ll-basics-datasets/blob/main/ghg-emissions_tidy.csv).) 

- Source: [The World Bank](https://data.worldbank.org/indicator/EN.ATM.GHGT.KT.CE?end=2018&start=2018&view=map)
- Git file: [Link](https://github.com/learninglab-dev/ll-basics-datasets/blob/main/ghg-emissions.csv)
- Cleaning: None


| Column Name | Data Type | Description | Example |
| ----------- | --------- | ----------- | ------- |
| Country/Region | categorical | name of country | China | 
| Unit | categorical | metric tons of carbon dioxide equivalent | MtCO2e | 
| Yearly Measurement | categorical | the column name is the year, the row value is the measurement | (1990) 2873.71 |

Example Questions: 
- Which country has increased their emissions the most over the last two decades? 
- Which countries have decreased their emissions?  
- What are the global emissions trends? 



## Harry Potter Texts & Scripts

### Book Texts

- Source: [u/khushmeeet](https://github.com/khushmeeet/potter-nlp)
- Git files: [Link](https://github.com/learninglab-dev/ll-basics-datasets/tree/main/harry_potter_data/book_texts)
- Cleaning: none

This folder contains .txt files of all seven books. The files have been pre-cleaned fo most punctuation and uppercase letters, with only quotation marks, periods, exclamation marks, and question marks remaining. This could be a fun dataset to work with to get experience with text mining, sentiment analysis, or if you simply want to visualize some of the language of one of the world's most popular YA franchises. 

Example Questions: 
- Which characters/spells/locations are mentioned most throughout the books? 
- Does the vocabulary used increase across the books? 
- Do the books get progressively, uniformly darker? 

### Movie Scripts

Unlike with the raw text file of the books above, these data include who said what, as they are transcribed of the movie scripts. What is lost in all of Harry's internal narration and description of the world, is gained by being able to do character analysis. 


- Source: [Kaggle](https://www.kaggle.com/kornflex/harry-potter-movies-dataset)
- Git files: [Link](https://github.com/learninglab-dev/ll-basics-datasets/tree/main/harry_potter_data/movie_scripts)
- Cleaning: none

| Column Name | Data Type | Description | Example |
| ----------- | --------- | ----------- | ------- |
| movie   | categorical | the movie name | Harry Potter and the Philospher's Stone |
| chapter | categorical | the chapter of the movie, according to the script | Doorstep Delivery |
| character | categorical | which character is speaking | Albus Dumbledore |
| dialog | text | the dialog of the character speaking | I should have known that you would be here...Professor McGonagall.| 

Example Questions: 
- Who has the most lines/words in all the movies? 
- Does the amount of dialog increase with the movies?  
- Do the movies get progressively, uniformly darker? 


And if you want to take a whack at using both datasets and doing some comparing/contrasting, that could be fun. Because quotation marks were retained in the book text files, it might be possible to use [regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to search out all the phrases [encased by quotes](https://stackoverflow.com/questions/171480/regex-grabbing-values-between-quotation-marks), so you'll have all the dialog in the books - but without the information of who said what. You could still compare amount of total dialog and vocabulary. 

## Global Population Growth, Fertility, and Mortality

This is a dataset from UNdata that contains the following measurements: 
- Life expectancy at birth for males/females/both 
- Population annual rate of increase (percent)
- Infant mortality for both sexes (per 1,000 live births)
- Maternal mortality ratio (deaths per 100,000 population)
- Total Fertility Rate (children per women) 

The data was collected for three five-year periods and aggregated into three "years": 2005, 2010, and 2015. 

- Source: [UN Data](https://data.un.org/)
- Git File: [Link](https://github.com/learninglab-dev/ll-basics-datasets/blob/main/UN_population_indicators.csv)
- Cleaning: Headers

| Column Name | Data Type | Description | Example |
| ----------- | --------- | ----------- | ------- |
| ISO Code | categorical | three-digit ISO code for each country, region, or area | 4 | 
| Country Name | categorical | name of the country, region, or area | Afghanistan | 
| Year | categorical | the reference year | 2005 | 
| Series | categorical | the specific data series |Total fertility rate (children per women)|
| Value | quantitative | the numerical measurement for the data series in question | 7.1816 | 

## Volcano Data

- Source: Harvested from the NOAA NCEI database for natural hazards. The data was filtered for years between 1950 and Present (October 28th, 2021), and with a VEI score > 1 (to remove eruptions with null scores). 
- Git File: 
- Cleaning: Converted Tsu and Eq columns from null/numerical identifier or tsunami or earthquake event into binary indicators. 

| Column Name | Data Type | Description | Example |
| ----------- | --------- | ----------- | ------- |
| Year | categorical | the year of the eruption | 1950 | 
| Mo | categorical | the month of the eruption (values 1-12) | 8 |
| Dy | categorical | the date of the eruption, if known (1-31) | 28 | 
| Tsu | categorical | whether there was a resultant tsunami event (binary) | 0 | 
| Eq | categorical | whether there was a corresponding earthquake (binary) | 0 | 
| Name | categorical | the name of the volcano as listed by the Smithsonian Institution | Semeru | 
| Location | categorical | the specific region of the volcano | Java | 
| Country | categorical | the country where the volcano is located | Indonesia | 
| Latitude | quantitative | the latitude of the volcano | -8.108 |
| Longitude | quantitative | the longitude of the volcano | 112.922 | 
| Elevation | quantitative | the elevation of the volcano in meters (m) above sealevel | 3657 | 
| Type | categorical | the type of volcano, as listed by the Smithsonian Institution | Stratovolcano | 
| VEI | categorical | Volcanic Explosivity Index | 1 | 
| Agent | categorical | the component of the eruption that caused fatalities | P |


|VEI|	General| Description|	Cloud Column Height (km)|	Volume (m3)|	Qualitative Description|	Classification|	How often|	Example|

| ----------- | --------- | ----------- | ------- | ----------- | ------- | ----------- | ------- |----------- | 
|0|	non-explosive|	<0.1|	1x104|	Gentle|	Hawaiian|	daily|	Kilauea|
|1	|Small|	0.1-1|	1x106	|Effusive|	Haw/Strombolian|	daily|	Stromboli|
|2|	Moderate|	1-5	1x107	|Explosive|	Strom/Vulcanian	weekly|	Galeras, 1992|
|3|	Moderate-Large	|3-15|	1x108|	Explosive|	Vulcanian|	yearly|	Ruiz, 1985|
|4	|Large|	10-25	1x109|	Explosive|	Vulc/Plinian|	10's of years|	Galunggung, 1982|
|5	|Very Large|	>25	1x1010	|Cataclysmic|	Plinian|	100's of year|s	St. Helens, 1981|
|6	|	|>25 km|	1x1011|	paroxysmal	|Plin/Ultra-Plinian|	100's of years|	Krakatau, 1883|
|7	|	|>25 km|	1x1012|	colossal|	Ultra-Plinian|	1000's of years|	Tambora, 1815|
|8	|	|>25 km	|>1x1012	|colossal|	Ultra-Plinian|	10,000's of years|	Yellowstone, 2 Ma|



|Code	|Agent|
| ----------- | ------- |
|A|	Avalanche (Debris and landslides)|
|E|	Electrical (lightning)|
|F|	Floods (& Jökulhlaups)|
|G|	Gas (emission from eruptive craters as well as fumarolic/solfataric activity)|
|I|	Indirect deaths (disease, starvation, exposure, desolation)|
|L|	Lava flows|
|M|	Mudflows/Lahars|
|m|	Secondary (post-eruption) mudflows|
|P|	Pyroclastic flows, surges, & direct blasts|
|S|	Seismic, or volcanic earthquake (tectonic earthquake deaths excluded)|
|T	|Tephra (ash, bombs, lapilli, steam blasts). Killing either by ballistic impact, or with finer-grained ash, by suffocation, collapse of ash-covered roofs, etc.|
|W|	Waves or tsunami|



<!-- ## Bok Data 

Bok Teaching and Learning Center is a hopping place, and this is reflected in the modes we have used to communicate with each other and with others. Here are three datasets that can maybe shed some insight. 

### Slack Overview & Channel Data

I don't have too much experience with collecting data using APIs. Thought it might be a good exercise to try to use the slack API to pull other data not included in the standard analystics csv, like reaction emojis. 



- Source: Slack
- Git file: 
- Cleaning: None

| Column Name | Data Type | Description | Example |
| ----------- | --------- | ----------- | ------- |
| Date | categorical | the date | 6/1/2016 | 
| Total Enabled Membership | quantitative | members + guests | 55 | 
| Enabled Full Members | quantitative | number of memers | 55 | 
| Enabled Guests | quantitative | guests have limited access | 0 | 
| Daily Active Members | quantitative | 
| Daily Members Posting Messages | 
| Weekly Active Members | 
| Weekly Members posting Messages | 
| Messages in public channels | 
| Messages in private channels | 
| Messages posted | 
| Public channels, single-workspace | 
| Files uploaded | 
| Percent of messages, private channels | 
| Percent of messages, public channels | 
| Percent of messages, DMs | 
| Percent of views, public channels | 
| Percent of views, private channels | 
| Percent of views, DMs| 
 -->


<!-- ### Vimeo Data

- Source: 
- Git file: 
- Cleaning: None

| Column Name | Data Type | Description | Example |
| ----------- | --------- | ----------- | ------- | -->




