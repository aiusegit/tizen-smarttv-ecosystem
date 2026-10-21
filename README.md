# Tizen Samsung Smart TV Ecosystem

Este repositório foi montado como uma referência prática para o ecossistema Tizen para Smart TVs Samsung, com foco em:

- SDK e extensões oficiais da Samsung
- CLI do Tizen
- downloads e instalação
- fluxo completo de desenvolvimento
- binários/atalhos da CLI para automação local
- exemplo real de app Tizen Web para TV

## Importante sobre binários do SDK

O pacote oficial do Tizen SDK, incluindo os executáveis reais do `tizen`, é distribuído pela Samsung/Tizen e não pode ser incluído diretamente neste repositório em forma de binário de instalação devido a:

- licenciamento oficial
- tamanho e dependências do SDK
- distribuição proprietária pela Samsung/Tizen

Por isso, este repositório inclui:

- documentação oficial dos downloads
- scripts de wrapper em `bin/`
- instruções para instalar o SDK real no seu ambiente
- um exemplo funcional de projeto Tizen Web

---

## 1. Visão geral do ecossistema

O desenvolvimento para Samsung Smart TV com Tizen é composto por vários blocos trabalhando juntos:

- SDK principal
- TV Extensions da Samsung
- CLI do Tizen
- Package Manager
- Certificate Manager
- Device Manager
- Emuladores e TV real

A cadeia de produção geralmente é:

```text
Criar projeto -> Desenvolver -> Build -> Package -> Assinar -> Instalar -> Testar
```

---

## 2. SDK oficial

### Baixar o SDK

- Tizen Studio: https://developer.tizen.org/development/tizen-studio/download
- Samsung Smart TV Developer: https://developer.samsung.com/smarttv
- Samsung TV Extension: https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- Docs do Tizen: https://github.com/Samsung/tizen-docs

### Componentes principais

- Baseline SDK: base da plataforma Tizen
- TV Extensions: APIs, emulação e recursos específicos para Samsung TV
- Package Manager: instalação dos módulos do SDK
- Certificate Manager: assinatura do app
- Device Manager: conexão com a TV local

---

## 3. CLI do Tizen

A CLI é a linha de comando usada para:

- criar projetos
- compilar projetos
- empacotar em `.wgt`
- instalar em alvo
- executar em emulador ou TV

### Comandos principais

```bash
tizen create

tizen build

tizen package

tizen install

tizen run
```

### Scripts locais incluídos

Este repositório inclui wrappers em `bin/` para facilitar o uso local:

```bash
./bin/tizen --help
```

No Windows:

```cmd
bin\tizen.cmd --help
```

Esses scripts não substituem o SDK oficial; eles apenas orientam o uso e ajudam a centralizar o comando no projeto.

---

## 4. Estrutura do repositório

```text
.
├── README.md
├── bin/
│   ├── tizen
│   └── tizen.cmd
├── docs/
│   ├── cli-binaries.md
│   └── sdk-install.md
├── examples/
│   └── smarttv-demo/
│       ├── config.xml
│       ├── index.html
│       ├── css/
│       │   └── style.css
│       └── js/
│           └── main.js
└── .gitignore
```

---

## 5. Exemplo real de app Tizen Web

Há um projeto de exemplo em:

```text
examples/smarttv-demo/
```

Esse app é uma aplicação web para TV com:

- tela de boas-vindas
- menu de navegação
- exibição de informações do sistema e do usuário
- captura de botões remotos via `keydown`
- UI com layout orientado para TV

### Arquivos do app

- `config.xml`: metadados do widget Tizen
- `index.html`: estrutura da interface
- `css/style.css`: layout e visual da tela
- `js/main.js`: lógica e interação com teclas remotas

### Como executar o exemplo

1. Instale o Tizen SDK oficial.
2. Certifique-se de que a CLI `tizen` esteja no PATH do sistema.
3. Entre na pasta do projeto exemplo:

```bash
cd examples/smarttv-demo
```

4. Use o comando do SDK para compilar e empacotar:

```bash
tizen build

tizen package
```

5. Conecte e envie para a TV ou para o emulador:

```bash
tizen install

tizen run
```

---

## 6. Fluxo recomendado de desenvolvimento

```text
1. Instalar Tizen Studio e TV Extension
2. Criar projeto com template Tizen Web
3. Desenvolver interface com HTML + CSS + JS
4. Testar via emulador
5. Empacotar em .wgt
6. Assinar com Certificate Manager
7. Instalar em TV ou emulador
8. Validar UX com controle remoto
```

---

## 7. Comandos úteis no dia a dia

```bash
# criar um projeto novo

tizen create

# compilar o app

tizen build

# gerar o pacote do app

tizen package

# instalar em alvo conectado

tizen install

# iniciar em emulador ou dispositivo real

tizen run
```

---

## 8. Dicas práticas

- Sempre atualize o Package Manager do SDK.
- Teste no emulador antes de testar na TV real.
- Use certificado válido para instalação em TV física.
- A extensão do VS Code ajuda bastante no workflow do Tizen.
- O `index.html` e o `config.xml` são fundamentais para o app rodar corretamente em TV Samsung.

---

## 9. Referências oficiais

- https://developer.tizen.org/development/tizen-studio/download
- https://developer.samsung.com/smarttv
- https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html
- https://github.com/Samsung/tizen-docs
- https://github.com/Samsung/vscode-extension-tizentv

---

## 10. Próximo passo

Este repositório pode evoluir para:

- uma versão com projeto completo de template Tizen TV
- guia de instalação para Windows/macOS/Linux
- exemplo em C#/.NET
- exemplo em web com player multimídia
- app de navegação com catálogo de conteúdo

Se quiser, posso continuar e transformar esse exemplo em um app de TV mais completo, com menu, lista de canais, player de vídeo e integração com controles remotos.
