const env = {
  SITE_NAME: "Quantus Network",
  SITE_BASE_URL:
    typeof process !== "undefined" && process.env?.SITE_BASE_URL
      ? process.env.SITE_BASE_URL
      : "https://www.quantus.com",
  GA_ID: "G-JBZETNF6F1",
  API_URL: "https://api.quantus.com/api",
  TASK_MASTER_URL: "https://quests.quantus.com/api",
  // TASK_MASTER_URL: "http://localhost:3000/api",
  GRAPHQL_URL: "https://subsquid.quantus.com/graphql",
};

export default env;
