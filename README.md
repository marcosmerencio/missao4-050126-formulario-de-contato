# 📬 Formulário de Contato com Validação em JavaScript

Este projeto é um formulário de contato com validação no lado do cliente, desenvolvido como parte da Missão do Dia: Validação Simples de Formulário.
O foco principal é evitar o envio do formulário quando os campos obrigatórios não estiverem preenchidos, garantindo melhor usabilidade e qualidade dos dados enviados.

# 🎯 Objetivo do Projeto

Impedir o envio do formulário de contato caso os campos obrigatórios (Nome e E-mail) estejam vazios ou inválidos, exibindo mensagens de erro visuais claras e amigáveis ao usuário.

# ✅ Requisitos Atendidos

✔ Interceptação do evento submit do formulário

✔ Validação de campos obrigatórios (Nome e E-mail)

✔ Exibição de mensagens de erro visuais em tempo real

✔ Bloqueio do envio do formulário em caso de erro

✔ Feedback visual de sucesso quando o formulário é validado corretamente

# 🧠 Funcionalidades Implementadas

Validação do campo Nome

Campo obrigatório

Verificação de nome completo

Validação do campo E-mail

Campo obrigatório

Verificação de formato válido

Mensagens de erro exibidas com tooltip visual

Animação visual ao ocorrer erro (shake)

Notificação visual de sucesso (toast)

Limpeza automática dos erros conforme o usuário digita

Reset do formulário após envio válido

# 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando apenas tecnologias web padrão, sem bibliotecas externas:

HTML5

Estrutura semântica

Boas práticas de acessibilidade

Uso do atributo novalidate para controle via JavaScript

CSS3

Layout moderno e responsivo

Uso de variáveis CSS (:root)

Animações e transições

Estilização de mensagens de erro e sucesso

JavaScript

Interceptação do evento submit

Validação de campos obrigatórios

Manipulação do DOM

Controle de estados visuais (erro e sucesso)

# 📂 Estrutura do Projeto
<img width="510" height="190" alt="estrutura-do-projeto-formulariol" src="https://github.com/user-attachments/assets/5afe26aa-8756-43b3-a995-fbdb82772c10" />

# ⚙️ Como Funciona a Validação

O JavaScript intercepta o envio do formulário usando o evento submit

O envio padrão é bloqueado com event.preventDefault()

O sistema verifica:

Se o campo Nome está preenchido e contém nome completo

Se o campo E-mail está preenchido e possui formato válido

Caso algum erro seja encontrado:

O formulário não é enviado

Uma mensagem de erro visual é exibida abaixo do campo

Se todos os campos estiverem válidos:

O formulário é resetado

Uma notificação visual de sucesso é exibida

# 🚀 Como Executar o Projeto

Clone o repositório:

git clone https://github.com/merenciomarcos-ux/desafio01-formulario-de-contato/.git


Acesse a pasta do projeto

Abra o arquivo index.html em qualquer navegador moderno

Teste o envio com campos vazios e preenchidos para visualizar a validação

# 📌 Boas Práticas Aplicadas

Separação clara de responsabilidades (HTML, CSS e JS)

Código JavaScript organizado e legível

Feedback visual imediato ao usuário

Interface limpa e intuitiva

Estrutura de pastas padronizada

README claro, objetivo e bem documentado

# 📄 Licença

Este projeto é livre para uso educacional e aprendizado.
