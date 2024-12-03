CREATE TABLE IF NOT EXISTS "users" (
    "id" uuid NOT NULL PRIMARY KEY,
    "firstName" varchar NOT NULL,
    "lastName" varchar NOT NULL,
    "email" varchar NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT (now())
)