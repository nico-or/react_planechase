# frozen_string_literal: true

require_relative 'utils'

START_URL = 'https://api.scryfall.com/cards/search?q=t%3Aplane+or+t%3Aphenomenon+game%3Apaper&unique=prints'

OUTPUT_FILEPATH = './public/data/scryfall_data.json'

data = fetch_scryfall(START_URL, [])
File.open(OUTPUT_FILEPATH, 'w') { |f| f.write(JSON.generate(data)) }
