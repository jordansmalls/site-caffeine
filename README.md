
<h1 align="center">
 Site Caffeine
</h1>


<h4 align="center">A simple and fast <a href="https://nodejs.org/">nodejs</a> script focusd on keeping your sites <em>awake</em>.</h4>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#license">License</a>
</p>

<img src="demo.gif" alt="Script running in terminal">


## Features

* Zero Downtime Heartbeat
  - Sends automated, recurring HTTP requests to your site to prevent it from entering a dormant state or being throttled due to inactivity.

* Minimal Footprint
  - Extremely lightweight dependencies `axios` and `dotenv`, with minimal CPU and memory usage, making it ideal for running continuously on local machines.

* Simple .env Configuration
  - Easily define the target URL to ping in a dedicated .env file without modifying the core script.

* Clear Status logging
  - Provides instant, color-coded console logging to give immediate feedback on the health and status of each ping attempt.
* Cross platform
  - Runs reliably on any operating system (Linux, macOS, Windows) that supports a Node.js environment.

## How To Use

To use this script, make sure you have [nodejs](https://nodejs.org/) and npm installed. From your terminal:

```bash
# clone the repository
$ git clone https://github.com/jordansmalls/site-caffeine

# cd into the directory
$ cd site-caffeine

# install dependencies
$ npm install
```

### Create a `.env` file and define the TARGET_URL and INTERVAL
```bash
# create an .env file
touch .env

# define the url you wish to ping
TARGET_URL=https://<yourbackendhere.com>

# define the interval between pings
INTERVAL=9
```

### Run the script
```bash
$ npm start
```
<img src="example.png" />

## License

**[MIT](./LICENSE)**

