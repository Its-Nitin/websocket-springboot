# Websocket SpringBoot

A Spring Boot project implementing **WebSocket** for real-time, bi-directional communication between server and clients.

---

## 🚀 Features

- Real-time messaging using WebSockets  
- Spring Boot WebSocket configuration  
- Includes a WebSocket **server module**  
- Includes a WebSocket **client module**  
- Simple and easy-to-understand implementation

---

## 🧱 Tech Stack

- **Java**  
- **Spring Boot**  
- **Spring WebSocket**  
- **Maven / Gradle**

---

## 📁 Project Structure

websocket-springboot/
├── src/
│ ├── main/
│ │ ├── java/ # Backend WebSocket code
│ │ └── resources/ # Config files
├── Websocket/ # WebSocket server module
└── WebsocketClient/ # Client module

---

## 📦 Getting Started

  ### ✔ Prerequisites
  - Java 17+ (or your version)
  - Maven or Gradle

---

## 🛠️ Installation

1️⃣ Clone the repository

    ```bash
    git clone https://github.com/Its-Nitin/websocket-springboot.git
    cd websocket-springboot

2️⃣ Run the Spring Boot WebSocket Server

    Maven
    mvn clean install
    mvn spring-boot:run
    
    Gradle
    ./gradlew build
    ./gradlew bootRun
    
    The server starts at:
    http://localhost:8080
Running the WebSocket Client
  Go to the client folder:
  
    cd WebsocketClient

Run the client (depending on implementation):

    # Example
    java -jar websocket-client.jar
  Or run the main class directly.

🔧 How It Works

  -- Spring Boot exposes a WebSocket endpoint (e.g., /ws).
  -- WebSocket clients connect to the endpoint.
  -- Both server and client exchange real-time messages.
  -- Server can broadcast or reply individually.

Contributing
  Fork the repo
  Create your branch (git checkout -b feature-name)
  Commit changes
  Push and create a Pull Request

