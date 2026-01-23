import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export const EmptyState = ({title, description}: EmptyStateProps) => {
  return (
    <div className="mx-auto max-w-md rounded-xl border border-zinc-200 bg-zinc-50/60 p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 pointer-events-none select-none"
          aria-label="Ilustração: nenhum dado encontrado"
        >
          <DotLottieReact
            src="https://lottie.host/50743412-f882-4ff9-9a4e-4e46688dac8b/ATfMSFC9jM.lottie"
            loop
            autoplay
            className="w-full h-full"
          />
        </div>

        <h1 className="text-base font-semibold">
          {title}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {description}
        </p>

      </div>
    </div>
  );
};
