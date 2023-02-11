const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const Job = require("../models/Job");

// All Jobs
const getAllJobs = async (req, res) => {
  // get jobs associated to specific user
  const jobs = await Job.find({ author: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

// Single Job
const getJob = async (req, res) => {
  const userId = req.user.userId;
  const jobId = req.params.id;
  const job = await Job.findOne({
    _id: jobId,
    author: userId,
  });
  if (!job) throw new NotFoundError(`No job with id: ${jobId}`);
  res.status(StatusCodes.OK).json({ job });
};

// Create Job
const createJob = async (req, res) => {
  const { userId } = req.user; // getting this from auth Middleware
  req.body.author = userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
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
