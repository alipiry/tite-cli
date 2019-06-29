# Tite
Tite(time + date) is a nodeJS CLI app that tells you Time & Date information.

Tite shows you both `Jalali` & `Gregorian` date information alongside time info.

## Demo
[![asciicast](https://asciinema.org/a/226655.svg)](https://asciinema.org/a/226655)

## Development Technologies
```bash
  typescript
  javascript
  nodeJS
```

## Requirements
To use this package, make sure you have `yarn` installed on your machine:

macOS:
```bash
  > brew install yarn
```
Linux:
```bash
  > curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
```bash
  > sudo apt-get update && sudo apt-get install yarn
```

## Installation
Install package:
```bash
  > yarn global add @alipiry/tite-cli
```

## Usage
Simply run `tite` to get time and date information:
```bash
  > tite
```

You can use following command to see `tite` options:
```bash
  > tite -h
```

### Available options
`-y, --year`: Shows the year of current date

`-m, --month`: Shows the month of current date

`-d, --day`: Shows the day of current date

`-w, --weekday`: Shows the week day of current date

`-t, --time`: Shows current time

## Development 
Clone the project:
```bash
  > git clone git@github.com:alipiry/tite-cli.git
```

Install dependencies and dev dependencies:
```bash
  > cd tite-cli/
  > yarn
```
### Running
```bash
  > yarn dev
```

### Production
```bash
  > yarn build
```

## Author
[Ali Piry](https://github.com/alipiry)

## LICENSE
Tite is MIT-licensed.

## Support
If you enjoy using this tool, please consider buying me a coffee. :grin:

<a href="https://blockchain.com/btc/payment_request?address=1FNxb5Lk4j3Q17YDVop6xTtZsp8UeDjySA&amount=0.00041731&message=$5 Coffee for supporting Ali Piry" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
