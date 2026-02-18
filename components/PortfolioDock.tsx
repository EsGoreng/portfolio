"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "radix-ui";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { Icons } from "@/components/ui/icons";

export function MainDock() {
  return (
    <div className="fixed bottom-15 left-0 z-50 flex w-full items-center justify-around">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/50 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5"
        >
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex h-full w-full cursor-pointer items-center justify-center"
                >
                  <Icons.gitHub className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex h-full w-full cursor-pointer items-center justify-center"
                >
                  <Icons.googleDrive className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Google Drive</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex h-full w-full cursor-pointer items-center justify-center"
                >
                  <Icons.notion className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notion</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  className="flex h-full w-full cursor-pointer items-center justify-center"
                >
                  <Icons.whatsapp className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>WhatsApp</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator.Root
            orientation="vertical"
            decorative
            className="bg-border h-8 w-px"
          />

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex h-full w-full cursor-pointer items-center justify-center">
                  <AnimatedThemeToggler className="cursor-pointer" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
