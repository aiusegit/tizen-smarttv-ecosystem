# Guia de instalação e configuração do Tizen SDK

## 1. Visão geral

Para desenvolver para Smart TVs Samsung com Tizen, normalmente você precisa instalar o ambiente oficial da Samsung/Tizen no computador.

Esse ambiente inclui:

- Tizen Studio
- Baseline SDK
- Samsung TV Extensions
- Package Manager
- Certificate Manager
- Device Manager
- emuladores e simuladores

---

## 2. Download oficial

- Tizen Studio: https://developer.tizen.org/development/tizen-studio/download
- Samsung Smart TV Developer: https://developer.samsung.com/smarttv
- TV Extension: https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
- CLI docs: https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/command-line-interface.html

---

## 3. Passo a passo recomendado

### Etapa 1: Instalar o Tizen Studio
Baixe o instalador oficial e siga as instruções do wizard.

### Etapa 2: Instalar o Baseline SDK
Esse componente fornece a base do ambiente Tizen.

### Etapa 3: Instalar a TV Extension da Samsung
Isso habilita suporte específico para Smart TV, APIs e recursos da plataforma.

### Etapa 4: Atualizar módulos
Use o Package Manager para confirmar que a versão correta esteja instalada.

### Etapa 5: Configurar certificados
Use o Certificate Manager para gerar o autor e o distributor profile.

### Etapa 6: Preparar a TV para teste
Ative o modo de desenvolvimento e conecte a TV via rede local.

### Etapa 7: Testar via emulador
Use o simulador antes de testar em hardware real.

---

## 4. Checklist de qualidade

- Tizen Studio instalado
- TV Extension instalado
- pacote da Samsung TV visível no ambiente
- CLI acessível no PATH
- certificados criados
- app compilando com `tizen build`
- app empacotado em `.wgt`
- deploy validado em emulador ou TV real

---

## 5. Diagnóstico comum

Se `tizen` não for reconhecido pelo terminal:

- verifique se o SDK foi instalado corretamente
- confirme se o diretório de binários foi adicionado ao PATH
- reinicie o terminal
- confirme a versão do SDK e compatibilidade do sistema

### Linux/macOS

```bash
which tizen
```

### Windows

```cmd
where tizen
```

---

## 6. Fluxo de desenvolvimento esperado

```text
SDK instalado
  -> CLI disponível
  -> projeto criado
  -> build executado
  -> package gerado
  -> assinatura validada
  -> TV conectada
  -> app testado
```

---

## 7. Dicas práticas

- sempre valide o emulador antes da TV real
- mantenha o Package Manager atualizado
- gere certificados antes do deploy em hardware físico
- use CLI e VS Code para automatizar tarefas repetitivas

