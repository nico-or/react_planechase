# frozen_string_literal: true

require 'json'
require 'open-uri'

# Utility function for loading JSON files
def load_json_file(filepath)
  File.open(filepath, 'r') { |f| JSON.parse(f.read) }
end

# String normalization for filenames
def slugify_name(string)
  regex = /[a-z0-9-]/

  string
    .downcase
    .gsub(' ', '-')
    .chars
    .filter { |char| regex.match?(char) }
    .join
end

# Generic API GET for JSON endpoint
def fetch_url(url)
  URI.open(url) { |f| JSON.parse(f.read) }
end

# Recursive api calls
def fetch_scryfall(url, data = [])
  response = fetch_url(url)
  new_data = [*data, *response['data']]
  return new_data unless response['has_more']

  fetch_scryfall(response['next_page'], new_data)
end
