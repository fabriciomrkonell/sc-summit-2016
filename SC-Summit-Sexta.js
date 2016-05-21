8:00 - Mateus Carrucio

* Docker
	Acessível, Portável, Aberto;
	Programa - Executado através do arquivo dockerfile;
	Container - Programa em execução;
	100x mais rápido;
	Depende somente exclusivamente de um Kernel;
	Containers são descartáveis;
	Armazenamento de dados fora do ambiente da aplicação;
	Serviços atômicos, com um único objetivo;
	Micro Serviços
		Apps são compostos por pequenas aplicações;
		Mais fácil de escalar;
		Interfaces fracamente acopladas;

* Kubernetes
	Google;
	Automatiza deploy;
	Compartilhamento de storages;
	Não
		Provê middleware
		Faz build de aplicações;
		Limita os tipos de aplicações suportadas;

* Openshift Origin
	Equipes de desenvolvedores;
	Versionamento de imagens;
	Container para uma imagem;
	POD - Grupo de containers;

* Pensamento na nuvem
	Log centralizado;
	Utilização do Elastic Search para o endentimento de logs;
	Agnóstico a infra;
	Configuração através de variáveis de ambiente;

* Referência
	12factor.net

10:30 Sérgio Siqueira

* Workers
	Processos que podem causar latência;
	CommandPatter
		Possui apenas uma operação para a invocação;
	PHP? Pode isso Arnaldo?

11:00 Thiago Paes

* Integração Contínua
	Continuamente integrar as mudanças que ocorrem no desenvolvimento;
	Utilização do Travis;
	Travis
		Grátis;
		Fácil de configurar;
		Xodó;
	Jenkins
		Plugins;
		Inúmeros projetos;
		Ampla integração;

13:30 Elton Mineto
* Logs
	ChromePHP Handler;
	Log em base de dados, novamente em Elastic Search;

14:30 Paulo Resende
* Middleware
	Camada de software que fica entre a requisição e a resposta;
	Consultam regras de negócio;
	PHP? Eita;
