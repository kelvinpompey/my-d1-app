-- Create table for tasks
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    due_date DATE,
    priority TEXT CHECK(priority IN ('Low', 'Medium', 'High')) DEFAULT 'Medium',
    category_id INTEGER,
    completed BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Create table for categories
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

-- Insert sample data into categories table
INSERT INTO categories (name) VALUES
    ('Work'),
    ('Personal'),
    ('Shopping'),
    ('Study');

-- Insert sample data into tasks table
INSERT INTO tasks (title, description, due_date, priority, category_id, completed, created_at) VALUES
    ('Complete project proposal', 'Finish the project proposal and submit it by the due date', '2024-04-10', 'High', 1, 0, '2024-04-01 09:00:00'),
    ('Go for a jog', 'Take a run in the park for 30 minutes', '2024-04-05', 'Medium', 2, 0, '2024-04-01 18:00:00'),
    ('Buy groceries', 'Purchase vegetables, fruits, and bread', '2024-04-07', 'Medium', 3, 0, '2024-04-02 12:00:00'),
    ('Read Chapter 3', 'Read Chapter 3 of the textbook for the upcoming exam', '2024-04-12', 'Low', 4, 0, '2024-04-03 16:00:00');
