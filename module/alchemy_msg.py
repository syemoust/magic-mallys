from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()

class ContactForm(Base):
    __tablename__ = 'contact_form'

    id = Column(Integer, primary_key=True, autoincrement=True)
    full_name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    message = Column(Text, nullable=False)

# Create the SQLite database
engine = create_engine('sqlite:///contact_form.db', echo=True)

# Create tables
Base.metadata.create_all(engine)

# Example usage (optional: insert a sample row)
if __name__ == "__main__":
    Session = sessionmaker(bind=engine)
    session = Session()

    # Example insert
    new_entry = ContactForm(
        full_name="Max Mustermann",
        email="max@example.com",
        message="Hallo! Ich habe eine Frage."
    )
    session.add(new_entry)
    session.commit()

    print("Inserted new contact form submission.")
