
# Chatify


Introducing the Chatify – your new and interactive assistant for talking with your image. This web app is designed to make extracting text from images and answering questions about them as easy task.

## Screenshots

![App Screenshot](https://i.imgur.com/PtaYxQQ.png)

![App Screenshot](https://i.imgur.com/UTyDGoh.png)

![App Screenshot](https://i.imgur.com/xOOUOgQ.png)

![App Screenshot](https://i.imgur.com/O4DOAa1.png)

![App Screenshot](https://i.imgur.com/NX9I15J.png)


## Features

- Extract text from uploaded Image
- Ask Question from based on the uploaded images
- Get an answer from a GenAI (Gemini)



## Tech Stack

**Client:** React,Vite, Typescript, TailwindCSS

**Server:** Node, Express, MongoDB, Cloudinary


## Installation

clone the repo

```bash
git clone https://github.com/shayan-cyber/Chatify.git
```



### Backend
```bash
cd server
npm i
```
make a .env file and add
```bash
PORT=3000
MONGO_URI=""
CLOUD_NAME=""
CLOUDINARY_KEY=""
CLOUDINARY_SECRET=""
```

Run the server
```bash
npm run start
```

### Client
```bash
cd client
npm i
```
make a .env file and add
```bash
VITE_SERVER_URL=http://localhost:3000
VITE_GEMINI_API_KEY=""
```

Run the client
```bash
npm run dev
```




##### Client URL: http://localhost:5173/

##### Server URL: http://localhost:3000/
## API Reference(server)
http://localhost:3000/
#### Upload image for image OCR

```http
  POST /api/bot/upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `image` | `file` | **required**. |
| `text` | `string` | **required**. |


#### Get history of OCR operations

```http
  GET /api/bot/history
```









