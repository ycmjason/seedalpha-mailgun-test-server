# Testing server for mailgun redirect

This server listens to `POST *` and log the request to the console.

Example log:
```
POST /ef?jekf=ejkf
{ a: '3' }

POST /
{ c: '5' }
```

To start the server on 3000:
```
npm start
```
