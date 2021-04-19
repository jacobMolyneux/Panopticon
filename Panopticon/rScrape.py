import requests
import praw
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

reddit = praw.Reddit(
client_id = 'Qm8ySAX9aS-oPQ',
client_secret = '4VsEL8HjSRgVe0VMo9pV48DE64s',
user_agent = 'Budget-Mulberry-1101'
)

submission = reddit.submission('https://www.reddit.com/r/wallstreetbets/comments/lc1y4t/guess_what_wsj_has_corrected_their_article_that/')
submission.comments.replace_more(limit = None)
a = submission.comments.list()
print(len(a))



