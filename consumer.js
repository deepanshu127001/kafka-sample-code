const kafka = require('kafka-node');
const { KafkaClient, Consumer } = kafka;

const client = new KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(
  client,
  [{ topic: 'load-test', partition: 0 }],
  { autoCommit: true }
);

let messageCount = 0;

consumer.on('message', (message) => {
  messageCount++;
  console.log(`Received message: ${message.value}`);
  if (messageCount === 1000000) {
    console.log('Processed 1 million messages');
    process.exit();
  }
});

consumer.on('error', (err) => console.error('Consumer error:', err));
