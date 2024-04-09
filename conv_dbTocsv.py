import sqlite3
import csv

# Connect to the SQLite database
conn = sqlite3.connect('db.db')
cursor = conn.cursor()

# Execute a query to get all data from the table
cursor.execute("SELECT * FROM motor_data")
rows = cursor.fetchall()

# Get column names
column_names = [description[0] for description in cursor.description]

# Write data to a CSV file
with open('output.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(column_names)
    writer.writerows(rows)

# Close the connection
conn.close()