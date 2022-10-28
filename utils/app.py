from bs4 import BeautifulSoup as bs

import requests


def DoIt():
    url = 'https://examradar.com/oop-using-cpp-cpp-programming-basics-questions-answers/'
    req = requests.get(url).text
    html = bs(req, 'html.parser')
    p = html.select('p')
    final = '#, question\n'
    for t in p:
        s = t.select('strong')
        print(s)
        # if 'Question' in s.getText()[0]:
        #     print(t)
    #     with open('programming.csv', 'w') as file:
    #         file.write(final)
    # print(final)


DoIt()
