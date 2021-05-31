"use strict";
const puppeteer = require("puppeteer");

async function getNewPage() {
	try {
		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		return { browser, page };
	} catch (error) {
		console.log(`${getNewPage.name}: Error is: `, error);
		return Promise.reject(error);
	}
}

// Set key-value pair in localstorage
async function setValue(page, keyValue) {
	try {
		await page.evaluate((kv) => {
			for (const key in kv) {
				localStorage.setItem(key, kv[key]);
			}
		}, keyValue);
		console.log("Set value in localstorage");
	} catch (error) {
		console.log(`${setValue.name}: Error is: `, error);
		return Promise.reject(error);
	}
}

// Get key-value pair from localStorage
async function getValue(page, keys) {
	try {
		const keyValues = await page.evaluate((keys) => {
			const keyValues = {};
			keys.map((key) => (keyValues[key] = localStorage.getItem(key)));

			return keyValues;
		}, keys);

		console.log("key value pairs are: ", keyValues);
		return keyValues;
	} catch (error) {
		console.log(`${getValue.name}: Error is: `, error);
		return Promise.reject(error);
	}
}

// get all keys from localstorage for a particular page
async function getAllKeys(page) {
	try {
		const storageLength = await page.evaluate(() => localStorage.length);
		console.log("Local storage length is: ", storageLength);

		const keys = await page.evaluate((length) => {
			const keys = [];
			for (let keyIndex = 0; keyIndex < length; keyIndex++) {
				keys.push(localStorage.key(keyIndex));
			}
			return keys;
		}, storageLength);

		console.log("All keys are: ", keys);
		return keys;
	} catch (error) {
		console.log(`${getAllKeys.name}: Error is: `, error);
		return Promise.reject(error);
	}
}

(async function main() {
	let browserGlobalRef;
	try {
		const { browser, page } = await getNewPage();
		browserGlobalRef = browser;
		await page.goto("https://www.google.com");

		// Test case
		const kv = {
			username: "dhiman.das",
			name: "Dhiman Das",
			position: "MTS 2",
		};

		await setValue(page, kv);

		const allKeys = await getAllKeys(page);

		await getValue(page, allKeys);
	} catch (error) {
		console.log(`${main.name}: Error is: `, error);
	} finally {
		if (browserGlobalRef) {
			await browserGlobalRef.close();
		}
	}
})();
