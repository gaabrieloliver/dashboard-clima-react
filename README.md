# 🌦️ Dashboard de Clima

Uma aplicação web simples, moderna e responsiva para consulta de dados climáticos em tempo real de qualquer cidade do mundo, construída com React e Tailwind CSS.

Este projeto faz parte da **Fase 1** de um roadmap de estudos guiado, focando nos fundamentos do React, incluindo hooks, componentização, comunicação entre componentes e consumo de APIs externas.

---

## 🚀 Acesso ao Projeto

Você pode visualizar o projeto em produção através do link abaixo:

**➡️ [https://dashboard-clima-react.vercel.app/](https://dashboard-clima-react.vercel.app/)**

*(**Nota:** Este é um link de exemplo. Substitua pelo link real gerado pela Vercel para o seu projeto.)*

---

## 📸 Preview

[Preview do App](./preview.gif)

---

## ✨ Funcionalidades

- **Busca por Cidade:** Pesquise o clima de qualquer cidade do mundo.
- **Dados em Tempo Real:** Exibe a temperatura atual, a condição do tempo (ex: ensolarado, nublado) e um ícone representativo.
- **UX Aprimorada:** Interface limpa com feedback visual para estados de carregamento e erro.
- **Animações Suaves:** Transições suaves ao exibir os dados para uma experiência mais agradável.
- **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, de celulares a desktops.

---

## 🛠️ Tecnologias Utilizadas

- **React.js:** Biblioteca principal para a construção da interface de usuário.
- **Vite:** Ferramenta de build extremamente rápida para o ambiente de desenvolvimento.
- **Tailwind CSS:** Framework de CSS utility-first para estilização rápida e consistente.
- **OpenWeatherMap API:** Fonte dos dados climáticos.
- **Vercel:** Plataforma de deploy para publicação do projeto.
- **Git & GitHub:** Para versionamento de código e hospedagem.

---

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto na sua máquina.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
- [Git](https://git-scm.com/)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/gaabrieloliver/dashboard-clima-react.git
   ```


2. Navegue até a pasta do projeto:
    ```bash
    cd dashboard-clima-react
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

### Configurando as Variáveis de Ambiente

Para que a aplicação possa se conectar à API do OpenWeatherMap, você precisa de uma chave de API.

1. Crie uma conta no OpenWeatherMap e obtenha sua chave na seção "My API Keys".

2. Na raiz do projeto, crie um arquivo chamado **.env.local.**

3. Dentro deste arquivo, adicione a seguinte linha, substituindo **SUA_CHAVE_AQUI** pela sua chave:

<code>VITE_API_KEY=SUA_CHAVE_AQUI</code>

### Rodando a Aplicação

1. Com as dependências instaladas e as variáveis de ambiente configuradas, execute o seguinte comando:

```bash
npm run dev
```

Abra seu navegador e acesse http://localhost:5173.

### 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/gaabrieloliver/dashboard-clima-react/blob/main/LICENSE) para mais detalhes.