import type { Route } from "./+types/home";
import { Welcome } from "../home/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lucas Wing's Portfolio" },
    { name: "description", content: "Portfolio website of the Software Engineer Lucas Wing. Check it out!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
