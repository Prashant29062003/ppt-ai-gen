import Navbar from '#/components/Navbar'
import { createFileRoute } from '@tanstack/react-router';
import { TooltipProvider } from '#/components/ui/tooltip';
import { Toggle } from '#/components/ui/toggle';

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <Navbar />
      <TooltipProvider>
        <p className="mt-4 text-lg">
          This is a tooltip example. Hover over <span className="text-blue-500 hover:underline cursor-pointer" data-tooltip="Hello, I'm a tooltip!">this text</span> to see the tooltip.
        </p>
      </TooltipProvider>
      <Toggle className="mt-4" />
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
    </div>
  )
}
