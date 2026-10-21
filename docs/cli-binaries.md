# CLI do Tizen e binários locais

## Visão geral

Este documento explica como usar a CLI do Tizen em contexto de desenvolvimento para Samsung Smart TV e como o projeto local se relaciona com o SDK oficial.

## Importante

Os executáveis oficiais do SDK do Tizen são distribuídos pela Samsung/Tizen e normalmente precisam ser instalados no computador do desenvolvedor. Eles não devem ser versionados como artefatos do repositório.

## Instalação oficial

- Tizen Studio: https://developer.tizen.org/development/tizen-studio/download
- Samsung TV Extensions: https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- CLI docs: https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html

## Verificação no sistema

No Linux/macOS:

```bash
which tizen
```

No Windows:

```cmd
where tizen
```

## Comandos comuns

```bash
tizen create

tizen build

tizen package

tizen install

tizen run
```

## Wrapper local incluído

Os scripts em `bin/` servem como ponte local para chamar o comando oficial do SDK quando ele estiver instalado.

- `bin/tizen` para Linux/macOS
- `bin/tizen.cmd` para Windows

## Exemplo de uso

```bash
./bin/tizen --help
```

```cmd
bin\tizen.cmd --help
```

## Observação

Se a ferramenta oficial não estiver instalada, os wrappers apenas exibem uma mensagem de orientação, sem rodar a ferramenta real.
