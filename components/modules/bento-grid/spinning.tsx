import { SpinningText } from "@/components/ui/spinning-text";

export const Spinning = () => {
  return (
    <div className="flex h-full w-full justify-center backdrop-blur-sm bg-white/40 dark:bg-white/5 ">
      <SpinningText className="text-3xl" radius={6}>
        learn more • earn more • grow more •
      </SpinningText>
    </div>
  );
};
