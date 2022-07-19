import requests
import parsel

# Título h1::text
# Preço .product_main > .price_color::text
# Descrição #product_description ~ p::text
# URL #product_gallery img::attr(src)

URL_BASE = 'http://books.toscrape.com/catalogue/'
response = requests.get(URL_BASE + 'the-grand-design_405/index.html')
selector = parsel.Selector(response.text)

title = selector.css("h1::text").get()

price = selector.css(".product_main > .price_color::text").re_first(r'\d*\.\d{2}')

description = selector.css("#product_description ~ p::text").get()
sufix = '...more'

if description.endswith(sufix):
    description = description[:-len(sufix)] # pega tudo menos o sufixo

cover = URL_BASE + selector.css("#product_gallery img::attr(src)").get()

print(title, price, description, cover, sep=',')