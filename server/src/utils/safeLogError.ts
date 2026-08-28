import axios from "axios";

export type SafeLogError = {
  name?: string;
  message: string;
  code?: string;
  status?: number;
};

export function toSafeLogError(err: unknown): SafeLogError {
  if (axios.isAxiosError(err)) {
    const safe: SafeLogError = {
      name: err.name,
      message: err.message,
    };

    if (err.code !== undefined) {
      safe.code = err.code;
    }

    const status = err.response?.status ?? err.status;
    if (typeof status === "number") {
      safe.status = status;
    }

    return safe;
  }

  if (err instanceof Error) {
    const safe: SafeLogError = {
      name: err.name,
      message: err.message,
    };

    if (
      "code" in err &&
      typeof err.code === "string" &&
      err.code.length > 0
    ) {
      safe.code = err.code;
    }

    return safe;
  }

  return { message: String(err) };
}
