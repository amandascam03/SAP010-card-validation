# Cartão de Crédito Válido

## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Critérios de Aceitação Mínimos do Projeto Atendidos](#3-critérios-de-aceitação-mínimos-do-projeto-atendidos)
* [4. Considerações Finais](#4-considerações-finais)

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

## 2. Resumo do projeto

Neste primeiro projeto oferecido pela Laboratoria, o objetivo é criar um aplicativo da Web que permita ao usuário
validar o número de um cartão de crédito, para isso o Algoritmo de Luhn é aplicado. Além disso, foi implementado a funcionalidade para ocultar todos os dígitos de um cartão, exceto
os quatro últimos.

![interface](my-thumb.jpg)

O tema é direcionado para pessoas que querem 5 meses de frete grátis na Amazon, antes de assinar com a mesma. Para isso, o usuário irá precisar validar seu cartão de crédito e assim obter 5 meses de frete grátis. Para manter uma segurança mínima, o número do cartão de crédito será censurado até os últimos 4 dígitos. O serviço foi desenvolvido para ter o objetivo principal de validar seu cartão de crédito e ganhar algo a mais com isso e também estar em um site seguro e visualmente confortável.

Neste projeto, foi trabalhado os fundamentos do JavaScript (apenas vanilla JavaScript), incluindo conceitos como variáveis, condicionais e funções,
bem como eventos e manipulação básica de DOM, fundamentos HTML e CSS. Outros conceitos inseridos de testes unitários, controle de versão com Git, criação de contas e repositórios e implantação com GitHub Pages.

## 3. Critérios de Aceitação do Projeto Atendidos

Esses são os requisitos que o meu projeto atendeu:

**1. Uma interface que deve permitir ao usuário:**

* [ X ] Inserir o número que desejamos validar. Use apenas caracteres
  numéricos (dígitos) no cartão para validar [0-9].
* [ X ] Constatar se o resultado é válido ou não.
* [ X ] Ocultar todos os dígitos do número do cartão, excetuando os últimos 4
  caracteres.
* [ X ] Não deve poder inserir um campo vazio.

**2. Testes unitários dos métodos.**

* [ X ] Os métodos `validator` (`isValid` e `maskify`) devem ser cobertos por testes unitários.

## 4. Considerações Finais

**1. Linguagens utilizadas:**

* ![linguagens](html-css-js.png)

**2. Desenvolvido por**

* Amanda Araujo
* ![github](github-logo.png)(https://github.com/amandascam03)