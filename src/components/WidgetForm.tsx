import { CloseButton } from "./ClosedButton";

import bugImageUrl from "../images/bug.svg";
import ideiaImageUrl from "../images/ideia.svg";
import thoughtImageUrl from "../images/thought.svg";



const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideiaImageUrl,
      alt: "Imagem de uma lãmpada",
    }

  },
  OTHER: {
    title: "Outros",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    }

  },
};

export function WidgetForm() {
  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl landing-6" >Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return(
            <button
              key={key}
              className=""
              //onClick={}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{ value.title}</span>
            </button>
          )
        }) }

      </div>

      <footer className="text-xs text-neutral-400">
        Feito com carinho! <a className="underline underline-offset-2" href="#">Home</a>
      </footer>

    </div>
  );
}