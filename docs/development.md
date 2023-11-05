# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve permitir a criação de usuários | ALTA | register.html |
|RF-002| O sistema deve permitir a criação de usuários do tipo Cuidador | ALTA | register.html |
|RF-003| Login e Cadastro | ALTA | index.html |
|RF-004| O sistema deve ter um filtro para pesquisar cuidadores | ALTA | index.html |
|RF-005| Navegação | ALTA | index.html |
|RF-006| Contato | MEDIA | index.html |
|RF-007| O sistema deve ter um agendamento de hospedagem dos animais | ALTA | listaHosters.html |
|RF-008| O sistema deve ter uma aba de avaliações e comentários sobre os cuidadores | ALTA | perfilHoster.html |
|RF-009|  O sistema deve gerenciar reservas feitas | ALTA | - |
|RF-010|  O sistema deve disponibilizar acesso ao histórico de hospedagens  | MÉDIA | - |
|RF-011| O sistema deve disponibilizar a opçao de recuperar a senha de usuário   | BAIXA | resetPassword.html |

### Requisitos Não Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RNF-001| Compatibilidade com Dispositivos | ALTA | index.html |
|RNF-002| Compatibilidade com Dispositivos | ALTA | register.html |
|RNF-003| Usabilidade | ALTA | register.html |
|RNF-004| Compatibilidade com Dispositivos | ALTA | about.html |
|RNF-005| Conteúdo Claro | MEDIA | about.html |

## Descrição das estruturas:

## Cuidador
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador do cuidador               | 1                                              |
| Nome         | Texto             | Nome do cuidador                         | Vitor                                   |
| Animal Aceito       | Texto             | Animal que o cuidador estará disponível para cuidar           | Cão e Gato                            |

## Dono do Pet
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador do cuidador               | 1                                              |
| Nome         | Texto             | Nome do dono                         | Brian                                   |
| Tipo de Animal       | Texto             | Tipo de animal que o dono possui           | Cão                            |

## Agendamento
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador do cuidador               | 1                                              |
| Periodo Inicio        | Date/Time             | Data inicio em que o cuidador receberá o pet/ dono levará o pet  | 05/11/2023                              |
| Periodo Fim       | Date/Time             | Data final em que o cuidador receberá o pet/ dono levará o pet           | 06/11/2023                            |
| Cuidador       | Texto             | Nome do cuidador           | Vitor                            |


