# CountryPedia
A simple encyclopia for countries of the world. It is a RESTful API that I created using Node.js's Express framework and it is just a starter project. The data about the countries could be found in 'data/countries.json' file. 

## How to Use :

#### Clone the repo and install depedencies

```sh
$ git clone https://github.com/yasir-lateef/CountryPedia-API.git
$ cd CountryPedia-API
$ npm install
```

#### API Routes

##### Countries

- List of all the countries

```sh
http://localhost:2000/api/countries/all
```

- Information about a country
```sh
http://localhost:2000/api/countries/:countryName
```
Replace 'countryName' with the name of the country you want info about. For Example Pakistan, United States etc.


- Information about a country's specific attribute
```sh
http://localhost:2000/api/countries/:countryName/:attribName
```
Replace 'countryName' and 'attribName' parameters with the country and attribute(lowercase) you want info about. For Example Pakistan, United States etc.
###### List of Attributes
 - name
 - capital
 - region
 - altSpellings
 - subregion
 - population
 - demonym
 - area
 - timezones
 - borders
 - callingCodes
 - currencies
 - languages
 ---
 ##### Regions
 
 - List of Regions(with list of its subregions)
 ```sh
 http://localhost:2000/api/regions/all
 ```
 
  - Region Detail with List of Countries in it
 ```sh
 http://localhost:2000/api/regions/:regionName
 ```
Replace 'regionName' parameter with the name of one of the regions. For Example Africa, Europe etc.
 - Asia
 - Europe
 - Africa
 - Oceania
 - Americas
 
 - List of countries in a subregion
 ```sh
 http://localhost:2000/api/regions/:regionName/:subRegionName
 ```
 Replace 'regionName' and 'subRegionName' parameters with the name region and its subregion respectively. For Example 'http://localhost:2000/api/regions/Asia/Southern Asia'
 ###### List of Regions and their
 - Asia
 	+ Southern Asia
 	+ South-Eastern Asia
 	+ Central Asia
 	+ Eastern Asia
 	+ Western Asia 
 - Europe
 	+ Northern Europe
 	+ Southern Europe
 	+ Eastern Europe
 	+ Western Europe
 - Africa
 	+ Northern Africa
 	+ Southern Africa
 	+ Middle Africa
 	+ Eastern Africa
 	+ Western Africa
 - Oceania
  + Polynesia
  + Melanesia
  + Micronesia
  + Australia and New Zealand
 - Americas
 	+ Caribbean
 	+ Northern America
 	+ South America
 	+ Central America
---
 ##### Language Codes (ISO 639-1)

 - List of Language Codes

 ```sh
 http://localhost:2000/api/isolanguagecodes/all
 ```
 ###### Searching for a language code or name
 
 Search by Language Code
 ```sh
 http://localhost:2000/api/isolanguagecodes/search/?attr=code&value=[lang_code]
 ```
 Replace [lang_code] with the ISO 639-1(two-letter) language code i.e EN for English, FR for French etc

 Search by Language Name
 ```sh
 http://localhost:2000/api/isolanguagecodes/search/?attr=code&value=[lang_Name]
 ```
 Replace [lang_name] with the language name i.e English, French etc ISO 3166-1 alpha-3
---
 ##### Country Codes (ISO 3166-1 alpha-3)

 - List of Country Codes

 ```sh
 http://localhost:2000/api/isocountrycodes/all
 ```
 ###### Searching for a country by code or name
 
 Search by Country Code
 ```sh
 http://localhost:2000/api/isocountrycodes/search/?attr=code&value=[country_code]
 ```
 Replace [country_code] with the ISO 639-1(two-letter) country code i.e IRN for IRAN, PAK for Pakistan etc

 Search by Country Name
 ```sh
 http://localhost:2000/api/isocountrycodes/search/?attr=name&value=[country_Name]
 ```
 Replace [country_name] with the language name i.e English, French etc 