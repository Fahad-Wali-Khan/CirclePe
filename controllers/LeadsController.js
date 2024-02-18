const Leads = require('../models/LeadsModel');


exports.getLeads = async (req, res) => {
  try {
    const leads = await Leads.find(req.params.id);
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLeadsById = async (req, res) => {
  try {
    const leads = await Leads.findById(req.params.id);
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLeads = async (req, res) => {
  try {
    const newLeads = new Leads(req.body);
    await newLeads.save();
    res.status(201).json(newLeads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Other controller functions for user operations
