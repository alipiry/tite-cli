# [Tite](https://github.com/alipiry/tite)
Tite(time + date) is a nodeJS CLI app that tells you Time & Date information.

[Tite](https://github.com/alipiry/tite) shows you both `Jalali` & `Gregorian` date information alongside time info.

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
  > yarn add global @alipiry/tite
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
