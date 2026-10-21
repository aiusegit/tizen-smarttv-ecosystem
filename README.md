# Tizen Samsung Smart TV - Guia Avançado e App de Exemplo

Este repositório foi transformado em uma referência técnica mais realista para o ecossistema Tizen de desenvolvimento para Smart TVs Samsung.

Ele inclui:

- visão geral do ecossistema Tizen para TV Samsung
- SDK oficial, TV Extensions, CLI e ferramentas auxiliares
- binários e wrappers de linha de comando
- guia de instalação do ambiente
- exemplo funcional de app de TV com navegação por teclado remoto
- estrutura de projeto inspirada em um app real para Samsung Smart TV

## Status do projeto

Este repositório não distribui o SDK oficial da Samsung/Tizen como binário, porque o pacote oficial é proprietário e depende de instaladores específicos do fabricante. Em vez disso, ele oferece:

- documentação oficial
- wrappers locais para chamar a CLI do SDK quando configurada
- um exemplo de app web para TV que já funciona como base de desenvolvimento

---

## 1. Ecossistema Tizen para Samsung Smart TV

O desenvolvimento para Samsung Smart TV com Tizen é um stack completo, formado por vários componentes que se conectam numa cadeia de execução bem definida:

1. SDK principal
2. TV Extensions da Samsung
3. CLI do Tizen
4. Package Manager
5. Certificate Manager
6. Device Manager
7. Emuladores/TV real

### Fluxo de trabalho real

```text
Instalar SDK e TV Extension
  -> criar projeto
  -> escrever código
  -> compilar com tizen build
  -> empacotar com tizen package
  -> assinar com Certificate Manager
  -> conectar via Device Manager
  -> instalar e testar na TV ou emulador
```

---

## 2. O SDK oficial

O SDK é o núcleo do ecossistema. Ele concentra a base da plataforma, bibliotecas, emuladores e ferramentas do ambiente.

### Componentes principais

- Baseline SDK: base compartilhada do Tizen
- TV Extensions: suporte específico para Samsung TV
- Package Manager: instalação e atualização de módulos
- Certificate Manager: geração de certificados para assinatura
- Device Manager: gerenciamento de dispositivos conectados
- Emuladores: validação em ambiente virtual da TV

### Links oficiais

- Tizen Studio: https://developer.tizen.org/development/tizen-studio/download
- Samsung Smart TV Developer: https://developer.samsung.com/smarttv
- TV Extension: https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- Documentação Tizen: https://github.com/Samsung/tizen-docs
- CLI do Tizen: https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html

---

## 3. CLI do Tizen

A CLI é a parte de linha de comando do ambiente. Ela permite automatizar o trabalho de construção e deploy do app.

### Comandos principais

```bash
tizen create

tizen build

tizen package

tizen install

tizen run
```

### Uso típico

```bash
# criar app

tizen create

# compilar

tizen build

# empacotar em .wgt

tizen package

# instalar

tizen install

# testar em emulador ou TV

tizen run
```

### Principais responsabilidades

- criação de templates
- compilação do projeto
- geração do pacote do app
- instalação em destino configurado
- execução em dispositivo de teste

---

## 4. Binários e wrappers locais

Este repositório possui wrappers locais para facilitar o uso da CLI quando o SDK oficial já está instalado e acessível no PATH do sistema.

### Estrutura

```text
bin/
├── tizen
├── tizen.cmd
├── check-sdk.sh
├── check-sdk.cmd
```

### Linux/macOS

```bash
./bin/check-sdk.sh
./bin/tizen --help
```

### Windows

```cmd
bin\check-sdk.cmd
bin\tizen.cmd --help
```

Esses arquivos ajudam a validar se o SDK está instalado e a invocar a CLI de forma padronizada.

---

## 5. Exemplo real de app para TV

O exemplo em `examples/smarttv-demo/` foi ampliado para simular um app mais realista de Smart TV, com:

- menu lateral
- área principal com destaques
- cards de conteúdo
- painel lateral com player simulado
- foco visual com teclado remoto
- navegação por setas do controle
- seleção por Enter
- atualização de estado de volume e canal

### Estrutura do app

```text
examples/smarttv-demo/
├── config.xml
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── README.md
└── assets/
```

### Comandos de execução

1. Instale o Tizen SDK oficial.
2. Configure o PATH da CLI.
3. Acesse a pasta do exemplo:

```bash
cd examples/smarttv-demo
```

4. Compile e empacote:

```bash
tizen build

tizen package
```

5. Instale no emulador ou na TV:

```bash
tizen install

tizen run
```

---

## 6. Guia de instalação do ambiente

### Requisitos

- sistema compatível com Tizen Studio
- acesso à internet
- permissões de instalação no sistema
- TV Samsung em modo desenvolvedor, se for testar hardware real

### Instalação recomendada

1. Instale o Tizen Studio
2. Instale o Baseline SDK
3. Instale a TV Extension da Samsung
4. Atualize módulos via Package Manager
5. Configure certificados via Certificate Manager
6. Conecte a TV via Device Manager
7. Teste em emulador antes da TV real

### Links importantes

- https://developer.tizen.org/development/tizen-studio/download
- https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html

---

## 7. Checklist do desenvolvedor Tizen TV

- SDK instalado corretamente
- TV Extension da Samsung instalada
- CLI acessível no PATH
- certificados criados
- emulador validado
- Device Manager configurado
- app empacotado em `.wgt`
- teste no emulador ou TV real realizado

---

## 8. App de exemplo: recursos implementados

A demo foi pensada para refletir melhor um app real de TV, com elementos de UI e navegação:

- menu lateral com foco
- cards de programas/filmes
- destaques na área principal
- painel de reprodução com status
- controle de volume e canal
- navegação por teclado e remoto
- indicadores visuais de foco e seleção

Essa base é excelente para evoluir para:

- catálogo de filmes
- player de vídeo real
- tela de login
- favoritos
- configurações da TV
- menu de lojas e apps

---

## 9. Estrutura de um app Tizen real

Em projetos reais, a estrutura normalmente inclui:

```text
project/
├── config.xml
├── index.html
├── css/
├── js/
├── lib/
├── assets/
├── res/
└── README.md
```

Para Samsung TV, é comum combinar:

- HTML5 + CSS3 + JavaScript para interface
- APIs do Tizen para TV e mídia
- controles de foco e navegação por teclado
- layout responsivo e pensado para telas de TV

---

## 10. Próximo passo recomendado

A próxima etapa natural é evoluir essa base para um app mais completo, com:

- tela de splash
- menu lateral com categorias
- catálogo de conteúdo em grid
- player de vídeo
- reprodução simulada de stream
- navegação por rotas
- foco inteligente em elementos interativos

---

## 11. Referências principais

- https://developer.samsung.com/smarttv
- https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html
- https://developer.tizen.org/development/tizen-studio/download
- https://github.com/Samsung/tizen-docs
- https://github.com/Samsung/vscode-extension-tizentv
- https://marketplace.visualstudio.com/items?itemName=tizen.vscode-tizen-csharp

---

## 12. Conclusão

Este repositório agora apresenta um nível muito mais próximo de um guia e de uma base real para desenvolvimento Tizen em Smart TVs Samsung. Ele combina documentação oficial, ferramentas de apoio e um app de exemplo funcional que pode servir como ponto de partida para projetos mais sérios.

