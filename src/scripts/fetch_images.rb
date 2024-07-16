# frozen_string_literal: true

require 'json'
require 'open-uri'

require_relative 'utils'

# size available: %w[small normal large art_crop]
IMAGE_SIZES = %w[small normal large art_crop].freeze

# Load JSON data
INPUT_FILEPATH =  './public/data/scryfall_data.json'

raise("Can't find #{INPUT_FILEPATH}\nPlease download data first") unless File.exist? INPUT_FILEPATH

data = load_json_file(INPUT_FILEPATH)
data_uniq = data.uniq { _1['name'] }

# Fetch images
data_uniq.each do |card|
  slug = slugify_name(card['name'])

  IMAGE_SIZES.each do |size|
    filepath = File.join('.', 'public', 'images', size, "#{slug}.jpg")

    # Skip downloaded files
    if File.exist?(filepath)
      puts "skipping #{filepath}"
      next
    end

    # Retrieve uri
    image_url = card.dig('image_uris', size)
    puts "downloading #{image_url}"

    # Download
    image = URI.open(image_url)

    # write to disk
    File.open(filepath, 'w') { |f| f.write(image.read) }

    sleep(1)
  end
end

# Fetch cards back
BACK_SIZES = %w[small normal large].freeze

BACK_SIZES.each do |size|
  filepath = File.join('.', 'public', 'images', size, 'back.jpg')

  if File.exist?(filepath)
    puts "skipping #{filepath}"
    next
  end

  image_url = "https://backs.scryfall.io/#{size}/7/8/7840c131-f96b-4700-9347-2215c43156e6.jpg"
  puts "downloading #{image_url}"

  # Download
  image = URI.open(image_url)
  sleep(1)

  # write to disk
  File.open(filepath, 'w') { |f| f.write(image.read) }

  sleep(1)
end
