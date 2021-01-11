# Ds Deliver 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/marcostorres89/dsdeliver-sds2/blob/main/LICENSE)

# Sobre o projeto

DS Deliver é uma aplicação full stack web e mobile construída durante a 2ª edição da **Semana DevSuperior** (#sds1), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em a criação de um site para solicitação de itens, no projeto desenvolvemos um Catálogo com os produdos para a web, e um App mobile para os entregadores.

Site: https://domdd.netlify.app/

## Layout mobile
![Mobile 1](https://github.com/marcostorres89/assets/blob/main/projects/dedeliver/Tela%20Home%20Page%20Mobile.PNG)
![Mobile 2](https://github.com/marcostorres89/assets/blob/main/projects/dedeliver/Tela%20Pedidos%20Mobile.PNG)
![Mobile 3](https://github.com/marcostorres89/assets/blob/main/projects/dedeliver/Tela%20Confirma%C3%A7%C3%A3o%20Mobile.PNG)

## Layout web
![Web 1](https://github.com/marcostorres89/assets/blob/main/projects/dedeliver/Tela%20Home%20Page%20Web.PNG)

![Web 2](https://github.com/marcostorres89/assets/blob/main/projects/dedeliver/Tela%20Cat%C3%A1logo%20Web.PNG)

## Modelo conceitual
![Modelo Conceitual](https://github.com/marcostorres89/assets/blob/main/projects/dedeliver/modelo-conceitual.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

## API DsDeliver
```bash
# All Products
curl --location --request GET 'https://ds-deliver.herokuapp.com/products'

# All Orders
curl --location --request GET 'https://ds-deliver.herokuapp.com/orders'

# Set Delivered
curl --location --request PUT 'https://ds-deliver.herokuapp.com/orders/3/delivered'

# New order
curl --location --request POST 'https://ds-deliver.herokuapp.com/orders' \
--header 'Content-Type: application/json' \
--data-raw '{
    "address": "Avenida Paulista, 1500",
    "latitude": -23.56168,
    "longitude": -46.656139,
    "products": [
        {
            "id": 2
        },
        {
            "id": 5
        }
    ]         
}'
```
