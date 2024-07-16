# frozen_string_literal: true

require_relative 'utils'

def filter_hash(entry, fields)
  entry.filter { |key, _| fields.include?(key) }
end

def filter_images(entry, fields)
  entry['image_uris'] = filter_hash(entry['image_uris'], fields)
  entry
end

def add_slug(entry)
  entry['slug'] = slugify_name(entry['name'])
  entry
end

def add_rulings(entry)
  @memo ||= {}
  ruling_fields = %w[published_at comment]

  print "Fetching rules for #{entry['name']}... "
  data = if @memo.key?(entry['slug'])
           puts 'Cached'
           @memo[entry['slug']]
         else
           puts 'Downloading'
           sleep(1)
           data = fetch_scryfall(entry['rulings_uri'])
           @memo[entry['slug']] = data.map { filter_hash(_1, ruling_fields) }
         end

  entry['rulings'] = data
  entry
end

def divide_chaos_text(entry)
  case entry['type_line']
  when /Plane/
    oracle, _, chaos = entry['oracle_text'].rpartition("\n")
    entry['oracle_text'] = oracle
    entry['chaos_text'] = chaos
    entry['type'] = 'Plane'
    entry
  when /Phenomenon/
    entry['type'] = 'Phenomenon'
    entry
  else
    raise "Could not match #{JSON.pretty_print(entry)}"
  end
end

INPUT_FILEPATH = './public/data/scryfall_data.json'
ENTRIES = load_json_file(INPUT_FILEPATH)

CARD_FIELDS = %w[id name type_line oracle_text image_uris set set_name rulings_uri].freeze
IMAGE_FIELDS = %w[small normal large art_crop].freeze

# scryfall entries
new_entries = ENTRIES
              .map { |entry| filter_hash(entry, CARD_FIELDS) }
              .map { |entry| filter_images(entry, IMAGE_FIELDS) }
              .map { |entry| divide_chaos_text(entry) }
              .map { |entry| add_slug(entry) }
              .map { |entry| add_rulings(entry) }

WRITE_PATH = File.join('.', 'public', 'data', 'card_data.json')

File.open(WRITE_PATH, 'w') { |f| f.write(JSON.generate(new_entries)) }
