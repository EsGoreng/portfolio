import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export const VelocityScrollCard = () => {
  return (
    <div className="flex h-full flex-col justify-center bg-card/50 text-(--ray-color)">
      <ScrollVelocityContainer className="text-4xl font-bold md:text-7xl">
        <ScrollVelocityRow baseVelocity={8} direction={1}>
          Software
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={8} direction={-1}>
          Engineer
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
};
