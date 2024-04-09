import sqlite3
from datetime import datetime
import random

# Verbindung zur Datenbank herstellen
conn = sqlite3.connect('db.db')
c = conn.cursor()

# Tabelle löschen, wenn sie existiert
c.execute('DROP TABLE IF EXISTS motor_data')

# Tabelle neu erstellen
c.execute('''
    CREATE TABLE motor_data (
        timestamp TEXT,
        amper REAL,
        current REAL,
        voltage REAL
    )
''')

# 10 Beispieldaten hinzufügen
for i in range(10):
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    amper = random.uniform(0, 100)  # Ersetzen Sie dies durch Ihre tatsächlichen Daten
    current = random.uniform(0, 100)  # Ersetzen Sie dies durch Ihre tatsächlichen Daten
    voltage = random.uniform(0, 100)  # Ersetzen Sie dies durch Ihre tatsächlichen Daten
    c.execute('INSERT INTO motor_data VALUES (?, ?, ?, ?)', (timestamp, amper, current, voltage))

# Änderungen speichern und Verbindung schließen
conn.commit()
conn.close()