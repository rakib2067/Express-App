### Study Notes

| [JavaScript API Frameworks](https://github.com/getfutureproof/fp_guides_wiki/wiki/JavaScript-API-Frameworks) | [Testing API Endpoints with Supertest](https://github.com/getfutureproof/fp_guides_wiki/wiki/API-Endpoint-Testing-with-Supertest) |

### Demo repo

To run the demo repo code:

1. Install dependencies
   - `cd server`
   - `npm install`
2. Start your server
   - make sure you are inside the server folder
   - `npm start`
3. Open your client
   - `cd ../client`
   - `open index.html` (or server of your choice eg. node's `http-server` or python's `python -m http.server`)

To run the server tests:

- make sure you are inside the server folder
- `npm run dev`
- you can use `npm run coverage` to check the test coverage

To run the client tests:

- make sure you are inside the client folder
- `npm install` (you only need to do this before your first client test run)
- `npm test`
- you can use `npm run coverage` to check the test coverage
