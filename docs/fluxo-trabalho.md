# Fluxo de trabalho Tizen para Smart TV Samsung

## 1. Ambiente de desenvolvimento

Antes de começar, você precisa do SDK da Samsung para Tizen, incluindo o Baseline SDK e os TV Extensions. Esses módulos fornecem:

- bibliotecas base
- simuladores e emuladores
- APIs da TV
- ferramentas para build e deploy

## 2. Criação do projeto

Com a CLI ou com o Tizen Studio, você cria um projeto novo usando um template de app para TV.

Exemplo conceitual:

```bash
tizen create
```

O ambiente gera a estrutura inicial do app com arquivos base para HTML/JS, C# ou outros frameworks suportados.

## 3. Desenvolvimento e compilação

Durante o desenvolvimento, o código é escrito em editor local, normalmente com VS Code e a extensão oficial da Samsung.

A compilação é feita pela CLI:

```bash
tizen build
```

Esse comando valida a estrutura do projeto e gera artefatos compilados para o ambiente Tizen.

## 4. Empacotamento em .wgt

Depois da compilação, o projeto é empacotado em um arquivo `.wgt`.

```bash
tizen package
```

Esse arquivo contém o app pronto para ser assinado e enviado para a TV.

## 5. Assinatura do aplicativo

O Certificate Manager gera os certificados de autor e distribuidor.

Sem essa etapa, a TV geralmente não aceita a instalação do pacote.

## 6. Conexão com a TV

O Device Manager permite conectar a televisão pela rede usando o IP do aparelho em modo desenvolvedor.

A conexão normalmente é feita via rede local e exige que a TV esteja em modo de depuração ou desenvolvimento.

## 7. Instalação e teste

Depois da conexão, o app é enviado pela rede para a TV e executado automaticamente.

Esse fluxo permite:

- testar em emulador
- testar em TV real
- validar comportamento da interface, mídia e navegação

## 8. Observações importantes

- O certificado é obrigatório para instalar o app em dispositivos reais.
- A CLI é indispensável para automação e build em linha de comando.
- O emulador é muito útil para validação rápida antes do teste na TV.
- A extensão do VS Code acelera o fluxo de desenvolvimento e reduz a curva de aprendizado.

## 9. Fluxo resumido

```text
Escrever código
  -> Compilar com tizen build
  -> Empacotar com tizen package
  -> Assinar com Certificate Manager
  -> Conectar via Device Manager
  -> Instalar e testar na TV
```

Esse é o ciclo principal do desenvolvimento Tizen para Smart TVs Samsung.
