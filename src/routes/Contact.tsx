import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">
        You can reach us at <a href="mailto:info@company.com" className="text-blue-500 hover:underline">
          info@company.com
        </a>
      </p>
    </div>
  );
}