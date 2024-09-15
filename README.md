# Talker Manager

<p>O Talker Manager é uma aplicação desenvolvida para gerenciar informações sobre palestrantes (talkers) utilizando Node.js e Express. O projeto tem como foco a construção de uma API RESTful, permitindo operações básicas de CRUD (Create, Read, Update e Delete) para manipulação de dados. </p> 

<h3>O que foi feito?</h3>
<p>Neste projeto, foi implementa uma API que possibilita cadastrar, listar, pesquisar, editar e excluir palestrantes. O Talker Manager é uma aplicação prática que utiliza conceitos fundamentais de APIs REST e manipulação de arquivos.</p>

<h3>Tecnologias Utilizadas</h3>
<ul>
    <li><strong>Node.js:</strong> Ambiente de execução JavaScript no lado do servidor.</li>
    <li><strong>Express:</strong> Framework para construção de aplicações web em Node.js.</li>
    <li><strong>fs:</strong> Módulo do Node.js para manipulação de arquivos no sistema de arquivos.</li>
</ul>

<h3>Funcionalidades</h3>
<ul>
    <li><strong>Cadastrar Palestrantes:</strong> Permite adicionar novos palestrantes ao sistema.</li>
    <li><strong>Listar Palestrantes:</strong> Exibe todos os palestrantes cadastrados em formato JSON.</li>
    <li><strong>Pesquisar Palestrantes:</strong> Busca palestrantes específicos através de um termo de pesquisa.</li>
    <li><strong>Editar Palestrantes:</strong> Permite atualizar as informações de um palestrante existente.</li>
    <li><strong>Excluir Palestrantes:</strong> Remove um palestrante do sistema.</li>
</ul>

<h3>Operações Assíncronas</h3>
<p>O projeto utiliza operações assíncronas com <strong>callbacks</strong> e <strong>Promises</strong> para garantir a eficiência na leitura e escrita de dados.</p>

<h3>Endpoints da API</h3>
<p>A API disponibiliza os seguintes endpoints:</p>
<ul>
    <li><code>GET /talker</code> - Lista todos os palestrantes.</li>
    <li><code>GET /talker/:id</code> - Busca um palestrante pelo ID.</li>
    <li><code>POST /talker</code> - Cadastra um novo palestrante.</li>
    <li><code>PUT /talker/:id</code> - Atualiza as informações de um palestrante.</li>
    <li><code>DELETE /talker/:id</code> - Remove um palestrante do sistema.</li>
    <li><code>GET /talker/search?q=searchTerm</code> - Pesquisa palestrantes por termo.</li>
</ul>

<h3>Informações Importantes</h3>
<ul>
    <li>As operações de leitura e escrita devem ser feitas no arquivo <code>src/talker.json</code> utilizando o módulo <code>fs</code>.</li>
    <li>Use o comando <code>npm run restore</code> para restaurar o arquivo <code>src/talker.json</code> ao seu estado inicial.</li>
</ul>

<h3>Como Usar</h3>
<p>Para utilizar o Talker Manager, siga os seguintes passos:</p>
<ul>
    <li>Clone o repositório em sua máquina local.</li>
    <li>Instale as dependências do projeto usando o comando <code>npm install</code>.</li>
    <li>Inicie a aplicação com o comando <code>npm start</code>.</li>
    <li>Acesse a API através dos endpoints especificados</li>
</ul>
