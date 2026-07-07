type AppConfig = {
    env: string,
    port: number,
    dbConnectionString: string
}

const systemConfig: Readonly<AppConfig> = {
    env: "DATABASE_URL",
    port: 5500,
    dbConnectionString: "psdcdusc_dbd_postgresql_string"
}

// systemConfig.port = 8000; // This line wont compile

console.log(systemConfig.dbConnectionString)