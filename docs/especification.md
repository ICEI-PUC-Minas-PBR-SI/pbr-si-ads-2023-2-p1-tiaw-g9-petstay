# Especificações do Projeto

Muitos tutores de animais de estimação enfrentam dificuldades ao procurar cuidadores confiáveis para seus pets durante suas ausências, como viagens. A ausência de uma plataforma centralizada e confiável para conectar cuidadores qualificados e tutores de animais resulta em insegurança e falta de opções adequadas de hospedagem. Além disso, cuidadores interessados em oferecer seus serviços muitas vezes têm dificuldade em encontrar oportunidades e divulgar suas habilidades de forma eficaz.

## Personas

1º Paulo tem 24 anos,é um profissional jovem e ambicioso que trabalha em uma empresa de tecnologia. Seu trabalho exige dedicação e frequentemente ele precisa viajar para reuniões e conferências.Ele é solteiro, tem um cão chamado Max e uma gatinha chamada Luna, os dois animais são cheios de energia.Como um profissional ocupado Paulo sempre está em busca de hospedagem para seus pets, porém tem sentido uma enorme dificuldade de encontrar cuidadores confiáveis. O objetivo de Paulo é encontrar um sistema de hospedagem de pets que tenha cuidadores capacitados, que compreendam os comportamentos e necessidades dos animais e que estejam próximos a sua casa. Ele valoriza a presença de atividades de enriquecimento, áreas ao ar livre para exercícios e espaços onde os animais possam relaxar. Além disso, ele espera receber atualizações regulares sobre a saúde e o bem-estar de seus animais durante sua estadia.Para que ele se concentre em suas responsabilidades sem preocupações.


2º Maria 65 anos, é uma aposentada que está em busca de uma renda extra ela deseja receber pets na sua casa, pois ela gosta muito de animais.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários Preciso de uma tela de login e senha para realizar meu cadastro e adicionar minhas informações de cuidador de cachorros, como minha localização, fotos da minha casa e etc. 

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
                                                          |
EU COMO... `PERSONA`- Usuário do sistema 
QUERO/PRECISO ... `FUNCIONALIDADE`- Preciso de um sistema capaz de  realizar um cadastro de das minhas descrições pessoais 
PARA ... `MOTIVO/VALOR`- para que eu possa adicionar minhas informações de cuidadora de cachorros, como minha localização, fotos da minha casa e etc e assim eu possa prestar meus serviços de cuidadora de pets e para que os donos que procuram esse tipo de serviço, possam acessar minhas informações e ter confiança em meus serviços.

EU COMO... `PERSONA`- Usuário do sistema 
QUERO/PRECISO ... `FUNCIONALIDADE`- Preciso de um sistema que contenha um filtro de pesquisa 
PARA ... `MOTIVO/VALOR`- Para que eu possa pesquisar cuidadores com base em critérios como localização, tipos de animais e disponibilidade. 



> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Cadastro de Usuários | ALTA |  |
|RF-002| Perfil do Cuidador   | ALTA | |
|RF-003| Busca e Filtro de Cuidadores   | ALTA | |
|RF-004| Agendamento de Hospedagem   | ALTA | |
|RF-005| Sistema de Avaliações e Comentários   | ALTA | |
|RF-006| Sistema de Mensagens   | ALTA | |
|RF-007| Gerenciamento de Reservas   | ALTA | |
|RF-008| Pagamentos e Transações   | ALTA | |
|RF-009| Acesso ao Histórico   | MÉDIA | |
|RF-010| Recuperação de Senha   | BAIXA | |

Cadastro de Usuários:

Os usuários devem poder criar contas de cuidadores e donos de animais.
O sistema deve exigir informações como nome, endereço de e-mail e senha durante o cadastro.

Perfil do Cuidador:

Cada cuidador deve poder criar um perfil que inclua informações como experiência, tipos de animais que pode cuidar e instalações disponíveis.
O cuidador deve poder adicionar fotos das instalações.

Busca e Filtro de Cuidadores:

Os donos de animais devem poder pesquisar cuidadores com base em critérios como localização, tipos de animais e disponibilidade.
Os resultados da pesquisa devem ser apresentados em uma lista ou mapa.

Agendamento de Hospedagem:

Os donos de animais devem poder agendar hospedagem com um cuidador específico em datas selecionadas.
O sistema deve exibir as datas disponíveis no perfil do cuidador.

Sistema de Avaliações e Comentários:

Os donos de animais devem poder avaliar e deixar comentários sobre a experiência com um cuidador após a hospedagem.
A classificação média do cuidador deve ser exibida em seu perfil.

Sistema de Mensagens:

Os donos de animais e os cuidadores devem poder se comunicar através de mensagens em tempo real.
As notificações devem alertar os usuários sobre novas mensagens.

Gerenciamento de Reservas:

Os donos de animais e os cuidadores devem ter acesso a um painel para visualizar e gerenciar suas reservas atuais e futuras.

Pagamentos e Transações:

O sistema deve permitir que os donos de animais efetuem pagamentos de hospedagem de forma segura.
Deve haver um sistema de registro de transações para rastrear pagamentos e comissões (se aplicável).

Acesso ao Histórico:

Os usuários devem poder acessar um histórico de suas reservas anteriores e interações.

Recuperação de Senha:

Os usuários devem ter a opção de redefinir suas senhas caso as esqueçam.


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
