import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("portfolio", "routes/portfolio.tsx"),
  route("flyui-test", "routes/flyui-test.tsx"),
] satisfies RouteConfig;
