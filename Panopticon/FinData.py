import requests
import pandas as pd
import json
import matplotlib.pyplot as plt
import numpy as np
import tweepy
import nltk

# Discord Data 

# Stock Data
def get_stock_data_current(symbol):
   url = "https://alpha-vantage.p.rapidapi.com/query"
   headers = {
    'x-rapidapi-host': "alpha-vantage.p.rapidapi.com",
    'x-rapidapi-key': "646001325dmsh166d5eeb1d23040p1f4af2jsn3c14270afdde"
    }
   querystring = {"symbol":str(symbol),"function":"GLOBAL_QUOTE"}
   response = requests.request("GET", url, headers=headers, params=querystring)
   i = response.text
   a = json.loads(i)
   df = pd.DataFrame(a)
   print(df)
   


def historical_data_Montlhy(symbol):
    url = "https://alpha-vantage.p.rapidapi.com/query"

    querystring = {"datatype":"json","symbol":str(symbol),"function":"TIME_SERIES_MONTHLY"}

    headers = {
        'x-rapidapi-host': "alpha-vantage.p.rapidapi.com",
        'x-rapidapi-key': "646001325dmsh166d5eeb1d23040p1f4af2jsn3c14270afdde"
    }
    response = requests.request("GET", url, headers=headers, params=querystring)
    y = response.text
    x = json.loads(y)
    a = x['Monthly Time Series']
    df = pd.DataFrame(a)
    z = df.transpose()
    print(z)
    array = np.array(z['4. close'])
    float_array = array.astype(np.float)
    print(float_array)    
    variance = np.var(float_array)
    stDev = np.std(float_array)
    mean = np.mean(float_array)
    print('Summary Statistics: ')
    print('The mean price is ' + str(mean))
    print('the standard Deviation is' + str(stDev))          
    print("The variance is " + str(variance))
    
historical_data_Montlhy("AAPL")
