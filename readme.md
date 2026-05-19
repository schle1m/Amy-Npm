# Amy-Npm

> Simple yet powerful — interact with the Amy API

A minimal Node.js client for the Amy API. Fetch random images and more with just a few lines.

---

## Installation

```bash
npm install https://github.com/schle1m/Amy-Npm
```

## Usage

```js
const { amy } = require("Amy-Npm");

const { image, status } = await amy.random();
```

## API

| Method | Returns | Description |
|--------|---------|-------------|
| `amy.random()` | `{ image, status }` | Fetches a random image |