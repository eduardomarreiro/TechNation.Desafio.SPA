# TechNationDesafioSPA

Este projeto foi desenvolvido com Angular 18.2.0.

## Pré-requisitos

Certifique-se de que a API está em execução antes de executar este projeto. Siga o passo a passo descrito no README da API para configurá-la corretamente.

## Executando o Projeto

Para executar o projeto, siga os passos abaixo:

1. **Construa a Imagem Docker**

   Navegue até a pasta raiz onde está localizado o `Dockerfile` e execute o comando abaixo para construir a imagem Docker:

   ```bash
   docker build -t technation-spa .
   ```

2. **Execute o Container**

    Após construir a imagem, execute o container e faça o mapeamento da porta 4200 com o comando:

    ```    
    docker run -p 4200:4200 technation-spa    
    ```
Isso fará com que o aplicativo esteja disponível na URL http://localhost:4200.

3. **Observações:**

Certifique-se de que a porta 4200 não está sendo usada por outro processo em sua máquina.
Caso precise de mais informações ou ajuda, consulte o README da API para obter orientações adicionais.
