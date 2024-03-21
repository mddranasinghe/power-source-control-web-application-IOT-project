var protocol = window.location.protocol;
 
 var mqttBroker='home.onesmartapi.com';
 var userName='dinuka';
 var password='dinuka'
 var port = protocol === 'https:' ? 8084 : 1884;
var mqttClientId;
var mqttUseSSL = protocol === 'https:';

if(protocol === 'http')
{
     mqttClientId ='wss/'+Math.random();
}else{
 
     mqttClientId ='wss/'+Math.random();
}

var client = new Paho.MQTT.Client(mqttBroker, port,mqttClientId);

console.log("client ID:-"+mqttClientId);

