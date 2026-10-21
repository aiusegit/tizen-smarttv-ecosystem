# Ecossistema Tizen para Smart TVs Samsung

Este repositório reúne o mapa completo do ecossistema de desenvolvimento Tizen para Smart TVs Samsung, com foco na jornada de criação, compilação, assinatura, teste e distribuição de apps para televisão.

## Visão geral

Pense no desenvolvimento Tizen para Samsung como um quebra-cabeça em que cada ferramenta tem um papel específico, desde a escrita do código até o app rodar na TV.

O ecossistema é composto por cinco blocos principais:

- SDK (Software Development Kit)
- CLI (Command Line Interface)
- Gerenciadores auxiliares
- Emuladores/simuladores
- Fluxo de trabalho completo de desenvolvimento e deploy

---

## 1. O SDK (Software Development Kit)

O SDK é o pacote principal que reúne todas as regras, bibliotecas, emuladores e ferramentas necessárias para criar um aplicativo Tizen.

Ele é dividido em duas partes importantes:

### Baseline SDK
A base do sistema, compartilhada entre diferentes tipos de dispositivos, como relógios, TVs e dispositivos IoT. Ela gerencia os arquivos e componentes do ambiente de desenvolvimento no computador.

### TV Extensions
O módulo oficial da Samsung para o desenvolvimento de apps para TV. Ele adiciona:

- resoluções de tela de televisão
- simuladores de controle remoto
- APIs específicas para mídia, navegação e recursos da TV

Referências:

- Samsung TV Extension Download: https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- Tizen Studio overview: https://github.com/Samsung/tizen-docs/blob/master/docs/application/tizen-studio/common-tools/overview.md
- Instalação do SDK TV: https://translate.google.com/translate?u=https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk.html&hl=pt&sl=en&tl=pt&client=sge

---

## 2. A CLI (Command Line Interface)

A CLI é a interface de linha de comando do Tizen (`tizen.exe` ou equivalente), utilizada para automatizar processos e para quem prefere trabalhar sem a interface visual do Tizen Studio.

Ela executa a parte pesada do processo de desenvolvimento:

- `tizen create`: cria um projeto do zero a partir de um template
- `tizen build`: compila o código (HTML/JS, C#, .NET, etc.)
- `tizen package`: gera o pacote final `.wgt`, que é o aplicativo Tizen empacotado

Referências:

- CLI do SDK: https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html
- Extensão oficial Tizen TV para VS Code: https://github.com/Samsung/vscode-extension-tizentv
- Extensão Tizen C# no VS Code: https://marketplace.visualstudio.com/items?itemName=tizen.vscode-tizen-csharp
- Artigo sobre Tizen OS: https://translate.google.com/translate?u=https://digital-dividend.com/blogs/tizen-os-and-its-future-development/&hl=pt&sl=en&tl=pt&client=sge

---

## 3. Gerenciadores auxiliares

Dentro do SDK existem ferramentas especializadas em tarefas bem definidas:

### Package Manager
Permite escolher e baixar as versões do Tizen e suas atualizações, como Tizen 8.0, 9.0 e outros pacotes relevantes.

### Certificate Manager
Gera os perfis de autor e distribuidor, essenciais para assinar digitalmente o aplicativo e permitir que a TV aceite a instalação.

### Device Manager
Cria a ponte com a televisão. Você informa o IP da TV em modo desenvolvedor e a ferramenta gerencia a conexão via rede.

### Emuladores / Simuladores
Executam uma TV virtual no computador para testar o app sem depender de hardware físico.

Referências:

- Samsung support / docs: https://sdks.support.brightcove.com/web-sdk/references/samsung.html
- Vídeo de setup e conexão: https://www.youtube.com/watch?v=XAxZvNiCLBU&t=13
- VS Code Extension Tizen TV: https://github.com/Samsung/vscode-extension-tizentv
- TV Extension Download: https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html

---

## 4. Como tudo se junta no fluxo de trabalho

O processo típico de desenvolvimento funciona assim:

1. Você escreve o código no VS Code usando a extensão oficial Tizen TV.
2. A CLI compila e empacota o código em um arquivo `.wgt`.
3. O Certificate Manager assina digitalmente o pacote.
4. O Device Manager conecta a TV por rede usando o IP do aparelho em modo desenvolvedor.
5. O pacote é enviado pela rede e o app abre automaticamente na televisão.

Referências:

- VS Code extension new: https://developer.samsung.com/smarttv/develop/tools/additional-tools/vscode-extension-new.html
- Extensão Tizen C# para VS Code: https://marketplace.visualstudio.com/items?itemName=tizen.vscode-tizen-csharp
- Vídeo de demonstração: https://www.youtube.com/watch?v=XAxZvNiCLBU&t=13
- CLI do SDK: https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html

---

## 5. Resumo prático do ecossistema

Se você resumir tudo em uma frase:

O SDK fornece o ambiente; a CLI compila e empacota; os gerenciadores auxiliam na assinatura, autorização e conexão com a TV; e os emuladores validam a experiência antes de abrir no aparelho real.

É como uma cadeia completa de produção de software para Smart TV:

- código
- build
- assinatura
- conexão
- instalação
- execução

---

## 6. Como começar

Para começar a desenvolver para Samsung Tizen Smart TV, normalmente você precisa:

- instalar o Tizen SDK
- incluir o TV Extensions
- configurar o Tizen Studio ou uso da CLI
- criar um projeto de template
- gerar certificados
- testar via emulador ou TV real em modo desenvolvedor

---

## 7. Estrutura sugerida deste repositório

Este repositório foi organizado para servir como referência documental e guia introdutório do ecossistema Tizen para Samsung TV.

- `README.md`: visão geral e mapa do ecossistema
- `docs/fluxo-trabalho.md`: explicação do pipeline de desenvolvimento
- `docs/cli-comandos.md`: exemplos práticos da CLI

---

## 8. Próximo passo

Se quiser, este repositório pode evoluir para:

- uma documentação mais técnica com comandos reais do Tizen CLI
- exemplos de projeto em HTML/JS ou C#
- checklist de setup do ambiente
- guia completo de deploy em TV Samsung
- guia de assinatura de certificados e testes em dispositivo real

A partir daqui, o próximo passo natural é transformar este material em uma documentação ainda mais prática, com passos de configuração, comandos reais e exemplos executáveis.

---

## Referências principais

- https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- https://github.com/Samsung/tizen-docs/blob/master/docs/application/tizen-studio/common-tools/overview.md
- https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html
- https://github.com/Samsung/vscode-extension-tizentv
- https://marketplace.visualstudio.com/items?itemName=tizen.vscode-tizen-csharp
- https://www.youtube.com/watch?v=XAxZvNiCLBU&t=13
- https://developer.samsung.com/smarttv/develop/tools/additional-tools/vscode-extension-new.html

