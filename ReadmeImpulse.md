- [ ] Node Lts
- [ ] npm
- [ ] vs code
- [ ] Fluxo SPA (single page application)
- [ ] npm create vite@latest
- [ ] react == `Componente` recebe uma função retorna html / conceito
- [ ] react == `Propiedade` parece com atributo
- [ ] https://tailwindcss.com/docs/installation/using-postcss
- [ ] npm install -D tailwindcss
- [ ] npm install -D tailwindcss
- [ ] npx tailwindcss init
- [ ] content: ["./src/**/*.{html,js}"],
- [ ] npx tailwindcss init -p
- [ ] npm install -D tailwindcss postcss autoprefixer
- [ ] https://github.com/phosphor-icons/phosphor-home // icones de sites
- [ ] npm install phosphor-react
- [ ] acessibilidade
- [ ] headless.dev / dos mesma empresa do tailwid
- [ ] npm install @headlessui/react
- [ ] npm install -D @tailwindcss/forms
- [ ] npm install --sace-dev tailwind-scrollbar
### exemplo de utilização de tailwind
```
interface ButtonProps {
  text?: string;
}

function Button (props: ButtonProps) {
  return <button
    className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700"
    >
      {props.text ?? "Default"}
      </button>
}


function App() {
  return (
    <div className="flex gap-2">
      <Button text="Enviar" />
      <Button text="OK" />
      <Button  />
    </div>
  )
}

export default App
```