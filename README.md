
<div align="center">

# Elizabeth Alícia

### Tricologia Clínica Avançada & Estética

**Uma experiência digital que traduz cuidado, sofisticação e identidade.**

Website desenvolvido pela **Ágave Lab**.

[Ágave Lab](https://www.agavelab.com.br) · [Instagram da Elizabeth](https://www.instagram.com/elizabethalicia/)

---

</div>

## Sobre o projeto

O website de **Elizabeth Alícia** foi desenvolvido para apresentar sua atuação em tricologia clínica avançada e estética por meio de uma experiência digital elegante, intuitiva e acolhedora.

A proposta combina uma identidade visual sofisticada com navegação fluida, valorizando a apresentação profissional, os serviços oferecidos e a conexão com pacientes.

Cada seção foi pensada para transmitir confiança, atenção aos detalhes e cuidado individualizado.

## Experiência e design

O projeto segue uma direção visual editorial, com uma estética contemporânea e minimalista.

**Principais características:**

- Interface responsiva para desktop, tablet e mobile.
- Identidade visual com tons terrosos, champagne e marfim.
- Tipografia cuidadosamente selecionada.
- Animações suaves e interações elegantes.
- Navegação intuitiva com rolagem suave.
- Seções dedicadas à atuação profissional, resultados e dúvidas frequentes.
- Integração com WhatsApp para facilitar o contato.
- Metadados para SEO e compartilhamento em redes sociais.
- Integração com Vercel Analytics.

## Tecnologias

| Tecnologia | Aplicação |
|---|---|
| Next.js | Framework React |
| React | Construção da interface |
| TypeScript | Tipagem e manutenção |
| Tailwind CSS | Estilização responsiva |
| Motion | Animações e transições |
| Lucide | Ícones |
| Next Font | Otimização tipográfica |
| Vercel | Hospedagem e deploy |
| Vercel Analytics | Análise de tráfego |

## Estrutura do projeto

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
└── components/
    ├── layout/
    │   ├── Header.tsx
    │   └── FloatingWhatsApp.tsx
    │
    └── sections/
        ├── Hero.tsx
        ├── About.tsx
        ├── Atuacao.tsx
        ├── SinaisCapilares.tsx
        ├── Jornada.tsx
        ├── Resultados.tsx
        ├── FAQ.tsx
        ├── Contato.tsx
        └── Footer.tsx

public/
└── images/
```

A estrutura pode incluir outros arquivos de configuração, SEO e recursos estáticos.

## Executando localmente

### Pré-requisitos

- Node.js compatível com a versão do Next.js utilizada.
- npm.

### Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd <PASTA_DO_PROJETO>
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de produção

```bash
npm run build
```

Para executar a versão compilada:

```bash
npm run start
```

## Variáveis de ambiente

O projeto permite configurar o domínio oficial por meio da variável:

```env
NEXT_PUBLIC_SITE_URL=https://dominio-oficial.com.br
```

Configure essa variável apenas quando o domínio estiver definido e conectado à implantação.

Na Vercel, a variável pode ser adicionada em **Project Settings → Environment Variables**.

O Vercel Analytics deve ser habilitado no painel do projeto para coletar os dados de tráfego.

## SEO e compartilhamento

A aplicação foi estruturada para oferecer suporte a:

- Títulos e descrições otimizados.
- Open Graph para prévias de compartilhamento.
- Twitter Cards.
- URLs canônicas.
- Dados estruturados Schema.org.
- Controle de indexação por ambiente.
- Imagens otimizadas com Next.js.

A configuração definitiva de domínio, sitemap e indexação deve ser validada após a publicação.

## Desenvolvimento

<div align="center">

### Ágave Lab

**Desenvolvimento web com estratégia, identidade e propósito.**

Criamos experiências digitais que unem tecnologia, design e performance.

**Sites · Landing Pages · Sistemas Web**

[Website](https://www.agavelab.com.br) · [Instagram](https://www.instagram.com/agavelab.dev/)

</div>

---

<div align="center">

Desenvolvido com atenção a cada detalhe por **Ágave Lab**.

© 2026 Ágave Lab. Todos os direitos reservados.

</div>
