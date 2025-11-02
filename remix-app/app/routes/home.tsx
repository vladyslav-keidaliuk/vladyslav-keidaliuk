import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vladyslav Keidaliuk - Portfolio" },
    { name: "description", content: "Full-stack developer portfolio showcasing projects and skills" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl mb-8 text-base-content/70">
          Discover my work, skills, and passion for web development
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/portfolio" className="btn btn-primary btn-lg">
            View Portfolio
          </Link>
          <Link to="/flyui-test" className="btn btn-outline btn-lg">
            FlyUI Components
          </Link>
        </div>
      </div>
    </div>
  );
}
