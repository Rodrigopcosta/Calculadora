# Calculadora Online Profissional

![Calculadora Online](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Uma calculadora online completa e profissional com modos básico e científico, desenvolvida com HTML, CSS e JavaScript puros. Otimizada para Google AdSense e totalmente responsiva.

## ✨ Funcionalidades

### Calculadora Básica
- ➕ Operações aritméticas básicas (adição, subtração, multiplicação, divisão)
- 🔢 Suporte a números decimais
- ⌨️ Suporte completo ao teclado
- 🎯 Proteção contra divisão por zero
- 🔄 Histórico de cálculos

### Calculadora Científica
- 📐 Funções trigonométricas (sin, cos, tan)
- 📊 Logaritmos (log, ln)
- ⚡ Potenciação e raiz quadrada
- 🥧 Constantes matemáticas (π, e)
- 🔢 Operações avançadas (%, x², 1/x)

### Recursos Gerais
- 🎨 Design moderno e profissional
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- 🌐 Otimizado para SEO
- 💰 Pronto para Google AdSense
- ⚡ Performance otimizada
- ♿ Acessível (WCAG 2.1)

## 🚀 Demo

[Ver Demo ao Vivo](#) <!-- Adicione o link da sua demo aqui -->

## 📸 Screenshots

![Modo Básico](screenshots/basico.png)
![Modo Científico](screenshots/cientifico.png)

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design moderno com Flexbox e Grid
- **JavaScript ES6+** - Lógica de cálculo e interatividade
- **Google AdSense** - Monetização integrada

## 📦 Instalação

### Opção 1: Usar diretamente
\`\`\`bash
# Clone o repositório
git clone https://github.com/rodrigocosta/calculadora-online.git

# Entre no diretório
cd calculadora-online

# Abra o arquivo index.html no navegador
\`\`\`

### Opção 2: Com servidor local
\`\`\`bash
# Clone o repositório
git clone https://github.com/rodrigocosta/calculadora-online.git

# Entre no diretório
cd calculadora-online

# Instale um servidor HTTP simples (se não tiver)
npm install -g http-server

# Inicie o servidor
http-server . -p 8080 -o
\`\`\`

## 💻 Uso

### Modo Básico
1. Digite os números clicando nos botões ou usando o teclado
2. Selecione a operação desejada (+, -, ×, ÷)
3. Pressione "=" ou Enter para ver o resultado
4. Use "C" para limpar ou "←" para apagar o último dígito

### Modo Científico
1. Clique no botão "Científica" para ativar o modo científico
2. Use as funções avançadas: sin, cos, tan, log, ln, √, x², etc.
3. Acesse constantes matemáticas: π e e
4. Todas as funções básicas continuam disponíveis

### Atalhos de Teclado
- **Números**: 0-9
- **Operações**: +, -, *, /
- **Decimal**: . ou ,
- **Calcular**: Enter
- **Limpar**: Escape ou Delete
- **Apagar**: Backspace

## 📂 Estrutura do Projeto

\`\`\`
calculadora-online/
│
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
├── README.md           # Documentação
├── package.json        # Configurações do projeto
└── screenshots/        # Capturas de tela (opcional)
\`\`\`

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `style.css`:
\`\`\`css
:root {
    --primary-color: #1e3a8a;
    --secondary-color: #3b82f6;
    --accent-color: #60a5fa;
    /* ... */
}
\`\`\`

### Layout
O layout é totalmente responsivo usando Flexbox e Grid. Ajuste os breakpoints em `style.css`:
\`\`\`css
@media (max-width: 768px) {
    /* Estilos para tablet */
}

@media (max-width: 480px) {
    /* Estilos para mobile */
}
\`\`\`

## 🔧 Google AdSense

Para integrar seus anúncios:

1. Substitua os comentários `<!-- Espaço para Google AdSense -->` no `index.html` com seu código de anúncio
2. Adicione seu ID de publicador do AdSense no cabeçalho
3. Configure os espaços para anúncios conforme as políticas do AdSense

Exemplo:
\`\`\`html
<!-- Anúncio Header -->
<div class="ad-space">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
         crossorigin="anonymous"></script>
    <!-- Anúncio da Calculadora -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="XXXXXXXXXX"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
\`\`\`

## 🌐 SEO

O projeto já está otimizado para SEO com:
- Meta tags apropriadas
- Estrutura semântica HTML5
- Conteúdo relevante e informativo
- Schema.org markup
- URLs amigáveis
- Performance otimizada

## 📈 Roadmap

- [ ] Adicionar tema escuro/claro
- [ ] Salvar histórico no localStorage
- [ ] Exportar cálculos para PDF
- [ ] Adicionar mais funções científicas
- [ ] Suporte a múltiplos idiomas
- [ ] PWA (Progressive Web App)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Rodrigo Costa**

- Portfolio: [seu-portfolio.com](#)
- GitHub: [@rodrigocosta](https://github.com/rodrigocosta)
- LinkedIn: [Rodrigo Costa](https://linkedin.com/in/rodrigocosta)

## 🙏 Agradecimentos

- Inspirado nas melhores práticas de UI/UX
- Ícones e design seguindo princípios modernos
- Comunidade open source

## 📞 Suporte

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para:
- Abrir uma [Issue](https://github.com/rodrigocosta/calculadora-online/issues)
- Enviar um email: contato@rodrigocosta.com
- Conectar no LinkedIn

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

**Desenvolvido com ❤️ por Rodrigo Costa**
