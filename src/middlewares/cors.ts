import cors, { type CorsOptions } from "cors";
import env from "@/config/index.js";

const corsOptions: CorsOptions = {
  origin: function (origin, cb) {
    if (!origin) return cb(null, true);
    if (env.corsWhitelist.includes(origin ?? "")) return cb(null, true);

    cb(new Error("Not allowed by CORS"));
  },
  credentials: true,
};

export const corsHandler = cors(corsOptions);
