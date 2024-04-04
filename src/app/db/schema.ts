import {
  sqliteTable,
  AnySQLiteColumn,
  text,
  blob,
  foreignKey,
  integer,
  numeric,
} from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  dueDate: numeric("due_date"),
  priority: text("priority").default("Medium"),
  categoryId: integer("category_id").references(() => categories.id),
  completed: numeric("completed"),
  createdAt: numeric("created_at").default(sql`(CURRENT_TIMESTAMP)`),
});

export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

export const taskRelations = relations(tasks, ({ one, many }) => ({
  category: one(categories, {
    fields: [tasks.categoryId],
    references: [categories.id],
  }),
}));
