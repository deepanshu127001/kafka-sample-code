Download Kafka:

Go to the Apache Kafka downloads page.
Download the latest Kafka binary.
Install Kafka:

Extract the downloaded Kafka archive to a preferred directory, e.g., C:\kafka.
Set up Kafka:

Open the extracted folder and navigate to the config folder.
Open server.properties using a text editor and ensure the log.dirs points to a valid directory (e.g., C:\kafka\kafka-logs).
Ensure Zookeeper settings are correctly configured in zookeeper.properties in the same folder.
Install Java:

Kafka requires Java. Download and install the latest JDK from Oracle or OpenJDK.
Set the JAVA_HOME environment variable to the installed JDK path.
Add Kafka to PATH (Optional):

Add C:\kafka\bin\windows to your system's PATH environment variable for easier access.
Start Zookeeper and Kafka:

Open a terminal (or cmd) and navigate to the Kafka directory:
bash
Copy code
cd C:\kafka
Start Zookeeper:
bash
Copy code
.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
In a new terminal, start Kafka:
bash
Copy code
.\bin\windows\kafka-server-start.bat .\config\server.properties
----------------------------------------------------------------------------------
Step 2: Send 1 Million Requests to Kafka Using Node.js
Install Node.js:

Download and install Node.js from the official website.
Set up a Node.js Project:

Initialize a Node.js project:
bash
Copy code
mkdir kafka-load-test
cd kafka-load-test
npm init -y
Install Kafka-related libraries:
bash
Copy code
npm install kafka-node


Create a Kafka Topic: In the Kafka terminal:

.\bin\windows\kafka-topics.bat --create --topic load-test --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1

node producer.js
node consumer.js
