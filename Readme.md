
# Chatify


Introducing the Chatify – your new and interactive assistant for talking with your image. This web app is designed to make extracting text from images and answering questions about them as easy task.

## Demo

https://github.com/user-attachments/assets/4d694c5c-0555-4864-a29e-b27788a8d5cc
### Deployed LINK:(little bit slow, using free tier of render for deployment of server)
https://chatify-jade-eight.vercel.app/

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

### Why Did I choose Cloudinary?
#### Needed to save the uploaded images , using server's disk storage is not optimal cause it'll increase the resources consumed my server system, So went for Cloudinary to save those images and get a url to save in mongoDB table.

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
MONGO_URI="your_mongoDB_URL"
CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_KEY="your_cloudinary_key"
CLOUDINARY_SECRET="your_cloudinary_secret"
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










