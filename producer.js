const kafka = require('kafka-node');
const { KafkaClient, Producer } = kafka;

const client = new KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(client);

const topic = 'load-test';
const messages = Array(1000000)
  .fill(0)
  .map((_, i) => `Message #${i + 1}`);

const payloads = [{ topic, messages }];

producer.on('ready', () => {
  console.log('Producer is ready');
  producer.send(payloads, (err, data) => {
    if (err) console.error('Error sending data', err);
    else console.log('Messages sent successfully', data);
  });
});

producer.on('error', (err) => console.error('Producer error:', err));
