# excuse-generator


Excuse App — short explanation

Purpose: This project is an "excuse generator" app. It creates quick,
usable excuses for many situations (work, school, social events, etc.).

How the app works (high level):
- The UI requests an excuse when the user asks for one.
- The app can fetch excuses from a backend or a public API and displays
	the returned text to the user.

Why `axios` is used:
- `axios` is an HTTP client used to make requests to the backend or an
	external excuse API. Installing it lets the app call endpoints like
	`/api/excuse` or `https://example-excuse-api.com/random` and receive
	excuse text.

Quick code example:
- `import axios from 'axios';`
- `const res = await axios.get('/api/excuse?category=work');`
- `setExcuse(res.data.excuse || res.data[0]);`

Run instructions:
- In the project root (the folder with `package.json`) run `npm install`
	to install all dependencies. To add Axios specifically run
	`npm install axios`.

Where to keep this file:
- Keep this single-file note as `m-note.txt` in the repo root as a brief
	explanation of the project and why Axios is installed.

Author note: concise description added by the maintainer.

