# How It works

This project is a single page React application that shows both current and historic prices of different cryptocurrencies.

I used the API provided by Alphavantage in order to get the data. In order to graph the data I used Chart.js.
In this application you first see a number of cards with different coins and their live prices. If you click on one of the cards you can see more descriptive details about the price history.

# What I Learned from the project

Making this app was harder than I expected for a few reasons. The first reason is that the format of the data that the API was returning was different to other APIs I have used before. Every request returned a large amount of data that was nested many times (over a thousand points) for the daily historical data. Navigating the data at first provided trouble. This was particularly difficult because there is a limit of 5 calls a minute so it was hard to be sure whether the reason the program wasn't working because of a bug in my code or if I had hit the limit for the minute.

Additonally I had never used Chart.js before and so learning how to visualize the data once I had cleaned it was a challenge but rewarding neverthless.
