# fmadvocacia — Estrutura do projeto

Resumo rápido da organização criada neste repositório:

- frontend/
  - public/              -> páginas públicas (index.html, area-cliente.html copies)
  - assets/
    - css/               -> estilos compilados/cópias (index.css, area-cliente.css)
    - img/               -> logos e imagens estáticas (logo.svg, logo.png)
    - js/                -> scripts do frontend (vazio por enquanto)

- backend/               -> ponto inicial para implementar API/servidor (vazio)
- docs/                  -> documentação e notas do projeto
- area-cliente.html      -> página de login localizada na raiz (cópia também em frontend/public)
- index.html             -> landing page (atualizada para usar `frontend/assets`)

Como testar localmente

- Abrir direto no navegador (dev):
  - Duplo clique em `index.html` ou `area-cliente.html` na raiz.
- Servir com um servidor HTTP simples (recomendado para testes de paths):

  Powershell / CMD:
  ```powershell
  cd fmadvocacia
  python -m http.server 8000
  ```

  Depois abra `http://localhost:8000/index.html`.

Boas práticas / próximos passos

- Mover todo conteúdo estático final para `frontend/assets` e manter `frontend/public` como build/output.
- Implementar servidor em `backend/` (Express, Flask, etc.) e rotas de autenticação para `/area-cliente`.
- Versionar arquivos binários com cuidado; preferir SVGs vetoriais para logos quando possível.

Se quiser, eu posso:
- mover todas as imagens restantes para `frontend/assets/img` e atualizar referências automaticamente, ou
- criar um exemplo básico de backend (Express) em `backend/` com rota de login de exemplo.
