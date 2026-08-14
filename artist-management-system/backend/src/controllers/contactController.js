import Contact from "../models/Contact.js";

export const getFeedbacks = async (req, res) => {
  try {
    const feedback = await Contact.find();
    res.json(feedback);
  } catch (error) {
    console.log("Error caught: ", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const createFeedback = async (req, res) => {
  try {
    const { name, email, feedback, contact } = req.body;
    const newFeedback = await Contact.create({
      name,
      email,
      feedback,
      contact,
    });
    res.status(201).json(newFeedback);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

export const deleteFeedback = async (req, res) => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);
    if (!message) {
      res.status(404).json({ message: "Message not found" });
    }
    return res.json({ message: "Message deleted successfully" });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};
