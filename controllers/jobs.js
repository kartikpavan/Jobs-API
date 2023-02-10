// All Jobs
const getAllJobs = async (req, res) => {
   res.send("Get All Jobs");
};

// Single Job
const getJob = async (req, res) => {
   res.send("Get Single Job");
};

// Create Job
const createJob = async (req, res) => {
   res.send("Create Job");
};

// update Job
const updateJob = async (req, res) => {
   res.send("update Job");
};

// Delete job
const deleteJob = async (req, res) => {
   res.send("Delete Job");
};

module.exports = { getAllJobs, createJob, getJob, updateJob, deleteJob };
