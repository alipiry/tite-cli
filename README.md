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


<div style="font-size:16px;margin:0 auto;width:300px" class="blockchain-btn"
     data-address="1FNxb5Lk4j3Q17YDVop6xTtZsp8UeDjySA"
     data-shared="false">
    <div class="blockchain stage-begin">
        <img src="https://blockchain.info/Resources/buttons/donate_64.png"/>
    </div>
    <div class="blockchain stage-loading" style="text-align:center">
        <img src="https://blockchain.info/Resources/loading-large.gif"/>
    </div>
    <div class="blockchain stage-ready">
         <p align="center">Please Donate To Bitcoin Address: <b>[[address]]</b></p>
         <p align="center" class="qr-code"></p>
    </div>
    <div class="blockchain stage-paid">
         Donation of <b>[[value]] BTC</b> Received. Thank You.
    </div>
    <div class="blockchain stage-error">
        <font color="red">[[error]]</font>
    </div>
</div>
