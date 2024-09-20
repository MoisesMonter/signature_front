# Signature Front

Este repositório contém o front-end do projeto de **gerenciamento de assinaturas digitais**. A aplicação é desenvolvida utilizando **Expo** e **React Native**, permitindo a captura e visualização de assinaturas em dispositivos móveis e na web.

## Funcionalidades

- Captura de assinatura digital em dispositivos móveis e na web
- Armazenamento de assinaturas em formato base64 ou imagem
- Gerenciamento de usuários e permissões para visualização e manipulação das assinaturas
- Integração com API back-end para coleta e download das assinaturas

## Requisitos

Certifique-se de ter as seguintes dependências instaladas:

- [Node.js](https://nodejs.org/) >= 14.x
- [Expo CLI](https://docs.expo.dev/get-started/installation/) >= 5.x
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) (ou npm)

## Instalação

1. Clone o repositório:

   ```git clone https://github.com/MoisesMonter/signature_front.git```

2. Navegue até o diretório do projeto:

   ```cd signature_front```

3. Instale as dependências:

   ```yarn install```

## Configuração da Autenticação

Para configurar a autenticação via Google, você precisará criar uma conta no [Clerk](https://clerk.dev/), caso ainda não tenha, e obter a chave da API para autenticação.

1. Acesse o painel do Clerk.
2. Crie um novo projeto e ative o provedor de login via Google.
3. Copie a chave da API fornecida.
4. Crie um arquivo ```.env``` na raiz do projeto e adicione sua chave Clerk:

   ```CLERK_API_KEY=YOUR_CLERK_API_KEY```

Substitua ```YOUR_CLERK_API_KEY``` pela chave que você obteve no painel do Clerk.

## Executando o Projeto

Para rodar a aplicação em modo de desenvolvimento, use o comando:

```expo start```

Isso abrirá o Expo Developer Tools no navegador. Você pode escanear o código QR para rodar a aplicação no seu dispositivo ou rodá-la em um emulador.

## Estrutura de Diretórios

- **src/**: Contém os arquivos principais da aplicação
  - **components/**: Componentes reutilizáveis da interface
  - **screens/**: Telas da aplicação
  - **services/**: Conexão com APIs
  - **styles/**: Estilos globais e temáticos

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob os termos da licença MIT.
