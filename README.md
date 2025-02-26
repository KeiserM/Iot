# Projeto: Integração do Arduino com Firebase para IoT

## Descrição
Este projeto foi desenvolvido nas aulas de IoT e tem como objetivo conectar um Arduino ao ESP8266 para permitir comunicação via internet através do WiFi. O sistema integra o Firebase para armazenar e recuperar o estado de dispositivos conectados.

## Tecnologias Utilizadas
- **Arduino Uno**
- **ESP8266 WiFi Module**
- **Firebase Realtime Database**
- **HTML, CSS e JavaScript**

## Arquitetura do Projeto
1. O Arduino, equipado com o ESP8266, conecta-se à internet via WiFi.
2. O Firebase é utilizado para armazenar o estado de um dispositivo (ex: LED ligado/desligado).
3. Uma interface web permite que o usuário controle o estado do dispositivo remotamente.

## Estrutura do Código
### Código do ESP8266 (Arduino)
- Conecta-se ao WiFi e ao Firebase.
- Lê o estado do Firebase e controla o LED de acordo.
- Envia valores randômicos de teste ao Firebase.

### Código da Interface Web
- `index.html`: Página com botões para ligar/desligar o LED.
- `style.css`: Estilização dos botões.
- `firebase.js`: Configuração e inicialização do Firebase.

## Configuração
1. **Substitua as credenciais do WiFi** no código do ESP8266.
2. **Atualize as credenciais do Firebase** em `firebase.js`.
3. **Carregue o código no Arduino** usando a IDE apropriada.
4. **Hospede a interface web** para controle remoto.

## Como Usar
1. Acesse a interface web.
2. Clique em **Power ON** para ligar o LED.
3. Clique em **Power OFF** para desligar o LED.
4. O estado será atualizado no Firebase e refletido no Arduino.

## Melhorias Futuras
- Implementar autenticação no Firebase.
- Adicionar mais dispositivos controláveis.
- Melhorar a interface gráfica.

## Autor
- Keiser Augusto Manuel
- Projeto desenvolvido durante as aulas de IoT no curso da **TME Education**.

