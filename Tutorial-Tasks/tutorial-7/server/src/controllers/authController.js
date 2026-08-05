import authService from "../services/authService";

export const register = async (req, res) => {
  try {
    const data = req.body ?? {};
    const userData = await authService.register();
  } catch (e) {
    console.log(e);
  }
};
