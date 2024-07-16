# Static data download scripts

Ruby scripts made to download and process data from the Scryfall API.

The purpose is not hit their API during development.

## Instructions

All scripts should be executed from the root directory.

```sh
ruby ./src/scripts/fetch_data.rb
```

Run the scripts in the following order:

1. fetch_data.rb
2. process_data.rb
3. fetch_images.rb
