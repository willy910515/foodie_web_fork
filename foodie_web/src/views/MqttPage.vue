<template>

    <v-container
        grid-list-xl
        class="d-flex align-center justify-center"
        style="height: 80vh;width: 70vw;"
    >
        <v-row>
            <v-col class="d-flex justify-center">
                <v-btn @click="sendMqttMessage('shot')" color="#34b4eb" size="25vw" style="font-size:5vw;">開始</v-btn>
            </v-col>
            <v-col class="d-flex justify-center">
                <v-btn @click="sendMqttMessage('stop')" color="#eb5534" size="25vw" style="font-size:5vw;">停止</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="blue"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

</template>

<script>
import mqtt from 'mqtt';
import config from '../config.json';

export default {
    data() {
        return {
            client: null,
            snackbar: false,
            text: '',
            timeout: 4000,
        }
    },
    created() {
        this.client = mqtt.connect({
            host: config.host,
            port: config.port,
            username: config.username,
            password: config.password
        });
        this.client.on('connect', () => {
            console.log('MQTT 連線成功');
        });
    },
    methods: {
        sendMqttMessage(action) {
            const topic = 'Food/F05ECD2ABE8D/Camera'; // 替換為你的 MQTT 主題
            this.client.publish(topic, action, (error) => {
                if (error) {
                    console.error('MQTT 訊息發送失敗', error);
                } else {
                    this.text = `訊息 ${action} 已發送到主題 ${topic}`
                    this.snackbar = true
                    console.log(`訊息 ${action} 已發送到主題 ${topic}`);
                }
            });
        }
    }
}
</script>

<style scoped>
/* 這裡可以添加你的樣式 */
</style>