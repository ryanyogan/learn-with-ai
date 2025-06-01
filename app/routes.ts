import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("sign-in", "routes/auth/sign-in.tsx"),
  ...prefix("companions", [
    index("routes/root/companions.tsx"),
    route("new", "routes/root/new-companions.tsx"),
    route(":id", "routes/root/companion-session.tsx"),
  ]),
  route("my-journey", "routes/root/my-journey.tsx"),
  route("subscription", "routes/root/subscription.tsx"),
] satisfies RouteConfig;
