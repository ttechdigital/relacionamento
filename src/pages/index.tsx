// src/pages/index.tsx (microfrontend "Relacionamento")

import Prime from "@/components/Prime"; // Importando diretamente

export default function Home() {
  return (
    <div>
      <h1>Prime no microfrontend Relacionamento</h1>
      <Prime />
    </div>
  );
}