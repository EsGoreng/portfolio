import { SpinningText } from "@/components/ui/spinning-text";

export const Spinning = () => {
  return (
    <div className="flex h-full w-full justify-center">
      <SpinningText className="text-3xl" radius={6}>
        learn more • earn more • grow more •
      </SpinningText>
    </div>
  );
};
