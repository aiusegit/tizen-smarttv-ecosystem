# Binários e wrappers da CLI Tizen

## Objetivo

Este documento explica como o projeto interage com a CLI oficial do Tizen e como usar os wrappers locais para validar o ambiente antes de compilar ta aplicação.

## Importante

Os executáveis reais do Tizen SDK são distribuídos pela Samsung/Tizen e devem ser instalados no ambiente local do desenvolvedor.

Este repositório não inclui o SDK completo, apenas:

- wrappers para invocar a CLI quando ela estiver no PATH
- ajuda de diagnóstico em linha de comando
- documentação oficial para o download do ambiente real

---

## Instalação oficial do SDK

- Tizen Studio: https://developer.tizen.org/development/tizen-studio/download
- Samsung TV Extensions: https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- CLI Tizen: https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html

---

## Validação do ambiente

### Linux/macOS

```bash
./bin/check-sdk.sh
```

### Windows

```cmd
bin\check-sdk.cmd
```

Se a instalação estiver correta, a CLI exibirá a ajuda com os comandos disponíveis.

---

## Wrapper principal

Os scripts em `bin/` fazem a ponte entre seu projeto local e a CLI do SDK oficial:

- `bin/tizen` (Linux/macOS)
- `bin/tizen.cmd` (Windows)
- `bin/check-sdk.sh` / `bin/check-sdk.cmd` para verificar se o SDK está disponível

Exemplo:

```bash
./bin/tizen --help
```

```cmd
bin\tizen.cmd --help
```

---

## Fluxo recomendado

```bash
./bin/check-sdk.sh
./bin/tizen create
./bin/tizen build
./bin/tizen package
./bin/tizen install
./bin/tizen run
```

---

## Observação importante

Se a CLI oficial do Tizen não estiver instalada, os scripts returnam uma mensagem de orientação e não executam nada.

Em ambientes reais, o uso correto é instalar o SDK, garantir que `tizen` esteja no PATH do sistema e então continuar com os comandos de build e deploy.

