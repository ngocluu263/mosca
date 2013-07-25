var mqtt = require('mqtt');
var client = mqtt.createClient(1883, "localhost", { clean: true });

function publish() {
  client.publish("test", "payload");
  setImmediate(publish, 1);
}

client.on("connect", publish);

client.on("error", function(err) {
  console.log(err);
});
