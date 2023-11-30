import User from "../models/user.model.js";

export const createTeam = async (req, res) => {
  const { memberIds } = req.body;

  try {
    const members = await User.find({ id: { $in: memberIds } });

    const domains = members.map((member) => member.domain);
    const uniqueDomains = [...new Set(domains)];
    const availableMembers = members.filter((member) => member.available);
    const team = {
      members: availableMembers,
      domains: uniqueDomains,
    };
    return res.status(201).json(team);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

export const getTeamById = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await User.findbyId(id);
    res.status(200).json(team);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};
