# Ecossistema Tizen para Smart TVs Samsung

Este repositório reúne o mapa completo do ecossistema de desenvolvimento Tizen para Smart TVs Samsung, com foco em SDK, CLI, ferramentas de assinatura, emulação, testes e distribuição de aplicativos em televisores Samsung.

## Objetivo

Este projeto serve como guia prático para quem quer entender como funciona o ecossistema Tizen e como começar a desenvolver para Smart TVs Samsung.

A ideia é simples:

- entender o que compõe o ambiente
- saber onde baixar cada ferramenta
- conhecer os comandos essenciais
- acompanhar o fluxo de desenvolvimento completo

---

## 1) Visão geral do ecossistema

O desenvolvimento Tizen para Samsung TV é composto por vários blocos integrados:

1. SDK principal
2. Extensões específicas para TV
3. CLI do Tizen
4. Gerenciadores auxiliares
5. Emuladores e dispositivos reais
6. Fluxo de build, assinatura e deploy

Esses componentes trabalham juntos para transformar o código em um app instalado e executado na TV.

---

## 2) SDK (Software Development Kit)

O SDK é o pacote principal do ambiente de desenvolvimento. Ele reúne ferramentas, bibliotecas, emuladores e modelos de projeto que permitem compilar e testar apps Tizen.

### 2.1. Baseline SDK
É a base compartilhada do sistema Tizen. Ela contém a infraestrutura do ambiente e arquivos essenciais para o desenvolvimento.

### 2.2. TV Extensions
É o módulo oficial da Samsung para desenvolvimento para Smart TV. Ele adiciona:

- modelos de resolução de tela da TV
- emuladores e simuladores de ambiente de TV
- APIs da plataforma para controle de mídia, navegação e recursos específicos da TV
- suporte ao workflow de desenvolvimento voltado para Samsung Smart TV

### Onde baixar

Links oficiais e referências importantes:

- SDK/TV Extension Samsung: https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- Documentação oficial do Tizen Studio: https://github.com/Samsung/tizen-docs/blob/master/docs/application/tizen-studio/common-tools/overview.md
- Instalação do SDK para TV Samsung: https://translate.google.com/translate?u=https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk.html&hl=pt&sl=en&tl=pt&client=sge
- Página oficial do Tizen Studio: https://developer.tizen.org/development/tizen-studio/download

### Como instalar

Em linhas gerais, o processo é:

1. Baixar o Tizen Studio ou o pacote do SDK correspondente.
2. Instalar o Baseline SDK.
3. Adicionar os Samsung TV Extensions.
4. Configurar o ambiente de compilação.
5. Instalar o pacote do emulador ou do simulador desejado.
6. Preparar a máquina para conectar a TV em modo desenvolvedor.

---

## 3) CLI (Command Line Interface)

A CLI do Tizen é a parte de linha de comando do ambiente. Ela permite:

- criar projetos
- compilar código
- empacotar o app em `.wgt`
- automatizar tarefas no terminal
- integrar processos em CI/CD ou workflow local

### Funções principais

- `tizen create`: cria um novo projeto usando um template
- `tizen build`: compila o app
- `tizen package`: gera o pacote do aplicativo
- `tizen install`: instala o app em um emulador ou dispositivo conectado
- `tizen run`: executa/abre o app em um alvo de teste

### Documentação oficial

- CLI do Tizen: https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html
- Extensão oficial Tizen TV para VS Code: https://github.com/Samsung/vscode-extension-tizentv
- Extensão Tizen C# para VS Code: https://marketplace.visualstudio.com/items?itemName=tizen.vscode-tizen-csharp

### Exemplos de uso

```bash
tizen create
```

```bash
tizen build
```

```bash
tizen package
```

```bash
tizen install
```

```bash
tizen run
```

> Observação: os comandos exatos podem variar conforme a versão do SDK e o tipo de projeto. O fluxo geral é sempre: criar, compilar, empacotar, testar.

---

## 4) Gerenciadores auxiliares no SDK

Dentro do ambiente Tizen existem ferramentas focadas em tarefas específicas:

### Package Manager
Permite escolher versões do SDK e instalar componentes adicionais.

- baixa versões do Tizen
- instala atualizações de componentes
- habilita módulos extras de plataforma

