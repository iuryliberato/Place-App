# General Assembly


# Project 2 - Bon Voyage! 🌎🌎🌎


## Overview

This application allows users to search for  places, find information about each destination and links to wikipedia and AirBnB. We built the Front-end using React and pulled data from [Road Goat API](https://developer.roadgoat.com/#introduction) using Axios requests.


## Brief

This was a 2 day paired hackathon. Kate and I had the brief to create a working application using React that consumes a public API, and contains several components and a router. 

We were asked to create a git repository hosted on Github with frequent commits.


## Planning

I had the idea of looking for an API that contains information about places around the world. I shared it with Kate who immediately liked the idea and we began searching. We found a couple of API’s, one of them was actually paid for and Road Goat was free of charge. 

We looked at their website and documentation and found so much content, including Covid transmission rate, tags that describe each destination, average spending and images.  

We then created wireframes, considering how each component would be built, listing  every feature and layout for each page. 

## Homepage:



* Nav which contains ‘home’ and ‘all destinations’ links. 
* A little message which could also be a description about the website.
* A button which also directs to all destinations page.

<img width="694" alt="Screenshot 2021-11-30 at 12 20 32" src="https://user-images.githubusercontent.com/86430160/144046647-c2c56c40-62ed-4e23-83fa-90ee5b594546.png">



##All Destinations :



* Search bar to search destinations.
* Cards displaying destinations.

<img width="721" alt="Screenshot 2021-11-30 at 12 23 37" src="https://user-images.githubusercontent.com/86430160/144046832-5cf5eec4-0c82-4d72-b6f1-0ce4b1c12d05.png">



##Individual Destination:



* Destination card with all information about the destination including tags.
* A button linking to Wikipedia.
* A button linking to AirBnB.

<img width="699" alt="Screenshot 2021-11-30 at 12 25 03" src="https://user-images.githubusercontent.com/86430160/144047163-3894465b-34e6-4ecd-94ba-be7dbca51cc0.png">



## Approach taken



* Day 1 - As we had a very short amount of time to create this app, we decided to pair-code, create the components and split the jobs so we could work on our individual features during the evening, including styling. That evening I built the navbar and the homepage.
* Day 2 - My main focus was developing the all destination page, I implemented the search bar filtering letter by letter and displaying every destination card with those letters. My main difficulty was to get the images and tags because the API returned a complicated data structure.
* We worked out some of the paths for data and data relationships, digging down into the data to display the key information for each destination, both in the index page and also in a more detailed way on the individual destination page.


![carbon (4)](https://user-images.githubusercontent.com/86430160/144045502-e5f38f10-e036-4cee-9c1b-c32aeadbaf69.png)



We used Bootstrap to style and save some time as our main focus was the functionality.

<img width="1420" alt="Screenshot 2021-11-24 at 17 04 29" src="https://user-images.githubusercontent.com/86430160/144045626-cb02803c-1b6f-4aa3-9cca-272f2ea83b77.png">



<img width="1211" alt="Screenshot 2021-11-24 at 17 07 09" src="https://user-images.githubusercontent.com/86430160/144045784-922e588a-ddbf-4e09-a433-c6f8296452a9.png">


<img width="1420" alt="Screenshot 2021-11-24 at 17 05 16" src="https://user-images.githubusercontent.com/86430160/144045859-bc7fb604-3ad5-44c6-9266-8fc26d1cc280.png">





Once we presented our project, I decided to keep working on it. I restyled following the homepage style and managed to get an image for every card in the all destinations page.

<img width="1697" alt="Screenshot 2021-11-22 at 14 55 58" src="https://user-images.githubusercontent.com/86430160/144046031-1f0bad70-e03f-4d80-acd5-23a3576874e1.png">

<img width="1671" alt="Screenshot 2021-11-22 at 14 51 26" src="https://user-images.githubusercontent.com/86430160/144046146-c6a94d8f-59af-4c70-9616-2d6902b5ec64.png">

<img width="1697" alt="Screenshot 2021-11-22 at 14 54 07" src="https://user-images.githubusercontent.com/86430160/144046169-b6848d0d-efcb-4da9-b6fc-f46bc6e4f0a2.png">

## API requests

The Road Goat API is a really rich resource with a lot of information - a lot of which is generated by users and pulled from other APIs such as COVID safety data so it is really dynamic and up to date. Because we were not in control of the data, we couldn’t be sure that every destination would have all of the content we required such as an image or tags. It had two endpoints to make GET requests to - the all destinations endpoint and an individual destination by its id, which was really useful for getting a populated piece of data with more information for each destination.


## Project Wins and Key Learnings



* The mais win is that we have built a fully working app in only two days.
* Managed to work with complicated and nested data which was new to my understanding.
* I’ve learned to paircode, making sure we had good communication by keeping each other updated.


## Challenges:



* We had no control over the API response, so we had to spend time pulling out the correct data that we wanted to display.


## Future improvements



* Add content to the homepage.
* Add more filters to search destinations.

## Bugs

* We had many bugs using this API, it took us a few hours to understand that some of the contents were incomplete, but we made it work in the end.

## Visit our website

* To demo the project, head to my [Netlify link](https://iury-api-project.netlify.app/).
* To run server with code locally: **yarn start**.
