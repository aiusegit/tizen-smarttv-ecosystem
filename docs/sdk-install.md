# Guia de instalação do SDK Tizen

## 1. Requisitos

- Sistema operacional compatível com o Tizen Studio
- Conexão com a internet
- Permissões de instalação do sistema
- TV Samsung em modo desenvolvedor quando necessário

## 2. Instalação oficial

1. Acesse o site oficial do Tizen Studio:
   https://developer.tizen.org/development/tizen-studio/download

2. Instale o Tizen Studio.

3. Instale os módulos necessários para Samsung TV:
   https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html

4. Abra o Package Manager e adicione os componentes essenciais.

5. Use o Device Manager para conectar a TV via rede.

6. Emule ou teste em televisão real.

## 3. Checklist recomendado

- SDK instalado
- TV Extensions instalados
- Package Manager atualizado
- Certificate Manager configurado
- Device Manager funcionando
- Emulador testado

## 4. Estrutura de desenvolvimento

```text
Tizen Studio / SDK
   -> CLI
   -> Package Manager
   -> Certificate Manager
   -> Device Manager
   -> Emuladores
```

## 5. Resultado esperado

Depois de instalar o ambiente corretamente, você deve conseguir:

- criar apps Tizen
- compilar com a CLI
- empacotar em `.wgt`
- assinar o app
- instalar em emulador ou TV
