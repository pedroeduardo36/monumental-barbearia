# Monumental Barbearia

Landing page responsiva da Monumental Barbearia, reconstruída a partir da referência visual fornecida. A aplicação usa React 19, Vite 8 e Supabase.

Requisito local: Node.js 22 ou superior.

## Rodando localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

Preencha `.env.local` com a URL e a chave **publishable** do projeto Supabase. Nunca coloque uma chave `secret` ou `service_role` em variáveis iniciadas por `VITE_`: elas são enviadas ao navegador.

## Banco de dados

A migração em `supabase/migrations/20260912000000_create_customer_contacts.sql` cria `customer_contacts`, valida os limites dos campos e ativa Row Level Security. Visitantes podem apenas inserir uma mensagem com consentimento; não podem listar, editar ou excluir os dados.

Para aplicar localmente com a Supabase CLI, descubra primeiro os comandos compatíveis com sua versão:

```bash
supabase --help
supabase migration --help
```

## Como a aplicação está organizada

- `index.html`: documento base, metadados e ponto onde o React é montado.
- `src/main.jsx`: componentes de interface, conteúdo, galeria, menu e formulário.
- `src/styles.css`: tokens visuais, layouts desktop/mobile e estados de foco.
- `src/supabase.js`: única fronteira entre a interface e o banco de dados.
- `public/images`: imagens da referência, convertidas e otimizadas para web.
- `supabase/migrations`: versão reproduzível do schema e das políticas de segurança.
- `scripts/extract-reference-assets.mjs`: utilitário usado para extrair as imagens do HTML-bundle original.

## Fluxo do formulário

1. O navegador valida campos obrigatórios, formato de e-mail e comprimentos.
2. O componente normaliza e-mail e campos opcionais.
3. `saveCustomerContact` faz um `INSERT` na API REST gerada pelo Supabase.
4. O Postgres valida novamente os dados e a política RLS permite apenas a criação.
5. A interface mostra um retorno acessível em `aria-live`, sem expor mensagens internas do banco.

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos otimizados são gerados em `dist/`.
