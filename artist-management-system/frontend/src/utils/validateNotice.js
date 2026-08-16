export function validateNotice({ title, description }) {
  const errors = {};

  if (!title.trim()) {
    errors.title = "Title is required";
  } else if (title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters";
  }

  if (!description.trim()) {
    errors.description = "Description is required";
  } else if (description.trim().length < 10) {
    errors.description = "Description must be at least 10 characters";
  }

  return errors;
}
