import { useState } from "react";

import { FeedbackTpeStep } from "./Steps /FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps /FeedbackContentStep";

import bugImageUrl from "../../images/bug.svg";
import ideiaImageUrl from "../../images/ideia.svg";
import thoughtImageUrl from "../../images/thought.svg";



export const feedbackTypes = {
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
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    }

  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestarFeedback()  {
    setFeedbackType(null)
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {!feedbackType ? (
        <FeedbackTpeStep onFeedbackTypeChange={setFeedbackType} />
      ) :
          (
            <FeedbackContentStep
            feedbackType={feedbackType}
            onfeedbackRestartrequested={handleRestarFeedback}
            />
          )
      }

      <footer className="text-xs text-neutral-400">
        Feito com carinho! <a className="underline underline-offset-2" href="#">Home</a>
      </footer>

    </div>
  );
}