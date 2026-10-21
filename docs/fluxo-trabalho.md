# Fluxo de trabalho Tizen para Smart TV Samsung

## Introdução

Desenvolver para Samsung Smart TV com Tizen exige entender a cadeia completa de ferramentas do ecossistema. O processo não é apenas escrever código: inclui instalar o SDK, compilar com a CLI, empacotar o app, assinar o pacote e testar em emulador ou TV real.

---

## 1. Instalação do SDK

### O que baixar

- Samsung Smart TV TV Extension: https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- Tizen Studio: https://developer.tizen.org/development/tizen-studio/download
- Documentação oficial do Tizen: https://github.com/Samsung/tizen-docs

### Passo a passo geral

1. Instale o Tizen Studio.
2. Instale o Baseline SDK.
3. Instale os Samsung TV Extensions.
4. Abra o Package Manager e confirme os módulos necessários.
5. Instale o emulador ou simulador da TV.
6. Configure as variáveis de ambiente do sistema, se necessário.

---

## 2. SDK, extensões e CLI

### SDK principal
O SDK é o ambiente base de desenvolvimento. Ele reúne:

- ferramentas de build
- bibliotecas da plataforma
- emuladores
- suporte a templates de projeto

### TV Extension
A extensão específica para Samsung TV adiciona:

- APIs de mídia e UI para TV
- recursos de resolução e navegação
- suporte ao ambiente da Samsung Smart TV

### CLI
A CLI do Tizen executa operações em linha de comando. Isso inclui:

- criação do projeto
- build
- package
- install
- run

---

## 3. Fluxo de trabalho completo

```text
Instalar SDK + TV Extension
   -> Criar projeto
   -> Escrever código
   -> Compilar com tizen build
   -> Gerar pacote com tizen package
   -> Assinar com Certificate Manager
   -> Conectar com Device Manager
   -> Instalar e testar na TV ou emulador
```

---

## 4. Comandos essenciais

### Criar projeto

```bash
tizen create
```

### Compilar

```bash
tizen build
```

### Empacotar

```bash
tizen package
```

### Instalar

```bash
tizen install
```

### Executar

```bash
tizen run
```

> Os nomes exatos dos comandos e as opções podem variar conforme a versão do SDK e o tipo do app, mas o ciclo principal permanece o mesmo.

---

## 5. Gerenciadores auxiliares

### Package Manager
Instala módulos e atualizações do SDK.

### Certificate Manager
Cria certificados e perfis de assinatura.

### Device Manager
Conecta a TV via rede local para deploy.

### Emulador
Permite testar sem depender do hardware real.

---

## 6. Dicas práticas

- O certificado é obrigatório para dispositivos reais.
- O emulador reduz o tempo de validação inicial.
- A extensão do VS Code acelera o desenvolvimento.
- A CLI é ideal para automação e pipeline de build.

---

## 7. Recursos oficiais

- Samsung Smart TV Developer: https://developer.samsung.com/smarttv
- Tizen Studio Download: https://developer.tizen.org/development/tizen-studio/download
- TV Extension Download: https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- CLI docs: https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html
- VS Code extension: https://github.com/Samsung/vscode-extension-tizentv

---

## 8. Resumo

O ecossistema Tizen Samsung para TV é um conjunto integrado de SDK, CLI, gerenciadores e emuladores. A base para desenvolver e rodar um app na TV é: instalar o SDK, compilar, empacotar, assinar, conectar e testar.