### Certificate Manager
Gera certificados de autor e distribuidor. Esse passo é essencial para assinar digitalmente o aplicativo e permitir que a TV aceite sua instalação.

### Device Manager
Gerencia a conexão com a TV pela rede. O processo geralmente envolve:

- informar o IP da TV
- ativar a conexão via rede local
- confirmar o dispositivo para deploy

### Emuladores e simuladores
Permitem testar o aplicativo sem depender do aparelho físico imediatamente.

- emulador de TV no computador
- validação visual e funcional antes do teste real
- debugging inicial do app

Links relevantes:

- Brightcove SDK refs: https://sdks.support.brightcove.com/web-sdk/references/samsung.html
- Vídeo de demonstração de setup: https://www.youtube.com/watch?v=XAxZvNiCLBU&t=13
- Página oficial de ferramentas extra: https://developer.samsung.com/smarttv/develop/tools/additional-tools/vscode-extension-new.html

---

## 5) Fluxo completo de desenvolvimento

O fluxo típico de um app para Smart TV Samsung é:

1. Baixar e instalar o SDK e as extensões da TV.
2. Criar o projeto com o templateTizen.
3. Escrever o código no VS Code ou no editor favorito.
4. Compilar usando a CLI.
5. Empacotar em um arquivo `.wgt`.
6. Assinar digitalmente o pacote com o Certificate Manager.
7. Conectar a TV com o Device Manager.
8. Instalar e testar na TV ou em emulador.

### Fluxo resumido

```text
Código -> Build -> Package -> Signature -> Device Connection -> Install -> Test
```

---

## 6) Ferramentas recomendadas

### Tizen Studio
Para quem quer a experiência mais completa com GUI visual.

### CLI
Para quem quer automate build e deploy via terminal.

### VS Code + extensão Tizen TV
Para quem quer um workflow moderno e mais rápido.

### Emulador da TV
Para testes rápidos sem depender da TV física.

---

## 7) Checklist de instalação

Antes de começar, confirme que você tem:

- Windows, Linux ou macOS compatível com o SDK
- conexão estável com a internet
- permissões para instalar software no sistema
- TV Samsung em modo de desenvolvimento, se for testar no hardware real
- certificação e assinatura do app para instalação em dispositivos reais

---

## 8) Comandos essenciais do ciclo de vida

```bash
# criar projeto

tizen create

# compilar

tizen build

# empacotar

tizen package

# instalar em alvo conectado

tizen install

# executar/testar

tizen run
```

Esses comandos representam o núcleo do desenvolvimento Tizen para TV.

---

## 9) Onde aprender mais

A documentação oficial e os recursos da Samsung são os melhores pontos de partida:

- Samsung Smart TV Developer: https://developer.samsung.com/smarttv
- TV Extension download: https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- CLI docs: https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html
- Samsung Tizen docs: https://github.com/Samsung/tizen-docs
- Tizen Studio: https://developer.tizen.org/development/tizen-studio/download

---

## 10) Resumo final

O ecossistema Tizen para Smart TVs Samsung funciona como uma cadeia produtiva completa:

- o SDK fornece a base de desenvolvimento
- a CLI executa o build e o empacotamento
- o Certificate Manager assina o aplicativo
- o Device Manager conecta a TV
- o emulador e a TV real validam a experiência

A combinação desses elementos permite transformar uma ideia em um app funcional para Smart TV Samsung.

---

## 11) Próximo passo recomendado

Este repositório pode evoluir em três direções:

1. documentação de instalação completa do SDK em Windows
2. guia de criação de projeto Tizen com CLI passo a passo
3. exemplos práticos de app Tizen para TV em HTML/JS ou C#

Se quiser, posso continuar criando a estrutura completa com arquivos de exemplo e um guia de setup prático do zero.

---

## 12) Referências principais

- https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- https://developer.tizen.org/development/tizen-studio/download
- https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html
- https://github.com/Samsung/tizen-docs/blob/master/docs/application/tizen-studio/common-tools/overview.md
- https://github.com/Samsung/vscode-extension-tizentv
- https://marketplace.visualstudio.com/items?itemName=tizen.vscode-tizen-csharp
- https://www.youtube.com/watch?v=XAxZvNiCLBU&t=13
- https://developer.samsung.com/smarttv/develop/tools/additional-tools/vscode-extension-new.html

