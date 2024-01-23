# DoneZone

<h1 align="center">
  DoneZone
</h1>


<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/GyAlves/DoneZone?color=purple" />

  <a href="https://www.linkedin.com/in/gyasmin-assun%C3%A7%C3%A3o-223417180/">
    <img alt="Made by Gyasmin Alves" src="https://img.shields.io/badge/made%20by-Gyasmin%20Alves-purple">
  </a>

 <img alt="License" src="https://img.shields.io/github/license/GyAlves/GoBarber-Backend?color=purple">

</p>

## 📖 About

The DoneZone API is a powerful and lightweight ToDo manager built entirely with Node.js, without relying on any external frameworks, and a file-based storage system. It empowers you to seamlessly keep track of your tasks, providing essential functionalities such as task listing, creation, updating, and deletion.
<b> With an additional feature : You can import your tasks in bulk by importing a CSV powered by streams. </b>

## 📝 Key Features 

### Task Operations:

- <b>Listing: </b> Retrieve a comprehensive list of all your tasks.
- <b>Creation:</b> Easily create new tasks with relevant details.
- <b>Updating:</b> Modify task attributes to reflect changes.
- <b>Deletion:</b> Remove completed or unnecessary tasks effortlessly.

### CSV Import with Streams:

- <b>Bulk Import:</b> Using the multipart/form-data content type, you can upload a CSV file through an HTTP request. The server, configured to handle this content type, processes the incoming data as a stream. This allows efficient handling of large files without loading the entire content into memory at once.

## 📱 Build With

- Javascript
- Node.JS
- csv-parser

 ## 💻 Getting Started
 Follow the instructions below to be able to run the server on your machine. 

### Installation

#### 1 - Clone the repository 

```
git clone <repository_url>
```

#### 2 - Install the dependencies 

```
cd <repository_folder>
npm install
```

 #### 3 - Run the server

```
npm run dev
```

## :memo: Licence 

MIT Licence. See the file [LICENSE](LICENSE.md) for more details.

---
