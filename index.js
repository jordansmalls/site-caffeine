// 1. import and define the TARGET_URL and INTERVAL from .env file

// 2. using axios, make an http GET request to the TARGET_URL and console log the result

// 3. if successful, log a success message with the HTTP status code, and if failed, log a failure message and the error details

// 4. log a startup message showing the configured interval

// 5. call pingBackend() once to ensure the first ping happens immediately upon script start

// 6. use setInterval() to schedule the pingBackend function to run repeatedly at the defined INTERVAL_MS

import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

const TARGET_URL = process.env.TARGET_URL;
const INTERVAL = process.env.INTERVAL || 9

// the interval in milliseconds is calculated by: Minutes * 60 seconds/minute * 1000 milliseconds/second
const INTERVAL_MS = +INTERVAL * 60 * 1000;


async function pingWebsite() {
  if (!TARGET_URL) {
    console.error('❌ Error: TARGET_URL is not set in the .env file.');
    return;
  }

  console.log(`\n⏰ Pinging ${TARGET_URL}...`);

  try {
    const response = await axios.get(TARGET_URL);

    console.log(`✅ Success! Pinged ${TARGET_URL}`);
    console.log(`🟢 Status Code: ${response.status} (${response.statusText})`);
  } catch (err) {
    console.error(`❌ Failure! Could not ping ${TARGET_URL}`);
    console.error(`🚨 Error Message: ${err.message}`);

    if (err.response) {
      console.error(`🔴 Response Status: ${err.response.status}`);
    }
  }
}

console.log(
  `🚀 Starting... I will ping ${TARGET_URL} every ${
    INTERVAL_MS / 1000 / 60
  } minutes.`
);

pingWebsite();
setInterval(pingWebsite, INTERVAL_MS);
