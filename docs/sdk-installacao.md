# CLI do Tizen e SDK: comandos e downloads

## 1. Downloads oficiais

### SDK e Tizen Studio

- Tizen Studio: https://developer.tizen.org/development/tizen-studio/download
- Samsung Smart TV Developer: https://developer.samsung.com/smarttv
- Samsung TV Extension: https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html

### CLI e documentação

- CLI do Tizen: https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html
- Documentação do Tizen Studio: https://github.com/Samsung/tizen-docs
- VS Code Tizen TV extension: https://github.com/Samsung/vscode-extension-tizentv

---

## 2. Estrutura do SDK

O ambiente Tizen é composto por:

- Baseline SDK: base da plataforma
- TV Extensions: recursos da Samsung para Smart TV
- Package Manager: instalação de módulos e versões
- Certificate Manager: assinatura do app
- Device Manager: conexão com a TV
- Emuladores: simulação do ambiente da TV

---

## 3. Comandos principais da CLI

### Criar projeto

```bash
tizen create
```

### Compilar projeto

```bash
tizen build
```

### Empacotar arquivo `.wgt`

```bash
tizen package
```

### Instalar no alvo conectado

```bash
tizen install
```

### Executar aplicação

```bash
tizen run
```

### Fluxo completo

```bash
tizen create

tizen build

tizen package

tizen install

tizen run
```

---

## 4. Modo de uso prático

No uso real, o ciclo costuma ser:

1. criar novo app
2. desenvolver interface e lógica
3. compilar para validar erros
4. empacotar em `.wgt`
5. assinar com certificados
6. conectar na TV
7. testar no emulador ou no aparelho real

---

## 5. Como o SDK se relaciona com a CLI

A relação é simples:

- o SDK fornece a base e as ferramentas do ambiente
- a CLI executa as operações do processo de desenvolvimento
- os gerenciadores auxiliares preparam o ambiente para assinatura e conexão
- a TV ou emulador valida o resultado final

---

## 6. Dicas importantes

- Sempre instale a extensão da Samsung TV correta para seu ambiente.
- Teste no emulador antes de instalar na TV real.
- Use o Certificate Manager antes de instalar em dispositivo físico.
- Mantenha o Package Manager atualizado para evitar incompatibilidades.

---

## 7. Resumo

O ciclo de desenvolvimento Tizen para TV envolve: SDK + CLI + assinatura + conexão + teste. Dominar esses blocos é o que torna o processo funcional e produtivo para Samsung Smart TV.

