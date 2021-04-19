
#Import Libraries
import requests
import pandas as pd
import json
import matplotlib.pyplot as plt
import numpy as np
import tweepy
#twitter data
access_token = '879601750830972928-TRwwW3DIJoIesTgtZlY6dBinBRN8pcd'
access_token_secret = 'J5Uzg52glIOepYxYZt05VS6WaUaG10lzcf01ALPE4RaXo'
consumer_key = 'pepiUak3wVpVzgpPnZ90aBW4W'
consumer_secret = 'zigEcbrtoLRed4Atze4nu8IDuT3lTOs8Zm9A6MrKG3z5ZeSPBH'
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

def tweetSearch(term, quantity):
    D = api.search(term, lang = 'en', count = quantity)
    for i in D:
        print(i.text)
        print()

tweetSearch('bitcoin', 100) 
