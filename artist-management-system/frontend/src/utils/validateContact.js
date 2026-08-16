export function validateContact({ name, email, contact, feedback }) {
  const errors = {};

  if (!name.trim()) {
    errors.name = "Name is required";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (contact.trim() && !/^\d{7,15}$/.test(contact.trim())) {
    errors.contact = "Enter a valid phone number (digits only)";
  }

  if (!feedback.trim()) {
    errors.feedback = "Feedback is required";
  } else if (feedback.trim().length < 10) {
    errors.feedback = "Feedback must be at least 10 characters";
  }

  return errors;
}
