# Exemplos de comandos CLI Tizen

## Estrutura básica

```bash
tizen create
```

Cria um novo projeto a partir de um template.

## Compilar

```bash
tizen build
```

Compila o código do projeto no ambiente Tizen.

## Empacotar

```bash
tizen package
```

Gera o pacote final `.wgt` do aplicativo.

## Fluxo completo

```bash
tizen create

tizen build

tizen package
```

Esse conjunto representa o ciclo principal de geração do app Tizen.

## Observação

Na prática, esse fluxo é normalmente complementado por:

- assinatura digital
- conexão com a TV via Device Manager
- instalação em emulador ou hardware real

Esses passos são essenciais para testar a aplicação em ambiente Samsung TV.
