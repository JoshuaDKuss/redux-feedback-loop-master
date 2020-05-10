-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feelz" INT not null,
  "understandz" INT not null,
  "supportz" INT not null,
  "smackTalk" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feelz", "understandz", "supportz", "smackTalk")
VALUES (4, 3, 5, 'Doing Super OKAY!');
